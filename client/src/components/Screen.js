import React from "react";
import { Container } from "@mui/material";
import { colors } from "../assets/colors";
import PropTypes from "prop-types";

const container = {
  backgroundColor: colors.theme1.darkGreen,
  minHeight: "100vh",
  padding: "0",
};

export function Screen({ children, sx }) {
  return (
    <Container maxWidth="lg" sx={{ ...sx, ...container }}>
      {children}
    </Container>
  );
}

Screen.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
