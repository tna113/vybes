import React from "react";
import { styled, Stack, Typography } from "@mui/material";
import Circle from "@mui/icons-material/Circle";
import { colors } from "../assets/colors";
import PropTypes from "prop-types";

const ButtonStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "0",
  ".buttonBackground": {
    zIndex: 0,
  },
  ".buttonLetter": {
    color: colors.theme1.darkGreen,
    position: "absolute",
    zIndex: "1",
  },
});

export default function ProfileIcon({ name, bgColor, textColor, sx, size }) {
  return (
    <ButtonStack direction="row" className="content" sx={{ ...sx }}>
      <Circle
        fontSize={size ? undefined : "large"}
        className="buttonBackground"
        sx={{
          color: bgColor ? bgColor : colors.theme1.white,
          fontSize: size === "xlarge" ? "3rem" : undefined,
        }}
      />
      <Typography
        className="buttonLetter"
        sx={{
          color: textColor ? textColor : colors.theme1.darkGreen,
        }}
      >
        {name.substring(0, 1).toUpperCase()}
      </Typography>
    </ButtonStack>
  );
}

ProfileIcon.propTypes = {
  name: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  sx: PropTypes.object,
  size: PropTypes.string,
};
