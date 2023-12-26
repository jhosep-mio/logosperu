'use client'
import { ValuesCategoriasPortafolio } from '@/components/shared/interfaces/interfaces'
import Link from 'next/link'
import { useState } from 'react'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import { CSSTransition } from 'react-transition-group'

export const RedirigirProyectos = ({ categoria }: {categoria: ValuesCategoriasPortafolio}) => {
  const [visible, setVisible] = useState(false)

  return (
    <Link
      href={`/portafolio/${categoria.url}`}
      className='w-full bg-transparent mx-10 rounded-lg  py-4 px-3 transition-all  border-2 border-white  flex justify-center box_child_content2 h-[45px] relative overflow-hidden cursor-pointer'
      onMouseEnter={() => {
        setVisible(true)
      }}
      onMouseLeave={() => {
        setVisible(false)
      }}
    >
      <div className='flex gap-3 items-center w-full transition-all'>
        <CSSTransition
          in={visible}
          timeout={800}
          classNames='alert2'
          unmountOnExit
        >
          <span
            className={`text-white text-3xl ${
            !visible ? 'hidden' : ''
          }`}
          >
            Los proyectos
          </span>
        </CSSTransition>
        <CSSTransition
          in={!visible}
          timeout={500}
          classNames='alert2'
          unmountOnExit
        >
          <>
            <IoArrowForwardCircleOutline className='text-white text-5xl' />
            <p className='text-white text-3xl corregir_pad'>Vistar</p>
          </>
        </CSSTransition>
      </div>
    </Link>
  )
}
