'use client'
import React from 'react'
import { TableCarrito } from '../TableCarrito'
import { Resumen } from '../Resumen'
import useAuth from '@/components/shared/hooks/useAuth'
import { FiShoppingCart } from 'react-icons/fi'

export const ContenidoPago = () => {
  const { cart } = useAuth()
  return (
    <div className='max-w-[1350px] mx-auto'>
      <h2 className='text-5xl lg:text-7xl font-semibold font_baloo text-left text-primary flex items-center gap-5 border-b border-gray-200 pb-4'>
        <FiShoppingCart />
        Mi carrito <span className='text-gray-400 text-5xl'>({cart.length})</span>
      </h2>
      <section className='flex gap-6 pt-6'>
        <TableCarrito />
        <Resumen />
      </section>
    </div>
  )
}
