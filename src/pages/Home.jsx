import React, { useState } from 'react';
import { Container, Box, Typography, Button, TextField, Card, CardContent, CardActions, IconButton } from '@mui/material';
import { Favorite, Comment as CommentIcon } from '@mui/icons-material';
import Post from '../components/Post';

function Home() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handlePost = () => {
    const post = {
      id: posts.length + 1,
      content: newPost,
      likes: 0,
      comments: [],
    };
    setPosts([post, ...posts]);
    setNewPost("");
  };

  const filteredPosts = posts.filter((post) =>
    post.content.includes(searchTerm)
  );

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant='h4' gutterBottom>
          Home
        </Typography>
        <TextField
          fullWidth
          variant='outlined'
          label='Search by hashtag'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 4 }}
        />
        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant='outlined'
            label="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <Button variant='contained' sx={{ mt: 2 }} onClick={handlePost}>
            Post
          </Button>
        </Box>
        {filteredPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Box>
    </Container>
  );
}

export default Home;