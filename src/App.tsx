import "./App.css";
import Header from "./components/header.tsx";
import NumberTile from "./components/NumberTile.tsx";

function App() {
  // for the 1-100 tiles

  const tiles = [];

  for (let i = 1; i < 101; i++) {
    tiles.push(i);
  }
  console.log("tiles:", tiles);

  return (
    <>
      <Header />
      <div className="numberTiles">
        {tiles.map((number) => {
          return <NumberTile num={number} key={number} />;
        })}
      </div>
    </>
  );
}

export default App;
