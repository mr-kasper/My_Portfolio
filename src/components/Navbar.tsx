'use client';

import { navLinks } from '../constants';
import { logo, menu, close } from '../../public/assets';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`paddingX w-full flex items-center py-4 fixed top-0 z-20 bg-primary backdrop-blur-sm bg-opacity-95`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity duration-300"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Rachid &nbsp;<span className="smd:block hidden">| Portfolio</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-row items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`/#${link.id}`}
                className={`relative px-4 py-2 mx-1 text-[16px] font-medium cursor-pointer transition-all duration-300
                ${active === link.title ? 'text-white' : 'text-secondary'}
                hover:text-white group rounded-md`}
                onClick={() => setActive(link.title)}
              >
                {link.title}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left scale-x-0
                group-hover:scale-x-100 transition-transform duration-300 ease-out
                ${active === link.title ? 'scale-x-100' : 'scale-x-0'}`}
                ></span>
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/CV_RACHID_SAADI.pdf"
              target="_blank"
              className="flex items-center gap-1.5 bg-tertiary/20 hover:bg-tertiary/40 text-white ml-3
              py-1.5 px-4 rounded-lg font-medium transition-all duration-300"
            >
              <span>Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a.5.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-tertiary/20 backdrop-blur-sm"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <Image
              src={toggle ? close : menu}
              alt="menu"
              className="w-[20px] h-[20px] object-contain cursor-pointer"
            />
          </button>

          {/* Mobile Menu */}
          <div
            className={`${
              toggle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
            } p-6 fixed top-20 right-4 left-4 md:left-auto md:w-72 backdrop-blur-lg bg-black/80 z-30 
            rounded-2xl shadow-xl transition-all duration-300 ease-in-out 
            border border-gray-800/50`}
          >
            <ul className="list-none flex flex-col gap-4 items-start w-full">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? 'text-white font-semibold pl-3 border-l-2 border-white'
                      : 'text-secondary pl-3 border-l-2 border-transparent'
                  } text-[17px] font-medium cursor-pointer transition-all duration-300 
                  hover:text-white hover:pl-4 w-full py-2`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`/#${link.id}`} className="block w-full">
                    {link.title}
                  </a>
                </li>
              ))}
              <li className="w-full mt-2 pt-4 border-t border-gray-800/50">
                <Link
                  href="/CV_RACHID_SAADI.pdf"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-tertiary/20 hover:bg-tertiary/40 
                  text-white py-2.5 px-4 rounded-lg w-full font-medium transition-all duration-300"
                  onClick={() => setToggle(false)}
                >
                  <span>View Resume</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a.5.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
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
