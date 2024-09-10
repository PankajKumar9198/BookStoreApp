import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <div>
    <Navbar/>
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
        <p className="text-gray-600 mb-8">
          Welcome to our company! We are dedicated to delivering the best products and services to our customers. Our team is passionate about innovation and excellence, always striving to exceed expectations.
        </p>
        <p className="text-gray-600 mb-8">
          Our mission is to provide top-notch solutions that help businesses thrive in the digital age. With years of experience and a commitment to quality, we aim to be your trusted partner in success.
        </p>
        <p className="text-gray-600 mb-8">
          Thank you for choosing us. We look forward to working with you and achieving great things together.
        </p>

        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">Our Values</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Integrity: We uphold the highest standards of integrity in all of our actions.</li>
            <li>Customer Commitment: We develop relationships that make a positive difference in our customers' lives.</li>
            <li>Quality: We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.</li>
            <li>Teamwork: We work together, across boundaries, to meet the needs of our customers and to help our Company win.</li>
            <li>Respect for People: We value our people, encourage their development and reward their performance.</li>
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <img
                className="w-24 h-24 rounded-full mb-4"
                src="https://via.placeholder.com/96"
                alt="Team Member"
              />
              <h4 className="text-xl font-medium text-gray-800">John Doe</h4>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                className="w-24 h-24 rounded-full mb-4"
                src="https://via.placeholder.com/96"
                alt="Team Member"
              />
              <h4 className="text-xl font-medium text-gray-800">Jane Smith</h4>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                className="w-24 h-24 rounded-full mb-4"
                src="https://via.placeholder.com/96"
                alt="Team Member"
              />
              <h4 className="text-xl font-medium text-gray-800">Sam Johnson</h4>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">Our History</h3>
          <p className="text-gray-600 mb-4">
            Our company was founded in 2010 with a vision to create innovative solutions for businesses. Over the years, we have grown from a small startup to a leading provider of technology solutions, serving clients worldwide.
          </p>
          <p className="text-gray-600 mb-4">
            Our journey has been marked by continuous improvement and a relentless pursuit of excellence. We have expanded our offerings, embraced new technologies, and built a talented team of professionals who are dedicated to our mission.
          </p>
          <p className="text-gray-600">
            As we look to the future, we remain committed to our core values and to delivering exceptional value to our customers. We are excited about the opportunities ahead and look forward to continuing our journey of growth and success.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
