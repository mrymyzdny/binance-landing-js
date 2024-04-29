import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AppLogo } from "../icons";
import { LuSearch } from "react-icons/lu";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { MdLanguage } from "react-icons/md";
import { DropdownIcon } from "../icons";

export default function NavBar() {
  const [seledtedPageDropdown, setSeledtedPageDropdown] = useState('');
  const [selectedSearchDropdown, setSelectedSearchDropdown] = useState(false);
  const [selectedAppdownloadDropdown, setSelectedAppdownloadDropdown] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([
    {
      id: 1,
      name: "Buy Crypto",
      path: "/buy-crypto",
      submenu: false,
      sublink: [],
    },
    {
      id: 2,
      name: "Market",
      path: "/market",
      submenu: false,
      sublink: [],
    },
    {
      id: 3,
      name: "Trade",
      path: "/trade",
      submenu: true,
      sublinks: [
        { name: "Spot", path: "/#" },
        { name: "Margin ", path: "/#" },
        { name: "P2P", path: "/#" },
        { name: "Conver & Block Trade", path: "/#" },
      ],
    },
    {
      id: 4,
      name: "Futures",
      path: "/futures",
      submenu: true,
      sublinks: [
        { name: "USD-M Futures", path: "/#" },
        { name: "Coin-M Futures", path: "/#" },
        { name: "Options", path: "/#" },
      ],
    },
    {
      id: 5,
      name: "Earn",
      path: "/earn",
      submenu: false,
      sublink: [],
    },
    {
      id: 6,
      name: "Square",
      path: "/square",
      submenu: true,
      sublinks: [
        { name: "Square", path: "/#" },
        { name: "Academy", path: "/#" },
        { name: "Blog", path: "/#" },
        { name: "Research", path: "/#" },
      ],
    },
    {
      id: 7,
      name: "More",
      path: "/more",
      submenu: true,
      sublinks: [
        { name: "VIP & Institutional", path: "/#" },
        { name: "Launchpad & Launchedpool", path: "/#" },
        { name: "MiningPool", path: "/#" },
      ],
    },
  ]);

  const pagesDropdownHandler = (e, item) => {
    if (item.submenu) {
      setSeledtedPageDropdown(e.target.innerHTML);
    }
  };
  const searchDropdown = () => {
    setSelectedSearchDropdown(!selectedSearchDropdown);
  };
  const appDownloadDropdown = () => {
    setSelectedAppdownloadDropdown(!selectedAppdownloadDropdown);
  };
  
  return (
    <div className="nav-container">
      {/* left side */}
      <div className="nav-leftside">
        <Link to="/" className="nav-logo">
          <AppLogo />
        </Link>
        <ul className="nav-menu">
          {dropdownItems.map((item) => (
            <li
              className="nav-items"
              key={item.id}
              onMouseOver={(e) => pagesDropdownHandler(e, item)}
            >
              <Link to={item.path} className="nav-links">
                <span>{item.name}</span>
                {item.submenu ? (
                  <DropdownIcon className="nav-dropdown-icon" />
                ) : (
                  ""
                )}
              </Link>
              {/* Pages Dropdown */}
              {seledtedPageDropdown === item.name &&
                item.sublinks.map((link) => (
                  <div className="nav-dropdown-list">
                    <li className="nav-dropdown-item">
                      <Link className="nav-dropdown-link" to={link.path}>
                        {link.name}
                      </Link>
                    </li>
                  </div>
                ))}
            </li>
          ))}
        </ul>
      </div>
      {/* right side */}
      <div className="nav-rightside">
        <LuSearch className="nav-icon nav-links" onMouseOver={searchDropdown} />
        {/* Search Dropdown */}
        {selectedSearchDropdown && (
          <div className="search-box">
            <input placeholder="coin,function,..."></input>
            <p onClick={searchDropdown}>cancel</p>
          </div>
        )}
        <Link to="/login" className="nav-links">
          Log In
        </Link>
        <Link to="/signup" className="nav-links signup-nav-btn">
          Sign Up
        </Link>
        <HiOutlineArrowDownTray
          className="nav-icon nav-links"
          onMouseOver={appDownloadDropdown}
        />
        {/* App Download Dropdown */}
        {selectedAppdownloadDropdown && (
          <div className="app-download">
            <img src="./images/download.png" className="app-qr-code"></img>
            <span>Scan to Download App</span>
            <span>IOS & Android</span>
            <Link to="/#" className="app-download-dropdown-btn">
              More Download Options
            </Link>
          </div>
        )}
        <MdLanguage className="nav-icon nav-links" />
      </div>
    </div>
  );
}
