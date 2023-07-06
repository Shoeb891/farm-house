import { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    // Initial check
    checkWindowSize();

    // Add event listener on window resize
    window.addEventListener("resize", checkWindowSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="bar">
      <nav className={`navbar ${isMobile && isActive ? "navbar-active" : ""}`}>
        {isMobile && (
          <div className={`menu ${isActive ? "menu-open" : ""}`}>
            <ul className="dropdown-list">
              <li>
                <CustomLink to="/home">Home</CustomLink>
              </li>
              <li>
                <CustomLink to="/about">About</CustomLink>
              </li>
              <li>
                <CustomLink to="/contact">Contact</CustomLink>
              </li>
            </ul>
            <ul className="social-media">
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        )}
        <div className="container">
          <Link to="/home" className="motion--title">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Universal Farms
            </motion.div>
          </Link>
          <div className="container-inner">
            <ul>
              <li>
                <CustomLink to="/home">Home</CustomLink>
              </li>
              <li>
                <CustomLink to="/about">About</CustomLink>
              </li>
              <li>
                <CustomLink to="/contact">Contact</CustomLink>
              </li>
            </ul>
          </div>
        </div>
        {isMobile && (
          <>
            <FaBars id="menu-btn" onClick={toggleMenu} aria-label="Open Menu" />
            {isActive && (
              <FaTimes
                id="close-btn"
                onClick={toggleMenu}
                aria-label="Close Menu"
              />
            )}
          </>
        )}
      </nav>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActiveLink = useMatch(resolvedPath.pathname, { exact: true });

  return (
    <li className={isActiveLink ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
