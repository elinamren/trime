import { Link } from "react-router-dom";
import Button from "./components/button";
import FooterLogIn from "./components/footer-frontpage";
import Logo from "./components/logo";
import BackgroundVideo from "./components/background-video";

function StarterScreen() {
  return (
    <div className="starter-screen">
      <div className="overlay"></div>
      <BackgroundVideo />
      <Logo />
      <div className="bottom-container">
        <div className="button-container">
          <Link to="/goals">
            <Button text="Im a trainee" styleClass="yellow-button" />
          </Link>
          <Link to="/goals">
            <Button text="Im a trainer" />
          </Link>
        </div>
        <FooterLogIn />
      </div>
    </div>
  );
}

export default StarterScreen;
