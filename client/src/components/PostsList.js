import React from "react";

// This file exports both the List and ListItem components
export function PostsList({ children }) {
  return (
    <div>
      <br />
      <h1>HIKR USER POSTS</h1>
      <div className="card-group">{children}</div>
    </div>
  );
}

export function PostsListItem({ children }) {
  return <div>{children}</div>;
}

