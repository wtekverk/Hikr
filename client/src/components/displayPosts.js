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
      <div class="card" style="width: 18rem;">
        <img
          class="card-img-top"
          src={fileUpload || "https://place-hold.it/200x200"}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{activity}</h5>
          <p class="card-text">{body}</p>
          <p class="card-text">{duration}</p>
          <p class="card-text">{points}</p>
          <p class="card-text">{creator}</p>
          <p class="card-text">{likes}</p>
        </div>
      </div>
    </div>
  );
}

export default displayPosts;
