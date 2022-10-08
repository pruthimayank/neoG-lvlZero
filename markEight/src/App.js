import "./styles.css";
import React, { useState } from "react";

var color = "blue";
var userName = "User";
const emojiDictionary = {
  "😂": "Laughing",
  "😄": "Smiling",
  "😑": "Annoyed",
  "😞": "Sad",
  "😭": "Crying",
  "😉": "Wink",
  "😤": "Angry",
  "❤️": "Love",
  "🥷": "Ninja",
  "📖": "Book"
};

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler() {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  if (meaning === undefined) {
    meaning = "We don't have this emoji in our database";
  }

  var listOutput = Object.keys(emojiDictionary);

  return (
    <div className="App">
      <h1>
        Welcome <span style={{ color: color }}>{userName}</span>
      </h1>
      <input onChange={emojiInputHandler}></input>
      <h3>{meaning}</h3>

      <h2>Emojis we know</h2>
      <h2>
        {listOutput.map((emoji) => {
          return (
            <span 
            onClick={() => emojiClickHandler(emoji)}
            key={emoji} 
            style={{ cursor: "pointer", padding: "0.5rem" }}
            >
              {emoji}
            </span>
          );
        })}
      </h2>
    </div>
  );
}
