import "./App.css";
import Header from "./components/Header.jsx";
import NumberTile from "./components/NumberTile.jsx";
// import useState from "react";

import React, { useState } from "react";
// import NumberTile from "./NumberTile";

function App() {
  const [lastClicked, setLastClicked] = useState<{
    num: number;
    index: number;
  } | null>(null);

  // Click handler
  const handleTileClick = (num: number, index: number) => {
    console.log("Parent received tile:", num, "Index:", index);
    setLastClicked({ num, index });
  };

  // Generate 100 unique random numbers 0–99
  const [tiles] = useState<number[]>(() => {
    const nums: number[] = [];
    const used = new Set<number>();
    while (nums.length < 100) {
      const ran = Math.floor(Math.random() * 100);
      if (!used.has(ran)) {
        used.add(ran);
        nums.push(ran);
      }
    }
    return nums;
  });

  return (
    <div>
      <h1>Number Tiles</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {tiles.map((num, index) => (
          <NumberTile
            key={index}
            num={num}
            index={index}
            onClick={handleTileClick}
          />
        ))}
      </div>
      {lastClicked && (
        <p>
          Last clicked tile: {lastClicked.num} (Index: {lastClicked.index})
        </p>
      )}
    </div>
  );
}

export default App;

// function App() {
//   // for the 1-100 tiles
//   const [lastClicked, setLastClicked] = useState<number | null>(null);

//   // Click handler
//   const handleTileClick = (num: number) => {
//     console.log("Tile clicked:", num);
//     setLastClicked(num);
//   };

//   const tiles = [];

//   let randomNumbers: number[] = [];
//   let usedNumbers = new Set<number>();

//   while (randomNumbers.length < 100) {
//     let ran_num = Math.floor(Math.random() * 100); // integer 0-99
//     if (!usedNumbers.has(ran_num)) {
//       // only add if not used
//       usedNumbers.add(ran_num);
//       randomNumbers.push(ran_num);
//       tiles.push(ran_num);
//     }
//   }

//   for (let i = 1; i < 101; i++) {
//     tiles.push(i);
//   }
//   console.log("tiles:", tiles);

//   return (
//     <>
//       <Header />
//       <div className="numberTiles">
//         {tiles.map((number, index) => {
//           console.log("Number:", number, "Index:", index);
//           return (
//             <NumberTile num={number} key={index} onClick={handleTileClick} />
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default App;
