import express from "express";
import cors from "cors";
import supabase from "./supabaseClient.js";
import 'dotenv/config';

const app = express();
const port = 8080;

app.use(cors());

// console.log(supabase);

app.listen(8080, () => {
  console.log("server listening to port", port);
});

//routes
app.get("/", (req, res) => {
  res.send("hello from our server!");
});

app.get("/home", async (req, res) => {
  const {data, error} = await supabase
    .from('track')
    .select(`
       trackName,
       rating,
       genre,
       comments,
       dateAdded,
       artistId,
       artist (artistId, artistName)
      `)
    
  if (error) {
    console.log('error', error);
  } else {
    console.log('successful', data);
    return res.status(201).json({
      data: data,
      message: 'successfully fetched all songs',
    });
  }
});