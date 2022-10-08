import "./styles.css";
import React, { useState } from "react";

var moviesList = {
  SciFi: [
    {
      name: "Interstellar",
      imdb: "8.6/10"
    },
    {
      name: "Inception",
      imdb: "8.8/10"
    }
  ],
  Adventure: [
    {
      name: "Life of Pi",
      imdb: "7.9/10"
    },
    {
      name: "Fantastic Beasts: The Secrets of Dumbledore",
      imdb: "6.2/10"
    }
  ],

  Horror: [
    {
      name: "The Exorcist",
      imdb: "8.1/10"
    },
    {
      name: "Wrong turn",
      imdb: "5.5/10"
    }
  ],
  Comedy: [
    {
      name: "Minions:The Rise of Gru",
      imdb: "6.6/10"
    },
    {
      name: "The Man from Toronto",
      imdb: "5.8/10"
    }
  ]
};

export default function App() {
  var [selectedGenre, setGenre] = useState("SciFi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Movies🎬</h1>
      <p> Checkout my favourite movies. Select a genre to get started </p>

      <div>
        {Object.keys(moviesList).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>

      <hr />

      <div>
        <ul>
          {moviesList[selectedGenre].map((movie) => (
            <li>
              <div> {movie.name} </div>
              <div style={{ marginTop: "0.5rem" }}> {movie.imdb} </div>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}
