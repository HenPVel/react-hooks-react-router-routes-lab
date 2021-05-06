import React from "react";
import { actors } from "../data";
import ActorCard from "./ActorCard"

function Actors() {

  let actorElements = actors.map( actor => <ActorCard {...actor} />)

  return (
    <div>
      <h1>Actors Page</h1>
      {actorElements}
    </div>
  )}

export default Actors;
