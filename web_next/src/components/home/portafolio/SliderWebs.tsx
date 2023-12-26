'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Global } from '@/components/shared/Helper/global'
import { ValuesItemsPortafolio } from '@/components/shared/interfaces/interfaces'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'

export default function SliderWebs ({ logos }: {logos: ValuesItemsPortafolio[]}) {
  return (
    <>
      <Swiper
        className='mySwiper portafolio siper_services px-0 lg:px-5 max-h-[242px]'
        loop
        speed={2000}
        autoplay={{
          delay: 1,
          reverseDirection: true
        }}
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
            slidesPerView: 6
          }
        }}
        modules={[Autoplay]}
      >
        {logos.slice(0, 12).map((logo) => (
          <SwiperSlide key={logo.id}>
            <div className='item'>
              <div className='porta_item'>
                <img
                  src={`${Global.urlImages}/itemsportafolios/${
                  JSON.parse(logo.array)[0].imagen1.archivoName
                }`}
                  alt={`${logo.titulo} | Logos Perú`}
                />
                <div className='caption_portafolio'>
                  <div>
                    <div className='caption_foot'>
                      <a
                        href={`${logo.url}`}
                        aria-label='Visita nuestro Brochure'
                        data-hover='la web'
                        className='btn-visitar'
                      >
                        <span className='text'>Visita</span>
                        <span className='icons fa fa-long-arrow-right' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
