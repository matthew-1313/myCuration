import React, { useState, useEffect } from "react";
import { Wall } from "./Wall";
// import { Highlight } from "./Highlight";

export const WallPage = ({ myWall, myWallCount, setMyWallCount }) => {
  // const [highlightedArt, setHighlightedArt] = useState();

  return (
    <div>
      <Wall
        myWall={myWall}
        myWallCount={myWallCount}
        setMyWallCount={setMyWallCount}
      />
      <br />
    </div>
  );
};
