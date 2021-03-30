import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const NavbarOC = () => {
	return (
		<Navbar bg="light" expand="lg">
			<LinkContainer to="/">
				<Navbar.Brand>Wendy Tekverk</Navbar.Brand>
			</LinkContainer>

			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<LinkContainer to="/">
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/profile">
						<Nav.Link>Profile</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/rules">
						<Nav.Link>Rules</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
export default NavbarOC;