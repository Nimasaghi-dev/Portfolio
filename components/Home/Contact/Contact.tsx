import React from 'react'
import { BiEnvelope, BiPhone, BiMap } from 'react-icons/bi'

const Contact = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            {/* Text content */}
            <div>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>Schedule a call with me to see if i can help</h1>
                <p className='text-gray-400 mt-5 text-base sm:text-lg'>Reach out to me today</p>
                <div className='mt-7'>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiPhone className='w-9 h-9 text-cyan-300' />
                        <p className='text-xl font-bold text-gray-400'>0623102317</p>
                    </div>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiEnvelope className='w-9 h-9 text-cyan-300' />
                        <p className='text-xl font-bold text-gray-400'>Nimasaghi@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiMap className='w-9 h-9 text-cyan-300' />
                        <p className='text-xl font-bold text-gray-400'>Nieuw-vennep, Noord-holland</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact