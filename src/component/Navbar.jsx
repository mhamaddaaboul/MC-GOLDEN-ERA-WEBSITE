import React from "react";
import "./Navebar.css";

function Navbar() {

  const currentPath = window.location.pathname;

  let videosLink = null;
  // SSundee
  if (currentPath === "/ssundee") {
    videosLink = "https://www.youtube.com/@SSundee/videos";
  }
  // Sam Gladiator
  else if (currentPath === "/sam") {
    videosLink = "https://www.youtube.com/@SamGladiator/videos";
  }
  // Aphmau
  else if (currentPath === "/aphmau") {
    videosLink = "https://www.youtube.com/@Aphmau/videos";
  }
  // Stampy
  else if (currentPath === "/stampy") {
    videosLink = "https://www.youtube.com/@stampylongnose/videos";
  }

  return (

    <nav className="navbar">

      <div className="logo">
        MC GOLDEN ERA
      </div>

      <ul className="nav-links">

        <li>
        <a href="/contact">Contact</a>
         </li>

        <li>
          <a href="/">
            Home
          </a>
        </li>

        <li>
          <a href="/ssundee">
            Ssundee
          </a>
        </li>

        <li>
          <a href="/sam">
            Sam
          </a>
        </li>

        <li>
          <a href="/aphmau">
            Aphmau
          </a>
        </li>

        <li>
          <a href="/stampy">
            Stampy
          </a>
        </li>

        {videosLink && (
          <li>
            <a
              href={videosLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Videos
            </a>
          </li>
          
          
        )}

      </ul>

    </nav>

  );
}

export default Navbar;