import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
//import {useDispatch} from "react-redux";
//import {getPosts} from "./actions/posts"
import NavAuth from "./components/NavAuth";
import FooterOC from "./components/FooterOC";
import Loading from "./components/Loading";
import Rules from "./pages/Rules";
import Register from "./pages/Register";
import AddActivity from "./pages/AddActivity";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import {StoreProvider} from './utils/GlobalState';

//import "./App.css";

const App = () => {
  // const { isLoading } = useAuth0();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts());
  // },[dispatch]);

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
   
    <Router>
      <StoreProvider>
    <div id="app" className="d-flex flex-column h-100">
      <NavAuth />
      <div className="container flex-grow-1">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/add" component={AddActivity} />
          <Route path="/register" component={Register} />
          <Route path="/rules" component={Rules} />
        </Switch>
      </div>
      <FooterOC/>
    </div>
    </StoreProvider>
    </Router> 
  );
};

export default App;
