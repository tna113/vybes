import "./App.css";
import React from "react";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Container sx={{ padding: 0 }}>
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </Container>
  );
}
