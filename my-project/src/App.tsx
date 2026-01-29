import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./hospital-management/navigation/Navigation";

import Home from "./hospital-management/home/Home";
import Specialties from "./hospital-management/Specialties/Specialties";
import Doctor from "./hospital-management/doctor/Doctor";
import About from "./hospital-management/about/About";
import Contact from "./hospital-management/contact/Contact";
import Confirmation from "./hospital-management/conformation/Conformation";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
