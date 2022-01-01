import "./header.css";
import { Link, NavLink } from "react-router-dom";

// images
import Logo from "../../assets/img/ucharteam-logo5.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header_logo">
            <h1>Ramazon</h1>
        </Link>
        <Link className="header_link" to='/buy' >Sotuv bo'limi</Link>
     
      </div>
    </header>
  );
};

export default Header;