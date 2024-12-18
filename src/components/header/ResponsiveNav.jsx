import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import xLogo from "/public/assets/xmark-solid.svg";
const ResponsiveNav = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        className={`${isOpen ? "hidden" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        menu
      </button>
      
      <div
        className={`${
          isOpen ? "" : "hidden"
        } w-[50%] h-[100vh] bg-[#fff] fixed top-[0px] left-[0] flex flex-col bg-gradient-to-r from-[#08132f] to-[#0c2b59]`}
      >
        <button
          className={`${isOpen ? "" : "hidden"} flex justify-end m-[10px]`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src={xLogo}
            alt="X-Mark"
            className="w-[20px] flex justify-center items-center"
          />
        </button>

        <nav className="m-[5%]">
          <ul className="flex flex-col gap-[20px]">
            <button onClick={() => scrollToSection("Home")}>
              {" "}
              <li>Home</li>
            </button>
            <button onClick={() => scrollToSection("About-Us")}>
              {" "}
              <li>About Us</li>
            </button>
            <button onClick={() => scrollToSection("Case-Study")}>
              {" "}
              <li>Case Study</li>
            </button>
            <button onClick={() => scrollToSection("Contact-Us")}>
              {" "}
              <li>Contact Us</li>
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveNav;
