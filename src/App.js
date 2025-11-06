import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './Pages/Services';
import DetailsServices from './Pages/DetailsServices'; 
import AboutUs from "./Pages/AboutUs"; 
import HomeServices from './Pages/HomeService';
import Contact from './Pages/Contact';
import ScrollToTop from './Components/ScrollToTop'; 
import ProcessEcovidanord from './Pages/ProcessEcovidanord';
import ScrollToTopButton from './Components/ScrollToTopButton';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton /> 

      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<DetailsServices />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<HomeServices />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/process" element={<ProcessEcovidanord />} />
      </Routes>
    </Router>
  );
}

export default App;
