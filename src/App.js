import { useState } from "react";
import "./styles.css";

const musicDB = {
  EDM: [
    { name: "Firestone", artist: "Kygo" },
    { name: "Boy Oh Boy", artist: "Diplo" },
    { name: "High On Life", artist: "Martin Garrix" }
  ],
  Blues: [
    { name: "Comfortably Numb", artist: "Pink Floyd" },
    { name: "Uptown Funk!", artist: "Mark Ronson" },
    { name: "Blinding Lights", artist: "The Weeknd" }
  ],
  Pop: [
    { name: "Superheroes", artist: "The Script" },
    { name: "Dark Horse", artist: "Katy Perry" },
    { name: "Hall Of Fame", artist: "The Script" }
  ],
  HipHop: [
    { name: "Lose Yourself", artist: "Eminem" },
    { name: "Sicko Mode", artist: "Travis Scott" },
    { name: "Let You Down", artist: "NF" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("EDM");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Music Recommendation</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite music. Select a genre to get started
      </p>
      <div>
        {Object.keys(musicDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              padding: "0.5rem 1rem",
              margin: "0.5rem",
              border: "1px solid var(--text-color)",
              color: "var(--text-color)",
              borderRadius: "5px",
              backgroundColor: "var(--site-color)",
              fontSize: "medium"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                border: "1px solid var(--text-color)",
                borderRadius: "50px",
                padding: "0.5rem 1rem",
                marginTop: "2rem",
                width: "80%"
              }}
            >
              <div style={{ fontSize: "larger", fontWeight: "bold" }}>
                {" "}
                {song.name}{" "}
              </div>
              <div style={{ fontSize: "smaller" }}> {song.artist} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
