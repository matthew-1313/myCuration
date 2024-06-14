import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  //stuff here
  return (
    <div>
      <Link to="/wallpage">My Wall </Link> |
      <Link to="/searchpage"> Search</Link>
    </div>
  );
};
