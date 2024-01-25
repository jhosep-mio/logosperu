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

export const HeardModal = ({ open }: SimpleDialogProps) => {
  const { heard } = useAuth()

  return (
    <>
      <CSSTransition in={open} timeout={300} classNames='heard' unmountOnExit>
        <section className='absolute w-[400px] h-[400px] top-full right-[80px] overflow-hidden rounded-b-3xl'>
          <div
            className='bg-[#1F1D2B] w-full lg:right-0 h-full transition-all z-50 '
          >
            {/* Orders */}
            <div className='relative pt-16 lg:pt-8 text-gray-300 p-8 h-full'>
              <IoCloseCircle className='lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl' />
              <h1 className='text-4xl my-4 gap-3 w-full text-center flex justify-center items-center'>
                Mis favoritos <IoHeartSharp className='text-primary' />
              </h1>
              <div className='mt-12'>
                <div className='h-[400px] md:h-[700px] lg:h-[290px] overflow-y-scroll'>
                  {/* Product */}

                  {heard.length > 0
                    ? (
                        heard.map((car) => (
                          <div
                            className='bg-[#262837] p-4 rounded-xl mb-4'
                            key={car.id}
                          >
                            <div className='grid grid-cols-6'>
                              <div className='col-span-5 flex items-center gap-5'>
                                <img
                                  alt=''
                                  src={`${Global.urlImages}/itemsportafolios/${car.imagen1}`}
                                  className='w-10 h-10 object-cover'
                                />
                                <div>
                                  <h5 className='text-2xl line-clamp-2 overflow-hidden'>
                                    {car.titulo}
                                  </h5>
                                  <p className='text-lg text-gray-500'>
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
