import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducers from "./reducers"
// import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";


const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
  <Router>
   
      <App />
   
  </Router>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
