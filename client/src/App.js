import "./App.css";
import React from "react";
import { Button, Container, Stack } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import { Screen } from "./components/Screen";
import CloseIcon from '@mui/icons-material/Close';

//pages
import { HomeScreen } from "./screens/HomeScreen";

//todo: implement navigation bar component
function NavigationBar() {
  const data = [
    'playlist1',
    'playlist2',
    'playlist3'
  ];

  return (
    <Screen>
      <Stack direction="column">
        <Button>
          <CloseIcon color="white" />
        </Button>
        <Stack direction="column">
          {data.map((_, index) => (
            <Link to="/">playlist{index+1}</Link>
          ))}
        </Stack>
      </Stack>
    </Screen>
  )
};

export default function App() {
  return (
    <Container sx={{ padding: 0 }}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Container>
  );
}
