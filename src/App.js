import Button from "./components/button";
import FooterLogIn from "./components/footer-frontpage";
import Logo from "./components/logo";
import BackgroundVideo from "./components/background-video";

function App() {
  return (
    <div className="App">
        <Logo />
        <div className="button-container">
        <Button className="yellow-button" />
        <Button />
        </div>
        <FooterLogIn />
    </div>
  );
}

export default App;
