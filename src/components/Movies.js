import React from "react";
import { movies } from "../data";
import MovieCard from "./MovieCard"

function Movies() {

  let movieElements = movies.map(movie => <MovieCard {...movie}/>)

  return (
    <div>
      <h1>Movies Page</h1>
      <br></br>
    {movieElements}
    </div>
  )}

export default Movies;
