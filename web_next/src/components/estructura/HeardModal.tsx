import * as React from 'react'
import { IoCloseCircle, IoHeartSharp } from 'react-icons/io5'
import { CSSTransition } from 'react-transition-group'
import useAuth from '../shared/hooks/useAuth'
import { Global } from '../shared/Helper/global'
import { capitalizeFirstLetter } from '../shared/functions/capitalizer'
import { Visualizar } from './heard/Visualizar'

export interface SimpleDialogProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const HeardModal = ({ open, setOpen }: SimpleDialogProps) => {
  const { heard } = useAuth()

  return (
    <>
      <CSSTransition in={open} timeout={300} classNames='heard' unmountOnExit>
        <section className='absolute w-full h-[70vh] right-0 lg:w-[400px] lg:h-[400px]  top-full lg:right-[80px] overflow-hidden rounded-b-3xl'>
          <div
            className='bg-[#1F1D2B] w-full lg:right-0 h-full transition-all z-50 '
          >
            {/* Orders */}
            <div className='relative pt-16 lg:pt-8 text-gray-300 p-4 lg:p-8 h-full'>
              <IoCloseCircle
                className='absolute right-4 top-4 p-3 box-content text-gray-300 rounded-full text-5xl md:2xl hover:text-white cursor-pointer'
                onClick={() => setOpen(false)}
              />
              <h1 className='text-4xl my-4 gap-3 w-full text-center flex justify-center items-center'>
                Mis favoritos <IoHeartSharp className='text-primary' />
              </h1>
              <div className='mt-12 h-full'>
                <div className='h-[80%] md:h-[700px] lg:h-[290px] overflow-y-scroll flex flex-col gap-4 pr-2'>
                  {/* Product */}
                  {heard.length > 0
                    ? (
                        heard.map((car) => (
                          <div
                            className='bg-[#262837] px-4 py-6 rounded-xl'
                            key={car.id}
                          >
                            <div className='grid grid-cols-6'>
                              <div className='col-span-5 flex items-center gap-5'>
                                <img
                                  alt=''
                                  src={`${Global.urlImages}/itemsportafolios/${car.imagen1}`}
                                  className='w-14 h-14 object-cover'
                                />
                                <div>
                                  <h5 className='text-[1.5rem] line-clamp-2 overflow-hidden m-0'>
                                    {car.titulo}
                                  </h5>
                                  <p className='text-lg text-gray-500 m-0'>
                                    {capitalizeFirstLetter(car.categoria)}
                                  </p>
                                </div>
                              </div>
                              <div className='flex justify-center items-center gap-3'>
                                <Visualizar producto={car} />
                                {/* <Comprar producto={car} contador={1}/> */}
                              </div>
                            </div>
                          </div>
                        ))
                      )
                    : (
                      <div className='w-full h-full flex items-center justify-center'>
                        <p className='w-full text-center text-3xl'>Aun no tienes productos favoritos. <br /> Comienza a llenarlo.</p>
                      </div>
                      )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </CSSTransition>
    </>
  )
}
