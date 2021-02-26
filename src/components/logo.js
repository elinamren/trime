import logo from "../images/logo.png";

const Logo = () => {
  const logoLink = logo;
  return (
    <div className="logo-container">
      <img src={logoLink} alt="trime logotype" />
    </div>
  );
};

export default Logo;
