import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children: Children }) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Harry Potter",
      price: "$16"
    },
    {
      id: 2,
      name: "Game of Thrones",
      price: "$5"
    },
    {
      id: 3,
      name: "Inception",
      price: "$12"
    }
  ]);

  return <MovieContext.Provider value={[movies, setMovies]}>{Children}</MovieContext.Provider>;
};
