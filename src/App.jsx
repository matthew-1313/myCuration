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
  const [myWallCount, setMyWallCount] = useState(0);
  const [idsOnWall, setIdsOnWall] = useState([]);

  return (
    <>
      <h1>myCuration</h1>
      <NavBar />
      <br />
      <Routes>
        <Route
          path="/wallpage"
          element={
            <WallPage
              myWall={myWall}
              myWallCount={myWallCount}
              setMyWallCount={setMyWallCount}
            />
          }
        />
        <Route
          path="/searchpage"
          element={
            <SearchPage
              setMyWall={setMyWall}
              myWallCount={myWallCount}
              setMyWallCount={setMyWallCount}
              idsOnWall={idsOnWall}
              setIdsOnWall={setIdsOnWall}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
