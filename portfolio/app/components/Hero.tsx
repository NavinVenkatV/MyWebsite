import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-text'
import MagicButton from './ui/MagicButton'

const Hero = () => {
  return (
    <div className='pb-15 pt-10'>
       <div>
            <Spotlight
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="white"
                />
                <Spotlight
                className="h-[80vh] w-[50vw] top-10 left-full"
                fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
       </div>

       <div>
            <div className=" h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.3]  flex items-center justify-center absolute top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            
            </div>
       </div>

       <div className='flex justify-center text-center my-20 z-10 relative'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase text-center tracking-widest text-sm text-blue-100 max-w-80'>
               Make it work, make it right, make it fast
            </h2>
            <TextGenerateEffect 
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Passionate Journey of Mechanical Enginner Guy to Software Enginner Techie'></TextGenerateEffect>
            <p className='text-center md:tracking-wider text-sm md:text-lg lg:text-2xl my-4'>
              Hi I'm Navin Venkat, a Front-end developer from India
            </p>
            <a href="#aboutme">
              <MagicButton/>
            </a>
          </div>
       </div>
       
    </div>
  )
}

export default Hero
