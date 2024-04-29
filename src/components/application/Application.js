import React, { useState } from "react";
import "./Application.css";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

export default function Application() {
  const slides = [
    {
      id: 1,
      name: "Desktop",
      active: false,
      src: "./images/desktop-dark-en.png",
      lang: "en",
    },
    {
      id: 2,
      name: "Lite",
      active: false,
      src: "./images/lite-dark-en.svg",
      lang: "en",
    },
    {
      id: 3,
      name: "Pro",
      active: false,
      src: "./images/pro-dark-en.svg",
      lang: "en",
    },
  ];
  const [activeTab, setActiveTab] = useState(slides[0].id);

  const changeTab = (tabId) => {
    setActiveTab(tabId);
  }

  return (
    <div className="application-section container">
      <div className="application-leftside">
        {/* slider */}
        <div>
          {slides.map(
            (slide) =>
              slide.id === activeTab && (
                <img
                  alt="img"
                  src={slide.src}
                  className={slide.name === "Desktop" && "desktop-slide"}
                ></img>
              )
          )}
          <div className="slider-tabs">
            {slides.map((tab) => (
              <p
                key={tab.id}
                className={`slider-tab ${tab.active && "active-tab"} ${
                  activeTab === tab.id && "active-tab"
                }`}
                onClick={() => changeTab(tab.id)}
              >
                {tab.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="application-rightside">
        <p className="application-title">Trade on the go. Anywhere, anytime.</p>
        <div className="application-scan-wrapper">
          <div className="img-wrapper">
            <img
              src="./images/download.png"
              alt="QR code"
              className="application-qrcode"
            ></img>
          </div>
          <div className="application-scan-texts">
            <span>Scan to Download the App</span>
            <span>iOS and Android</span>
          </div>
        </div>

        <div className="application-links">
          <Link
            className="application-link"
            to="https://download.binance.com/electron-desktop/mac/production/binance.dmg"
          >
            <FaApple className="application-icon" />
            <span className="application-icon-text">MacOS</span>
          </Link>
          <Link
            className="application-link"
            to="https://download.binance.com/electron-desktop/mac/production/binance.dmg"
          >
            <FaWindows className="application-icon" />
            <span className="application-icon-text">Windows</span>
          </Link>
          <Link
            className="application-link"
            to="https://download.binance.com/electron-desktop/linux/production/binance-amd64-linux.deb"
          >
            <FaLinux className="application-icon" />
            <span className="application-icon-text">Linux</span>
          </Link>
        </div>
        <div className="download-options">
          <HiOutlineArrowDownTray />
          <p>More Download Options</p>
        </div>
      </div>
    </div>
  );
}
