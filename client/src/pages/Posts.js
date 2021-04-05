import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreContext as Context } from "../utils/GlobalState";
import { LOADING, UPDATE_POSTS, SET_ERROR } from "../utils/actions";
import API from "../utils/API";
import { postsList, postsListItem } from "../components/postsList";

function Posts() {
  const [state, dispatch] = Context();

  useEffect(() => {
    dispatch({ type: LOADING });
    API.getPosts()
      .then((response) => {
        console.log(response);
        const postsData = response.data;
        dispatch({ type: UPDATE_POSTS, posts: postsData });
      })
      .catch((error) => {
        dispatch({ type: SET_ERROR, posts: error });
      });
  }, []);

  return (
    <div>
      <h1>HIKR USER POSTS</h1>
      {state.posts.length ? (
        <postsList>
          {state.posts.map((post) => (
            <postsListItem>
              <img src={post.fileUpload} />
              <Link to={`/posts/${post._id}`}>
                {post.activity} submitted by {post.creator}
              </Link>
            </postsListItem>
          ))}
        </postsList>
      ) : (
        <h4>No posts to view!</h4>
      )}
    </div>
  );
}
export default Posts;
