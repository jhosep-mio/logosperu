'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export const SwiperFotograficas = () => {
  return (
    <div className='row'>
      <div className='col-lg-12'>
        <div className='titulo_opcion'>
          <h2>SESIÓN FOTOGRÁFICA & RETOQUE FOTOGRÁFICO</h2>
        </div>
      </div>
      <div className='col-lg-12'>
        <div className='descrip'>
          <hr className='hr_first' />
          <hr className='hr_second' />
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='fotografia_carrusel'>
          <div className='fotogras relative'>
            <Swiper
              className='mySwiper fotografias1 siper_services'
              loop
              modules={[Navigation]}
              navigation
            >
              <SwiperSlide className='w-full h-full'>
                <div className='item'>
                  <div>
                    <img src='/audiovisual/fotografia1.jpg' alt='' className='w-full h-full' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='item'>
                  <div>
                    <img src='/audiovisual/fotografia2.jpg' alt='' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='item'>
                  <div>
                    <img src='/audiovisual/fotografia3.jpg' alt='' />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='fotografia_carrusel'>
          <div className='fotogras relative'>
            <Swiper
              className='mySwiper fotografias1 siper_services'
              loop
              modules={[Navigation]}
              navigation
            >
              <SwiperSlide className='w-full h-full'>
                <div className='item'>
                  <div>
                    <img src='/audiovisual/fotografia4.jpg' alt='' className='w-full h-full' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='item'>
                  <div>
                    <img src='/audiovisual/fotografia5.jpg' alt='' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='item'>
                  <div>
                    <img src='/audiovisual/fotografia6.jpg' alt='' />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
