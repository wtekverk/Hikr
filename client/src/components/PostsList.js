import React from "react";

// This file exports both the List and ListItem components
export default function PostsList({ children }) {
  return (
    <div>
      <br />
      <h1>HIKR USER POSTS</h1>
      <div className="card-group">{children}</div>
    </div>
  );
}

export default function PostsListItem({ children }) {
  return <div>{children}</div>;
}

