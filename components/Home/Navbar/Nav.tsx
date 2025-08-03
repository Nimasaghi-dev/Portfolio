// Navbar component - for the desktop navigation bar
import React from 'react'
import { FaCode } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className='transition-all duration-200 h-[12vh] z-[10000] fixed w-full'>
        <div className='flex justify-between h-full w-[90%] mx-auto items-center'>
            {/* logo */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-white rounded-full items-center justify-center flex flex-col'>
                    <FaCode className='w-5 h-5 text-black'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav