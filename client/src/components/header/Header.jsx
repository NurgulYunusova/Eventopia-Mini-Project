import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
  const navItems = [
    "All events",
    "Concert",
    "Theatre",
    "Kids",
    "Gallery",
    "Festival",
  ];
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="logo">
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              Eventopia
            </Link>
          </h1>
          <nav>
            <ul>
              {navItems &&
                navItems.map((item) => (
                  <li>
                    <a href="#">{item}</a>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
