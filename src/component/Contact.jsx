import React from "react";

const Contact = () => {
  return (
    <div name="Contact" className="bg-blue-600 py-4 border-t-4 border-white">
        <div>

        </div>
      <h1 className="text-white font-bold  text-center text-3xl  ">
        <span className="">▐ </span>Contact Us
      </h1>
      <div className="flex flex-col gap-3 items-center mt-4 bg-white w-3/5 mx-auto p-3 rounded-lg">
        <input type="text" placeholder="Enter your name" className="w-full  border border-blue-500 p-2" />
        <input type="email" placeholder="Enter your email" className="w-full border border-blue-500 p-2" />
        <input type="number" placeholder="Enter your Phone number" className="w-full border border-blue-500 p-2" />
        <textarea name="" id="" cols="20" rows="5" placeholder="Message..." className="w-full border border-blue-500 p-2"></textarea>
        <button className="bg-blue-600 text-white p-2 "  >Submit</button>
      </div>

    </div>
  );
};

export default Contact;
