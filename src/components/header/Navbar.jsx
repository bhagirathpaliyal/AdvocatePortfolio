import React from "react";


const Navbar = ({ scrollToSection,isScrolled }) => {

  
  return (
    <nav className="flex w-full max-md:hidden ">
      <button className="max-md:hidden flex text-secondary font-medium justify-left"> {isScrolled && <span >Logo</span>}
     </button>
      <ul className="flex gap-6 text-[14px] max-md:hidden justify-center flex-1 ">
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
