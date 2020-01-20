import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";
import Nav from "./components/Nav";
import { MovieProvider } from "./components/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieForm />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
