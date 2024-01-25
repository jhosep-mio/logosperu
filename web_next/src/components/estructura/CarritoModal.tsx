'use client'
import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import { type TransitionProps } from '@mui/material/transitions'
import { IoCloseCircle } from 'react-icons/io5'
import { Global } from '../shared/Helper/global'
import { capitalizeFirstLetter } from '../shared/functions/capitalizer'
import useAuth from '../shared/hooks/useAuth'
import { RemoveItemCart } from '../shared/favoritos/RemoveItemCarts'
import { Total } from '../shared/favoritos/Total'
import Link from 'next/link'

const Transition = React.forwardRef(function Transition (
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

export interface SimpleDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CaritoModal = ({ open, setOpen }: SimpleDialogProps) => {
  const handleClose = (): void => {
    setOpen(false)
  }
  const { cart } = useAuth()

  return (
    <div className='carrito_modal'>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullScreen
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
        className='w-full md:w-[400px] right-0 left-auto quitar_ss '
      >
        <section className='w-full h-screen font_baloo'>
          <div className='w-full lg:right-0 h-full transition-all z-50'>
            {/* Orders */}
            <div className=' text-gray-700 flex flex-col h-full bg-[#262837]'>
              <div className='border-t-[3px] border-primary px-4 py-8 shadow-sm relative h-fit'>
                <IoCloseCircle
                  className='absolute right-2 top-0 bottom-0 my-auto p-1 box-content text-gray-500 rounded-full text-[2.5rem] cursor-pointer hover:text-gray-600 transition-colors'
                  onClick={() => {
                    setOpen(false)
                  }}
                />
                <h1 className='text-[2.5rem] text-center text-white m-0'>
                  Mi carrito
                </h1>
              </div>
              {/* Car */}
              <div className='bg-gray-200 '>
                <div className='grid grid-cols-9 py-3 px-8'>
                  <h5 className='col-span-5 text-[1.6rem] text-gray-600 text-left'>
                    Producto
                  </h5>
                  <h5 className='col-span-2 text-[1.6rem] text-gray-600 text-center'>
                    Cantidad
                  </h5>
                  <h5 className='col-span-2 text-[1.6rem] text-gray-600 text-right'>
                    Precio
                  </h5>
                </div>
                {/* Products */}
                <div className='overflow-y-auto controlar_alto px-4'>
                  {/* Product */}
                  {cart.length > 0
                    ? cart.map((car) => (
                      <div
                        className='bg-white p-4 rounded-md mb-4 group relative overflow-hidden'
                        key={car.id}
                      >
                        <div className='grid grid-cols-9 pl-3 '>
                          <div className='col-span-5 flex items-center gap-5'>
                            <img
                              src={`${Global.urlImages}/itemsportafolios/${car.imagen1}`}
                              className='w-12 h-12 object-contain'
                              alt='Carrito'
                            />
                            <div className='flex-1'>
                              <h5 className='text-[1.7rem] line-clamp-1'>
                                {car.titulo}
                              </h5>
                              <p className='text-[1.4rem] text-gray-500 line-clamp-1'>
                                {capitalizeFirstLetter(car.categoria)}
                              </p>
                            </div>
                          </div>
                          <div className='w-full col-span-2 h-full'>
                            <span className='text-center w-full h-full text-[1.7rem] flex items-center justify-center'>
                              {car.cantidad}
                            </span>
                          </div>
                          <div className='w-full col-span-2 h-full text-gray-800'>
                            <span className='text-right w-full text-[1.7rem] h-full flex items-center justify-end'>
                              S/. {car.cantidad != null && (parseFloat(car.precio) * car.cantidad).toFixed(2)}
                            </span>
                          </div>
                          {/* BOTON ELIMINACION */}
                        </div>
                        <div className='absolute -right-32 group-hover:right-0 transition-all duration-500 h-full top-0 bottom-0 w-1/5 bg-white shadow-2xl flex items-center justify-center'>
                          <RemoveItemCart producto={car} />
                        </div>
                      </div>
                    ))
                    : (
                      <div className='w-full h-full flex items-center justify-center'>
                        <p className='w-full text-center text-3xl'>
                          Aun no tienes productos en el carrito. <br /> Comienza a
                          llenarlo.
                        </p>
                      </div>
                      )}
                </div>
              </div>
              <div className='bg-white w-full h-fit px-6 py-8'>
                <div className='flex items-center justify-between mb-6 text-[2rem] text-gray-800'>
                  <span className='text-[2rem]'>Total</span>
                  <Total />
                </div>
                <div>
                  {cart.length > 0
                    ? (
                      <Link
                        href='/carrito'
                        onClick={() => setOpen(!open)}
                        className={`${
                        cart.length > 0 ? 'bg-primary' : 'bg-primary/80'
                      } text-white w-full py-4 px-4 rounded-lg text-3xl block  text-center hover:bg-primary/80 button_compra transition-colors`}
                      >
                        Continuar
                      </Link>
                      )
                    : (
                      <button
                        type='button'
                        className={`${
                        cart.length > 0 ? 'bg-primary' : 'bg-primary/80'
                      } text-white w-full py-4 px-4 rounded-lg text-3xl block  text-center`}
                      >
                        Continuar
                      </button>
                      )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Dialog>
    </div>
  )
}
