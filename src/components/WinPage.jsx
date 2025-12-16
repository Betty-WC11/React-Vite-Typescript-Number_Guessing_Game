import bombMan from "../assets/bombMan.webp";
import "./WinPage.css";

function WinPage(props) {
  return (
    <>
      <h1>"You Win!"</h1>
      <p>"The correct number was {props.answer}</p>
      <img src={bombMan} alt="bomb-man" className="bomb-man" />
    </>
  );
}

export default WinPage;
