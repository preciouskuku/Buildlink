import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="bl-navbar">
      <div className="bl-logo">
        <img src="/assets/logo.png" alt="Buildlinks logo" />
        <span>Buildlinks</span>
      </div>

      <div className="bl-nav-center">
        <ul>
          <li>Home</li>
          <li>Service</li>
          <li>About Us</li>
          <li>Projects</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="bl-nav-right">
        <button className="register">Register</button>
        <img className="avatar" src="/assets/avatar.png" alt="avatar" />
      </div>
    </header>
  );
}
