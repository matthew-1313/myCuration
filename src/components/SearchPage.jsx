import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { Search } from "./Search";
import { Results } from "./Results";

// const [isOpen, setIsOpen] = useState(false);

let searchTerm = "";

export const SearchPage = () => {
  //import mywall state
  // set serarchterm state here
  return (
    <div>
      <Search />
      <Results />
    </div>
  );
};
