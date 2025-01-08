import React, { useState } from "react";
import xLogo from "/public/assets/xmark-solid.svg";
const ResponsiveNav = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden flex justify-between w-full">
      <button className="text-secondary font-medium">Logo</button>
      <button className={``} onClick={() => setIsOpen((prev) => !prev)}>
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

        <nav className={`m-[5%] `} onClick={() => setIsOpen((prev) => !prev)}>
          <ul className="flex flex-col gap-[20px]">
            <button onClick={() => scrollToSection("Home")}>
              {" "}
              <li>Home</li>
            </button>
            <button onClick={() => scrollToSection("Service")}>
              {" "}
              <li>Service</li>
            </button>
            <button onClick={() => scrollToSection("About-Us")}>
              {" "}
              <li>About Us</li>
            </button>

            <button onClick={() => scrollToSection("Our-Professionls")}>
              {" "}
              <li>Our Professionls</li>
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
