import "./header.css";
import { Link } from "react-router-dom";

// images

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