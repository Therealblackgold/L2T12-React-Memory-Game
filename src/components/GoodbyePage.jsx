import LOGO from "../images/logo.png";
import { Link } from "react-router-dom";

function GoodbyePage() {
  return (
    <div className="goodbye-page">
      <p>Thank you for playing!!!</p>
      <img src={LOGO} alt="" />
      <h1>Dinosaur Park</h1>
      <Link to="/" className="cta-btn" style={{ textDecoration: "none" }}>
        Keep playing
      </Link>
    </div>
  );
}

export default GoodbyePage;
