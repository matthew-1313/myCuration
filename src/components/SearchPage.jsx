import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { Search } from "./Search";
import { Results } from "./Results";

// const [isOpen, setIsOpen] = useState(false);

let searchTerm = "";

export const SearchPage = ({ myWall, setMyWall, myWallIsFull }) => {
  const [artworks, setArtworks] = useState([]);

  return (
    <div>
      <Search setArtworks={setArtworks} />
      <Results
        artworks={artworks}
        myWallIsFull={myWallIsFull}
        myWall={myWall}
        setMyWall={setMyWall}
      />
    </div>
  );
};
