import React, { useState, useEffect } from "react";
import { createPost, updatePost } from "../utils/actions";
import Form from "react-bootstrap/Form";

<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@email.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Example file input" />
  </Form.Group>
</Form>;
