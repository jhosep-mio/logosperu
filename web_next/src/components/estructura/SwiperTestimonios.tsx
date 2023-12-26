'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

export const SwiperTestimonios = () => {
  return (
    <div className='main-testimonios'>
      <Swiper
        slidesPerView={2}
        className='mySwiper swp-testimonios siper_services'
        modules={[Autoplay]}
        loop
        spaceBetween={20}
        speed={5000}
        autoplay={{
          delay: 1
        }}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          }
        }}
      >
        <SwiperSlide className='h-fit md:h-[470px] lg:h-[333px]'>
          <div className='card_testimonio h-full'>
            <div className='w-full lg:w-[70%] flex justify-center gap-4 flex-col'>
              <div className='card_head_testimonio'>
                <h6>ANGEL ZAMBRANO – GERENTE GENERAL</h6>
              </div>
              <div className='card_body_testimonio'>
                <p className='text-justify'>
                  Mi experiencia en los servicios de LogosPerú fue muy buena.
                  Debo destacar la rapidez, iniciativa y compromiso y
                  puntualidad en la entrega del trabajo
                </p>
                <p>GRUPO KYRZA</p>
              </div>
            </div>
            <div className='w-full lg:w-[30%] mt-10 lg:mt-0 img_testimonio'>
              <div className='card_img_testimonio'>
                <div className='container-img'>
                  <img
                    src='https://www.logosperu.com/public/img/testimonios/logo_kyrza.png'
                    alt=''
                    width='100%'
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='h-fit md:h-[470px] lg:h-[333px]'>
          <div className='card_testimonio h-full'>
            <div className='w-full lg:w-[70%] flex justify-center gap-4 flex-col'>
              <div className='card_head_testimonio'>
                <h6>RICHARD QUIÑONEZ - GERENTE GENERAL</h6>
              </div>
              <div className='card_body_testimonio'>
                <p className='text-justify'>
                  Señores de LogosPerú me encuentro muy satisfecho por el
                  trabajo realizado, el cual demuestra su gran profesionalismo
                  de cada uno de sus colaboradores, es la primera vez que
                  adquiero este servicio y créame que los recomendaré, estoy muy
                  agradecido por su buen trabajo en mi proyecto{' '}
                </p>
                <p>TQ PANDA SAC</p>
              </div>
            </div>
            <div className='w-full lg:w-[30%] mt-10 lg:mt-0 img_testimonio'>
              <div className='card_img_testimonio'>
                <div className='container-img'>
                  <img
                    src='https://www.logosperu.com/public/img/testimonios/logo_kyrza.png'
                    alt=''
                    width='100%'
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='h-[333px]'>
          <div className='card_testimonio h-full'>
            <div className='w-[70%] flex justify-center gap-4 flex-col'>
              <div className='card_head_testimonio'>
                <h6>CESAR SÁNCHEZ - GERENTE GENERAL</h6>
              </div>
              <div className='card_body_testimonio'>
                <p className='text-justify'>
                  Mi experiencia ha sido satisfactoria, la atención de la
                  persona que estuvo a cargo del proyecto fue excelente ya que
                  tuvo una gran empatía y supo manejar lo que queríamos
                  comunicar{' '}
                </p>
                <p>PISCO VICTORIA DE LOS SÁNCHEZ</p>
              </div>
            </div>
            <div className='w-[30%] img_testimonio'>
              <div className='card_img_testimonio'>
                <div className='container-img' />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
