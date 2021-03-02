import Button from "./components/button";
import FooterLogIn from "./components/footer-frontpage";
import Logo from "./components/logo";
//import BackgroundVideo from "./components/background-video";

function App() {
  return (
    <div className="App">
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

export default App;
