'use client'
import { useState } from 'react'
import {
  ValuesItemsPortafolio,
  ValuesSubCategoriasPortafolio
} from '../shared/interfaces/interfaces'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Global } from '../shared/Helper/global'
export const Rubros = ({
  subcategorias,
  items
}: {
  subcategorias: ValuesSubCategoriasPortafolio[];
  items: ValuesItemsPortafolio[];
}) => {
  const [id, setId] = useState(0)

  return (
    <div className=''>
      <Swiper
        className='mySwiper mySwiper2 siper_services max-w-[1350px] mx-auto'
        loop
        spaceBetween={20}
        speed={2000}
        autoplay={{
          delay: 1000,
          reverseDirection: true
        }}
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          576: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 4
          },
          1200: {
            slidesPerView: 5
          }
        }}
      >
        <SwiperSlide>
          <div
            className={`swiper-slide  oscuro ${
              id == 0 ? 'control-active' : ''
            } transition-colors`}
            onClick={() => {
              setId(0)
            }}
          >
            <h3>TODOS</h3>
          </div>
        </SwiperSlide>
        {subcategorias
          .filter((sub) => sub.id_categoria == 1)
          .map((sub) => (
            <SwiperSlide
              key={sub.id}
              onClick={() => {
                setId(sub.id)
              }}
            >
              <div
                className={`swiper-slide  oscuro ${
                  id == sub.id ? 'control-active' : ''
                } transition-colors`}
              >
                <h3>{sub.titulo}</h3>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className='col-lg-12 cotenedor99 p-0 md:px-24 relative'>
        <Swiper
          className='mySwiper destacados siper_services mt-14 max-h-[242px]'
          loop
          navigation
          spaceBetween={20}
          centeredSlides={
            items.filter((sub) =>
              id == 0 ? sub.id !== 0 : sub.id_subcategoria == id
            ).length > 10
          }
          modules={[Navigation]}
          breakpoints={{
            0: {
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
        >
          {items
            .filter((sub) =>
              id == 0 ? sub.id !== 0 : sub.id_subcategoria == id
            )
            .slice(0, 12)
            .map((item) => (
              <SwiperSlide key={item.id} className='h-[240px]'>
                <div className='item h-full w-full'>
                  <div className='content anim h-full w-full overflow-hidden content_viewe_img'>
                    <img
                      src={`${Global.urlImages}/itemsportafolios/${
                        JSON.parse(item.array)[0].imagen1.archivoName
                      }`}
                      alt={item.titulo}
                      title={item.titulo}
                      className='w-full h-full object-contain cursor-pointer'
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}
