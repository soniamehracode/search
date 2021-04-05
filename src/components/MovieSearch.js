import React, { useState, useEffect } from "react";
import Form from "./Form";
import "./MovieSearch.css";
import * as ReactBootStrap from "react-bootstrap";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async (search) => {
    const url = `http://www.omdbapi.com/?apikey=4caa7144&s=${search}`;
    setLoading(true); //loading show kar jab tak data ni aa jata api se
    setMovies([]); //list reset karde
    try {
      const response = await fetch(url);
      const json = await response.json();
      // console.log(json);
      setMovies(json.Search);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  return (
    <div>
      <div>
        <Form onSearch={getMovie} />
      </div>
      <div>{loading && <h1>Loading...</h1>}</div>

      <div className="App">
        {movies.map((movie) => (
          <div className="cards">
            <img src={movie.Poster} />
            <h3 key={movie.id}>{movie.Title}</h3>
            <h3>{movie.Type}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
