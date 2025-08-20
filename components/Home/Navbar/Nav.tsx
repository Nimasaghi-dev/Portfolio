"use client";

import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BiAtom, BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from 'react-icons/hi2';
import { motion } from "framer-motion";

type Props = {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all 
      ${navBg ? "bg-[#0f142ed9]" : "fixed"}
      duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      <div className="flex justify-between h-full w-[90%] mx-auto items-center">
        {/* logo with animation */}
        <motion.div 
          className="flex items-center space-x-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-10 h-10 bg-white rounded-full items-center justify-center flex flex-col"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
          >
            <BiAtom className="w-5 h-5 text-black" />
          </motion.div>

          <motion.h1
            className="text-white hidden sm:block md:text-2xl text-xl font-bold"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            whileHover={{ scale: 1.05, color: "#22d3ee" }}
          >
            Nima
          </motion.h1>
        </motion.div>

        {/* navLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>

        {/* buttons */}
        <div className="flex items-center space-x-4">
          {/* CV button */}
          <motion.button
            className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </motion.button>

          {/* Hamburger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
