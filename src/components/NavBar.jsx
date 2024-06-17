import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Link to="/wallpage">My Wall </Link> |
      <Link to="/searchpage"> Search</Link>
    </div>
  );
};
