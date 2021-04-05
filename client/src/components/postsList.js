import React from "react";

// This file exports both the List and ListItem components
function postsList({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

function postsListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

export default { postsList, postsListItem };
