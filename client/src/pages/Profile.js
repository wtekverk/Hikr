import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ActivityCard from "../components/ActivityCard"

const Profile = () => {
    return (<div className="container">
        <h1>PropName Profile</h1>

<Card >
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Name</Card.Title>
    <Card.Text>
      We bit of Bio here
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroup.Item>Email</ListGroup.Item>
    <ListGroup.Item>Score + Score #</ListGroup.Item>
  </ListGroup>
  <Card.Body>
  <LinkContainer to="/addActivity">
						<Nav.Link>Add Activity</Nav.Link>
					</LinkContainer>
  </Card.Body>
</Card>
<br />
<h3>Past Activities</h3>
{/* filter through this with map of json f activeties a person has done */}
<ActivityCard />

  </div>);
}


export default Profile;