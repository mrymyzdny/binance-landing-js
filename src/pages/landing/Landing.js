import {React} from "react";
import "./Landing.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Application from "../../components/application/Application";
import Faq from "../../components/faq/Faq";
import Rewards from "../../components/rewards/Rewards";
import Footer from "../../components/footer/Footer";
import { useTheme } from "../../context/ThemeContext";

export default function Landing() {
  const isDarkTheme = useTheme()
  return (
      <div className={isDarkTheme ? "dark" : "ligth"}>
        <Navbar />
        <Header />
        <Application />
        <Faq />
        <Rewards />
        <Footer />
      </div>
  );
}
