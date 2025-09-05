import React from 'react'
import { SiExpress, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';

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
    <div>Skills</div>
  )
}

export default Skills