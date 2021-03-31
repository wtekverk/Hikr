import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Home = () => {
    return (<div>

<div className="jumbotron jumbotron-fluid container">
  <div className="container">
    <h1 className="display-4">Current on the Leader Board</h1>
  </div>

  <ul className="list-group">
  <li className="list-group-item">First Place: (Props Stuff Here)</li>
  <li className="list-group-item">2nd Place: (Props Stuff Here)</li>
  <li className="list-group-item">3rd Place: (Props Stuff Here)</li>
  <li className="list-group-item">4th Place: (Props Stuff Here)</li>
  <li className="list-group-item">5th Place: (Props Stuff Here)</li>
</ul>
<LinkContainer to="/addActivity">
	<Nav.Link className="btn bn-light">Add Activity</Nav.Link>
</LinkContainer>
</div>



    </div>);
}


export default Home;