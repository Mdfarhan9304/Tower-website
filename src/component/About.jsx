import React from "react";
import about from "../assets/about.webp";

const About = () => {
  return (
    <div name="About" className="max-w-5xl  mx-auto bg-white">
      <h1 className="text-blue-600 font-bold  text-center text-3xl mt-[20px]">
        <span className="">▐ </span>About us
      </h1>
      <div className="flex  md:flex-row flex-col  items-center mt-[40px]">
        <div className="md:w-1/2 w-full p-3 md:p-0 ">
          <img src={about} alt="" className="h-[520px]" />
        </div>

        <div className="md:w-1/2 w-full p-3 md:p-0">
          Welcome to Skyspace, where we believe in unlocking the earning
          potential of your unused space! We understand that in today's
          fast-paced world, every square foot counts, which is why we're
          dedicated to helping you monetize your extra space effortlessly. At
          Skyspace, we specialize in connecting property owners with mobile
          network operators seeking ideal locations for tower installations.
          With the exponential growth of mobile technology, the demand for
          network infrastructure continues to soar. <br /> <br /> That's where you come in –
          by partnering with us, you can transform your vacant land or unused
          rooftops into a lucrative source of income. Our mission is simple: to
          provide property owners with a hassle-free way to earn extra money
          while contributing to the expansion of vital communication networks.
          Whether you own commercial property, residential land, or even a
          rooftop, we're here to help you capitalize on this opportunity.
          With our comprehensive range of services, Skyspace is your one-stop solution for monetizing your unused space and capitalizing on the growing demand for mobile network infrastructure. Let us help you turn your vacant land or rooftop into a valuable asset that generates passive income for years to come.






        </div>
      </div>
    </div>
  );
};

export default About;
