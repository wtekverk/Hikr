import React, {useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import {useDispatch} from 'react-redux';
import {createPost} from "../actions/post"

const FormInput = () => {
    
    const dispatch = useDispatch();
     
    const [postData, setPostData] = useState({
        body: ""
    })

    handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData))
    }




    return (<div>
        <br />

<Form className="container">
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label><h1>What did you do</h1> </Form.Label>
    <Form.Control type="text" placeholder="Twin Peaks Hike"
     value={this.state.body}
     name="body"
     onChange = {this.handleInputChange}
    />
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
  
</Form>



    </div>);
}


export default FormInput;