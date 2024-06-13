import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { SearchPage } from "./components/SearchPage";
import { WallPage } from "./components/WallPage";
import "./App.css";
import "./index.css";

function App() {
  //set state of myWall here, import into both pages
  // myWall = {
  //   MetMu: [],
  //   Harv: [],
  // };
  //when updating state, [...myWall, ], myWall.MetMu.push(obj.id)
  return (
    <>
      <h1>myCuration</h1>
      <NavBar />
      <br />
      <Routes>
        <Route path="/wallpage" element={<WallPage />} />
        <Route path="/searchpage" element={<SearchPage />} />
      </Routes>
      {/* <div>
        <ArtworkList />
        <SearchPage />
      </div> */}
    </>
  );
}

export default App;
