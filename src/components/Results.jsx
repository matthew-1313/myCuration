import React, { useState, useEffect } from "react";
import axios from "axios";

export const Results = ({
  myWall,
  setMyWall,
  myWallCount,
  setMyWallCount,
  artworks,
  idsOnWall,
  setIdsOnWall,
}) => {
  //setMyWall on + click setMyWall([...myWall, thisObj])
  // populate results div with pictures and "+" icons
  // id "+" is pushed, update myWall array with that object id

  const [wallFull, setWallFull] = useState(false);

  // function updateMyWall(artwork) {
  //   if (!idsOnWall.includes(artwork.id)) {
  //     if (myWallCount === 0) {
  //       setWallFull(false);
  //       setMyWall([artwork]);
  //       setIdsOnWall((currentIdsOnWall) => [...currentIdsOnWall, artwork.id]);
  //       setMyWallCount(myWallCount + 1);
  //     } else if (myWallCount >= 1 && myWallCount < 10) {
  //       setWallFull(false);
  //       setMyWall((currentMyWall) => [...currentMyWall, artwork]);
  //       setMyWallCount(myWallCount + 1);
  //     } else if (myWallCount >= 10) {
  //       setWallFull(true);
  //     }
  //   }
  // }

  function updateMyWall(artwork) {
    if (myWallCount < 8) {
      setWallFull(false);
      setMyWall((currentMyWall) => [...currentMyWall, artwork]);
      setIdsOnWall((currentIdsOnWall) => [...currentIdsOnWall, artwork.id]);
      setMyWallCount(myWallCount + 1);
    } else if (myWallCount >= 8) {
      setWallFull(true);
    }
  }

  const message1 = "+";
  const message2 = "wall is full";

  if (artworks.length < 1) {
    return <h4>Enter some keywords to search for artworks!</h4>;
  } else {
    return (
      <div>
        <h4>Add an artwork to your wall!</h4>
        <div>
          <ul className="image-list-1">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="small-art-tile">
                <div className="small-art-container">
                  <img src={artwork.image_url} className="small-image" />
                  <br />
                  <button
                    onClick={() => updateMyWall(artwork)}
                    className="addButton"
                    disabled={idsOnWall.includes(artwork.id)}
                  >
                    {wallFull ? message2 : message1}
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};
