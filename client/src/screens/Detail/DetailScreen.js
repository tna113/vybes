import React, { useState } from "react";
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
// import { useLocation } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { colors } from "../../assets/colors";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../../components/ProfileIcon";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import parseComments from "../../utils/parseComments";

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

const commentsData = {
  comments: [
    {
      userId: 1,
      username: "thea",
      comment:
        "some comment here thats really really long jsut to see what it would look like on the screen cause of user experience and aesthetic and things like that you know waht i mean",
    },
    {
      userId: 2,
      username: "han",
      comment: "and a one line to reply",
    },
    {
      userId: 2,
      username: "han",
      comment: "and another one",
    },
  ],
};

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
    position: 'absolute',
    right: '0',
    bottom: '16px',
  },
});

export default function DetailScreen() {
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState("");

  // TODO: get track id from navigation params to query for the track
  // or we can store this in cookies? cookie best practices?
  //   const data = useLocation();
  //   const trackId = data.state;

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

  const handleAddComment = () => {
    const commentsJSON = parseComments(commentsData, newComment)
    console.log(commentsJSON);
    //send comment
    //refetch comments list (useEffect)
  }

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
            track name
          </Typography>
          <Typography variant="h6" fontWeight="regular" className="subtitle">
            artist name • alternative
          </Typography>
          <Typography variant="body3" className="caption">
            added on sep 20 2024
          </Typography>
        </Stack>

        <CommentsContainer>
          <Stack direction="row" className="header">
            <Typography variant="h6" fontWeight="bold" className="title">
              comments
            </Typography>
            <Button className="addButton">
              <AddOutlinedIcon
                fontSize="medium"
                fontWeight="bold"
                className="addIcon"
              />
            </Button>
          </Stack>
          <>
            {commentsData.comments.map((item, index) => (
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
                <Typography className="comment">{item.comment}</Typography>
              </CommentItem>
            ))}
          </>
        </CommentsContainer>

        <Footer fullWidth sx={{ s: 1 }} variant="standard" margin="normal">
          <InputLabel className="inputLabel">add comment here...</InputLabel>
          <Input disableUnderline className="input" onChange={(event) => handleCommentChange(event)} />
          <Button className="sendButton" onClick={() => handleAddComment()}>
            <SendRoundedIcon />
          </Button>
          </Footer>
      </TrackContainer>
    </Screen>
  );
}
