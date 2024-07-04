import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { Favorite, Reply, Delete, Edit } from "@mui/icons-material";

function Comment({ comment }) {
  const [likes, setLikes] = useState(comment.likes);
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState("");

  const handleLike = () => setLikes(likes + 1);

  const handleAddReply = () => {
    const reply = { id: replies.length + 1, text: newReply, likes: 0 };
    setReplies([...replies, reply]);
    setNewReply("");
  };

  return (
    <Card sx={{ mb: 1, ml: 4 }}>
      <CardContent>
        <Typography variant='body2'>{comment.text}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleLike}>
          <Favorite /> {likes}
        </IconButton>
        <IconButton>
          <Reply />
        </IconButton>
      </CardActions>
      {replies.map((reply) => (
        <Box key={reply.id} sx={{ ml: 4, mb: 1 }}>
          <Typography variant='body2'>{reply.text}</Typography>
        </Box>
      ))}
      <CardContent>
        <TextField
          fullWidth
          multiline
          rows={1}
          variant='outlined'
          label='Reply'
          value={newReply}
          onChange={(e) => setNewReply(e.target.value)}
        />
        <Button variant='contained' sx={{ mt: 1 }} onClick={handleAddReply}>
          Reply
        </Button>
      </CardContent>
    </Card>
  );
}

export default Comment;
