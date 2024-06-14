import React, { useState, useEffect } from "react";
import { Wall } from "./Wall";
import { Highlight } from "./Highlight";

export const WallPage = ({ myWall }) => {
  const [highlightedArt, setHighlightedArt] = useState();

  return (
    <div>
      <Wall myWall={myWall} setHighlightedArt={setHighlightedArt} />
      <Highlight highlightedArt={highlightedArt} />
    </div>
  );
};
