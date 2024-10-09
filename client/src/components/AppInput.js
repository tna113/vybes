import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Button, FormControl, Input, InputLabel, styled } from "@mui/material";
import { colors } from "../assets/colors";
import PropTypes from "prop-types";

const StyledForm = styled(FormControl)({
  backgroundColor: colors.theme1.darkerGreen,
  paddingBottom: "16px",
  minWidth: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0px",
  ".text": {
    color: colors.theme1.darkerGreen,
  },
  ".button": {
    height: "40px",
  },
  ".input": {
    marginHorizontal: "16px",
    paddingTop: "8px",
    marginLeft: "16px",
  },
  ".inputLabel": {
    padding: "8px 20px 0px 20px",
    color: colors.theme1.green,
  },
  ".sendButton": {
    paddingTop: "24px",
  },
});

export default function AppInput({ handleInputChange, handleOnSubmit, style }) {
  return (
    <StyledForm
      fullWidth
      sx={{ s: 1 }}
      variant="standard"
      margin="normal"
      style={{ ...style }}
    >
      <InputLabel className="inputLabel">add comment here...</InputLabel>
      <Input
        disableUnderline
        className="input"
        onChange={(event) => handleInputChange(event)}
      />
      <Button className="sendButton" onClick={handleOnSubmit}>
        <SendRoundedIcon />
      </Button>
    </StyledForm>
  );
}

AppInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  style: PropTypes.object,
};
