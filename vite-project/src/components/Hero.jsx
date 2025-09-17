import React from "react";
import { FaPlay } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="welcome">Welcome to Buildlinks</p>
        <h1>
          Experts Near <span className="highlight">You</span>
        </h1>
        <p className="subtitle">
          <span className="highlight">Certified</span> builders, plumbers, and
          electricians across <span className="highlight">Zimbabwe</span> — compare,
          connect, and hire with confidence.
        </p>
        <div className="hero-buttons">
          <button className="explore-btn">Explore more</button>
          <div className="play-btn">
            <FaPlay />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
