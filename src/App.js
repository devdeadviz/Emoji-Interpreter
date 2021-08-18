import { useState } from "react";
import "./App.css";

//Emoji Database!
var emojiDictionary = {
  "😊": "smiling",
  "🙄": "disbelief",
  "😞": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😡": "annoyance",
  "😃": "Grinning Face with Big Eyes",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "😉": "Winking Face",
  "🥰": "Smiling Face with Hearts",
  "🤩": "Star-Struck",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "😐": "Neutral Face",
  "😶‍🌫️": "Face in Clouds",
};

var dicArray = Object.keys(emojiDictionary);

function App() {
  var [userInput, setUserInput] = useState("Translation will come here!");

  function inputValueHandler(event) {
    userInput = event.target.value;
    if (userInput in emojiDictionary) {
      setUserInput(emojiDictionary[userInput]);
    } else {
      setUserInput("We don't have this emoji in our database.");
    }
  }

  function emojiClickHandler(emoji) {
    setUserInput(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input placeholder="Emoji here..." onChange={inputValueHandler}></input>
      <div className="divClass">{userInput}</div>
      <div className="divClass">Emoji's We Know</div>
      {dicArray.map(function (emoji) {
        return (
          <span className="emojiClass" onClick={() => emojiClickHandler(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/**
 * VISER -> View -> Interact -> State in Event HAndler -> render
 */

export default App;
