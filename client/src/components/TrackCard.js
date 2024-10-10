import React from "react";
import { Button, Container, Stack, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { colors } from "../assets/colors";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import AddIcon from "@mui/icons-material/Add";

const StyledCard = styled(Button)({
  gridTemplateRows: "32px auto 32px",
  height: "80px",
  minWidth: "100%",
  padding: "0 24px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  ".iconContainer": {
    width: "40px",
  },
  ".ratingContainer": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "0",
    marginRight: "8px",
  },
  ".ratingIcon": {
    color: colors.theme1.darkerGreen,
    fontSize: "40px",
  },
  ".ratingText": {
    color: colors.theme1.darkGreen,
    position: "absolute",
    zIndex: "1",
    top: "32px",
    fontSize: "12px",
  },
  ".content": {
    width: "100%",
  },
  ".titleText": {
    color: colors.theme1.white,
  },
  ".subtitleText": {
    color: colors.theme1.white60,
  },
  ".buttonText": {
    textAlign: "left",
    textTransform: "lowercase",
  },
  ".icon": {
    color: colors.theme1.white,
    fontSize: "32px",
  },
  "&:hover": {
    borderRadius: "5px 5px 0px 0px",
    color: colors.theme1.white,
  },
  "&:hover .buttonText": {
    color: colors.theme1.white,
  },
});

const ButtonTypes = Object.freeze({
  ADD: "plus",
  MENU: "menu",
});

export function TrackCard({
  title,
  artist,
  rating,
  genre,
  onPress,
  endButtonType,
}) {
  const hasRating = rating !== undefined;

  return (
    <StyledCard onClick={onPress}>
      {hasRating && (
        <Container className="ratingContainer iconContainer">
          <StarRoundedIcon fontSize="large" className="ratingIcon" />
          <Typography className="ratingText">{rating}</Typography>
        </Container>
      )}

      <Stack
        direction="column"
        className="content"
        sx={hasRating ? null : { paddingLeft: "16px" }}
        spacing={-0.5}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          className="buttonText titleText"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          fontWeight="normal"
          className="buttonText subtitleText"
        >
          {artist} • {genre ? genre : ""}
        </Typography>
      </Stack>

      <Container
        className="iconContainer"
        sx={hasRating ? null : { marginRight: "16px" }}
      >
        {endButtonType === ButtonTypes.ADD ? (
          <AddIcon className="icon" />
        ) : null}
      </Container>
    </StyledCard>
  );
}

TrackCard.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  rating: PropTypes.number,
  genre: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  endButtonType: PropTypes.oneOf([ButtonTypes.ADD, ButtonTypes.MENU]),
};
