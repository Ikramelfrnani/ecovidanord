// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// function NavBar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleServiceClick = () => {
//     setMenuOpen(false);
//     navigate('/services');
//   };

//   const handleSubServiceClick = (path) => {
//     setMenuOpen(false);
//     navigate(`/services/${path}`);
//   };

//   window.addEventListener('scroll', () => {
//     const navbar = document.querySelector('nav.navbar');
//     const navlinks = document.querySelector('.nav-links open');
//     if (window.scrollY > 50) {
//       navbar.classList.add('scrolled');
//       navlinks.classList.add('scrolled');
//     } else {
//       navbar.classList.remove('scrolled');
//       navlinks.classList.remove('scrolled');
//     }
//   });
  
//   return (
//     <nav className="navbar">
//       <img src="/images/ecovidaLogo[1].png" alt="logo" className="logo" />

//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
//         <li><NavLink to="/homeservice" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
//         <li><NavLink to="/about-us" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>

//         <li className="dropdown">
//           <span className="dropdown-title" onClick={handleServiceClick}>Services</span>
//           <ul className="dropdown-menu">
//             <li onClick={() => handleSubServiceClick("collecte")}>Collecte des déchets industriels</li>
//             <li onClick={() => handleSubServiceClick("tri")}>Tri des déchets</li>
//             <li onClick={() => handleSubServiceClick("recyclage")}>Recyclage et valorisation des déchets</li>
//             <li onClick={() => handleSubServiceClick("sensibilisation")}>Sensibilisation à la gestion des déchets</li>
//           </ul>
//         </li>

//         <li><NavLink to="/process" onClick={() => setMenuOpen(false)}>Process</NavLink></li>
//         <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;
// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// function NavBar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleServiceClick = () => {
//     setMenuOpen(false);
//     navigate('/services');
//   };

//   const handleSubServiceClick = (path) => {
//     setMenuOpen(false);
//     navigate(`/services/${path}`);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const navbar = document.querySelector('nav.navbar');
//       const navLinks = document.querySelector('.nav-links');
      
//       if (window.scrollY > 50) {
//         navbar?.classList.add('scrolled');
//         navLinks?.classList.add('scrolled');
//       } else {
//         navbar?.classList.remove('scrolled');
//         navLinks?.classList.remove('scrolled');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className="navbar">
//       <img src="/images/ecovida_white.png" alt="logo" className="logo" />

//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
//         <li><NavLink to="/homeservice" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
//         <li><NavLink to="/about-us" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
        
//         <li className="dropdown">
//           <span className="dropdown-title" onClick={handleServiceClick}>Services</span>
//           <ul className="dropdown-menu">
//             <li onClick={() => handleSubServiceClick("collecte")}>Collecte des déchets industriels</li>
//             <li onClick={() => handleSubServiceClick("tri")}>Tri des déchets</li>
//             <li onClick={() => handleSubServiceClick("recyclage")}>Recyclage et valorisation des déchets</li>
//             <li onClick={() => handleSubServiceClick("sensibilisation")}>Sensibilisation à la gestion des déchets</li>
//           </ul>
//         </li>

//         <li><NavLink to="/process" onClick={() => setMenuOpen(false)}>Process</NavLink></li>
//         <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState('/images/ecovida_white.png');
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
        setLogoSrc('/images/ecovidaLogo[1].png'); // logo noir après scroll
      } else {
        navbar?.classList.remove('scrolled');
        navLinks?.classList.remove('scrolled');
        setLogoSrc('/images/ecovida_white.png'); // logo blanc au top
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
