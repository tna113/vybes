import React from "react";
import { Button, Container, Stack, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { colors } from "../assets/colors";
import Circle from "@mui/icons-material/Circle";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const StyledCard = styled(Button)({
  gridTemplateRows: "32px auto 32px",
  height: "80px",
  maxWidth: "400px",
  borderRadius: "5px 5px 0px 0px",
  ".icon": {
    width: "32px",
  },
  ".ratingContainer": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "0",
  },
  ".ratingIcon": {
    color: colors.theme1.darkerGreen,
  },
  ".ratingValue": {
    color: colors.theme1.darkGreen,
    position: "absolute",
    zIndex: "1",
    top: "28px",
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
    padding: "0 16px",
    textAlign: "left",
    textTransform: "lowercase",
  },
  ".menuIcon": {
    color: colors.theme1.white,
  },
  "&:hover": {
    borderRadius: "5px 5px 0px 0px",
    color: colors.theme1.white,
  },
  "&:hover .buttonText": {
    color: colors.theme1.white,
  },
});

function handleOnClick() {}

export function TrackCard({
  title,
  artist,
  rating,
  genre,
  // comments,
  // dateAdded,
}) {
  return (
    <StyledCard onClick={() => handleOnClick()}>
      <Container className="ratingContainer icon">
        <Circle fontSize="large" className="ratingIcon" />
        <Typography className="ratingValue">{rating}</Typography>
      </Container>

      <Stack direction="column" className="content" spacing={-0.5}>
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

      <Container className="icon">
        <MoreVertIcon className="menuIcon" />
      </Container>
    </StyledCard>
  );
}

TrackCard.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  comments: PropTypes.object.isRequired,
  dateAdded: PropTypes.string.isRequired,
};
