// Navbar component - for the desktop navigation bar
import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react'
// import { FaCode } from 'react-icons/fa';
import { BiAtom } from "react-icons/bi";

const Nav = () => {
  return (
    <div className='transition-all duration-200 h-[12vh] z-[10000] fixed w-full'>
        <div className='flex justify-between h-full w-[90%] mx-auto items-center'>
            {/* logo */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-white rounded-full items-center justify-center flex flex-col'>
                    <BiAtom className='w-5 h-5 text-black'/>
                </div>
                <h1 className='text-white hidden sm:block md:text-2xl text-xl font-bold'>Nima</h1>
            </div>
            {/* navLinks */}
            <div className='hidden lg:flex items-center space-x-10'>
              {NavLinks.map((link) => {
                return <Link key={link.id} href={link.url} className='text-base hover:text-cyan-300 text-white font-medium transition-all duration-200'>
                  <p>{link.label}</p>
                </Link>
              })}
            </div>
        </div>
    </div>
  )
}

export default Nav