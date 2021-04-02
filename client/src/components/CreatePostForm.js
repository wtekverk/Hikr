import React, {useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import {useDispatch} from 'react-redux';
import {createPost} from "../actions/post"
import React, { useRef } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_POST, LOADING } from "../utils/actions";
import API from "../utils/API";

function CreatePostForm() {
  const bodyRef = useRef();
  const activityRef = useRef();
  const durationRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      body: bodyRef.current.value,
      activity: activityRef.current.value,
      duration: durationRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    bodyRef.current.value = "";
    activityRef.current.value = "";
    durationRef.current.value = "";
  };

  return (
    <div>
      <div className="jumbotron">
       
      </div>
      <h1>Add your denture below!  </h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={activetyRef} placeholder="Hiking" />
        <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Describe what you hae been upto! " />
        <input className="form-control mb-5" ref={durationRef} placeholder="10 (miles)" />
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Save Post
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
