import React from 'react'
import Form from 'react-bootstrap/Form'
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AddActivity = () => {
    return (<div>
        <br />

<Form className="container">
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label><h1>Where did you go?</h1> </Form.Label>
    <Form.Control type="text" placeholder="Twin Peaks Hike" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Activity</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <br />
  <Form.Control type="text" placeholder="Distance in Miles" />
  <br />
  <LinkContainer to="/profile">
						<Nav.Link>Add Activity</Nav.Link>
					</LinkContainer>
</Form>



    </div>);
}


export default AddActivity;