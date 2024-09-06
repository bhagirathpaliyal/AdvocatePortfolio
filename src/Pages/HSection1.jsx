// src/components/Carousel.js
import React, { useState, useEffect } from 'react';

const images = [
  { src: './src/assets/dy-slider-1.jpg', text: 'SPECIALIST FAMILY LAWYERS' ,text1: 'We achieve a result that is right for you'},
  { src: './src/assets/dy-slider-1.jpg', text: 'FAMILY LAW FIRM',text1: 'Rely On Us For The Best Outcome' },
  { src: './src/assets/dy-slider-1.jpg', text: 'FAMILY LAW FIRM',text1: 'Expertise with care and empathy' }
];

const HSection1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full  h-[90vh] overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full flex-shrink-0">
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-[140px] max-md:top-[50px] left-[2.5%] w-[50%]">
              <div className=" text-white ">
                <p className="text-[20px] md:font-bold md:mb-[30px]">{image.text}</p>
                <h2 className='text-[55px] max-md:text-[45px] text-[#f4b50e] font-bold'>{image.text1}</h2>
                <div className='flex items-center'>
                    <div className='w-[25px] h-[1px] bg-[#f4b50e] mr-[10px]'></div>
                    <button className='text-[#fff] max-md:text-[12px] text-[15px] font-bold'>View More </button>
                    </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#fff] p-2  "
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#fff] "
      >
        &#10095;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HSection1;
