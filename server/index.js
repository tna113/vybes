import express from "express";
import cors from "cors";
import supabase from "./supabaseClient.js";
import "dotenv/config";

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
  const { data, error } = await supabase.from("track").select(`
    trackId,
    trackName,
    rating,
    genre,
    comments,
    artistId,
    artist (artistId, artistName)
  `);

  if (error) {
    return res.status(500).json({
      data: error,
      message: "could not fetch playlist",
    })
  } else {
    console.log("successful", data);
    return res.status(201).json({
      data: data,
      message: "successfully fetched all songs",
    });
  }
});

app.get("/detail", async (req, res) => {
  // console.log('req.params', req.params);
  // console.log('req.params.trackId', trackId);

  // const trackId = parseInt(req.params.trackId);
  const trackId = 1;

  const { data, error } = await supabase.from("track").select(`
    trackName,
    rating,
    genre,
    comments,
    dateAdded,
    artistId,
    artist (artistId, artistName)
  `).eq('trackId', trackId);

  if (error) {
    return res.status(500).json({
      data: error,
      message: `could not fetch track with trackId: ${trackId}`,
    })
  } else {
    return res.status(201).json({
      data: data,
      message: `successfully fetched track ${trackId}`,
    });
  }
});

app.post("/detail/comment", async (req, res) => {
  const { trackId, commentsJSON } = req.body;

  const {data, error} = await supabase
    .from('track')
    .update({
      comments: commentsJSON
    })
    .eq('trackId', trackId)
    .select();

  if (error) {
    return res.status(500).json({
      data: error,
      message: `could not update comments for ${trackId}`,
    });
  } else {
    return res.status(201).json({
      data: data,
      message: `successfully updated comments for ${trackId}`,
    })
  }
});
