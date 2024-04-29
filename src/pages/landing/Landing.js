import React from "react";
import "./Landing.css";
import NavBar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Application from "../../components/application/Application";
import Faq from "../../components/faq/Faq";
import Rewards from "../../components/rewards/Rewards";
import Footer from "../../components/footer/Footer";

export default function Landing() {
  return (
    <div>
      <NavBar />
      <Header />
      <Application />
      <Faq />
      <Rewards />
      <Footer />
    </div>
  );
}
