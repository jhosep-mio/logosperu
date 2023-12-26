'use client'
import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import { type TransitionProps } from '@mui/material/transitions'
import { IoCartSharp, IoCloseCircle } from 'react-icons/io5'
import { Global } from '../shared/Helper/global'
import { capitalizeFirstLetter } from '../shared/functions/capitalizer'
import { carrito } from '../shared/interfaces/interfaces'

const Transition = React.forwardRef(function Transition (
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

export interface SimpleDialogProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CaritoModal = ({
  open,
  setOpen
}: SimpleDialogProps) => {
  const handleClose = (): void => {
    setOpen(false)
  }

  const [cart, setCarrito] = React.useState<carrito[]>([])
  React.useEffect(() => {
    // Recuperar el carrito del almacenamiento local cuando la página se cargue
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart)
      setCarrito(parsedCart)
    }
  }, [])

  return (
    <div className='carrito_modal'>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullScreen
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
        className='w-full md:w-[400px] right-0 left-auto quitar_ss'
      >
        <section className='w-full h-screen relative'>
          <div
            className='bg-[#1F1D2B] w-full lg:right-0 h-full transition-all z-50 '
          >
            {/* Orders */}
            <div className='relative pt-16 lg:pt-8 text-gray-300 p-8 h-full'>
              <IoCloseCircle className='absolute right-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl md:text-3xl cursor-pointer hover:text-gray-600 transition-colors' onClick={() => { setOpen(false) }} />
              <h1 className='text-4xl my-4 flex gap-3'>
                <IoCartSharp className='text-primary' /> Carrito de compras
              </h1>
              {/* Pills */}
              {/* Car */}
              <div>
                <div className='grid grid-cols-6 mb-4 p-4'>
                  <h5 className='col-span-4 text-3xl'>Servicio</h5>
                  <h5 className='col-span-2 text-3xl'>Cantidad</h5>
                </div>
                {/* Products */}
                <div className='overflow-y-scroll controlar_alto'>
                  {/* Product */}

                  {cart.length > 0
                    ? (
                        cart.map((car) => (
                          <div
                            className='bg-[#262837] p-4 rounded-xl mb-4'
                            key={car.id}
                          >
                            <div className='grid grid-cols-6'>
                              <div className='col-span-4 flex items-center gap-5'>
                                <img
                                  src={`${Global.urlImages}/itemsportafolios/${car.imagen1}`}
                                  className='w-10 h-10 object-cover'
                                  alt='Carrito'
                                />

                                <div>
                                  <h5 className='text-3xl line-clamp-2 overflow-hidden'>
                                    {car.titulo}
                                  </h5>
                                  <p className='text-xl text-gray-500'>
                                    {capitalizeFirstLetter(car.categoria)}
                                  </p>
                                </div>
                              </div>
                              <div className='w-full h-full'>
                                <span className='text-center w-full h-full flex items-center justify-center'>
                                  {car.cantidad}
                                </span>
                              </div>
                              <div className='flex justify-center items-center' />
                            </div>
                          </div>
                        ))
                      )
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
              <div className='bg-[#262837] absolute w-full bottom-0 left-0 p-4'>
                <div>
                  <button className='bg-primary w-full py-2 px-4 rounded-lg text-3xl hover:bg-primary/60 transition-colors'>
                    Realizar contización
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Dialog>
    </div>
  )
}
