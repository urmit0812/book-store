import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-4">
          Welcome to our platform! We are dedicated to providing the best
          services and resources to help book lovers and authors connect.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to create a seamless experience where readers can
          explore, purchase, and review books while giving authors the
          opportunity to showcase their work.
        </p>
        <p className="text-gray-600 mb-4">
          Whether you are here to discover new stories or to publish your own,
          we are here to support you every step of the way. Thank you for being
          a part of our community!
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Our Vision</h2>
        <p className="text-gray-600 mb-4">
          We envision a world where knowledge, creativity, and literature are
          easily accessible to everyone. Our platform bridges the gap between
          readers and authors, making storytelling more interactive and
          engaging.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Wide collection of books across various genres.</li>
          <li>Easy-to-use platform for both readers and authors.</li>
          <li>Secure and seamless purchasing experience.</li>
          <li>Author-friendly tools to publish and promote books.</li>
          <li>Community-driven reviews and recommendations.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Have any questions or feedback? Feel free to reach out to us at
          <a href="mailto:support@ourplatform.com" className="text-blue-600 hover:underline"> urmitpatel0812@gmail.com</a>.
          We’d love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default About;