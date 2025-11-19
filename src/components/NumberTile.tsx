import "./NumberTile.css";

function NumberTile(props) {
  return (
    <>
      <div className="tileNumber">
        <h2>{props.num}</h2>
      </div>
    </>
  );
}

export default NumberTile;
