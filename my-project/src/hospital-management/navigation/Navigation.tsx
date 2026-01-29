import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav className="navi-bar">
      <p className="navi-name">Aara's Hospital</p>

      <img className="navi-logo" src="aara.png" alt="Aara Hospital Logo" />

      <Link className="card" to="/">Home</Link>
      <Link className="card" to="/specialties">Specialties</Link>
      <Link className="card" to="/doctors">Doctors</Link>
      <Link className="card" to="/about">About</Link>
      <Link className="card" to="/contact">Contact</Link>

      <FontAwesomeIcon className="menu-bar" icon={faBars} />
    </nav>
  );
};

export default Navigation;
