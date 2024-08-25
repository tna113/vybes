import React from "react"
import axios from 'axios';
import {Container, Button} from "@mui/material";

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