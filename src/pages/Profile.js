import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Profile = () => {
    return (<div>

<Card style={{ width: '18rem' }}>
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
       
    </div>);
}


export default Profile;