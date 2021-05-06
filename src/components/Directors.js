import React from "react";
import { directors } from "../data";
import DirectorCard from "./DirectorCard"

function Directors() {

  let directorElements = directors.map(director => <DirectorCard {...director} />)

  return (
    <div>
      <h1>Directors Page</h1>
      {directorElements}
    </div>
  )}

export default Directors;
