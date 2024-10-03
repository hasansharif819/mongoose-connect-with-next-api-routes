'use client'

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call or other logic)
    console.log(formData);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="text-lg mt-4">We're here to help! Reach out with any questions or inquiries.</p>
      </section>

      {/* Contact Details Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-gray-600">
              Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M16.72 11.06a4 4 0 00-5.44 0m1.39-5.66A8.003 8.003 0 004.77 17.9a12.094 12.094 0 005.4 2.68"></path></svg>
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M2.003 5.884l9.994 5.558a2 2 0 002.006 0l9.994-5.558A2 2 0 0022 4.063V16a2 2 0 01-2 2H4a2 2 0 01-2-2V4.063a2 2 0 01.003-.179z"></path></svg>
                <span className="text-gray-600">info@yourcompany.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11V8m-8 3V7a2 2 0 012-2h1.68c.895 0 1.736-.393 2.28-1.06l.897-1.07A2 2 0 0115.326 3H19a2 2 0 012 2v4a2 2 0 01-2 2h-7"></path><path strokeLinecap="round" strokeLinejoin="round" d="M7.051 17.405A7.005 7.005 0 0012 20a7.005 7.005 0 004.95-2.595"></path></svg>
                <span className="text-gray-600">123 Your Street, City, Country</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="6"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Us Here</h2>
          <iframe
            className="w-full h-80 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126315.49093444404!2d-122.50972896554604!3d37.779280824618115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c8d7e71b%3A0xe340c16e3ba68bc2!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1632905406317!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
