// import React from 'react'

// const Professionals = () => {
//   return (
//     <div id='Our-Professionls' className='flex flex-col justify-center items-center p-[50px]'>
//         <h4 className='text-2xl font-bold max-sm:text-[16px] text-[24px]'>OUR PROFESSIONALS</h4>
//     </div>
//   )
// }

// export default Professionals
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
    <section className="bg-gray-100 py-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="max-sm:text-[16px] text-[24px] font-bold text-center text-gray-800 mb-8">
          Our Professionals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {professionals.map((professional, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={professional.image}
                alt={professional.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {professional.name}
                </h3>
                <p className="text-gray-600">{professional.expertise}</p>
                {professional.experience && (
                  <p className="text-gray-500 text-sm mt-2">
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
