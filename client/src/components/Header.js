import React from "react";
import { Button, Container, Stack, styled, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import AddIcon from "@mui/icons-material/Add";
import { colors } from "../assets/colors";
import PropTypes from "prop-types";

const HeaderContainer = styled(Container)({
  backgroundColor: colors.theme1.green,
  minHeight: "224px",
  minWidth: "100%",
  padding: "48px 24px 0 24px",
  ".container": {
    height: "58px",
  },
  ".titleContainer": {
    display: "flex",
    flexDirection: "row",
    alignitems: "center",
    justifyContent: "space-between",
  },
  ".title": {
    color: colors.theme1.white,
    textransform: "lowercase",
  },
  ".subtitle": {
    color: colors.theme1.white60,
  },
  ".icon": {
    color: colors.theme1.white,
  },
  ".backButton": {
    marginLeft: "-24px",
    padding: "16px 0 32px 0",
  },
  ".spacer": {
    height: "80px",
  },
  ".addButton": {
    height: "40px",
  },
});

export default function Header({
  title,
  subtitle,
  showBackButton,
  onBackButtonClick,
  showAddButton,
  onAddButtonClick,
}) {
  return (
    <HeaderContainer className="container">
      {showBackButton ? (
        <Button className="backButton spacer" onClick={onBackButtonClick}>
          <NavigateBeforeIcon className="backIcon icon" fontSize="large" />
        </Button>
      ) : (
        <Container className="spacer" />
      )}
      <Stack direction="row" className="titleContainer">
        <Typography variant="h4" fontWeight="300" className="title">
          {title ?? "some playlist name"}
        </Typography>
        <>
          {showAddButton ? (
            <Button className="addButton" onClick={onAddButtonClick}>
              <AddIcon className="addIcon icon" fontSize="large" />
            </Button>
          ) : (
            <></>
          )}
        </>
      </Stack>
      <Typography variant="body3" fontWeight={200} className="subtitle">
        {subtitle ?? ""}
      </Typography>
    </HeaderContainer>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  showBackButton: PropTypes.bool,
  onBackButtonClick: PropTypes.func,
  showAddButton: PropTypes.bool,
  onAddButtonClick: PropTypes.func,
};
