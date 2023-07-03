import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="title">
        Universal Farms
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/about">About Us</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
    const location = useLocation();
    const isActive = location.pathname === to;
  
    return (
      <li>
        <Link to={to} className={isActive ? "active" : ""} {...props}>
          {children}
        </Link>
      </li>
    );
  }
