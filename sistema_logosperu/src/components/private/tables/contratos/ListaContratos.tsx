/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import { RiFilter2Fill, RiSettings3Fill } from 'react-icons/ri'
import { Loading } from '../../../shared/Loading'
import { type arrayContacto, type ListaContratosValues } from '../../../shared/schemas/Interfaces'
import { Paginacion } from '../../../shared/Paginacion'
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu'
import { quitarAcentos } from '../../../shared/functions/QuitarAcerntos'
import { Global } from '../../../../helper/Global'
import axios from 'axios'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import { GenerarAlta } from './alta/GenerarAlta'
import { cn } from '../../../shared/cn'

export const ListaContratos = (): JSX.Element => {
  const { setTitle } = useAuth()
  const [productos, setProductos] = useState<ListaContratosValues[]>([])
  const [producto, setProducto] = useState<ListaContratosValues | null>(null)
  const token = localStorage.getItem('token')
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [totalRegistros, setTotalRegistros] = useState(0)
  const [paginaActual, setpaginaActual] = useState<number>(1)
  const [search, setSearch] = useState('')
  const [cantidadRegistros] = useState(12)
  const [usuarios, setUsuarios] = useState<never[]>([])

  const getCotizaciones = async (): Promise<void> => {
    try {
      const requestFinal = await axios.get(`${Global.url}/getAllContratos`, {
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? token : ''
          }`
        }
      })
      const request = await axios.get(`${Global.url}/getVentas`, {
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? token : ''
          }`
        }
      })
      const ventas = request.data
      // Aquí haces la comparación para cada cotización
      const cotizacionesConVentas = requestFinal.data.map(
        (cotizacion: ListaContratosValues) => {
          // Verificar si existe una venta con el mismo id_contrato que el correlativo de la cotización
          const tieneVenta = ventas.some(
            (venta: any) => venta.id_contrato == cotizacion.correlativo
          )
          // Añadir un nuevo campo a la cotización indicando si tiene venta o no
          return { ...cotizacion, tieneVenta }
        }
      )
      // Actualizar el estado con las cotizaciones que ahora incluyen la información sobre si tienen venta
      setProductos(cotizacionesConVentas)
      setTotalRegistros(cotizacionesConVentas.length)
    } catch (error) {
      console.error('Error al obtener las ventas:', error)
    }
  }

  const getUsuarios = async (): Promise<void> => {
    const request = await axios.get(`${Global.url}/getUsuarios`, {
      headers: {
        Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
      }
    })
    setUsuarios(request.data)
  }

  useEffect(() => {
    setTitle('Listado de contratos')
    Promise.all([getCotizaciones(), getUsuarios()]).then(() => {
      setLoading(false)
    })
  }, [])

  const indexOfLastPost = paginaActual * cantidadRegistros
  const indexOfFirstPost = indexOfLastPost - cantidadRegistros
  let totalPosts = productos.length

  const filterDate = (): ListaContratosValues[] => {
    let filteredProductos = productos
    const searchTerm = quitarAcentos(search)
    // ... puedes agregar otras condiciones de filtro aquí
    if (search.length > 0) {
      filteredProductos = filteredProductos.filter((pro) => {
        const fullName = `${pro.nombres} ${pro.apellidos}`.toLowerCase()
        const empresa = `${pro.empresa}`.toLowerCase()
        return (
          quitarAcentos(empresa).includes(searchTerm) ||
          quitarAcentos(fullName).includes(searchTerm) ||
          String(pro.id).includes(searchTerm) ||
          String(pro.correlativo).includes(searchTerm)
        )
      })
    }

    totalPosts = filteredProductos.length
    return filteredProductos.slice(indexOfFirstPost, indexOfLastPost)
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

  const formatearFecha = (fechaStr: string): string => {
    const fecha = new Date(fechaStr)
    if (isNaN(fecha.getTime())) {
      return 'Fecha inválida'
    }
    const opcionesFormato: any = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }
    return new Intl.DateTimeFormat('es-ES', opcionesFormato).format(fecha)
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-y-4 mb-3 md:mb-5 gap-2">
        <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 items-center h-fit">
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
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="md:bg-[#fff] md:px-8 md:py-6 rounded-xl">
          <div
            className={
              'hidden md:grid pr-10 lg:pr-4 items-center grid-cols-12 gap-4 mb-2 md:px-4 md:py-2 text-gray-400 border-y border-gray-300'
            }
          >
            <h5 className="md:text-left line-clamp-1 col-span-1">CONTRATO</h5>
            <h5 className="md:text-left col-span-1">Precio</h5>
            <h5 className="md:text-left col-span-1">COD. BRIEF</h5>
            <h5 className="md:text-left line-clamp-1 col-span-2 ">Cliente</h5>
            <h5 className="md:text-left col-span-2">Empresa</h5>
            <h5 className="md:text-center col-span-1">Tiempo </h5>
            <h5 className="md:text-center col-span-1">VER PDF</h5>
            <h5 className="md:text-center col-span-1">Alta</h5>
            <h5 className="md:text-center col-span-2">Fecha de creacion</h5>
          </div>
          {filterDate().map((orden: ListaContratosValues, index: number) => (
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 md:pr-10 lg:pr-4 relative gap-3 items-center mb-3 md:mb-0 ${
                index % 2 == 0 ? 'bg-transparent' : 'bg-gray-200'
              } md:px-4 md:py-3 rounded-xl relative shadow_class`}
              key={orden.id}
            >
              <div
                // to={`view-servicio/${orden.id}`}
                className="flex flex-col gap-3 md:hidden bg-form p-4 rounded-xl"
              >
                <div className="md:hidden flex justify-between gap-3">
                  <div className="md:text-center ">
                    <h5 className="md:hidden text-black font-bold mb-0 text-sm">
                      Correlativo
                    </h5>
                    <span className="text-black">{orden.correlativo}</span>
                  </div>
                  <div className="md:text-right ">
                    <h5 className="md:hidden text-black font-bold mb-0 text-sm bg text-right">
                      Precio
                    </h5>
                    <span className="text-right w-full text-black line-clamp-1">
                      S./ {orden.precio}
                    </span>
                  </div>
                </div>
                <div className="md:hidden flex justify-between gap-3">
                  <div className="md:text-left">
                    <h5 className="md:hidden text-black font-bold mb-0 text-sm bg text-left">
                      Codigo
                    </h5>
                    <span
                      className={cn(
                        'text-left block  w-fit px-2 rounded-md text-white',
                        orden.uso == 0 ? 'bg-green-600' : 'bg-red-600'
                      )}
                    >
                      {orden.codigo}
                    </span>
                  </div>
                  <div className="md:text-right ">
                    <h5 className="md:hidden text-black font-bold mb-0 text-sm bg text-right">
                      Cliente
                    </h5>
                    {/* <span className="text-right w-full text-black line-clamp-1">
                      {orden.nombres} {orden.apellidos}
                    </span> */}
                    {orden.id_contacto
                      ? (
                      <>
                        {orden.arraycontacto &&
                          JSON.parse(orden.arraycontacto).length > 0 &&
                          JSON.parse(orden.arraycontacto)
                            .filter(
                              (contacto: arrayContacto) =>
                                String(contacto.id ?? '') == orden.id_contacto
                            )
                            .map((contacto: arrayContacto) => (
                              <span
                                key={contacto.id}
                                className="text-left w-full text-black line-clamp-1"
                              >
                                {contacto.nombres}
                              </span>
                            ))}
                      </>
                        )
                      : (
                      <span className="text-left w-full text-black line-clamp-1">
                        {orden.nombres} {orden.apellidos}
                      </span>
                        )}
                  </div>
                </div>
                <div className="md:hidden flex justify-between gap-3">
                  <div className="md:text-left">
                    <h5 className="md:hidden text-black font-bold mb-0 text-sm bg text-left">
                      Empresa
                    </h5>
                    <span className="text-left w-full text-black line-clamp-1">
                      {orden.empresa}
                    </span>
                  </div>
                  <div className="md:text-right ">
                    <h5 className="md:hidden text-black font-bold mb-0 text-sm bg text-right">
                      Tiempo
                    </h5>
                    <span className="text-right w-full text-black line-clamp-1">
                      {orden.tiempo} días
                    </span>
                  </div>
                </div>
                <div className="md:hidden flex justify-between gap-3">
                  <div className="md:text-left">
                    <h5 className="md:hidden text-black font-bold mb-0 text-sm bg text-left">
                      PDF
                    </h5>
                    <Link
                      target="_blank"
                      to={`${Global.urlImages}/contratos/${orden.pdf ?? ''}`}
                      className="text-center block text-black"
                    >
                      <BsFileEarmarkPdfFill className="mx-auto text-3xl text-main hover:text-main_dark transition-colors cursor-pointer" />
                    </Link>
                  </div>
                  <div className="md:text-right ">
                    <h5 className="md:hidden text-black font-bold mb-0 text-sm bg text-right">
                      Fecha
                    </h5>
                    <span className="text-right w-full text-black line-clamp-1">
                      {formatearFecha(orden.created_at)}
                    </span>
                  </div>
                </div>
                <div className="block md:text-left">
                  <h5 className="md:hidden text-black font-bold mb-0 text-sm bg text-center">
                    Alta
                  </h5>
                  <span
                    className={cn(
                      'text-center w-full text-white line-clamp-1', // @ts-expect-error
                      orden.tieneVenta ? 'bg-green-600' : 'bg-red-600'
                    )}
                  >
                    {
                      // @ts-expect-error
                      orden.tieneVenta ? 'SI' : 'NO'
                    }
                  </span>
                </div>
              </div>

              <div className="hidden md:block md:text-center col-span-1">
                <span className="text-left block text-black w-full line-clamp-1">
                  {orden.correlativo}
                </span>
              </div>
              <div className="hidden md:block md:text-left col-span-1">
                <span className="text-left block text-black">
                  S./ {orden.precio}
                </span>
              </div>
              <div className="hidden md:block md:text-left col-span-1">
                <span
                  className={cn(
                    'text-left block  w-fit px-2 rounded-md text-white',
                    orden.uso == 0 ? 'bg-green-600' : 'bg-red-600'
                  )}
                >
                  {orden.codigo}
                </span>
              </div>
              <div className="hidden md:block md:text-center col-span-2 relative h-full">
                {orden.id_contacto
                  ? (
                  <>
                    {orden.arraycontacto &&
                      JSON.parse(orden.arraycontacto).length > 0 &&
                      JSON.parse(orden.arraycontacto)
                        .filter(
                          (contacto: arrayContacto) =>
                            String(contacto.id ?? '') == orden.id_contacto
                        )
                        .map((contacto: arrayContacto) => (
                          <span
                            key={contacto.id}
                            className="text-left text-black line-clamp-1 transition-all hover:w-[150%] hover:bg-white hover:absolute hover:inset-0 w-full h-full z-10"
                          >
                            {contacto.nombres}
                          </span>
                        ))}
                  </>
                    )
                  : (
                  <span className="text-left text-black line-clamp-1 transition-all hover:w-[150%] hover:bg-white hover:absolute hover:inset-0 w-full h-full z-10">
                    {orden.nombres} {orden.apellidos}
                  </span>
                    )}
              </div>
              <div className="hidden md:block md:text-center col-span-2 relative h-full">
              {orden.id_contacto
                ? (
                  <>
                    {orden.arraycontacto &&
                      JSON.parse(orden.arraycontacto).length > 0 &&
                      JSON.parse(orden.arraycontacto)
                        .filter(
                          (contacto: arrayContacto) =>
                            String(contacto.id ?? '') == orden.id_contacto
                        )
                        .map((contacto: arrayContacto) => (
                          <span
                            key={contacto.id}
                            className="text-left text-black line-clamp-1 transition-all hover:w-[150%] hover:bg-white hover:absolute hover:inset-0 w-full h-full z-10"
                          >
                            {contacto.marca}
                          </span>
                        ))}
                  </>
                  )
                : (
                    <span className="text-left text-black line-clamp-1 transition-all  hover:bg-white hover:absolute hover:inset-0 w-full h-full z-10">
                    {orden.empresa}
                  </span>
                  )}

              </div>
              <div className="hidden md:block md:text-center col-span-1">
                <span className="text-center  text-black line-clamp-1">
                  {orden.tiempo} días
                </span>
              </div>
              <div className="hidden md:block md:text-center col-span-1">
                <Link
                  target="_blank"
                  to={`${Global.urlImages}/contratos/${orden.pdf ?? ''}`}
                  className="text-center block text-black"
                >
                  <BsFileEarmarkPdfFill className="mx-auto text-3xl text-main hover:text-main_dark transition-colors cursor-pointer" />
                </Link>
              </div>
              <div className="hidden md:block md:text-center">
                <span
                  className={cn(
                    'text-center block text-white',
                    // @ts-expect-error
                    orden.tieneVenta ? 'bg-green-600' : 'bg-red-600'
                  )}
                >
                  {
                    // @ts-expect-error
                    orden.tieneVenta ? 'SI' : 'NO'
                  }
                </span>
              </div>
              <div className="hidden md:block md:text-center col-span-2">
                <span className="text-center block text-black">
                  {formatearFecha(orden.created_at)}
                </span>
              </div>

              <div className="md:text-center md:flex md:justify-center items-center absolute right-0 top-0 bottom-0 my-auto">
                <Menu
                  menuButton={
                    <MenuButton className="block p-1">
                      <RiSettings3Fill className="text-gray-600 text-lg" />
                    </MenuButton>
                  }
                  align="end"
                  arrow
                  transition
                  menuClassName="bg-secondary-100 p-4"
                >
                  <MenuItem className="p-0 hover:bg-transparent">
                    {orden.id != null && (
                      <Link
                        to={`view/${orden.id}`}
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center justify-center gap-x-4 p-2 flex-1"
                      >
                        Ver
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem className="p-0 hover:bg-transparent">
                    {orden.id != null && (
                      <Link
                        to={`editar/${orden.id}`}
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center justify-center gap-x-4 p-2 flex-1"
                      >
                        Editar
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem className="p-0 hover:bg-transparent">
                    {orden.id != null && (
                      <button
                        type="button"
                        onClick={() => {
                          setOpen(true)
                          setProducto(orden)
                        }}
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center justify-center gap-x-4 p-2 flex-1"
                      >
                        Generar alta
                      </button>
                    )}
                  </MenuItem>
                </Menu>
              </div>
            </div>
          ))}
          <GenerarAlta
            datos={producto}
            open={open}
            setOpen={setOpen}
            usuarios={usuarios}
          />
          <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-center md:justify-between content_buttons pt-3 mt-5">
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
