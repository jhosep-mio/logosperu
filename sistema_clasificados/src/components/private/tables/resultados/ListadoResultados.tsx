import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import axios from 'axios'
import { Global } from '../../../../helper/Global'
import { Loading } from '../../../shared/Loading'
import { Paginacion } from '../../../shared/Paginacion'
import {
  type clasificadosValues
} from '../../../shared/Interfaces'
import { Link, useNavigate } from 'react-router-dom'
import { BsCheckCircle } from 'react-icons/bs'
import { TbDirectionSignFilled } from 'react-icons/tb'
import Header from '../../includes/Header'
import { Cards } from './cards/Cards'
import { Plataformas } from './cards/Plataformas'
import { Areas } from './cards/Areas'
import { quitarAcentos } from '../../../shared/QuitarAcerntos'
import Tour from 'reactour'

export const ListadoResultados = (): JSX.Element => {
  const { token, auth, guia, setGuia } = useAuth()
  const [productos, setProductos] = useState<clasificadosValues[]>([])
  const { loadingComponents, setLoadingComponents } = useAuth()
  const [totalRegistros, setTotalRegistros] = useState(0)
  const [paginaActual, setpaginaActual] = useState(1)
  const [cantidadRegistros] = useState(4)
  const [search, setSearch] = useState('')

  const getAllProductos = async (): Promise<void> => {
    setLoadingComponents(true)
    const request = await axios.get(
      `${Global.url}/oneWebCorreo/${auth.email}`,
      {
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? token : ''
          }`
        }
      }
    )
    setProductos(request.data)
    setTotalRegistros(request.data.length)
    setLoadingComponents(false)
  }
  const indexOfLastPost = paginaActual * cantidadRegistros
  const indexOfFirstPost = indexOfLastPost - cantidadRegistros
  let totalPosts = productos.length
  const navigate = useNavigate()

  const filterDate = (): clasificadosValues[] => {
    if (search.length === 0) {
      const producto = productos.slice(indexOfFirstPost, indexOfLastPost)
      return producto
    }
    const searchTerm = quitarAcentos(search.toLowerCase())

    const filter = productos.filter((pro) => {
      return String(pro.id).includes(searchTerm)
    })

    totalPosts = filter.length
    return filter.slice(indexOfFirstPost, indexOfLastPost)
  }

  useEffect(() => {
    getAllProductos()
    setGuia(false)
  }, [])

  useEffect(() => {
    setTotalRegistros(totalPosts)
  }, [search, productos])

  const steps = [
    {
      selector: '.first-step',
      content: 'Primero nos dirigimos al detalle del servicio'
    },
    {
      selector: '.first-step2',
      content: 'Primero nos dirigimos al detalle del servicio'
    }
  ]

  const handleClose = (): void => {
    setGuia(false)
  }

  return (
    <>
      {loadingComponents
        ? <Loading />
        : (
        <>
          <Header
            search={search}
            setSearch={setSearch}
            setpaginaActual={setpaginaActual}
          />
          <div className="flex flex-col justify-between h-[90vh] md:h-[87.5vh]">
            <div className="bg-form p-4 md:py-6 md:px-10 rounded-none lg:rounded-xl mt-0 lg:mt-4">
              <div className="hidden lg:flex flex-col gap-3 mb-6 ">
                <h2 className="text-3xl font-bold">Paginas webs</h2>
                <h3 className="font-bold text-base">
                  {totalRegistros}{' '}
                  <span className="text-gray-400 text-base">
                    pagina(s) webs
                  </span>
                </h3>
              </div>
              <div className="hidden md:grid grid-cols-1 md:grid-cols-6 gap-4 mb-2 md:px-4 md:py-2 text-gray-400 border-y border-gray-300">
                <h5 className="md:text-left">Nombre de la web</h5>
                <h5 className="md:text-center">Logo</h5>
                <h5 className="md:text-left">Correo</h5>
                <h5 className="md:text-left">Celular</h5>
                <h5 className="md:text-left">Estado</h5>
                <h5 className="md:text-left">Fecha de creación</h5>
              </div>
              {filterDate().map((pro: clasificadosValues, index: number) => (
                <div
                  className="grid grid-cols-1 md:grid-cols-6 gap-3 items-center mb-3 md:mb-0 bg-transparent p-4 rounded-xl relative shadow_class"
                  key={pro.id}
                >
                  {/* MOVIL */}
                  {/* <Link
                      to={`view-servicio/${pro.id}`}
                      className="flex flex-col gap-3 md:hidden"
                    >
                      <div className="flex md:hidden gap-4">
                        <span className="flex items-center justify-center bg-[#b3dba1] w-8 h-8 rounded-full">
                          T
                        </span>
                        <span className="flex md:justify-left items-center gap-3 font-bold">
                          {pro.id_contrato}
                        </span>
                      </div>
                      <div className="md:hidden flex justify-between gap-3">
                        <div className="text-left w-full">
                          <h5 className="md:hidden text-black font-bold mb-0 text-sm">
                            A cargo
                          </h5>
                          <span className="text-left block">

                          </span>
                        </div>
                        <div className="text-right w-full">
                          <h5 className="md:hidden text-black font-bold mb-0 text-sm bg">
                            Empresa/Negocio
                          </h5>
                          <span className="text-right line-clamp-1">
                            {pro.nombre_empresa}
                          </span>
                        </div>
                      </div>
                      <div className="md:hidden flex justify-between gap-3">
                        <div className="md:text-center ">
                          <h5 className="md:hidden text-[#62be6d] font-bold mb-0 text-sm ">
                            Fecha de Inicio
                          </h5>
                          <span className="text-left block text-[#62be6d]">
                            {pro.fecha_inicio}
                          </span>
                        </div>
                        <div className="md:text-right ">
                          <h5 className="md:hidden text-red-500 text-right font-bold mb-0 text-sm">
                            Fecha de cierre
                          </h5>
                          <span className="text-right block text-red-500">
                            {pro.fecha_fin}
                          </span>
                        </div>
                      </div>
                    </Link> */}
                  {/* PC */}
                  <div className="hidden md:block md:text-left ">
                    <span className="flex md:justify-left items-center gap-3 ">
                      {JSON.parse(pro.pagina_web).configuracion.nombre}
                    </span>
                  </div>
                  <div className="hidden md:block md:text-center ">
                    {JSON.parse(pro.pagina_web).configuracion?.logo && (
                      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                      <img
                        src={`${Global.urlImages}/clasificados/${
                          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                          JSON.parse(pro.pagina_web).configuracion?.logo
                        }`}
                        className="w-[100px] h-[50px] object-contain mx-auto"
                        alt=""
                      />
                    )}
                  </div>
                  <div className="hidden md:block md:text-center">
                    <span className="flex md:justify-left items-center gap-3 ">
                      {pro.correo}
                    </span>
                  </div>
                  <div className="hidden md:block md:text-center">
                    <span className="text-left block">
                      {JSON.parse(pro.pagina_web).configuracion.celular}
                    </span>
                  </div>
                  <div className="hidden md:block md:text-center">
                    <span className="text-left flex gap-2 bg-[#EDF9E7] text-[#1A5515] font-bold items-center w-fit px-2">
                      <BsCheckCircle />
                      Activo
                    </span>
                  </div>
                  <div className="hidden md:block md:text-center">
                    <h5 className="md:hidden text-white font-bold mb-2">
                      Fecha Fin
                    </h5>
                    <span className="text-left block">
                      {new Date(pro.created_at).toLocaleDateString(
                        undefined,
                        {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        }
                      )}{' '}
                      {new Date(pro.created_at).toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="hidden md:flex md:justify-center items-center absolute right-10 top-0 bottom-0">
                    {index == 0
                      ? (
                      <>
                        <Tour
                          steps={steps}
                          isOpen={guia}
                          onRequestClose={handleClose}
                          getCurrentStep={(curr: number) => {
                            if (curr == 1) {
                              navigate('view-web')
                            }
                          }}
                        />
                        <Link
                          to={'view-web'}
                          className="rounded-lg transition-colors text-gray-300  flex items-center justify-center gap-x-4 p-2 flex-1 first-step"
                        >
                          <TbDirectionSignFilled className="text-[#202020] text-2xl" />
                        </Link>
                      </>
                        )
                      : (
                      <Link
                        to={'view-web'}
                        className="rounded-lg transition-colors text-gray-300  flex items-center justify-center gap-x-4 p-2 flex-1"
                      >
                        <TbDirectionSignFilled className="text-[#202020] text-2xl" />
                      </Link>
                        )}
                  </div>
                </div>
              ))}

              {productos.length > 4 && (
                <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-end content_buttons items-center mt-2">
                  <Paginacion
                    totalPosts={totalPosts}
                    cantidadRegistros={cantidadRegistros}
                    paginaActual={paginaActual}
                    setpaginaActual={setpaginaActual}
                  />
                </div>
              )}
            </div>
            <section className="h-auto grid grid-cols-1 lg:grid-cols-3 mt-4 gap-x-4">
              <div className="bg-white rounded-xl p-4 h-full w-full">
                <div className="relative w-full ">
                  <Cards />
                </div>
              </div>
              <Plataformas />
              <Areas />
            </section>
          </div>
        </>
          )}
    </>
  )
}
