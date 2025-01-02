import React from 'react';
import envelopeImg from '/public/assets/envelope-regular.svg';
import locationImg from '/public/assets/location-dot-solid.svg';
import phoneImg from '/public/assets/phone-solid.svg';
import clockImg from '/public/assets/clock-solid.svg';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 flex flex-wrap gap-8 md:gap-12 text-[16px]">
        {/* Logo and Description */}
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">
            Logo <span className="text-secondary">Here</span>
          </h4>
          <p>
            NRI legal is the most trusted service provider for property and legal matters for overseas Indians. We are dedicated to solving property and legal issues for NRIs with professionalism and care.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex-1 min-w-[250px]">
        <div className="flex items-start gap-4 mb-4">
            <img src={phoneImg} alt="Phone" className="w-6 h-6" />
            <p>9814004646</p>
          </div>  
        <div className="flex items-start gap-4 mb-4">
            <img src={phoneImg} alt="Phone" className="w-6 h-6" />
            <p>9855188646</p>
          </div>  
        <div className="flex items-start gap-4 mb-4">
            <img src={phoneImg} alt="Phone" className="w-6 h-6" />
            <p>7837129934</p>
          </div>  
          <div className="flex items-start gap-4 mb-4">
            <img src={envelopeImg} alt="Email" className="w-6 h-6" />
            <p>info@example.in</p>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <img src={locationImg} alt="Location" className="w-6 h-6" />
            <p>
            House number: 1100, Sector- 15-B, Chandigarh, 160015

            </p>
          </div>
        
         
          <div className="flex items-start gap-4">
            <img src={clockImg} alt="Clock" className="w-6 h-6" />
            <p>
              Monday - Friday: 10am - 6pm
              <br />
              Saturday: 10am - 2pm
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-xl md:text-2xl font-bold mb-4">Our Location</h4>
          <div className="w-full h-64 rounded-md overflow-hidden shadow-md">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5192148046237!2d76.79122831549349!3d30.732462381640524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed59d707d62f%3A0x54b4e858ae03257f!2sChamber%20No.%20168%2C%20District%20and%20Session%20Court%20Complex!5e0!3m2!1sen!2sin!4v1698963487475!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-dark py-4">
        <p className="text-center text-[16px]">
          Developed By{' '}
          <span className="font-bold text-secondary">
            TechPaliyal
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
