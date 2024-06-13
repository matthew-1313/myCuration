import React, { useState, useEffect } from "react";

export const Search = () => {
  //import searchterm state
  //set searchterm with modified search string, with "  AND  " etc.

  //   function fetchSearchBar() {
  //     //get the search bar text
  //     // set a state for searchTerm above
  //   }
  const [isOpen, setIsOpen] = useState(false);
  const [typeButtonText, setTypeButtonText] = useState("Type");

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function typeIs(str) {
    setTypeButtonText(str);
    //set API query term here too, some will be Drawing-and-Watercolor or all lowercase etc
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <h2>Search</h2>
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropbtn">
          {typeButtonText}
        </button>
        {isOpen && (
          <ul className="dropdown-content">
            <a href="#" onClick={() => typeIs("Painting")}>
              Painting
            </a>
            <a href="#" onClick={() => typeIs("Vessel")}>
              Vessel
            </a>
            <a href="#" onClick={() => typeIs("Basketry")}>
              Basketry
            </a>
            <a href="#" onClick={() => typeIs("Miniature Room")}>
              Miniature Room
            </a>
            <a href="#" onClick={() => typeIs("Model")}>
              Model
            </a>
            <a href="#" onClick={() => typeIs("Architectural Fragment")}>
              Architectural Fragment
            </a>
            <a href="#" onClick={() => typeIs("Print")}>
              Print
            </a>
            <a href="#" onClick={() => typeIs("Performance Arts")}>
              Performance Arts
            </a>
            <a href="#" onClick={() => typeIs("Installation")}>
              Installation
            </a>
            <a href="#" onClick={() => typeIs("Mixed Media")}>
              Mixed Media
            </a>
            <a href="#" onClick={() => typeIs("Drawing and Watercolor")}>
              Drawing and Watercolor
            </a>
            <a href="#" onClick={() => typeIs("Costume and Accessories")}>
              Costume and Accessories
            </a>
          </ul>
        )}
      </div>
      {/* <div className="searchBar">
        <input
          onChange={(event) => {
            searchTerm = event.target.value;
          }}
          type="text"
          placeholder="Search..."
          id="SearchTerm"
          value={searchTerm}
          onKeyUp="filterFunction()"
        />
        <button onClick={fetchSearchBar()} className="dropbtn">
          Search
        </button>
      </div> */}
    </div>
  );
};
