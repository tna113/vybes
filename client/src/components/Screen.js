import React from "react";
import { Container } from "@mui/material";
import { colors } from "../assets/colors";
import PropTypes from "prop-types";

const container = {
  minHeight: "100vh",
  padding: "0",
  margin: "0",
};

export function Screen({ children, sx, color }) {
  return (
    <Container
      // maxWidth="lg"
      sx={{
        ...sx,
        ...container,
        backgroundColor: color ? color : colors.theme1.darkGreen,
      }}
    >
      {children}
    </Container>
  );
}

Screen.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
  color: PropTypes.string,
};
