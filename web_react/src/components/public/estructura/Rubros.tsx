import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// @ts-expect-error: Type 'any' has no properties in common with type 'Autoplay'
import { Autoplay, Navigation } from 'swiper'
import useAuth from '../../../hooks/useAuth'
import { useEffect, useState } from 'react'
import { getItems } from '../../shared/FechData'
import { type ValuesItemsPortafolio } from '../../shared/Interfaces'
import { Global } from '../../../helper/Global'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'swiper/css/navigation'
import 'react-lazy-load-image-component/src/effects/blur.css'

export const Rubros = (): JSX.Element => {
  const { subcategorias, loadinggeneral } = useAuth()
  const [items, setItems] = useState<ValuesItemsPortafolio[]>([])
  const [id, setId] = useState(0)
  const [, setloading] = useState(true)
  useEffect(() => {
    Promise.all([
      getItems('getItemsToPortafolioWhereCategorias/1', setItems)
    ]).then(() => {
      setloading(false)
    })
  }, [])

  return (
    <section className="clientes_footer pt-5 lg:pt-24 md:pb-[100px] lg:pb-[190px]">
      <div className="container4 px-10">
        {!loadinggeneral
          ? <>
            <div className="">
              <Swiper
                className="mySwiper mySwiper2 siper_services max-w-[1350px] mx-auto"
                loop={true}
                spaceBetween={20}
                speed={2000}
                autoplay={{
                  delay: 2,
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
                      id === 0 ? 'control-active' : ''
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
                          id === sub.id ? 'control-active' : ''
                        } transition-colors`}
                      >
                        <h3>{sub.titulo}</h3>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="col-lg-12 cotenedor99 p-0 md:px-24 relative">
                <Swiper
                  className="mySwiper destacados siper_services  mt-14"
                  loop={true}
                  navigation={true}
                  spaceBetween={20}
                  centeredSlides={
                    items.filter((sub) =>
                      id === 0 ? sub.id !== 0 : sub.id_subcategoria === id
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
                      id === 0 ? sub.id !== 0 : sub.id_subcategoria === id
                    )
                    .map((item) => (
                      <SwiperSlide key={item.id} className="h-[240px]">
                        <div className="item h-full w-full">
                          <div className="content anim h-full w-full overflow-hidden content_viewe_img">
                            <LazyLoadImage
                              effect="blur"
                              src={`${Global.urlImages}/itemsportafolios/${
                                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                JSON.parse(item.array)[0].imagen1.archivoName
                              }`}
                              alt={item.titulo}
                              title={item.titulo}
                              className="w-full h-full object-contain cursor-pointer"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </>
          : (
              ''
            )}
      </div>
    </section>
  )
}
