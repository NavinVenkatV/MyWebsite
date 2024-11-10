import { projects } from '@/app/data'
import React from 'react'
import { PinContainer } from './PinContainer'
import { img } from 'framer-motion/client'
import { title } from 'process'

function Project() {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of my{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className='flex flex-wrap justify-center items-center p-4 gap-16 mt-10'>
        {projects.map((project)=>(
          <div key={project.id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
            <PinContainer title={project.title} href={project.link}>
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh]'>
                <div>
                  <img src="/bg.png" alt="" />
                </div>
                <img src={img} alt={title}
                className='z-10 absolute bottom-0' />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
