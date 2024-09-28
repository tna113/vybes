import React, { useEffect, useState } from "react";
import { styled, Stack, Typography, Container } from "@mui/material";
import { Screen } from "../../components/Screen";
import { TrackCard } from "../../components/TrackCard";
import { colors } from "../../assets/colors";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../../components/ProfileIcon";

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
  ".subtitle": {
    color: colors.theme1.white60,
  },
});
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
  const navigate = useNavigate();

  useEffect(() => {
    const response = fetchPlaylist();
    response
      .then((data) => {
        setTracks(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [tracks]);

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
        <ProfileIcon name="thea" />
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
