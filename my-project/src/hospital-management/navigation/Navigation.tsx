import "./navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Link } from "react-router-dom";
import Home from "../home/Home";
import Specialties from "../Specialties/Specialties";
import Doctor from "../doctor/Doctor";
import About from "../about/About";
import Contact from "../contact/Contact";
const Navigation = () => {
  return (
    <>
      <nav className="navi-bar">
        <p className="navi-name">Aara's Hospital</p>
        <img className="navi-logo" src="aara.png"/>
        <Link className="card" to="/">Home</Link>
        <Link className="card" to="/Specialties">Specialties</Link>
        <Link className="card" to="/doctors">Doctors</Link>
        <Link className="card" to="/about">About</Link>
        <Link className="card" to="/contact">Contact</Link>
        <FontAwesomeIcon className="menu-bar" icon={faBars}  />

    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Specialties" element={<Specialties/>}/>
      <Route path="/doctors" element={<Doctor/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default Navigation;


