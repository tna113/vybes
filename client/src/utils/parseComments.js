
// const commentsData = {
//   comments: [
//     {
//       userId: 1,
//       username: "thea",
//       comment:
//         "some comment here thats really really long jsut to see what it would look like on the screen cause of user experience and aesthetic and things like that you know waht i mean",
//     },
//     {
//       userId: 2,
//       username: "han",
//       comment: "and a one line to reply",
//     },
//     {
//       userId: 2,
//       username: "han",
//       comment: "and another one",
//     },
//   ],
// };

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
