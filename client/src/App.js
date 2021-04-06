import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./components/auth0/protected-route";
import NavAuth from "./components/NavAuth";
import FooterOC from "./components/FooterOC";
import Loading from "./components/Loading";
import PostForm from "./pages/PostForm";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import { StoreProvider as Store } from "./utils/GlobalState";

//import "./App.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Store>
        <div id="app" className="d-flex flex-column h-100">
          <NavAuth />
          <div className="container flex-grow-1">
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route path="/posts" component={Posts} />
              <ProtectedRoute path="/profile" component={Profile} />
              <ProtectedRoute path="/add" component={PostForm} />
            </Switch>
          </div>
          <FooterOC />
        </div>
      </Store>
    </Router>
  );
};

export default App;
