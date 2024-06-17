import React, { useState } from "react";
import "../App.css";
import { Search } from "./Search";
import { Results } from "./Results";

export const SearchPage = ({
  myWall,
  setMyWall,
  myWallCount,
  setMyWallCount,
  idsOnWall,
  setIdsOnWall,
}) => {
  const [artworks, setArtworks] = useState([]);

  return (
    <div>
      <Search setArtworks={setArtworks} />
      <Results
        artworks={artworks}
        myWallCount={myWallCount}
        setMyWallCount={setMyWallCount}
        myWall={myWall}
        setMyWall={setMyWall}
        idsOnWall={idsOnWall}
        setIdsOnWall={setIdsOnWall}
      />
    </div>
  );
};
