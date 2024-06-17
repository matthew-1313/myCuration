import React from "react";
import { Wall } from "./Wall";
// import { Highlight } from "./Highlight";

export const WallPage = ({ myWall, myWallCount, setMyWallCount }) => {
  // const [highlightedArt, setHighlightedArt] = useState();

  return (
    <div>
      <Wall
        myWall={myWall}
        myWallCount={myWallCount}
        // setHighlightedArt={setHighlightedArt}
        setMyWallCount={setMyWallCount}
      />
      <br />
      {/* <Highlight
        highlightedArt={highlightedArt}
        myWallCount={myWallCount}
        setMyWallCount={setMyWallCount}
      /> */}
    </div>
  );
};
