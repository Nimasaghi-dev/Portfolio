import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
      <div className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            Recent <span className='text-cyan-300'>Projects</span>
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            {/* first project photo */}
            <div>
                <Image src='/images/NomNom-menu.png' alt='img' width={800} height={650} className='rounded-lg' />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Food ordering application - <span className='text-cyan-300'>NOMNOM</span></h1>
                <h1 className='pt-2 font-medium text-white/80'>MERN stack - Team Project</h1>
            </div>
            {/* second project photo */}
            <div>
                <Image src='/images/Movie Explorer-HomePage.png' alt='img' width={800} height={650} className='rounded-lg' />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Movie Explorer - <span className='text-cyan-300'>CiNEMO</span></h1>
                <h1 className='pt-2 font-medium text-white/80'>React.js-Vite</h1>
            </div>
            {/* third project photo */}
            <div>
                <Image src='/images/Cocktail explorer-HomePage.png' alt='img' width={800} height={650} className='rounded-lg' />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Cocktail Explorer - <span className='text-cyan-300'>Drinktionary</span></h1>
                <h1 className='pt-2 font-medium text-white/80'>Typescript - React.js - Vite</h1>
            </div>
            {/* fourth project photo */}
            <div>
                <Image src='/images/NomNom-menu.png' alt='img' width={800} height={650} className='rounded-lg' />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Landing page - <span className='text-cyan-300'></span></h1>
                <h1 className='pt-2 font-medium text-white/80'>Next.js - Tailwind </h1>
            </div>
        </div>
    </div>
  )
}

export default Projects