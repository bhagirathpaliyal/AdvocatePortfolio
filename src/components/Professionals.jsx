import React from "react";

const professionals = [
  {
    name: "RANJIT SINGH GHUMAN",
    expertise: "Advocate",
    image: "https://via.placeholder.com/150",
    experience: "In practice since 1989",
  },
  {
    name: "SHASHI GHUMAN",
    expertise: "Advocate",
    image: "https://via.placeholder.com/150",
    experience: "In practice since 1989",
  },
  {
    name: "BAHAAR GHUMAN",
    expertise: "Advocate",
    image: "https://via.placeholder.com/150",
  },
];

const Professionals = () => {
  return (
    <section className="bg-gray-100 py-10" id="Our-Professionls">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="max-sm:text-[18px] text-[24px] font-bold text-center text-gray-800 mb-8">
          Our Professionals
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {professionals.map((professional, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 w-[280px]"
            >
              <img
                src={professional.image}
                alt={professional.name}
                className="w-full h-40 object-cover"
              />
              <div className="h-full p-4 bg-gradient-to-r from-[#08132f] to-[#0c2b59] ">
                <h3 className="max-sm:text-[16px] text-[20px] font-semibold text-secondary">
                  {professional.name}
                </h3>
                <p className="text-[#9a9999] max-sm:text-[14px] text-[16px]">{professional.expertise}</p>
                {professional.experience && (
                  <p className="text-[#fff]  text-[14px] mt-2">
                    {professional.experience}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Professionals;
