

import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Profile = () => {
    return (<div >
      <Card style={{ width: '18rem' }}>
  <Card.Header>Place = Prop somethings</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Distance = Prop Something </ListGroup.Item>
    <ListGroup.Item>Points = prop something</ListGroup.Item>
  </ListGroup>
</Card>
       
    </div>);
}


export default Profile;