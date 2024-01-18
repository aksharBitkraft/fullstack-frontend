import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to = "/">
            Full Stack Application
          </Link>
          <Link className="btn btn-outline-light" to="/adduser">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
