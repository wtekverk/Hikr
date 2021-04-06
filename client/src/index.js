import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Auth0ProviderWithHistory from "../src/components/auth0/auth0-provider-with-history";

// import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

//const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Auth0ProviderWithHistory>
    <App />,
  </Auth0ProviderWithHistory>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
