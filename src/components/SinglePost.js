const SinglePost = ({ title, body }) => {
  return `
        <div class="posts-wrapper">
          <h2 class="title">${title}</h2>
          <div class="single-post-box">
            <p class="single-post">${body}</p>
            <button class='btn' onclick="window.location.hash = ''">See all posts</button>
          </div>
        </div>`;
};

export default SinglePost;
