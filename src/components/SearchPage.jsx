import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { Search } from "./Search";
import { Results } from "./Results";

// const [isOpen, setIsOpen] = useState(false);

let searchTerm = "";

export const SearchPage = ({ myWall, setMyWall }) => {
  const [artworks, setArtworks] = useState([]);

  return (
    <div>
      <Search setArtworks={setArtworks} />
      <Results artworks={artworks} myWall={myWall} setMyWall={setMyWall} />
    </div>
  );
};
