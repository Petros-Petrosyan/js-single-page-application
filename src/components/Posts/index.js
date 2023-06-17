import Post from "./Post.js";

const Posts = ({ posts }) => {
  return `
        <h2 class="title">Posts</h2>
        <div class="posts-wrapper">
          ${posts
            .map(({ id, title, body }) => Post({ id, title, body }))
            .join("")}
        </div>`;
};

export default Posts;
