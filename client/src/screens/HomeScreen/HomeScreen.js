import React, { useEffect, useState } from "react";
import { Stack, Typography, Container } from "@mui/material";
import { Screen } from "../../components/Screen";
import { TrackCard } from "../../components/TrackCard";
import { colors } from "../../assets/colors";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const tracksContainer = {
  alignItems: "center",
  padding: "8px",
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
      return response.data.playlist;
    } else {
      console.log("could not fetch playlist");
    }
  } catch (error) {
    console.log("error", error);
  }
};

const fetchUser = async () => {
  try {
    const response = await axios.post("http://localhost:8080/user");
    console.log('/user backend response', response);
  } catch (error) {
    console.log("error", error);
  }
};

export function HomeScreen() {
  const [tracks, setTracks] = useState([]);
  const [numTracks, setNumTracks] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const response = fetchPlaylist();
    response
      .then((data) => {
        setTracks(data);
        setNumTracks(data.length);
      })
      .catch((error) => {
        console.log("error", error);
      });

    fetchUser();
  }, []);

  return (
    <Screen>
      <Header
        title="playlist name"
        subtitle={`${numTracks} song${numTracks > 1 ? "s" : ""} shared with han`}
        showAddButton={true}
        onAddButtonClick={() => navigate("/search")}
      />
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
                onPress={() => navigate("/detail", { state: item.trackId })}
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
