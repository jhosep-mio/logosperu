import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-expect-error: Type 'any' has no properties in common with type 'Autoplay'
import { Autoplay } from 'swiper'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  type ValuesSubCategoriasPortafolio,
  type ValuesCategoriasPortafolio,
  type ValuesItemsPortafolio,
  type arrayCategoriasToPortafolio
} from '../../../shared/Interfaces'
import { getCategoriasToPortafolioWhereUrl } from '../../../shared/FechData'
import { Global } from '../../../../helper/Global'
import { Paginacion } from '../../../shared/Paginacion'
import RViewerJS from 'viewerjs-react'
import 'viewerjs-react/dist/index.css'
import { ModalVideo } from '../../../shared/modal/ModalVideo'
import { AddProducto } from '../../../shared/carrito/AddProducto'
import { AddHeard } from '../../../shared/favoritos/AddHeard'

export const PortafolioViews = (): JSX.Element => {
  const { texto } = useParams()
  const [productos, setProductos] = useState<ValuesCategoriasPortafolio>({
    id: 0,
    array: '',
    titulo: '',
    url: ''
  })
  const [subcategorias, setSubcategorias] = useState<
  ValuesSubCategoriasPortafolio[]
  >([])
  const [items, setItems] = useState<ValuesItemsPortafolio[]>([])
  const [loading, setLoading] = useState(true)
  const [, setTotalRegistros] = useState(0)
  const [paginaActual, setpaginaActual] = useState<number>(1)
  const [cantidadRegistros] = useState(15)
  const indexOfLastPost = paginaActual * cantidadRegistros
  const indexOfFirstPost = indexOfLastPost - cantidadRegistros
  const totalPosts = items.length
  const [open, setOpen] = useState(false)
  const [video, setVideo] = useState('')
  useEffect(() => {
    window.scrollTo(0, 0)
    Promise.all([
      getCategoriasToPortafolioWhereUrl(
        `getUrlToPortafolio/${texto ?? ''}`,
        'getSubCategoriasToPortafolioWhereUrl',
        'getItemsToPortafolioWhereCategorias',
        setProductos,
        setSubcategorias,
        setItems,
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

  const filterDate = (
    entrada: ValuesItemsPortafolio[]
  ): ValuesItemsPortafolio[] => {
    return entrada.slice(indexOfFirstPost, indexOfLastPost)
  }

  return (
    <>
      <section className="section_portafolio pt-60 md:pt-72">
        <div className="titulo_portafolio">
          {loading && (
            <div className="container_loading2">
              <div className="cargando">
                <div className="pelotas"></div>
                <div className="pelotas"></div>
                <div className="pelotas"></div>
              </div>
            </div>
          )}
          <h1>{productos.titulo}</h1>
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
                  <b>servicios de alta calidad</b> como{' '}
                  <b>
                    diseño de logotipos, diseño de páginas web, diseño gráfico,
                    hosting web, audiovisual
                  </b>
                  que suman valor y generan la <b>construcción de una marca</b>.
                </p>
              </div>
              <div className="boton_portafolio mt-0">
                <Link to="/portafolio">Volver al Portafolio</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {!loading && (
        <>
          <section className="max-w-[1200px] mx-auto mb-24">
            <div className="mb-16">
              <ul className="w-full flex flex-wrap items-center justify-center text-3xl py-5">
                {subcategorias.map((sub) => (
                  <Link
                    to={`/portafolio-plan/${sub.url}`}
                    className="decoration-none w-[40%] md:w-1/6 text-2xl  mx-5 text-center my-3 md:my-7 py-3 font-semibold cursor-pointer hover:text-[#D23741] transition-colors px-2 border-b-2 hover:border-[#D23741]"
                    key={sub.id}
                  >
                    {sub.titulo}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="w-full flex flex-wrap gap-10 justify-center px-5 md:px-0">
              {filterDate(items).map((item) => (
                <div
                  className=" box_portafolio_new rounded-lg group relative marg_b_0 h-[270px] w-full max-w-[300px] md:h-[320px] md:max-w-full md:w-[320px] lg:w-[280px] hover:translate-y-[-10px] transition-transform overflow-hidden"
                  key={item.id}
                >
                  <div className="p-0 rounded-t-lg h-[70%] md:h-[82%] relative ">
                    <Swiper
                      slidesPerView={1}
                      modules={[Autoplay]}
                      loop={true}
                      autoplay={{
                        delay: 2000111111,
                        disableOnInteraction: false
                      }}
                      className="h-full"
                    >
                      {JSON.parse(item.array).map(
                        (pro: arrayCategoriasToPortafolio) => (
                          <SwiperSlide
                            className="w-full h-full overflow-hidden"
                            key={pro.id}
                          >
                            <>
                              {item.tipo === 'imagen'
                                // @ts-expect-error: Type 'any' has no properties in common with type 'Autoplay'
                                ? <RViewerJS className="w-full h-full">
                                  {isVideo(pro.imagen1.archivoName)
                                    ? (
                                    <video
                                      src={`${Global.urlImages}/itemsportafolios/${pro.imagen1.archivoName}`}
                                      muted
                                      autoPlay
                                      loop
                                      className="rounded-lg object-cover w-full h-full rounded-b-none group-hover:scale-12  transition-transform overflow-hidden "
                                    />
                                      )
                                    : (
                                    <img
                                      src={`${Global.urlImages}/itemsportafolios/${pro.imagen1.archivoName}`}
                                      className="rounded-lg object-cover w-full h-full rounded-b-none group-hover:scale-125 transition-transform overflow-hidden cursor-pointer"
                                    />
                                      )}
                                </RViewerJS>
                                : item.tipo === 'redireccion'
                                  ? (
                                <a
                                  href={pro.url}
                                  target="_blank"
                                  className="w-full h-full"
                                  rel="noreferrer"
                                >
                                  {isVideo(pro.imagen1.archivoName)
                                    ? (
                                    <video
                                      src={`${Global.urlImages}/itemsportafolios/${pro.imagen1.archivoName}`}
                                      muted
                                      autoPlay
                                      loop
                                      className="rounded-lg object-cover w-full h-full rounded-b-none group-hover:scale-12  transition-transform overflow-hidden "
                                    />
                                      )
                                    : (
                                    <img
                                      src={`${Global.urlImages}/itemsportafolios/${pro.imagen1.archivoName}`}
                                      className="rounded-lg object-cover w-full h-full rounded-b-none group-hover:scale-125 transition-transform overflow-hidden cursor-pointer"
                                    />
                                      )}
                                </a>
                                    )
                                  : (
                                      item.tipo === 'youtube' && (
                                  <button
                                    className="w-full h-full"
                                    rel="noreferrer"
                                    onClick={() => {
                                      setVideo(item.url)
                                      setOpen(true)
                                    }}
                                  >
                                    {isVideo(pro.imagen1.archivoName)
                                      ? (
                                      <video
                                        src={`${Global.urlImages}/itemsportafolios/${pro.imagen1.archivoName}`}
                                        muted
                                        autoPlay
                                        loop
                                        className="rounded-lg object-cover w-full h-full rounded-b-none group-hover:scale-12  transition-transform overflow-hidden "
                                      />
                                        )
                                      : (
                                      <img
                                        src={`${Global.urlImages}/itemsportafolios/${pro.imagen1.archivoName}`}
                                        className="rounded-lg object-cover w-full h-full rounded-b-none group-hover:scale-125 transition-transform overflow-hidden cursor-pointer"
                                      />
                                        )}
                                  </button>
                                      )
                                    )}
                            </>
                          </SwiperSlide>
                        )
                      )}
                    </Swiper>
                  </div>
                  <div className="w-full h-[20%] absolute bottom-0 z-50 asignar_before">
                    <p className=" asignar_before flex items-center justify-center px-3 gap-3 relative z-10 w-full h-full">
                      <div className="w-2/3 mt-3">
                        <p className="w-full text-[#252525] font-semibold p-4 text-2xl text-left rounded-b-lg flex items-start justify-center flex-col">
                          {item.titulo}
                        </p>
                      </div>
                      <div className="w-1/3 flex gap-3 mt-3">
                        <AddHeard producto={item} contador={1} />
                        <AddProducto producto={item} contador={1} />
                      </div>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="w-full flex items-center justify-center contenedor_paginacion mb-12 md:mb-0">
            <Paginacion
              totalPosts={totalPosts}
              cantidadRegistros={cantidadRegistros}
              paginaActual={paginaActual}
              setpaginaActual={setpaginaActual}
            />
          </section>
          <ModalVideo
            video={video}
            open={open}
            setVideo={setVideo}
            setOpen={setOpen}
          />
        </>
      )}
    </>
  )
}
