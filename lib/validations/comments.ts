const comments: { id: string; message: string }[] = [];

export function getComments() {
  return comments;
}

export function saveComment(message: string) {
  const newComment = { id: Date.now().toString(), message };
  comments.push(newComment);
  return newComment;
}
