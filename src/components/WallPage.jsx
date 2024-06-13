import React, { useState, useEffect } from "react";
import { Wall } from "./Wall";
import { Highlight } from "./Highlight";

export const WallPage = () => {
  //set highlighted state here
  //import mywall state
  return (
    <div>
      <Wall />
      <Highlight />
    </div>
  );
};
