import React, { useState, useEffect } from "react";
import axios from "axios";

export const Results = ({ myWall, setMyWall, artworks }) => {
  //setMyWall on + click setMyWall([...myWall, thisObj])
  // populate results div with pictures and "+" icons
  // id "+" is pushed, update myWall array with that object id

  // useEffect(() => {
  //   getTenArtworks().then((artworks) => {
  //     //console.log(searchTerm);
  //   });
  // }, [artworks]);

  // const handleFetchImage = async () => {
  //   setIsLoading(true);
  //   try {
  //     const imageData = await getHarvPic(20669773);
  //     setImage(imageData.url);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // function getOne2() {
  //   getHarvPic(20669773).then((image) => {
  //     setImage(image);
  //     // const image = new Image();
  //     // image.src = res;
  //     // const imgContainer = document.getElementById("image-box");
  //     // imgContainer.appendChild(image);
  //   });
  //   //console.log(artworks);
  // }
  function updateMyWall(artwork) {
    if (!myWall) {
      setMyWall([artwork]);
    } else {
      setMyWall([...myWall, artwork]);
    }
  }

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
                  <button onClick={updateMyWall(artwork)} className="addButton">
                    +
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
