'use client'
import { useState } from 'react'

const Cards = () => {
  const [selected, setselected] = useState(0)
  return (
    <div className='w-full flex items-center justify-center lg:justify-start lg:pl-32 gap-14 lg:mt-16'>
      <div
        className='w-[14rem] md:w-[22rem] h-[14rem] md:h-[22rem] group group_box_ss'
        onMouseEnter={() => {
          setselected(2)
        }}
        onMouseLeave={() => {
          setselected(0)
        }}
      >
        <video
          src='/logos/video1.mp4'
          muted
          autoPlay
          loop
          className={`w-full h-full rounded-2xl persective_image group-hover:translate-x-[100px] group-hover:scale-125 ${
            selected == 1 ? 'opacity-0' : ''
          }`}
        />
      </div>
      <div
        className='w-[14rem] md:w-[22rem] h-[14rem] md:h-[22rem] group group_box_ss2'
        onMouseEnter={() => {
          setselected(1)
        }}
        onMouseLeave={() => {
          setselected(0)
        }}
      >
        <video
          src='/logos/video2.mp4'
          muted
          autoPlay
          loop
          className={`w-full h-full rounded-2xl object-contain persective_image2 group-hover:translate-x-[-100px] group-hover:scale-125 ${
            selected == 2 ? 'opacity-0' : ''
          }`}
        />
      </div>
    </div>
  )
}

export default Cards
