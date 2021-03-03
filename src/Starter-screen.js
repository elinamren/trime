import Button from "./components/button";
import FooterLogIn from "./components/footer-frontpage";
import Logo from "./components/logo";


function StarterScreen() {
  return (
    <div className="starter-screen">
      <Logo />
      <div className="bottom-container">
        <div className="button-container">
          <Button text='Im a trainee' styleClass='yellow-button' />
          <Button text='Im a trainer' />
        </div>
        <FooterLogIn />
      </div>
    </div>
  );
}

export default StarterScreen;
