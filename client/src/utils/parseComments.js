
export default function parseComments(commentsJSON, newComment) {
  const temp = commentsJSON.comments ?? [];

  if (temp.length !== 0) {
    //TODO: get real user data
    const commentObject = {
      userId: 1,
      username: 'thea',
      comment: newComment,
    }

    temp.push(commentObject);
    return {
      comments: temp,
    };
  } else {
    console.log('temp length 0');
    return commentsJSON;
  }
}
