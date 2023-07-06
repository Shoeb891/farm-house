import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`nav ${isActive ? "active" : ""}`}>
      <div className="title">
        <Link to="/home" className="motion--title">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Universal Farms
          </motion.div>
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-list ${isActive ? "active" : ""}`}>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch(resolvedPath.pathname, { exact: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
