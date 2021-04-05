import React from "react";

function displayPosts({
  body,
  activity,
  duration,
  creator,
  points,
  fileUpload,
  likes,
}) {
  return (
    <div>
      <div className="card" style="width: 18rem;">
        <img
          className="card-img-top"
          src={fileUpload || "https://place-hold.it/200x200"}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{activity}</h5>
          <p className="card-text">{body}</p>
          <p className="card-text">{duration}</p>
          <p className="card-text">{points}</p>
          <p className="card-text">{creator}</p>
          <p className="card-text">{likes}</p>
        </div>
      </div>
    </div>
  );
}

export default displayPosts;
