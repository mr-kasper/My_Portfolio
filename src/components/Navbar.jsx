import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Rachid &nbsp;<span className="md:block hidden">| Portfolio</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <Link to="/My_Portfolio/CV_RACHID_SAADI.pdf" target="_blank">
              Resume
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Menu */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-gradient-to-b from-black to-gray-800 bg-opacity-95 absolute top-16 right-4 w-[85%] z-30 rounded-xl shadow-lg transition-all duration-300 ease-in-out`}
          >
            <ul className="list-none flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } text-[18px] font-medium cursor-pointer transition duration-300 hover:scale-110 hover:text-white`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li
                className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer transition duration-300 hover:scale-110"
                onClick={() => setToggle(false)}
              >
                <Link to="/My_Portfolio/CV_RACHID_SAADI.pdf" target="_blank">
                  My Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
