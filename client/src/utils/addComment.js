import axios from "axios";

const getNewCommentObj = (previousArray, newComment) => {
  const temp = previousArray ?? [];

  //TODO: get real user data
  const commentObject = {
    userId: 1,
    username: "han",
    text: newComment,
  };

  temp.push(commentObject);
  return {
    data: temp,
  };
};

export default async function addComment(trackId, comments, newComment) {
  const body = JSON.stringify({
    commentsData: getNewCommentObj(comments, newComment),
  });

  try {
    const response = await axios.post(
      "http://localhost:8080/detail/comment",
      body,
      {
        params: {
          trackId: trackId,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );

    if (response.status === 201) {
      return response.data.comments.data;
    } else {
      console.log("error handleAddComment()");
    }
  } catch (error) {
    console.log("error addComment() updateComments()", error);
  }
}
