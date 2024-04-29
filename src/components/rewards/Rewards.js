import React from "react";
import "./Rewards.css";
import { Link } from "react-router-dom";

export default function Rewards() {
  return (
    <div className="rewards-section">
      <p className="first-line">For Verified Users</p>
      <p className="second-line">
        Get up to <span>100 USDT</span> in rewards
      </p>
      <Link to="/signup" className="signup-btn">
        Sign Up Now
      </Link>
    </div>
  );
}
