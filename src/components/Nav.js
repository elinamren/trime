import feed from "../images/feed-icon.png";
import profile from "../images/profile-icon.png";
import search from "../images/search-icon.png";
import menu from "../images/menu-icon.png";

const Nav = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <a href="/">
            <img src={feed} alt="feed icon" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={profile} alt="profile icon" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={search} alt="search icon" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={menu} alt="menu icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
