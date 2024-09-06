import "./App.css";
import React from "react";
import { HomeScreen } from "./features/HomeScreen";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
}

export default App;
