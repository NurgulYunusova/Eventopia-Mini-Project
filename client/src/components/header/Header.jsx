import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="logo">
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              Eventopia
            </Link>
          </h1>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for events, artists or venues..."
            />
            <a href="#">
              <i className="fas fa-search "></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
