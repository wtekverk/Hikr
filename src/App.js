import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavbarOC from "./components/NavbarOC";
import ReactDOM from "react-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Rules from "./components/Rules";
import Login from "./components/Login"

function App() {
	return (
		<div className="App">
			<Router>
				<NavbarOC />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/profile" component={Profile} />
					<Route path="/rules" component={Rules} />  
					<Route path="/login" component={Login} />

				</Switch>
			</Router>
		</div>
	);
}

export default App;
