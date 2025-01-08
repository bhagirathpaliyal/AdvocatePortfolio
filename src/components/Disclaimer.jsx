import React, { useState, useEffect } from "react";

const Disclaimer= () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAgreed = localStorage.getItem("hasAgreedToDisclaimer");
    if (!hasAgreed) {
      setIsVisible(true); 
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("hasAgreedToDisclaimer", "true"); 
    setIsVisible(false);
  };

  const handleDecline = () => {
    alert("You must agree to proceed.");
  };

  if (!isVisible) {
    return null; 
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold text-red-600 mb-4">Disclaimer</h2>
        <p className="text-sm text-gray-700 mb-4">
          The Advocates Act, 1961, and the rules framed by the Bar Council of
          India and the Bar Council of Punjab and Haryana, do not permit
          advertisement or solicitation by Advocates in any form or manner.
          This website and its contents are for informational purposes only and
          not intended as solicitation or advertisement.
        </p>
        <p className="text-sm text-gray-700 mb-6">
          By entering this website, you confirm and acknowledge that you have
          voluntarily sought the information. There has been no
          solicitation/advertisement or inducement by the website owner or its
          members.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleDecline}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Decline
          </button>
          <button
            onClick={handleAgree}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
