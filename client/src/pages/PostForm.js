import React from "react";
import Form from "react-bootstrap/Form";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function PostForm() {
  const activityRef = useRef();
  const bodyRef = useRef();
  const creatorRef = useRef();
  const durationRef = userRef();
  const pointsRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      creator: creatorRef.current.value,
      activity: activityRef.current.value,
      duration: durationRef.current.value,
      points: pointsRef.current.value,
      body: bodyRef.current.value,
    })
      .then((result) => {
        dispatch({
          type: ADD_POST,
          post: result.data,
        });
      })
      .catch((err) => console.log(err));

    creatorRef.current.value = "";
    activityRef.current.value = "";
    durationRef.current.value = "";
    pointsRef.current.value = "";
    bodyRef.current.value = "";
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <h1>Create a blog post</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input
          className="form-control mb-5"
          required
          ref={titleRef}
          placeholder="Title"
        />
        <textarea
          className="form-control mb-5"
          required
          ref={bodyRef}
          placeholder="Body"
        />
        <input
          className="form-control mb-5"
          ref={authorRef}
          placeholder="Screen name"
        />
        <button
          className="btn btn-success mt-3 mb-5"
          disabled={state.loading}
          type="submit"
        >
          Save Post
        </button>
      </form>
    </div>
  );
}

export default PostForm;
