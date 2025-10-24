import React from "react";
import "./header.css";
import { FaUser } from "react-icons/fa";

export default function Header () {
  return (
    <header className="nav-container">
      <nav className="nav-bar">
        {/* Left links */}
        <div className="nav-section">
          <a href="#">Simulator</a>
          <a href="#">Planner</a>
          <a href="#">Explorer</a>
        </div>
        <div className="nav-logo">
          <img src="/logo.png" alt="What If Logo" />
        </div>

        <div className="nav-section">
          <a href="#">Community</a>
          <a href="#">About Us</a>
          <div className="user-icon">
            <FaUser />
          </div>
        </div>
      </nav>
    </header>
  );
}