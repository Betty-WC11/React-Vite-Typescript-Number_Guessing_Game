import "./App.css";
import Header from "./components/Header.jsx";
import NumberTile from "./components/NumberTile.jsx";
import { useState } from "react";

function App() {
  // randomising the number for user to guess
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100 + 1)
  );
  console.log(randomNumber);

  const [attempts, setAttempts] = useState(3);

  // for the 1-100 tiles
  const tiles = [];
  for (let i = 1; i < 101; i++) {
    tiles.push(i);
  }

  return (
    <>
      <Header />
      <h3> Attempts remaining: {attempts} </h3>
      <div className="numberTiles">
        {tiles.map((number) => {
          return <NumberTile num={number} key={number} />;
        })}
      </div>
    </>
  );
}

export default App;
