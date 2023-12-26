'use client'
import TypeIt from 'typeit-react'

export const Tipeit = () => {
  return (
    <TypeIt
      className='text_principal_toseo text-3xl md:text-4xl lg:text-3xl text-white md:text-black font-normal w-full lg:w-[400px] text-left lg:text-left h-16 md:h-fit'
      options={{
        strings: [
          'Diseñamos tu sitio web para destacar \n entre la multitud y atraer mas clientes',
          ' Diseñamos tu sitio web para destacar \n  entre la multitud y atraer mas clientes',
          ' Diseñamos tu sitio web para destacar \n  entre la multitud y atraer mas clientes'
        ],
        speed: 100,
        breakLines: false,
        loop: true
      }}
    />
  )
}
