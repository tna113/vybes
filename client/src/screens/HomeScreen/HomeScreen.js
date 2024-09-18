import React, { useEffect, useState } from "react";
import { styled, Stack, Typography, Container } from "@mui/material";
import { Screen } from "../../components/Screen";
import { TrackCard } from "../../components/TrackCard";
import Circle from "@mui/icons-material/Circle";
import { colors } from "../../assets/colors";
import axios from "axios";

const HeaderStack = styled(Stack)({
  padding: " 0px 16px 32px 16px",
  alignItems: "flex-end",
  justifyContent: "space-between",
  backgroundColor: colors.theme1.green,
  color: colors.theme1.white,
  minHeight: "160px",
  ".content": {
    height: "58px",
  },
  ".headerContent": {
    paddingLeft: "8px",
  },
  ".title": {
    textTransform: "lowercase",
  },
  ".subtitle":{
    color: colors.theme1.white60,
  },
});
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
const tracksContainer = {
  padding: "8px 16px",
};
const hintContainer = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "50%",
};
const hint = {
  color: colors.theme1.darkerGreen,
};

const fetchPlaylist = async () => {
  try {
    const response = await axios.get("http://localhost:8080/home");
    if (response) {
      return response.data.data;
    } else {
      console.log("could not fetch response");
    }
  } catch (error) {
    console.log("error", error);
  }
};

export function HomeScreen() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const response = fetchPlaylist();
    response
      .then((data) => {
        setTracks(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <Screen>
      <HeaderStack direction="row">
        <Stack direction="column" className="content headerContent">
          <Typography variant="h4" fontWeight="300" className="title">
            playlistname
          </Typography>
          <Typography variant="body3" fontWeight={200} className="subtitle">
            {tracks.length} songs
          </Typography>
        </Stack>
        <ButtonStack direction="row" className="content">
          <Circle fontSize="large" className="buttonBackground" />
          <Typography class="buttonLetter">T</Typography>
        </ButtonStack>
      </HeaderStack>
      <Stack direction="column" sx={{ ...tracksContainer }}>
        {tracks.length > 0 ? (
          <>
            {tracks.map((item, index) => (
              <TrackCard
                key={`trackCard_${index}`}
                title={item.trackName}
                rating={item.rating}
                artist={item.artist.artistName}
                genre={item.genre}
                comments={item.comments}
                dateAdded={item.dateAdded.toString()}
              />
            ))}
          </>
        ) : (
          <Container sx={{ ...tracksContainer, ...hintContainer }}>
            <Typography sx={{ textAlign: "center", ...hint }}>
              no songs
            </Typography>
          </Container>
        )}
      </Stack>
    </Screen>
  );
}
