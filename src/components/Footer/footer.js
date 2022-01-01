import "./footer.css";
import { Link } from "react-router-dom";

// Images
import Instagram from "../../assets/img/instagram.svg";
import Tell from "../../assets/img/phone.svg";
import Telegram from "../../assets/img/telegram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
          <Link to='#' className="footer_link">
          <h1>Ramazon</h1>
          </Link>
        <ul className="footer_card">
          <li className="footer_list">
            <a
              href="tel:+998991337153"
              className="footer_link"
              rel="noreferrer"
              target="_blank"
            >
              <img className="footer_img" src={Tell} alt="Tell number" />
              <span>Tell number</span>
            </a>
          </li>
          <li className="footer_list">
            <a
              href="https://telegram.me/Ramazon_Pardayev"
              target="_blank"
              rel="noreferrer"
              className="footer_link"
            >
              <img className="footer_img" src={Telegram} alt="Telegram" />
              <span>Telegram</span>
            </a>
          </li>
          <li className="footer_list">
            <a
              href="https://www.instagram.com/_ramazon_pardayev_/"
              target="_blank"
              className="footer_link"
              rel="noreferrer"
            >
              <img className="footer_img" src={Instagram} alt="Instagram" />
              <span>Instagram</span>
            </a>
          </li>
         
        </ul>
      </div>
    </footer>
  );
};

export default Footer;