'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export const SliderEquipo = () => {
  return (
    <div className='col-lg-12'>
      <Swiper
        slidesPerView={2}
        className='mySwiper agenciateam siper_services'
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          }
        }}
      >
        <SwiperSlide>
          <div className='item'>
            <div className='content_equipo'>
              <div className='estruct_left' />
              <div className='equipo_img' />
              <div className='descripcion_equipo'>
                <h3>Diego Diaz</h3>
                <h5>Ing. Sistemas</h5>
                <p>
                  Superviso los proyectos innovadores y colaboro de
                  manera creativa con los profesionales de nuestras
                  diversas áreas, buscando siempre estrategias para
                  obtener un satisfactorio proceso.
                </p>
                <span>Diego</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item'>
            <div className='content_equipo'>
              <div className='estruct_left' />
              <div className='equipo_img' />
              <div className='descripcion_equipo'>
                <h3>Sebastian Salas</h3>
                <h5>Maquetador Web</h5>
                <p>
                  Me encargo de interactúar directamente con el cliente,
                  construyendo y maquetando elementos que componen el
                  diseño de una Página Web de tal manera que puedan ser
                  interpretados por un navegador para la visualización
                  del proyecto.
                </p>
                <span>Sebastian</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item'>
            <div className='content_equipo'>
              <div className='estruct_left' />
              <div className='equipo_img' />
              <div className='descripcion_equipo'>
                <h3>Deysi Huerta</h3>
                <h5>Diseñadora Gráfica</h5>
                <p>
                  Mi razón primordial es proyectar comunicaciones
                  visuales destinadas a transmitir mensajes específicos
                  a grupos sociales, con objetivos determinados. Esta
                  actividad ayuda a optimizar las comunicaciones
                  gráficas a través del diseño.
                </p>
                <span>Deysi</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item'>
            <div className='content_equipo'>
              <div className='estruct_left' />
              <div className='equipo_img' />
              <div className='descripcion_equipo'>
                <h3>Victoria Pariona</h3>
                <h5>Audiovisual</h5>
                <p>
                  La producción audiovisual es el arte de crear un
                  producto para diferentes medios, integración e
                  interrelación plena entre lo auditivo y lo visual para
                  producir una nueva realidad o lenguaje.
                </p>
                <span>Victoria</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item'>
            <div className='content_equipo'>
              <div className='estruct_left' />
              <div className='equipo_img' />
              <div className='descripcion_equipo'>
                <h3>Maryori Urquizo</h3>
                <h5>Marketing</h5>
                <p>
                  Analizo el mercado en las actuales plataformas de
                  comunicación, aplicando estrategias de inbound
                  marketing para que el público objetivo conecte con su
                  marca y de esta manera conseguir posicionamiento en el
                  mundo digital.
                </p>
                <span>Maryori</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
