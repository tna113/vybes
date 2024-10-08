import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonBase,
  Container,
  FormControl,
  Input,
  InputLabel,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { Screen } from "../../components/Screen";
import { useLocation, useNavigate } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { colors } from "../../assets/colors";
import ProfileIcon from "../../components/ProfileIcon";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import addComment from "../../utils/addComment";
import axios from "axios";
import parseDate from "../../utils/parseDate";

const DetailHeader = styled(Container)({
  height: "360px",
  backgroundColor: colors.theme1.darkGreen,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: "32px 16px",
  ".backButton": {
    height: "32px",
    width: "32px",
  },
  ".backIcon": {
    color: colors.theme1.white,
  },
});

const StarContainer = styled(ButtonBase)({
  paddingLeft: "16px",
  ".starIcon": {
    color: colors.theme1.darkerGreen,
  },
});

const TrackContainer = styled(Container)({
  padding: "0px",
  margin: "0px",
  backgroundColor: colors.theme1.green,
  "& > *": {
    padding: "32px",
  },
  ".title": {
    color: colors.theme1.white,
  },
  ".subtitle": {
    color: colors.theme1.white80,
  },
  ".caption": {
    paddingTop: "4px",
    color: colors.theme1.darkerGreen,
  },
});

const CommentsContainer = styled(Container)({
  margin: "0",
  padding: "8px 32px 32px 32px",
  ".header": {
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "16px",
  },
  ".title": {
    color: colors.theme1.eggwhite,
  },
  ".addButton": {
    height: "32px",
    width: "32px",
  },
  ".addIcon": {
    color: colors.theme1.white,
  },
});

const CommentItem = styled(Stack)({
  paddingRight: "32px",
  marginBottom: "8px",

  alignItems: "flex-start",
  justifyContent: "flex-start",
  ".comment": {
    width: "100%",
    color: colors.theme1.eggwhite90,
  },
});

const Footer = styled(FormControl)({
  backgroundColor: colors.theme1.darkGreen,
  position: "absolute",
  bottom: "-8px",
  paddingBottom: "16px",
  ".text": {
    color: colors.theme1.darkerGreen,
  },
  ".button": {
    backgroundColor: "blue",
    width: "32px",
    height: "32px",
  },
  ".input": {
    marginRight: "16px",
    marginLeft: "16px",
    paddingTop: "8px",
  },
  ".inputLabel": {
    padding: "0px 20px",
    paddingTop: "8px",
  },
  ".sendButton": {
    position: "absolute",
    right: "0",
    bottom: "16px",
  },
});

//TODO: export into separate util function, store in cookies?
const fetchTrack = async (trackId) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const params = {
    trackId: trackId,
  };

  try {
    const response = await axios.get("http://localhost:8080/detail", {
      params,
      axiosConfig,
    });

    if (response) {
      return {
        trackName: response.data.track.trackName,
        artistName: response.data.track.artist.artistName,
        dateAdded: response.data.track.dateAdded,
        comments: response.data.track.comments.data,
      };
    } else {
      console.log("could not fetch track");
      return {};
    }
  } catch (error) {
    console.log("error", error);
  }
};

export default function DetailScreen() {
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState("");

  const data = useLocation();
  const trackId = data.state;
  const [track, setTrack] = useState({});
  const [commentsData, setCommentsData] = useState([]);
  const [showCommentsInput, setShowCommentsInput] = useState(false);

  useEffect(() => {
    const response = fetchTrack(trackId);
    response
      .then((data) => {
        setTrack(data);
        setCommentsData(data.comments);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [trackId]);

  //TODO: implement checking user state
  const isCurrentUser = (id) => {
    const currentUserId = 1;
    if (id === currentUserId) {
      return true;
    }
    return false;
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = async () => {
    const comments = addComment(trackId, commentsData, newComment);

    //set new comments state to refresh comments array
    comments
      .then((data) => {
        setCommentsData(data);
      })
      .catch((error) => {
        console.log("error handleAddComment()", error);
      });
  };

  return (
    <Screen color={colors.theme1.green}>
      <DetailHeader>
        <Button className="backButton" onClick={() => navigate("/home")}>
          <NavigateBeforeIcon className="backIcon" fontSize="large" />
        </Button>
        <StarContainer>
          <Stack direction="row" spacing={0}>
            <StarRoundedIcon fontSize="large" className="starIcon" />
            <StarRoundedIcon fontSize="large" className="starIcon" />
            <StarRoundedIcon fontSize="large" className="starIcon" />
            <StarRoundedIcon fontSize="large" className="starIcon" />
            <StarRoundedIcon fontSize="large" className="starIcon" />
          </Stack>
        </StarContainer>
      </DetailHeader>

      <TrackContainer>
        <Stack direction="column" spacing={-0.5}>
          <Typography variant="h4" fontWeight="bold" className="title">
            {track.trackName ?? "trackName"}
          </Typography>
          <Typography variant="h6" fontWeight="regular" className="subtitle">
            {track.artistName ?? "artist name"} • {track.genre}
          </Typography>
          <Typography variant="body3" className="caption">
            added on {track.dateAdded && parseDate(track.dateAdded)}
          </Typography>
        </Stack>

        <CommentsContainer>
          <Stack direction="row" className="header">
            <Typography variant="h6" fontWeight="bold" className="title">
              comments
            </Typography>
            <Button className="addButton"
              onClick={() => {
                setShowCommentsInput(true);
              }}
            >
              <AddOutlinedIcon
                fontSize="medium"
                fontWeight="bold"
                className="addIcon"
              />
            </Button>
          </Stack>
          <>
            {commentsData &&
              commentsData.map((item, index) => (
                <CommentItem direction="row" key={`comment-${index}`}>
                  <ProfileIcon
                    name={item.username}
                    sx={{ marginRight: "8px" }}
                    size="xlarge"
                    bgColor={
                      isCurrentUser(item.userId)
                        ? colors.theme1.eggwhite
                        : colors.theme1.eggwhite30
                    }
                  />
                  <Typography className="comment">{item.text}</Typography>
                </CommentItem>
              ))}
          </>
        </CommentsContainer>

        {showCommentsInput && (
          <Footer fullWidth sx={{ s: 1 }} variant="standard" margin="normal">
            <InputLabel className="inputLabel">add comment here...</InputLabel>
            <Input
              disableUnderline
              className="input"
              onChange={(event) => handleCommentChange(event)}
            />
            <Button className="sendButton" onClick={() => {
              handleAddComment();
              setShowCommentsInput(false);
            }}>
              <SendRoundedIcon />
            </Button>
          </Footer>
        )}
      </TrackContainer>
    </Screen>
  );
}
