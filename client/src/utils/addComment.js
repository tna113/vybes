export default function addComment(comments, newComment) {
  const temp = comments ?? [];

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
}
