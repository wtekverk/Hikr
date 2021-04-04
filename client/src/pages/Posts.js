import React, { useEffect, useContext } from "react";

import axios from "axios";
import { useStoreContext as Context } from "../utils/GlobalState";
import DisplayPost from "../components/displayPosts";
import API from "../utils/API";

const PostsPage = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    API.getPosts()
      .then((response) => {
        const postsData = response.data;
        dispatch({ type: "SET_CURRENT_POST", payload: postsData });
      })
      .catch((error) => {
        dispatch({ type: "SET_ERROR", payload: error });
      });
  }, []);

  let posts = <p>Loading...</p>;

  if (state.error) {
    posts = (
      <p>
        Something went wrong: <span>{state.error}</span>
      </p>
    );
  }

  if (!state.error && state.posts) {
    posts = state.posts.map((post) => {
      return (
        <DisplayPost
          key={post.id}
          body={post.body}
          creator={post.creator}
          points={post.points}
          fileUpload={post.fileUpload}
          activity={post.activity}
          duration={post.duration}
          likes={post.likes}
        />
      );
    });
  }

  return { posts };
};
export default PostsPage;
