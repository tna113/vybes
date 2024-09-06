import React from "react";
import { Container } from "@mui/material";
import { colors } from "../assets/colors";
import PropTypes from "prop-types";

const container = {
  backgroundColor: colors.theme1.green,
  minHeight: "100vh",
  padding: "32px 32px",
};

export function Screen({ children, sx }) {
  // eslint-disable-line react/prop-types
  return (
    <Container maxWidth sx={{ ...sx, ...container }}>
      {children}
    </Container>
  );
}

Screen.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
