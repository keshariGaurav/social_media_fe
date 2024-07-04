// src/pages/SearchUsers.js
import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
} from "@mui/material";

const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "https://via.placeholder.com/40",
  },
  // Add more mock users as needed
];

function SearchUsers() {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(mockUsers);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, users]);

  const handleFollow = (userId) => {
    // Implement the follow functionality (e.g., update the backend or local state)
    console.log("Follow user with ID:", userId);
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant='h4' gutterBottom>
          Search Users
        </Typography>
        <TextField
          fullWidth
          variant='outlined'
          label='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 4 }}
        />
        <List>
          {filteredUsers.map((user) => (
            <ListItem
              key={user.id}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <ListItemAvatar>
                <Avatar src={user.avatar} />
              </ListItemAvatar>
              <ListItemText primary={user.name} secondary={user.email} />
              <Button
                variant='contained'
                color='primary'
                onClick={() => handleFollow(user.id)}
              >
                Follow
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default SearchUsers;
