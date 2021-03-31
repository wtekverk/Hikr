import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavbarOC from "./components/NavbarOC";
import FooterOC from "./components/FooterOC";
import ReactDOM from "react-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Login from "./pages/Login"
import Register from "./pages/Register"
import AddActivity from "./pages/AddActivity"

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
					<Route path="/register" component={Register} />
					<Route path="/addActivity" component={AddActivity} />

				</Switch>

				<FooterOC />
			</Router>
		</div>
	);
}

export default App;
