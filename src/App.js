import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const emojiDictionary = {
    "🙂": "smiling",
    "😔": "sad",
    "😂": "laughing",
    "😡": "angry",
    "❤️": "love"
  };

  const [emojiInput, setEmojiInput] = useState(" ");

  function emojiEnterpreter() {
    setEmojiInput(emojiDictionary[event.target.value]);
    if (emojiDictionary[event.target.value] === undefined) {
      setEmojiInput("not in our database");
    }
  }
  function emojiClickHandler(emoji) {
    setEmojiInput(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "blue" }}>Emoji Interpreter </h1>
      <input onChange={emojiEnterpreter}></input>
      <div>{emojiInput}</div>
      <h3>emojis we know</h3>
      {Object.keys(emojiDictionary).map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "30px", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
