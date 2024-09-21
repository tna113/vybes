import "./App.css";
import React, { useEffect } from "react";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { Container } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import DetailScreen from "./screens/Detail/DetailScreen";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <Container sx={{ padding: 0 }}>
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/detail" element={<DetailScreen />} />
      </Routes>
    </Container>
  );
}
