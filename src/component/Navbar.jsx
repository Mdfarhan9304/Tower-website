import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";



const Bar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Services",
    },
    {
      id: 4,
      link: "Contact",
    }
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
   
    <div className={`flex justify-between w-full items-center h-20 px-4   sticky bg-transparent text-black top-0 z-[100] bg-white lg:overflow-hidden ${
      isScrolled ? 'shadow-md   shadow-gray-600' : ''
    }`}>
      <div className=" ml-2 lg:w-[150px] w-[90px] font-bold text-blue-600">SKYSPACE</div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer text-black hover:scale-105 duration-200 font-semibold hover:text-blue-600"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <button className="bg-blue-600 text-white font-bold p-2 md:block hidden   rounded-md">Contact Us</button>
      </div>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="md:hidden pr-4 z-10"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center   items-center h-screen w-1/2 absolute top-0 left-0   bg-blue-600 md:hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer text-white text-xl py-3 font-bold hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
   
  );
};

export default Bar;