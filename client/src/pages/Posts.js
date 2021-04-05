import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreContext as Context } from "../utils/GlobalState";
import { LOADING, UPDATE_POSTS, SET_ERROR } from "../utils/actions";
import API from "../utils/API";
import { PostsList, PostsListItem } from "../components/postsList";
import LOGO from "../assets/images/logo.png";

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
      {state.posts.length ? (
        <PostsList>
          {state.posts.map((post) => (
            <PostsListItem>
              <img src={LOGO} />
              <Link to={`/posts/${post._id}`}>
                {post.activity} submitted by {post.creator}
              </Link>
            </PostsListItem>
          ))}
        </PostsList>
      ) : (
        <h4>No posts to view!</h4>
      )}
    </div>
  );
}
export default Posts;
