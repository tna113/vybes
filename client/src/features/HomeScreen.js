import React from "react"
import axios from 'axios';
import {Button, Stack} from "@mui/material";
import { Screen } from "../components/Screen";
import { TrackCard } from "../components/TrackCard";

const apiCall = () => {
  axios.get('http://localhost:3000').then((data) => {
    console.log(data);
  })
}

const data = Array(5).fill().map((_, index) => Object.fromEntries([['title', `track${index+1}`], ['artist', `artist${index+1}`], ['rating', index]]));

export function HomeScreen() {
    return (
        <Screen>
            <Button variant="contained" onClick={apiCall}>make api call</Button>
            <Stack direction="column">
              {data.map((item, index) => <TrackCard key={`trackCard_${index}`} title={item.title} artist={item.artist} rating={item.rating} />)}
            </Stack>
        </Screen>
    )
}
