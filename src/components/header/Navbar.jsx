import React from "react";


const Navbar = ({ scrollToSection }) => {
  return (
    <nav>
      <ul className="flex gap-6 text-[14px] max-md:hidden">
        <button onClick={() =>scrollToSection('Home') }>
          {" "}
          <li>Home</li>
        </button>
         <button onClick={() =>scrollToSection('Service') }>
          {" "}
          <li>Service</li>
        </button>
        <button onClick={() =>scrollToSection('About-Us') }>
          {" "}
          <li>About Us</li>
        </button>
       
        <button
          onClick={() =>scrollToSection('Our-Professionls') }
        >
          {" "}
          <li>Our Professionls</li>
        </button>
        <button
          onClick={() =>scrollToSection('Contact-Us') }
        >
          {" "}
          <li>Contact Us</li>
        </button>
    
      </ul>
    </nav>
  );
};

export default Navbar;
