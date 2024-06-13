import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  //getChicagos,
  //getHarvards,
  //getChicagoSpecifics,
  getHarvardSpecifics,
  getMetMuSpecificIDs,
  getMetMuByID,
} from "../../api";

const ArtworkList = () => {
  const [artworks, setArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   getTenArtworks().then((artworks) => {
  //     setArtworks(artworks);
  //   });
  // }, [artworks]);

  //works for ten each
  // const getTenEach = async () => {
  //   setIsLoading(true);

  //   try {
  //     const [chiData, harvData] = await Promise.all([
  //       getChicagos(),
  //       getHarvards(),
  //     ]);
  //     const mergedArray = [...chiData, ...harvData];
  //     setArtworks(mergedArray);
  //   } catch (error) {
  //     //console.log(fullArr);
  //     //console.log(artworks);
  //     console.error(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const getTenEach = async () => {
    const searchTerm = "chair OR painting";
    setIsLoading(true);

    try {
      const [metmuData, harvData] = await Promise.all([
        getMetMuSpecificIDs(searchTerm),
        getHarvardSpecifics(searchTerm),
      ]);
      const mergedArray = [...metmuData, ...harvData];
      setArtworks(mergedArray);
    } catch (error) {
      //console.log(fullArr);
      //console.log(artworks);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getMetMu = async () => {
    try {
      const data = await getMetMuByID([52576, 12538]);
    } catch (error) {
      console.error(error);
    }
  };

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

  if (!artworks) {
    return <h3>Search for Artworks!</h3>;
  } else {
    return (
      <div>
        <h2>Artworks</h2>
        {isLoading ? <p>Loading Results...</p> : <p></p>}
        <button onClick={getTenEach}>one</button>
        <div>
          <ul className="image-list-1">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="small-art-tile">
                <div className="small-art-container">
                  <img src={artwork.image_url} className="small-image" />
                </div>
                <div className="small-info">
                  <h3>{artwork.title}</h3>
                  <p>
                    by <b>{artwork.artist}</b>
                  </p>
                  <p>{artwork.location}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default ArtworkList;
