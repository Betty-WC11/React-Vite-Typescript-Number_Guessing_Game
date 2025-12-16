import boom from "../assets/boom.png";
import "./LosePage.css";

function LosePage(props) {
  return (
    <>
      <h1>"You Lose!"</h1>
      <p>"The correct number was {props.answer}</p>
      <img src={boom} alt="bomb-man" className="boom-pic" />
    </>
  );
}

export default LosePage;
