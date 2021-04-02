import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {useDispatch} from "react-redux";
import {getPosts} from "./actions/post"
import { NavAuth, FooterOC, Loading } from "./components";
import { Home, Profile, AddActivity, Register, Rules } from "./pages";

import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
   
    <div id="app" className="d-flex flex-column h-100">
      <NavAuth />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/add" component={AddActivity} />
          <Route path="/register" component={Register} />
          <Route path="/rules" component={Rules} />
        </Switch>
      </div>
      <FooterOC />
    </div>
    
  );
};

export default App;
