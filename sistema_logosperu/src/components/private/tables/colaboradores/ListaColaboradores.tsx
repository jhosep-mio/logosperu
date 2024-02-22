import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import { RiFilter2Fill, RiSettings3Fill } from 'react-icons/ri'
import { Loading } from '../../../shared/Loading'
import {
  type usurioValues
} from '../../../shared/schemas/Interfaces'
import { Paginacion } from '../../../shared/Paginacion'
import { getColaboradresList } from '../../../shared/FetchingData'
import { quitarAcentos } from '../../../shared/functions/QuitarAcerntos'
import { Global } from '../../../../helper/Global'

export const ListaColaboradores = (): JSX.Element => {
  const { setTitle } = useAuth()
  const [productos, setProductos] = useState<usurioValues[]>([])
  const [loading, setLoading] = useState(true)
  const [totalRegistros, setTotalRegistros] = useState(0)
  const [paginaActual, setpaginaActual] = useState<number>(1)
  const [search, setSearch] = useState('')
  const [cantidadRegistros] = useState(14)
  const [estado, setEstado] = useState(false)

  useEffect(() => {
    setTitle('Listado de colaboradores')
    Promise.all([
      getColaboradresList('getUsuarios', setProductos, setTotalRegistros)
    ]).then(() => {
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (estado) {
      setLoading(true)
      Promise.all([
        getColaboradresList('getUsuariosInactivos', setProductos, setTotalRegistros)
      ]).then(() => {
        setLoading(false)
      })
    } else {
      setLoading(true)
      Promise.all([
        getColaboradresList('getUsuarios', setProductos, setTotalRegistros)
      ]).then(() => {
        setLoading(false)
      })
    }
  }, [estado])

  const indexOfLastPost = paginaActual * cantidadRegistros
  const indexOfFirstPost = indexOfLastPost - cantidadRegistros
  let totalPosts = productos.length

  const filterDate = (): usurioValues[] => {
    if (search.length === 0) {
      const producto = productos.slice(indexOfFirstPost, indexOfLastPost)
      return producto
    }
    const searchTerm = quitarAcentos(search.toLowerCase())

    const filter = productos.filter((pro) => {
      const fullName = `${pro.name}`.toLowerCase()
      const empresa = `${pro.email}`.toLowerCase()
      return (
        quitarAcentos(fullName).includes(searchTerm) ||
        quitarAcentos(empresa).includes(searchTerm) ||
        String(pro.id).includes(searchTerm)
      )
    })

    totalPosts = filter.length
    return filter.slice(indexOfFirstPost, indexOfLastPost)
  }

  useEffect(() => {
    setTotalRegistros(totalPosts)
  }, [search])

  const onSeachChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setpaginaActual(1)
    setSearch(target.value)
  }

  //   const exportarWsp = (resumen: string, id: string | undefined): void => {
  //     const fechaActual = new Date().toLocaleDateString('es-ES', {
  //       day: 'numeric',
  //       month: 'numeric',
  //       year: 'numeric'
  //     })
  //     const comentarios = JSON.parse(resumen)
  //     let mensajeWsp = `RESUMEN ${(auth.name).toUpperCase()} / ${fechaActual.replace(
  //       /\//g,
  //       '-'
  //     )}\n\n`
  //     comentarios
  //       .filter((comentario: valuesResumen) => (comentario.fecha == fechaActual && comentario.userId == id))
  //       .forEach((comentario: valuesResumen) => {
  //         console.log(comentario)
  //         // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  //         mensajeWsp += `- AGENCIA: ${comentario.texto.toUpperCase()}`
  //       })
  //     const mensajeWspEncoded = encodeURIComponent(mensajeWsp)
  //     const urlWhatsApp = `https://web.whatsapp.com/send?text=${mensajeWspEncoded}`
  //     // Abrir WhatsApp con el mensaje predefinido en una nueva ventana o pestaña
  //     window.open(urlWhatsApp, '_blank')
  //   }

  return (
    <>
      <div
        className="w-full flex flex-col md:flex-row items-center justify-between gap-y-4 gap-2 md:gap-0 mb-5"
        id="pdf-content"
      >
        <div className="w-full md:w-fit flex gap-2 items-center h-fit">
          <button className="bg-white hover:bg-gray-100 w-full md:w-fit flex items-center text-black gap-2 py-2 px-4 rounded-lg hover:text-main transition-colors">
            <RiFilter2Fill />
            <input
              placeholder="Buscar ..."
              className="bg-transparent outline-none"
              value={search}
              onChange={onSeachChange}
              type="search"
            />
          </button>
          <div className="flex gap-2">
            <button
              className={` text-gray-500 px-2 md:px-4 text-sm md:text-base py-1 lg:py- rounded-xl line-clamp-1 font-bold ${
                estado
                  ? 'border-2 border-red-600 bg-red-500 text-white'
                  : 'border-2 border-gray-300'
              }`}
              onClick={() => {
                setEstado(!estado)
              }}
            >
              Inactivos
            </button>
          </div>
        </div>
        <div className="w-full md:w-fit flex flex-col-reverse md:flex-row items-center md:gap-4">
          <Link
            to={'agregar'}
            className="w-full md:w-fit inline-block rounded bg-main md:px-6 pb-2 pt-2.5 text-center text-xs font-medium uppercase leading-normal text-white"
          >
            REGISTRO
          </Link>
        </div>
      </div>
      {loading
        ? (
        <Loading />
          )
        : (
        <div className="md:bg-[#fff] p-0 md:p-8 rounded-xl">
          <div className="hidden md:grid grid-cols-1 items-center md:grid-cols-6 gap-3 mb-2 md:px-4 md:py-2 text-gray-400 border-y border-gray-300">
            <h5 className="md:text-left line-clamp-1">ID</h5>
            <h5 className="md:text-left line-clamp-1 ">Nombre</h5>
            <h5 className="md:text-left line-clamp-1 ">Correo</h5>
            <h5 className="md:text-center line-clamp-1 md:block">Firma</h5>
            <h5 className="md:text-center line-clamp-1 md:block">Estado</h5>
            <h5 className="md:text-left line-clamp-1 md:block"></h5>
          </div>
          {filterDate().map(
            (orden: usurioValues, index: number) => (
              <div
                className={`grid grid-cols-1 md:grid-cols-6 relative gap-3 items-center mb-3 md:mb-0 ${
                  index % 2 == 0 ? 'bg-transparent' : 'bg-gray-200'
                } md:px-4 md:py-1 rounded-xl relative shadow_class`}
                key={orden.id}
              >
                <div className="flex flex-col gap-3 md:hidden bg-form p-4 rounded-xl">
                  <div className="flex md:hidden items-center gap-2">
                    <h5 className="md:hidden text-black font-bold mb-0 text-sm">
                      ID:
                    </h5>
                    <span className="flex md:justify-left items-center gap-3 font-bold text-black">
                      #{orden.id}
                    </span>
                  </div>
                  <div className="md:hidden flex justify-between ">
                    <div className="md:text-center w-fit">
                      <h5 className="md:hidden text-black font-bold mb-0 text-sm">
                        Nombre
                      </h5>
                      <span className="text-left w-full text-black line-clamp-1">
                        {orden.name}
                      </span>
                    </div>
                    <div className="md:text-right w-1/2">
                      <h5 className="md:hidden text-black font-bold mb-0 text-sm bg text-right">
                        Correo
                      </h5>
                      <span className="text-right w-full text-black line-clamp-1">
                        {orden.email}
                      </span>
                    </div>
                  </div>

                </div>
                {/* PC */}
                <div className="hidden md:block md:text-center">
                  <span className="text-left block text-black w-full line-clamp-1">
                    #{orden.id}
                  </span>
                </div>
                <div className="hidden md:block md:text-center ">
                  <div className="line-clamp-1">
                    <span className="text-left block text-black w-full lowercase first-letter:uppercase">
                      {orden.name}
                    </span>
                  </div>
                </div>
                <div className="hidden md:block md:text-center">
                  <div className="line-clamp-1 ">
                    <span className="text-left block text-black w-full ">
                      {orden.email}
                    </span>
                  </div>
                </div>
                <Link to={orden.firma ? `${Global.urlImages}/firmas/${orden.firma}` : '#'} target='_blank' className="hidden md:block md:text-center">
                    {orden.firma
                      ? <img src={`${Global.urlImages}/firmas/${orden.firma}`} alt="" className='w-[100px] h-[40px] py-1 mx-auto object-contain'/>
                      : <span className="text-center block text-black w-full line-clamp-1">
                    No tiene firma
                  </span>
                    }

                </Link>
                <div className="hidden md:block md:text-center mx-auto">
                  <div className="line-clamp-1 ">
                    <span className={`text-center block text-black w-fit px-3 py-1 rounded-lg lowercase first-letter:uppercase ${orden.estado == 1 ? 'bg-green-500' : 'bg-red-500'}`}>
                      {orden.estado == 1 ? 'Activo' : 'Inactivo'}
                    </span>
                  </div>
                </div>
                <div className="md:text-center md:flex md:justify-center items-center absolute md:relative right-0 top-0">
                  <Menu
                    menuButton={
                      <MenuButton className="block p-2">
                        <RiSettings3Fill className="text-gray-500 text-lg" />
                      </MenuButton>
                    }
                    align="end"
                    arrow
                    transition
                    menuClassName="bg-secondary-100 p-4"
                  >
                    <MenuItem className="p-0 hover:bg-transparent">
                      <Link
                        to={`reporte/${orden.id}`}
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center justify-center gap-x-4 p-2 flex-1"
                      >
                        Reporte
                      </Link>
                    </MenuItem>
                    <MenuItem className="p-0 hover:bg-transparent">
                      <Link
                        to={`gestor_tareas/${orden.id}/${orden.name}`}
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center justify-center gap-x-4 p-2 flex-1"
                      >
                        Gestor de Tareas
                      </Link>
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            )
          )}
          <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-center md:justify-between content_buttons pt-3 mt-5">
            <p className="text-md ml-1 text-black">
              {totalRegistros} Registros
            </p>
            <Paginacion
              totalPosts={totalPosts}
              cantidadRegistros={cantidadRegistros}
              paginaActual={paginaActual}
              setpaginaActual={setpaginaActual}
            />
          </div>
        </div>
          )}
    </>
  )
}
