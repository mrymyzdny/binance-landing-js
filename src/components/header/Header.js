import React from "react";
import "./Header.css";
import { IoIosArrowForward } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="header container">
        <div className="header-leftside ">
          <span className="users-count">187,709,392</span>
          <span>USERS TRUST US</span>
          <div className="signup-input-wrapper">
            <input
              placeholder="Email/Phone number"
              className="signup-input"
            ></input>
            <Link to="/signup" className="signup-btn">
              Sign Up
            </Link>
          </div>
          <p className="signup-text">
            Sign up now and get up to 100 USDT in rewards
          </p>
          <div className="social-media">
            <div>
              <p className="social-media-title">Or Connect With</p>
              <a href="www.google.com">
                <FcGoogle className="social-media-icon" />
              </a>
              <a href="www.apple.com">
                <FaApple className="social-media-icon apple-icon" />
              </a>
            </div>
            <div>
              <p className="social-media-title">App Download</p>
              <a href="#">
                <FaQrcode className="social-media-icon qr-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="header-rightside">
          <div className="cart-items">
            <Link className="news-link" to="/news">
              <span>View All 350+ Coins</span>
              <IoIosArrowForward />
            </Link>
          </div>
          <div className="cart-items">
            <div className="news">
              <span className="news-title">
                Polkadot Sees Record-Breaking Active Addresses, Despite Subdued
                Transaction Activity
              </span>
              <span className="news-title">
                TON Token Surpasses Cardano With A Market Value Of $23.8 Billion
              </span>
              <span className="news-title">
                XTON Launchpad Platform to Introduce AI Project Mubert
              </span>
              <span className="news-title">
                Maximum Supply of Renzo (EZ) Tokens is 10 Billion, With 2.5%
                Available For Mining
              </span>
            </div>
            <Link className="news-link" to="/news">
              <span>View All News</span>
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
