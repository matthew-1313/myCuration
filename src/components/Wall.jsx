import React, { useState, useEffect } from "react";
import wall1 from "../images/wall1.png";

export const Wall = ({ setHighlightedArt, myWall }) => {
  //import myWall state and populate a div with all pictures.
  //if a picture is clicked update highlighted with that object
  const dummyWall = [
    {
      artist: "Unidentified Artist",
      date: "20th century",
      description: "Newcomb College Art School student work",
      id: 225189,
      image_url:
        "https://ids.lib.harvard.edu/ids/iiif/20424118/full/843,/0/default.jpg",
      location: "Harvard Art Museums",
      medium: "Ink on paper",
      title: "Cat",
      type: "Drawings",
    },
    {
      artist: "Unknown Artist",
      date: "mid 7th-late 1st century BCE",
      description: "No more information at this time",
      id: 219624,
      image_url:
        "https://ids.lib.harvard.edu/ids/iiif/17387930/full/843,/0/default.jpg",
      location: "Harvard Art Museums",
      medium: "Leaded bronze, mixed copper-alloy inlay",
      title: "Cat",
      type: "Sculpture",
    },
  ];

  return (
    <div>
      <h2>Wall</h2>
      <div className="wallBoundry">
        <img className="backgroundImage" src={wall1} />
      </div>
      <div>
        <ul className="wall-list">
          {dummyWall.map((artwork) => (
            <div key={artwork.id} className="wall-art-tile">
              <div className="wall-art-container">
                <img src={artwork.image_url} className="wall-image" />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
