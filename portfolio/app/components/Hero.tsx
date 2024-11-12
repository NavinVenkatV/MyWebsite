import React from 'react'
import { Spotlight } from './ui/Spotlight'

import { TextGenerateEffect } from './ui/text-generate'
import Button from './ui/Button'
import { GridBackgroundDemo } from './ui/GridBg'
import { FaLocationArrow } from 'react-icons/fa6'
const Hero = () => {
  return (
    <div className='pb-20 pt-36 '>
        <div>
            <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
            />
            <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
            />
            <Spotlight
             className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" 
             />
        </div>

        <GridBackgroundDemo/>

        <div className='flex justify-center relative z-10 my-20 '>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-6xl flex flex-col justify-center items-center'>
                <h2 className='uppercase tracking-widest text-xs  text-center text-blue-100 max-w-80'>
                    Believe Your Instinct
                </h2>

                <TextGenerateEffect
                words='Passionate Journey of Mechanical Enginner to Software Engineer Techie'
                className='text-center text-[40px] md:text-5xl lg:text-6xl'
                />

                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                    Hi! I&apos;m Navin Venkat, a Full Stack Developer based in India.
                </p>
                
                <a href="https://drive.google.com/file/d/1ZQLfGshcpUyvwB0iLEs93MqzQevr6sUS/view?usp=drivesdk">
                    <Button 
                    title='Resume'
                    icon={<FaLocationArrow />}
                    position="right"
                    />
                </a>

            </div>
        </div>
        
    </div>
  )
}

export default Hero
