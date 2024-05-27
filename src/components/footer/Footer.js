import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { BiLogoTiktok } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import { AiOutlineYoutube } from "react-icons/ai";
import { TfiMoreAlt } from "react-icons/tfi";
import { MdLanguage } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const { theme, toggleTheme } = useTheme();
  // const darkTheme = theme === "dark"

  const [footerLists, setFooterList] = useState([
    {
      id: 1,
      title: "Community",
      items: [
        { src: <FaDiscord />, path: "/#" },
        { src: <SiTelegram />, path: "/#" },
        { src: <BiLogoTiktok />, path: "/#" },
        { src: <FaFacebook />, path: "/#" },
        { src: <FaXTwitter />, path: "/#" },
        { src: <FaReddit />, path: "/#" },
        { src: <FaInstagram />, path: "/#" },
        { src: <SiCoinmarketcap />, path: "/#" },
        { src: <AiOutlineYoutube />, path: "/#" },
        { src: <TfiMoreAlt />, path: "" },
      ],
    },
    {
      id: 2,
      title: "About Us",
      items: [
        { name: "About", path: "/#" },
        { name: "Careers", path: "/#" },
        { name: "Announcements", path: "/#" },
        { name: "News", path: "/#" },
        { name: "Press", path: "/#" },
        { name: "Legal", path: "/#" },
        { name: "Terms", path: "/#" },
        { name: "Privacy", path: "/#" },
        { name: "Building Trus", path: "/#" },
        { name: "Blog", path: "/#" },
        { name: "Sitemap", path: "/#" },
        { name: "Risk Warning", path: "/#" },
        { name: "Notices", path: "/#" },
        { name: "Desktop Application", path: "/#" },
      ],
    },
    {
      id: 3,
      title: "Products",
      items: [
        { name: "Exchange", path: "/#" },
        { name: "Buy Crypto", path: "/#" },
        { name: "Leveraged Tokens", path: "/#" },
        { name: "TradingView", path: "/#" },
        { name: "Pay", path: "/#" },
        { name: "Academy", path: "/#" },
        { name: "Live", path: "/#" },
        { name: "Tax", path: "/#" },
        { name: "Gift Card", path: "/#" },
        { name: "Launchpad & Launchpool", path: "/#" },
        { name: "Auto-Invest", path: "/#" },
        { name: "ETH Staking", path: "/#" },
        { name: "NFT", path: "/#" },
        { name: "BNB", path: "/#" },
        { name: "BABT", path: "/#" },
        { name: "Research", path: "/#" },
        { name: "Charity", path: "/#" },
      ],
    },
    {
      id: 4,
      title: "Business",
      items: [
        { name: "P2P Merchant Application", path: "/#" },
        { name: "P2Pro Merchant Application", path: "/#" },
        { name: "Listing Application", path: "/#" },
        { name: "Institutional & VIP Services", path: "/#" },
        { name: "Labs", path: "/#" },
      ],
    },
    {
      id: 5,
      title: "Learn",
      items: [
        { name: "Learn & Earn", path: "/#" },
        { name: "Browse Crypto Prices", path: "/#" },
        { name: "Bitcoin Price", path: "/#" },
        { name: "Ethereum Price", path: "/#" },
        { name: "Browse Crypto Price Predictions", path: "/#" },
        { name: "Bitcoin Price Prediction", path: "/#" },
        { name: "Buy Bitcoin", path: "/#" },
        { name: "Buy BNB", path: "/#" },
        { name: "Buy Ripple", path: "/#" },
        { name: "Buy Dogecoin", path: "/#" },
        { name: "Buy Ethereum", path: "/#" },
        { name: "Buy Tradable Altcoins", path: "/#" },
      ],
    },
    {
      id: 6,
      title: "Service",
      items: [
        { name: "Affiliate", path: "/#" },
        { name: "Referral", path: "/#" },
        { name: "OTC Trading", path: "/#" },
        { name: "Historical Market Data", path: "/#" },
        { name: "Proof of Reserves", path: "/#" },
      ],
    },
    {
      id: 7,
      title: "Support",
      items: [
        { name: "24/7 Chat Support", path: "/#" },
        { name: "Support Center", path: "/#" },
        { name: "Product Feedback & Suggestions", path: "/#" },
        { name: "Fees", path: "/#" },
        { name: "APIs", path: "/#" },
        { name: "Trading Rules", path: "/#" },
      ],
    },
  ]);

  return (
    <div className="footer container">
      <div className="footer-list">
        <p className="footer-list-title">{footerLists[0].title}</p>
        <div className="community-list">
          {footerLists[0].items.map((item) => (
            <Link to={item.path} className="footer-list-item community-item">
              {item.src}
            </Link>
          ))}
        </div>
        <div className="app-options-section">
          <div className="app-options">
            <MdLanguage />
            <span>English</span>
          </div>
          <div className="app-options">
            <AiFillDollarCircle />
            <span>USD_$</span>
          </div>
          <div className="app-options-theme" onClick={toggleTheme}>
            <span>Theme</span>
            {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </div>
        </div>
      </div>
      <div className="footer-list">
        <p className="footer-list-title">{footerLists[1].title}</p>
        {footerLists[1].items.map((item) => (
          <Link to={item.path} className="footer-list-item">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="footer-list">
        <p className="footer-list-title">{footerLists[2].title}</p>
        {footerLists[2].items.map((item) => (
          <Link to={item.path} className="footer-list-item">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="footer-list">
        <div>
          <p className="footer-list-title">{footerLists[3].title}</p>
          {footerLists[3].items.map((item) => (
            <Link to={item.path} className="footer-list-item">
              {item.name}
            </Link>
          ))}
          <p className="footer-list-title">{footerLists[4].title}</p>
          {footerLists[4].items.map((item) => (
            <Link to={item.path} className="footer-list-item">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="footer-list">
        <div>
          <p className="footer-list-title">{footerLists[5].title}</p>
          {footerLists[5].items.map((item) => (
            <Link to={item.path} className="footer-list-item">
              {item.name}
            </Link>
          ))}
          <p className="footer-list-title">{footerLists[6].title}</p>
          {footerLists[6].items.map((item) => (
            <Link to={item.path} className="footer-list-item">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
