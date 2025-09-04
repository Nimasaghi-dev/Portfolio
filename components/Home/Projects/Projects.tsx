import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            Recent <span className='text-cyan-300'>Projects</span>
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            <div>
                <Image src='/images/NomNom-menu.png' alt='img' width={800} height={650} className='rounded-lg' />
            </div>
        </div>
    </div>
  )
}

export default Projects