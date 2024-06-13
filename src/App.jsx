import { useState } from "react";
import ArtworkList from "./components/Results";
import Types from "./components/Types";
import SearchPage from "./components/SearchPage";
import "./App.css";

function App() {
  return (
    <>
      <h1>myCuration</h1>
      <div>
        <ArtworkList />
        <SearchPage />
      </div>
    </>
  );
}

export default App;
