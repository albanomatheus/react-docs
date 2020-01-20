import React from "react";

const Movie = ({ name, price, id }) => {
  return (
    <div className="movie-container">
      {id}) <strong>{name}</strong> - {price}
    </div>
  );
};

export default Movie;
