import React, { useState } from "react";
import { Screen } from "../../components/Screen";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import AppInput from "../../components/AppInput";
import { Container, Stack, styled, Typography } from "@mui/material";
import { TrackCard } from "../../components/TrackCard";

const ResultsContainer = styled(Stack)({
    
})

export default function SearchScreen() {
  const [searchStr, setSearchStr] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchStr(event.target.value);
  };

  const handleSearch = async () => {
    console.log("seaching for", searchStr);
  };

  const results = [
    {
        trackId: 1,
        trackName: "track1",
        artist: {
            artistName: "artist1",
        },
        genre: "r&b",
    },
    {
        trackId: 2,
        trackName: "track2",
        artist: {
            artistName: "artist2",
        },
        genre: "r&b",
    },
    {
        trackId: 3,
        trackName: "track3",
        artist: {
            artistName: "artist3",
        },
        genre: "r&b",
    },
    {
        trackId: 4,
        trackName: "track4",
        artist: {
            artistName: "artist4",
        },
        genre: "r&b",
    },
    {
        trackId: 5,
        trackName: "track5",
        artist: {
            artistName: "artist5",
        },
        genre: "r&b",
    },
    {
        trackId: 6,
        trackName: "track6",
        artist: {
            artistName: "artist6",
        },
        genre: "r&b",
    },
    {
        trackId: 7,
        trackName: "track7",
        artist: {
            artistName: "artist7",
        },
        genre: "r&b",
    },
    {
        trackId: 8,
        trackName: "track8",
        artist: {
            artistName: "artist8",
        },
        genre: "r&b",
    },
    {
        trackId: 9,
        trackName: "track9",
        artist: {
            artistName: "artist9",
        },
        genre: "r&b",
    },
    {
        trackId: 10,
        trackName: "track10",
        artist: {
            artistName: "artist10",
        },
        genre: "r&b",
    },
  ]

  return (
    <Screen>
      <Header
        title="search"
        subtitle="please search for a song below"
        showBackButton={true}
        onBackButtonClick={() => navigate("/home")}
      />
      <AppInput
        handleInputChange={handleInputChange}
        handleOnSubmit={handleSearch}
      />
      <ResultsContainer direction="column">
        {results.length > 0 ? (
          <>
            {results.map((item, index) => (
              <TrackCard
                key={`trackCard_${index}`}
                title={item.trackName}
                artist={item.artist.artistName}
                genre={item.genre}
                onPress={() => navigate("/detail", { state: item.trackId })}
                endButtonType="plus"
              />
            ))}
          </>
        ) : (
          <Container>
            <Typography sx={{ textAlign: "center" }}>
              no songs
            </Typography>
          </Container>
        )}
      </ResultsContainer>
    </Screen>
  );
}
