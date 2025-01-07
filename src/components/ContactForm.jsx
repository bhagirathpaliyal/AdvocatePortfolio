import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div id='Contact-Us' className="p-6 bg-gray-100 rounded-lg shadow-md flex-1">
      <h2 className="font-semibold text-center mb-6 text-secondary max-sm:text-[16px] text-[24px]">Submit Your Legal Query</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone No."
          value={formData.phone}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary"
        />
        <input
          type="text"
          name="country"
          placeholder="Country of Residence"
          value={formData.country}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary"
        />
        <textarea
          name="message"
          placeholder="Message..."
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary resize-none h-32"
        />
        <button
          type="submit"
          className="py-3 text-white bg-secondary rounded-lg font-semibold hover:bg-secondary transition-colors"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
