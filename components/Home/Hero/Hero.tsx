'use client';

import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
        <div className='relative z-10 flex flex-col items-center'>
            <Image 
                src="/images/My-Photo.jpeg" 
                alt='Heroimage' 
                width={180} 
                height={180} 
                className='rounded-full border-8 border-[#0c0c48aa]'
            />
            <h1 className="tex-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wider">I&apos;m a Passionate {' '}
                <span className='text-cyan-200'> 
                    <Typewriter 
                        options={{
                            strings:[
                                'Frontend Developer',
                                'Backend Developer',
                                'Web Developer'
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 50,
                            wrapperClassName: "pl-2",
                    }} />
                </span>
            </h1>
        </div>
    </div>
  )
}

export default Hero