import { io } from "socket.io-client"
import './App.css'
import { useEffect } from 'react';
import { Container, TextField, Typography, Button } from "@mui/material";
import { useState , useMemo} from "react";



function App() {
  const [message, setMessage] = useState("");
  const socket = useMemo(() => io('http://localhost:8000'), []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });

    socket.on("receive-message",(data)=>{
     console.log("received message:", data)
    })

    return () => {
      socket.off("connect");
      socket.off("receive-message");
      socket.disconnect();
    };
  }, [socket])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sent message:", message);
    socket.emit("message", message);
    setMessage("");
  }

  return (
    <Container maxWidth="sm" >
      <Typography variant="h1" component="div" gutterBottom >
        Welcome to Socket.io
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="outlined-basic"
          label="Message"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary" >
          send
        </Button>
      </form>
    </Container>
  )
}

export default App
