import React, { useEffect } from "react";
import { useStoreContext as Context } from "../utils/GlobalState";
import { LOADING, UPDATE_POSTS, SET_ERROR } from "../utils/actions";
import API from "../utils/API";
import { PostsList, PostsListItem } from "../components";
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
      {state.posts ? (
        <PostsList>
          {state.posts.map((post) => (
            <PostsListItem key={post._id}>
              <div className="card col-sm-12 col-md-3">
                <img
                  src={LOGO}
                  className="card-img-top"
                  alt="site icon of mtns"
                />
                <div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      ACTIVITY: {post.activity}
                    </li>
                    <li className="list-group-item">
                      DESCRIPTION: {post.body}{" "}
                    </li>
                    <li className="list-group-item">CREATOR: {post.creator}</li>
                    <li className="list-group-item">POINTS: {post.points}</li>
                    <li className="list-group-item">
                      DURATION: {post.duration}
                    </li>
                  </ul>
                </div>
              </div>
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
