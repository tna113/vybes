import React, { useState } from "react"
import {Button, Container, Stack, Typography} from "@mui/material";
import PropTypes from 'prop-types';
import { colors } from "../assets/colors";
import Star from '@mui/icons-material/Star';
import StarOutline from '@mui/icons-material/StarOutline';

const container = {
    backgroundColor: colors.green.text,
    padding: '24px 20px',
    margin: '8px 0',
    height: '160px',
    borderRadius: '5px 5px 0px 0px',
};
const content = {
  height: '100%',
  width: '100%',
};
const buttonText = {
  color: colors.green.secondary,
  textAlign: 'left',
  textTransform: 'lowercase',
};
const ratingContainer = {
  textAlign: 'right',
  padding: '0',
};
const ratingButton = {
  textAlign: 'right',
};

function StarRating({rating}) {
  const star = {
    color: colors.green.secondary,
    margin: '-1px',
    padding: '0',
  };

  return (
    <>
      {Array(rating).fill().map(_ => <Star fontSize="small" sx={{...star}} />)}
      {Array(5-rating).fill().map(_ => <StarOutline fontSize="small" sx={{...star}} />)}
    </>
  )
}

export function TrackCard({title, artist, rating}) {
  return (
    <Button variant="contained" sx={{...container}}>
      <Stack direction="column" sx={{...content}}>
        <Container>
          <Typography variant="h5" fontWeight='bold' sx={{...buttonText}}>{title}</Typography>
          <Typography variant="h6" fontWeight="normal" sx={{...buttonText}}>{artist}</Typography>
        </Container>
        <Container sx={{...ratingContainer}}>
          <Button sx={{...ratingButton}}>
            <StarRating rating={rating} />
          </Button>
        </Container>
      </Stack>
    </Button>
  );
};

TrackCard.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}