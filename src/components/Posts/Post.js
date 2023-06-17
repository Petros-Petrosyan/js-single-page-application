const Post = ({ id, title, body }) => {
  return `
    <div class="posts" id="${id}" onclick="window.location.hash = id">
      <p class="posts-title">${title}</p>
      <p class="posts-description">${body}</p>
    </div>`;
};

export default Post;
