import Loading from "./src/components/Loading.js";
import NoData from "./src/components/NoData.js";
import SinglePost from "./src/components/SinglePost.js";
import Posts from "./src/components/Posts/index.js";
import { getData, setData } from "./src/context/data.js";

const root = document.getElementById("root");

const fetchPosts = async () => {
  try {
    root.innerHTML = Loading();
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const resData = await res.json();
    setData({ posts: resData });
  } catch (err) {
    setData({ posts: [] });
  } finally {
    const data = getData();
    if (data.posts && data.posts.length) {
      root.innerHTML = Posts({ posts: data.posts });
    } else {
      root.innerHTML = NoData();
    }
  }
};

const fetchPost = async (id) => {
  try {
    root.innerHTML = Loading();
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const resData = await res.json();
    setData({ post: resData });
  } catch (err) {
    setData({ post: {} });
  } finally {
    const data = getData();
    const { title, body } = data.post;
    root.innerHTML = SinglePost({ title, body });
  }
};

window.onhashchange = function () {
  const hash = window.location.hash;
  const id = hash.slice(1);
  id ? fetchPost(id) : fetchPosts();
};

fetchPosts();
