import logo from "../images/logo.png";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <img src={logo} alt="trime logo" />
        <p>It's training time</p>
      </div>
      <ul>
        <li>
          <a href="/">My profile</a>
        </li>
        <li>
          <a href="/">Contact us</a>
        </li>
        <li>
          <a href="/">Terms and conditions</a>
        </li>
        <li>
          <a href="/">Settings</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
