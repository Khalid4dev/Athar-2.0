"use client";
import React, { useState } from 'react';
import Image from 'next/image';
const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <footer className=" bg-primary-blue text-white text-center p-8">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 mx-auto max-w-screen-xl">
        <div className="mb-4">
          <div className="flex flex-col items-center">
            <Image
              width={80}
              height={80}
              src="/images/Athar_logo.jpg"
              className=" mx-auto rounded-full mb-4"
              alt="Company Logo"
            />
            <p className="text-sm mb-4">
              Your association's description goes here. Provide a brief overview
              of your mission and goals.
            </p>
            <button className="bg-white text-black text-primary-blue px-4 py-2 rounded-full hover:bg-cyan-300">
              Join Us
            </button>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Newsletters</h2>
          <p className="mt-2 text-justify pb-2">
            Get the latest news and most urgent calls to action by signing up to
            receive email alerts.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded-md mb-2"
              required
            />
            <button
              type="submit"
              className="bg-white text-black text-primary-blue px-4 py-2 rounded-full hover:bg-cyan-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="my-4 border-t border-white" />
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 mx-auto max-w-screen-xl">
        <div className="mb-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4 flex justify-center">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678910111213!2d-74.005972!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzExLjYiTiA3NMKwMDInMzkuNSJX!5e0!3m2!1sen!2sus!4v1634538800000!5m2!1sen!2sus"
            style={{ border: 0, width: "100%", height: "200px" }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <hr className="my-4 border-t border-white" />
      <p className="text-sm mt-4">© 2024 Athar Alkhair. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
