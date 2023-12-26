import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-expect-error: Type 'any' has no properties in common with type 'Autoplay'
import { Autoplay } from 'swiper'
import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import {
  type arrayCategoriasToPortafolio,
  type ValuesCategoriasPortafolio
} from '../../../shared/Interfaces'
import { getDataCategoriasToPortafolio } from '../../../shared/FechData'
import { Global } from '../../../../helper/Global'
import Loading from '../../../shared/Loading'

export const Portafolio = (): JSX.Element => {
  const [categorias, setCategorias] = useState<ValuesCategoriasPortafolio[]>(
    []
  )
  const [loading, setLoading] = useState(true)
  const [, setTotalRegistros] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    Promise.all([
      getDataCategoriasToPortafolio(
        'getCategoriasToPortafolio',
        setCategorias,
        setTotalRegistros
      )
    ]).then(() => {
      setLoading(false)
    })
  }, [])

  const isVideo = (fileName: string): boolean => {
    const videoExtensions = ['.mp4', '.avi', '.mov'] // Agregar más extensiones de video si es necesario
    const fileExtension = fileName
      .substr(fileName.lastIndexOf('.'))
      .toLowerCase()
    return videoExtensions.includes(fileExtension)
  }

  const [visible, setVisible] = useState(false)
  return (
    <>
      <section className="section_portafolio pt-56 md:pt-72">
        <div className="titulo_portafolio">
          <h1>PORTAFOLIO</h1>
          <hr className="hr_first" />
          <hr className="hr_second" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="descrip_portafolio">
                <p>
                  Proporcionamos <b>soluciones digitales</b> que impulsan al
                  empresario en su incursión al mundo del internet, creando
                  <b>servicios de alta calidad</b> como
                  <b>
                    diseño de logotipos, diseño de páginas web, diseño gráfico,
                    hosting web, audiovisual
                  </b>
                  que suman valor y generan la <b>construcción de una marca</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto mb-24 pt-10 md:pt-0">
        {loading && (
          <Loading/>
        )}
        <div className="w-full flex flex-wrap justify-center lg:grid-cols-4 gap-5 md:gap-10 px-5 md:px-0 ">
          {categorias.map((categoria: ValuesCategoriasPortafolio) => (
            <div
              className="box_portafolio_new rounded-lg group relative marg_b_0 h-[250px] md:h-[340px] w-[168px] md:w-[280px] hover:translate-y-[-10px] transition-transform"
              key={categoria.id}
            >
              <div className="p-0 rounded-t-lg h-[70%] md:h-[80%] w-full">
                <Swiper
                  slidesPerView={1}
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                  }}
                  className='h-full w-full'
                >
                  {JSON.parse(categoria.array).map(
                    (pro: arrayCategoriasToPortafolio) => (
                      <SwiperSlide
                        className="w-full h-full overflow-hidden"
                        key={pro.id}
                      >
                        {isVideo(pro.imagen1.archivoName)
                          ? (
                          <video
                            src={`${Global.urlImages}/categoriasportafolio/${pro.imagen1.archivoName}`}
                            muted
                            autoPlay
                            loop
                            className="rounded-lg w-full h-full object-cover rounded-b-none group-hover:scale-125 group-hover:blur-[2px] transition-transform overflow-hidden"
                          />
                            )
                          : (
                          <img
                            src={`${Global.urlImages}/categoriasportafolio/${pro.imagen1.archivoName}`}
                            alt=""
                            className="rounded-lg w-full h-full object-cover rounded-b-none group-hover:scale-125 group-hover:blur-[2px] transition-transform overflow-hidden"
                          />
                            )}
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
              <p className="w-full px-5 md:px-10 bg-white text-[#252525] font-semibold text-xl md:text-2xl text-center rounded-b-lg h-[30%] md:h-[20%] flex items-center justify-center flex-col">
                PORTAFOLIO DE {categoria.titulo}
              </p>
              <div className="opacity-0 group-hover:opacity-100 group-hover:bg-[#00000075] transition-opacity inset-0 absolute -z-10 group-hover:z-10 flex items-center justify-center rounded-lg ">
                <Link
                  to={categoria.url}
                  className="w-full bg-transparent mx-10 rounded-lg  py-4 px-3 transition-all  border-2 border-white  flex justify-center box_child_content2 h-[45px] relative overflow-hidden cursor-pointer"
                  onMouseEnter={() => {
                    setVisible(true)
                  }}
                  onMouseLeave={() => {
                    setVisible(false)
                  }}
                >
                  <div className="flex gap-3 items-center w-full transition-all">
                    <CSSTransition
                      in={visible}
                      timeout={800}
                      classNames="alert2"
                      unmountOnExit
                    >
                      <span
                        className={`text-white text-3xl ${
                          !visible ? 'hidden' : ''
                        }`}
                      >
                        Los proyectos
                      </span>
                    </CSSTransition>
                    <CSSTransition
                      in={!visible}
                      timeout={500}
                      classNames="alert2"
                      unmountOnExit
                    >
                      <>
                        <IoArrowForwardCircleOutline className="text-white text-5xl" />
                        <p className="text-white text-3xl">Vistar</p>
                      </>
                    </CSSTransition>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
