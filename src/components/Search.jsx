import React, { useState, useEffect } from "react";
import { getHarvardSpecifics, getMetMuSpecificIDs } from "../../api";

export const Search = ({ setArtworks }) => {
  //set searchterm with modified search string, with "  AND  " etc.

  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const newSearch = typed.replaceAll(" ", " AND ");
    setSearchTerm(newSearch);
  }, [typed]);

  const getArtworks = async () => {
    setIsLoading(true);

    try {
      const [metmuData, harvData] = await Promise.all([
        getMetMuSpecificIDs(searchTerm),
        getHarvardSpecifics(searchTerm),
      ]);
      const mergedArray = [...metmuData, ...harvData];
      setArtworks(mergedArray);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="searchBar">
        <input
          className="searchInput"
          type="text"
          placeholder="Enter Keywords..."
          id="typedSearchTerm"
          value={typed}
          onChange={(event) => {
            setTyped(event.target.value);
          }}
        />
        <button onClick={getArtworks} className="dropbtn">
          Search
        </button>
        {isLoading ? <p>Loading Results...</p> : <p></p>}
      </div>
    </div>
  );
};
