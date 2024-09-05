import React from "react"
// import axios from 'axios';
import {styled, Stack, Typography, IconButton} from "@mui/material";
import { Screen } from "../components/Screen";
import { TrackCard } from "../components/TrackCard";
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import Add from '@mui/icons-material/Add';
import { colors } from "../assets/colors";

// const apiCall = () => {
//   axios.get('http://localhost:3000').then((data) => {
//     console.log(data);
//   })
// }

const data = Array(5).fill().map((_, index) => Object.fromEntries([['title', `track${index+1}`], ['artist', `artist${index+1}`], ['rating', index]]));

const HeaderStack = styled(Stack)({
  justifyContent: 'space-between',
  marginBottom: '24px',
  textTransform: 'uppercase',
  color: colors.theme1.white,
  "& .title": {
    paddingLeft: '8px',
  },
});
const ButtonStack = styled(Stack)({
  alignItems: 'center',
});
const buttonContainer = {
  color: colors.theme1.white,
};

export function HomeScreen() {
    return (
        <Screen>
            {/* <Button variant="contained" onClick={apiCall}>make api call</Button> */}
            <IconButton sx={{...buttonContainer}}>
              <Menu sx={{fontSize: 32}} />
            </IconButton>
            <HeaderStack direction="row">
              <Typography variant="h4" fontWeight="bold" className="title">playlist</Typography>
              <ButtonStack direction="row">
                <IconButton sx={{...buttonContainer}}>
                  <Search />
                </IconButton>
                <IconButton sx={{...buttonContainer}}>
                  <Add />
                </IconButton>
              </ButtonStack>
            </HeaderStack>
            <Stack direction="column">
              {data.map((item, index) => <TrackCard key={`trackCard_${index}`} title={item.title} artist={item.artist} rating={item.rating} />)}
            </Stack>
        </Screen>
    )
}
