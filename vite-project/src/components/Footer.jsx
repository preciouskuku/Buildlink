import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bl-footer">
      <div className="wrapper">
        <p> {new Date().getFullYear()} Buildlinks. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
