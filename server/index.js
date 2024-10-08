import express from "express";
import cors from "cors";
import supabase from "./supabaseClient.js";
import "dotenv/config";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

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
      playlist: [],
      message: "could not fetch playlist",
    });
  }
  return res.status(201).json({
    playlist: data,
    message: "successfully fetched all songs",
  });
});

app.get("/detail", async (req, res) => {
  const { trackId } = req.query;

  const { data, error } = await supabase
    .from("track")
    .select(
      `
    trackName,
    rating,
    genre,
    comments,
    dateAdded,
    artistId,
    artist (artistId, artistName)
  `,
    )
    .eq("trackId", trackId);

  if (error) {
    return res.status(500).json({
      error: {},
      message: `could not fetch track with trackId: ${trackId}`,
    });
  }
  return res.status(201).json({
    track: data[0],
    message: `successfully fetched track ${trackId}`,
  });
});

app.post("/detail/comment", async (req, res) => {
  const trackId = parseInt(req.query.trackId);
  const { commentsData } = req.body;

  const { data, error } = await supabase
    .from("track")
    .update({
      comments: commentsData,
    })
    .eq("trackId", trackId)
    .select();

  if (error) {
    return res.status(500).json({
      error: error,
      message: `could not update comments for trackId: ${trackId}`,
    });
  }
  return res.status(201).json({
    comments: data[0].comments,
    message: `successfully updated comments for trackId: ${trackId}`,
  });
});
