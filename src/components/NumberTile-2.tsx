import "./NumberTile.css";
import React from "react";

type NumberTileProps = {
  num: number;
  index: number; // pass the index from parent
  onClick?: (num: number, index: number) => void; // callback to parent
};

const NumberTile: React.FC<NumberTileProps> = ({ num, index, onClick }) => {
  const handleClick = () => {
    console.log("Tile clicked:", num, "Index:", index);
    if (onClick) onClick(num, index); // send both to parent
  };

  return (
    <div
      className="tileNumber"
      onClick={handleClick}
      style={{
        cursor: "pointer",
        border: "1px solid black",
        padding: "10px",
        margin: "5px",
        width: "50px",
        textAlign: "center",
      }}
    >
      <h2>{num}</h2>
    </div>
  );
};

export default NumberTile;

// function NumberTile(props) {

//   return (
//     <>
//       <div className="tileNumber">
//         <h2>{props.num}</h2>
//       </div>
//     </>
//   );
// }

// export default NumberTile;
