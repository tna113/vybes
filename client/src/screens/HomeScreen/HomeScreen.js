import React, { useEffect, useState } from "react";
// import axios from 'axios';
import {
  styled,
  Stack,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import { Screen } from "../../components/Screen"
import { TrackCard } from "../../components/TrackCard";
import Menu from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
import Add from "@mui/icons-material/Add";
import { colors } from "../../assets/colors";
import axios from "axios";

const HeaderStack = styled(Stack)({
  justifyContent: "space-between",
  marginBottom: "24px",
  textTransform: "uppercase",
  color: colors.theme1.white,
  "& .title": {
    paddingLeft: "8px",
  },
});
const ButtonStack = styled(Stack)({
  alignItems: "center",
});
const buttonContainer = {
  color: colors.theme1.white,
};
const trackContainer = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "50%",
  color: colors.theme1.darkGreen,
};

const fetchPlaylist = async () => {
  try {
    const response = await axios.get('http://localhost:8080/home');
    if (response) {
      return response.data.data;
    } else {
      console.log('could not fetch response');
    }
  } catch (error) {
    console.log('error', error);
  }
};

export function HomeScreen() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const response = fetchPlaylist();
    response.then(data => {
      setTracks(data);
    })
    .catch((error) => {
      console.log('error', error);
    });
  }, []);

  return (
    <Screen>
      {/* <Button variant="contained" onClick={apiCall}>make api call</Button> */}
      <IconButton sx={{ ...buttonContainer }}>
        <Menu sx={{ fontSize: 32 }} />
      </IconButton>
      <HeaderStack direction="row">
        <Typography variant="h4" fontWeight="bold" className="title">
          playlist
        </Typography>
        <ButtonStack direction="row">
          <IconButton sx={{ ...buttonContainer }}>
            <Search />
          </IconButton>
          <IconButton sx={{ ...buttonContainer }}>
            <Add />
          </IconButton>
        </ButtonStack>
      </HeaderStack>
      <Stack direction="column">
        {tracks.length > 0 ? (
          <>
            {tracks.map((item, index) => (
              <TrackCard
                key={`trackCard_${index}`}
                title={item.trackName}
                rating={item.rating}
              />
            ))}
          </>
        ) : (
          <Container sx={{ ...trackContainer }}>
            <Typography sx={{ textAlign: 'center'}}>no songs</Typography>
          </Container>
        )}
      </Stack>
    </Screen>
  );
}
