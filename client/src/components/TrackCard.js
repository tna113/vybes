import React from "react"
import {Button, Container, Stack, styled, Typography} from "@mui/material";
import PropTypes from 'prop-types';
import { colors } from "../assets/colors";
import Star from '@mui/icons-material/Star';
import StarOutline from '@mui/icons-material/StarOutline';

const StyledCard = styled(Button)({
  backgroundColor: colors.theme1.white,
  margin: '8px 0',
  padding: '0',
  height: '158px',
  borderRadius: '5px 5px 0px 0px',
  '.buttonText': {
    padding: '0 28px',
    textAlign: 'left',
    textTransform: 'lowercase',
  },
  '.ratingButton': {
    position: 'absolute',
    right: '0',
    bottom: '0',
    padding: '24px 16px',
  },
  ".content": {
    // backgroundColor: 'red',
    color: colors.theme1.darkGreen,
    height: '100%',
    width: '100%',
  },
  '.content:first-child': {
    paddingTop: '48px',
  },
  '.star': {
    color: colors.theme1.darkGreen,
    margin: '-1px',
    padding: '0',
    fontSize: 'large',
  },
  "&:hover": {
    borderRadius: '5px 5px 0px 0px',
    backgroundColor: colors.theme1.darkGreen,
    color: colors.theme1.white
  },
  "&:hover .buttonText": {
    color: colors.theme1.white,
  },
  "&:hover .star": {
    color: colors.theme1.white,
  },
});

export function TrackCard({title, artist, rating}) {
  return (
    // <Button variant="contained" sx={{...container}}>
    <StyledCard>
      <Stack direction="column" className="content">
        <Typography variant="h5" fontWeight='bold' className="buttonText">{title}</Typography>
        <Typography variant="h6" fontWeight="normal" className="buttonText">{artist}</Typography>
        <Button className="ratingButton">
        <Container className="starContainer">
          {Array(rating).fill().map(_ => <Star className="star" />)}
          {Array(5-rating).fill().map(_ => <StarOutline className="star" />)}
        </Container>
        </Button>
      </Stack>
    </StyledCard>
    // </Button>
  );
};

TrackCard.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}