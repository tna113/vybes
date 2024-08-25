import React from "react"
import axios from 'axios';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const apiCall = () => {
    axios.get('http://localhost:3000').then((data) => {
      console.log(data);
    })
  }

export function Screen() {
    return (
        <Container>
            <Button onClick={apiCall}>make api call</Button>
        </Container>
    )
}