import SuccessBox from "./components/SuccessBox";
import Nav from "./components/Nav";
// import Menu from "./components/Menu";

const Home = () => {
  return (
    <div className="home-container">
      <SuccessBox />
      <Nav />
      {/* <Menu /> */}
    </div>
  );
};

export default Home;
