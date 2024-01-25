'use client'
import useAuth from '@/components/shared/hooks/useAuth'
import React from 'react'
import { Global } from '@/components/shared/Helper/global'
import { RemoveItemCart } from '@/components/shared/favoritos/RemoveItemCarts'
import { capitalizeFirstLetter } from '@/components/shared/functions/capitalizer'

export const TableCarrito = () => {
  const { cart } = useAuth()
  return (
    <div className='w-[70%]'>
      <div className='grid grid-cols-5 py-3 px-8 bg-[#E8E8E8]'>
        <h5 className='col-span-2 text-[1.6rem] text-gray-600 text-left font-semibold uppercase'>
          PRODUCTO
        </h5>
        <h5 className='col-span-1 text-[1.6rem] text-gray-600 text-right font-semibold uppercase'>
          Precio
        </h5>
        <h5 className='col-span-1 text-[1.6rem] text-gray-600 text-center font-semibold uppercase'>
          Cantidad
        </h5>
        <h5 className='col-span-1 text-[1.6rem] text-gray-600 text-center font-semibold uppercase'>
          Total
        </h5>
      </div>
      <div className=''>
        {/* Product */}
        {cart.length > 0
          ? cart.map((car) => (
            <div
              className='p-4 rounded-md mb-4 overflow-hidden border-b border-gray-200'
              key={car.id}
            >
              <div className='grid grid-cols-5 pl-3 '>
                <div className='col-span-2 flex items-center gap-5'>
                  <img
                    src={`${Global.urlImages}/itemsportafolios/${car.imagen1}`}
                    className='w-24 h-w-24 object-contain'
                    alt='Carrito'
                  />
                  <div className='flex-1'>
                    <h5 className='text-[1.8rem] line-clamp-2 text-gray-700'>{car.titulo}</h5>
                    <p className='text-[1.4rem] text-gray-500 line-clamp-1'>
                      {capitalizeFirstLetter(car.categoria)}
                    </p>
                  </div>
                </div>
                <div className='w-full col-span-1 h-full text-gray-800'>
                  <span className='text-right w-full text-[1.7rem] h-full flex items-center justify-end'>
                    S/. {car.precio}
                  </span>
                </div>
                <div className='w-full col-span-1 h-full'>
                  <span className='text-center w-full h-full text-[1.7rem] text-gray-600 flex items-center justify-center'>
                    {car.cantidad}
                  </span>
                </div>
                <div className='w-full col-span-1 h-full flex justify-between items-center'>
                  <span className='text-center w-full h-full text-[1.7rem] text-red-500 font-bold flex items-center justify-center'>
                    S/. {car.cantidad != null && (parseFloat(car.precio) * car.cantidad).toFixed(2)}
                  </span>
                  <RemoveItemCart producto={car} />
                </div>
              </div>
            </div>
          ))
          : (
            <div className='w-full h-full flex items-center justify-center'>
              <p className='w-full text-center text-3xl mt-6'>
                Aun no tienes productos en el carrito. <br /> Comienza a llenarlo.
              </p>
            </div>
            )}
      </div>
    </div>
  )
}
