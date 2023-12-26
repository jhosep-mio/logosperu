'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { ValuesItemsPortafolio } from '@/components/shared/interfaces/interfaces'
import { Global } from '@/components/shared/Helper/global'
import Link from 'next/link'

export const SwiperWebs = ({ logos }: {logos: ValuesItemsPortafolio[]}) => {
  return (
    <Swiper
      className='mySwiper portafolio siper_services px-0 lg:px-5 '
      loop
      speed={3000}
      spaceBetween={50}
      breakpoints={{
        0: {
          slidesPerView: 1
        },
        350: {
          slidesPerView: 2
        },
        576: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 4
        },
        992: {
          slidesPerView: 5
        },
        1200: {
          slidesPerView: 5
        }
      }}
      modules={[Autoplay]}
    >
      {logos.map((logo) => (
        <SwiperSlide key={logo.id}>
          <div className='item'>
            <div className='porta_item'>
              <img
                src={`${Global.urlImages}/itemsportafolios/${
                      JSON.parse(logo.array)[0].imagen1.archivoName
                    }`}
                className='w-full h-full min-h-[333px] object-cover'
                alt={`${logo.titulo} | Logos Perú`}
              />
              <div className='caption_portafolio'>
                <div>
                  <div className='caption_foot'>
                    <Link
                      target='_blank'
                      href='/portafolio/audiovisual/fotografia_corporativa'
                      aria-label='Visita nuestro Brochure'
                      data-hover='El portafolio'
                      className='btn-visitar'
                    >
                      <span className='text'>Visita</span>
                      <span className='icons fa fa-long-arrow-right' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
