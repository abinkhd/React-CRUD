import React from "react";
import { Logout } from "./Logout";

const NavBar = () => {
  return (
    <nav className="navbar justify-content-between header-style">
      <h3>CRUD App</h3>
      <div>
        <Logout />
      </div>
    </nav>
  );
};

export default NavBar;
