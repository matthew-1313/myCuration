import React, { useState, useEffect } from "react";

export const Wall = ({ setHighlightedArt, myWall }) => {
  //import myWall state and populate a div with all pictures.
  //if a picture is clicked update highlighted with that object
  return (
    <div>
      <h2>Wall</h2>
      <div className="wallBoundry">
        <img className="backgroundImage" src="../wall1.png" />
      </div>
    </div>
  );
};
