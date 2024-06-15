import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { SearchPage } from "./components/SearchPage";
import { WallPage } from "./components/WallPage";
import "./App.css";
import "./index.css";

function App() {
  const [myWall, setMyWall] = useState([]);
  const [myWallIsFull, setMyWallIsFull] = useState(false);

  if (myWall.length >= 10) {
    setMyWallIsFull(true);
  }

  return (
    <>
      <h1>myCuration</h1>
      <NavBar />
      <br />
      <Routes>
        <Route path="/wallpage" element={<WallPage myWall={myWall} />} />
        <Route
          path="/searchpage"
          element={
            <SearchPage myWallIsFull={myWallIsFull} setMyWall={setMyWall} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
