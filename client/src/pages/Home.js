import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
//import {useSelector} from 'react-redux';
//import {useDispatch} from 'react-redux';
import {useStoreContext} from '../utils/GlobalState'
import API from "../utils/API.js";


const readAPI = () =>{
  console.log(API.getPosts());
  //return API.getPosts();
}

const Home = () => {

    //const post = useSelector((state) => state.posts)
    readAPI();

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