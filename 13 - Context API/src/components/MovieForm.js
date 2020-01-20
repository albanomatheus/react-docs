import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const MovieForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [_, setMovies] = useContext(MovieContext);

  const handleSubmit = e => {
    e.preventDefault();
    setMovies(movies => [
      ...movies,
      { id: movies[movies.length - 1].id + 1, name, price: `$${price}` }
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name..."
        style={{ width: "300px" }}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input
        placeholder="Price..."
        style={{ width: "300px" }}
        value={price}
        type="number"
        onChange={e => setPrice(e.target.value)}
      />
      <br />
      <button type="submit" style={{ width: "304px" }}>
        submit
      </button>
    </form>
  );
};

export default MovieForm;
