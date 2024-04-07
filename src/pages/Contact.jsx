/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import contactImg from "../assets/images/undraw_contract_re_ves9.svg";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mx-auto rounded-lg md:grid-cols-2 py-24 text-gray-800">
      <div className="flex flex-col justify-center items-center">
        <div className="space-y-2 text-center">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <div className="text-gray-400">Vivamus in nisl metus? Phasellus.</div>
          <img
            className="p-6 h-52 md:h-[350px]"
            src={contactImg}
            alt="Contact image here"
          />
        </div>
      </div>
      <form className="space-y-6">
        <div>
          <label className="text-sm md:text-lg">Full name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter Your Name"
            className="w-full p-3 rounded border-2"
          />
        </div>
        <div>
          <label className="text-sm md:text-lg">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-3 rounded border-2 "
          />
        </div>
        <div>
          <label className="text-sm md:text-lg">Message</label>
          <textarea rows="3" className="w-full p-3 rounded border-2"></textarea>
        </div>
        <button className="px-5 w-full py-2.5 text-center relative rounded group text-white font-medium inline-block">
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-300"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-300"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-300"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-300"></span>
          <span className="relative"> Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
