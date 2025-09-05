'use client';

import React from 'react'
import { SiExpress, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Tilt from 'react-parallax-tilt'

const skills = [
    {
        name:'Javascript',
        icon:<SiJavascript />,
        
    },
    {
        name:'React.js',
        icon:<SiReact />,

    },
    {
        name:'Next.js',
        icon:<SiNextdotjs />,
        
    },
    {
        name:'Typescript',
        icon:<SiTypescript />,

    },
    {
        name:'Node.js',
        icon:<SiNodedotjs />,

    },
    {
        name:'Express.js',
        icon:<SiExpress />,

    },
    {
        name:'Tailwind CSS',
        icon:<SiTailwindcss />,

    },
    {
        name:'MongoDB',
        icon:<SiMongodb />,
        
    },
]

const Skills = () => {
  return (
    <div className='text-white pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            My <span className='text-cyan-300'>skills</span>
        </h1>
        <div className='flex flex-wrap justify-center gap-6 mt-16'>
            {skills.map((skill) => {
                return <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
                    <div className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105'>
                        <div className='text-5xl mb-4 text-gray-300'>
                            {skill.icon}
                        </div>
                        <p className='text-white mt-1'>{skill.name}</p>
                    </div>
                </Tilt>
            })}
        </div>
    </div>
  )
}

export default Skills