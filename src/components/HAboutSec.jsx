import React from "react";
import { Link } from "react-router-dom";

const HAboutSec = () => {
  return (
    <div
      id="About-Us"
      className="section1 py-10 px-4 lg:py-20 lg:px-32 bg-gray-100 text-center"
    >
      <h4 className="font-bold max-sm:text-[16px] text-[24px]">About Us</h4>
      <div className="mt-4 text-gray-600 max-w-screen-md mx-auto" >
        <p className="mb-[10px]">
          {" "}
          For more than 33 years,{" "}
          <span className="font-medium text-gray-700">
            Ghuman Law Associates
          </span>{" "}
          have been dedicated to delivering trusted legal solutions across
          Punjab, Haryana and Chandigarh, representing clients in the High Court
          of Punjab and Haryana at Chandigarh, the Supreme Court of India, and
          in Courts, Commissions and Tribunals across Punjab, Haryana and
          Chandigarh. We take pride in offering personalized attention and
          strategic representation tailored to each client’s unique needs.
        </p>
        <p className="mb-[10px]">
          Our experienced team of advocates is committed to upholding the
          highest standards of integrity and professionalism. Whether handling
          complex litigation or providing sound legal advice, we bring a
          results-driven approach to every case, ensuring your rights and
          interests are always our top priority.
        </p>
        <p>
          With over three decades of legal practice, we have built a reputation
          for resolving complex legal matters with diligence and precision. Our
          extensive experience allows us to anticipate challenges, craft
          effective strategies, and achieve favourable outcomes for our clients.
          We understand that every case is unique, and we approach each one with
          the same commitment to excellence, ensuring that our clients feel
          supported and confident throughout the process. At 
          <span className="font-medium text-gray-700">
          {" "}Ghuman Law Associates
          </span>
          , client satisfaction is not just a goal—it is the foundation of our
          enduring legacy.
        </p>
      </div>
     
    </div>
  );
};

export default HAboutSec;
