import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_POST, LOADING } from "../utils/actions";
import API from "../utils/API";

function PostForm() {
  const activityRef = useRef();
  const bodyRef = useRef();
  const creatorRef = useRef();
  const durationRef = useRef();
  const pointsRef = useRef();
  const titleRef = useRef();
  const authorRef = useRef();
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
      <br />
      <h1>Create a blog post</h1>
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          className="form-control row"
          required
          ref={activityRef}
          placeholder="Title"
        />
        <input
          className="form-control row"
          ref={creatorRef}
          placeholder="Screen Name"
        />
        <input
          className="form-control row"
          ref={durationRef}
          placeholder="What is the duration (in minutes)"
        />
        <input
          className="form-control row"
          ref={pointsRef}
          placeholder="How many points is this activity worth?"
        />
        <textarea
          className="form-control row"
          required
          ref={bodyRef}
          placeholder="Body"
        />
        <button
          className="btn btn-success row"
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
