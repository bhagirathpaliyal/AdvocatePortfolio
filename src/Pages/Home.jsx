import React from "react";
import HAboutSec from "../components/HAboutSec";
import HeroSec from "../components/HeroSec";
import HAchievementSec from "../components/HAchievementSec";
import Header from "../components/header/Header";
import Logo from "../components/header/Logo";
import ContactForm from "../components/ContactForm";
import Service from "../components/Service";
import Professionals from "../components/Professionals";
import Disclaimer from "../components/Disclaimer";

const Home = ({ scrollToSection }) => {
  return (
    <div>
      <div className=" text-[#fff] flex flex-col items-center bg-gradient-to-r from-[#091535] to-[#0d3065] p-[40px]">
        <Logo />
        <h1 className="font-thin">Ghuman law associates</h1>
      </div>
      <Header scrollToSection={scrollToSection} />
      <Disclaimer />
      <HeroSec />
      <Service />
      <HAboutSec />
      <Professionals />
      <HAchievementSec />
      <ContactForm />
    </div>
  );
};

export default Home;
