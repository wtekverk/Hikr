import React from "react";

import NavbarOC from "./NavbarOC";
import AuthNav from "./auth0/auth-nav";

const NavAuth = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <NavbarOC />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavAuth;
