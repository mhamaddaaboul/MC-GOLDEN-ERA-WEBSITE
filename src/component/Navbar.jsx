import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navebar.css";

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  let videosLink = null;
  if (currentPath === "/ssundee") {
    videosLink = "https://www.youtube.com/@SSundee/videos";
  } else if (currentPath === "/sam") {
    videosLink = "https://www.youtube.com/@SamGladiator/videos";
  } else if (currentPath === "/aphmau") {
    videosLink = "https://www.youtube.com/@Aphmau/videos";
  } else if (currentPath === "/stampy") {
    videosLink = "https://www.youtube.com/@stampylongnose/videos";
  }

  return (
    <nav className="navbar">
      <div className="logo">MC GOLDEN ERA</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/ssundee">Ssundee</Link></li>
        <li><Link to="/sam">Sam</Link></li>
        <li><Link to="/aphmau">Aphmau</Link></li>
        <li><Link to="/stampy">Stampy</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {videosLink && (
          <li>
            <a href={videosLink} target="_blank" rel="noopener noreferrer">
              Videos
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
