import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState(`${process.env.PUBLIC_URL}/images/ecovida_white.png`);
  const navigate = useNavigate();

  const handleServiceClick = () => {
    setMenuOpen(false);
    navigate('/services');
  };

  const handleSubServiceClick = (path) => {
    setMenuOpen(false);
    navigate(`/services/${path}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav.navbar');
      const navLinks = document.querySelector('.nav-links');

      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
        navLinks?.classList.add('scrolled');
        setLogoSrc(`${process.env.PUBLIC_URL}/images/ecovidaLogo[1].png`);
      } else {
        navbar?.classList.remove('scrolled');
        navLinks?.classList.remove('scrolled');
        setLogoSrc(`${process.env.PUBLIC_URL}/images/ecovida_white.png`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <img src={logoSrc} alt="logo" className="logo" />
      </Link>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Accueil</NavLink></li>
        <li><NavLink to="/about-us" onClick={() => setMenuOpen(false)}>Qui sommes-nous ?</NavLink></li>
        
        <li className="dropdown">
          <span className="dropdown-title" onClick={handleServiceClick}>Services</span>
          <ul className="dropdown-menu">
            <li onClick={() => handleSubServiceClick("collecte")}>Collecte des déchets industriels</li>
            <li onClick={() => handleSubServiceClick("tri")}>Tri des déchets</li>
            <li onClick={() => handleSubServiceClick("recyclage")}>Recyclage et valorisation des déchets</li>
            <li onClick={() => handleSubServiceClick("sensibilisation")}>Sensibilisation à la gestion des déchets</li>
          </ul>
        </li>

        <li><NavLink to="/process" onClick={() => setMenuOpen(false)}>Process</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
