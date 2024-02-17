import React from "react";
import img from "../assets//hero.jpg";

const Services = () => {
  const data = [
    {
      id: 1,
      title: "Mobile Tower Installation",
      p: "Towers are installed by our tower company and good facilities are also given so that people never have problem of network .",
    },
    {
      id: 2,
      title: "Mobile Tower Installation",
      p: "Towers are installed by our tower company and good facilities are also given so that people never have problem of network .",
    },
    {
      id: 3,
      title: "Mobile Tower Installation",
      p: "Towers are installed by our tower company and good facilities are also given so that people never have problem of network .",
    },
  ];

  return (
    <div name="Services" className="w-full h-full  bg-gradient-to-b from-blue-600 to-blue-400 mt-6 py-5">
      <h1 className="text-white font-bold  text-center text-3xl p-3">
        <span>▐ </span>Our services
      </h1>

      <div className=" flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-4 mt-4">
      {data.map(({ id, title, p }) => (
        <div key={id} className="bg-white flex flex-col w-[300px]  rounded-[50px]">
          <img src={img} alt="" className="w-full p-3 rounded-[50px]" />
          <p className="font-bold text-center">{title}</p>
          <p className="p-4">{p}</p>
        </div>
      ))}
      </div>

      
    </div>
  );
};

export default Services;
