import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies] = useContext(MovieContext);
  return (
    <nav>
      <h1>My Movies</h1>
      <p>Total: {movies.length}</p>
    </nav>
  );
};

export default Nav;
