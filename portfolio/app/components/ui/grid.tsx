import React from 'react'
import { BentoGrid, BentoGridItem } from './Bentogrid'
import { gridItems } from '@/app/data'

const Grid = () => {
  return (
    <section id="about">
      {/* BentoGrid container with responsive grid layout */}
      <BentoGrid className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto">
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id} // `key` should be set here for proper list rendering
            id={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img = {item.img}
            imgClassName = {item.imgClassName}
            titleClassName = {item.titleClassName}
            spareImg = {item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
