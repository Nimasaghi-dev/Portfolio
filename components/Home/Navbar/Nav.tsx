"use client";

import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from 'react-icons/hi2';
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";


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
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
        <motion.div 
          className="flex items-center space-x-2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-10 h-10 bg-white rounded-full items-center justify-center flex flex-col"
            whileHover={{ rotate: 360, scale: 1.1, backgroundColor: "#22d3ee" }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
          >
            {/*  Replaced BiAtom with Code2 */}
            <FaLaptopCode className="w-5 h-5 text-black" />
          </motion.div>

          <motion.h1
            className="text-white hidden sm:block md:text-2xl text-xl font-bold"
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            whileHover={{
              scale: 1.1,
              color: "#22d3ee",
              textShadow: "0px 0px 8px #22d3ee",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Nima
        </motion.h1>

        </motion.div>
        </Link>

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
          <motion.a
            href="/resume/resume-nima-en.pdf"
            className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </motion.a>

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
