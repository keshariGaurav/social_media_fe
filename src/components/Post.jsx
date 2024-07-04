import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import {
  Favorite,
  Comment as CommentIcon,
  Delete,
  Edit,
} from "@mui/icons-material";
import Comment from "./Comment";

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => setLikes(likes + 1);

  const handleAddComment = () => {
    const comment = { id: comments.length + 1, text: newComment, likes: 0 };
    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant='body1'>{post.content}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleLike}>
          <Favorite /> {likes}
        </IconButton>
        <IconButton>
          <CommentIcon /> {comments.length}
        </IconButton>
      </CardActions>
      <CardContent>
        <TextField
          fullWidth
          multiline
          rows={2}
          variant='outlined'
          label='Add a comment'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button variant='contained' sx={{ mt: 1 }} onClick={handleAddComment}>
          Comment
        </Button>
      </CardContent>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Card>
  );
}

export default Post;
