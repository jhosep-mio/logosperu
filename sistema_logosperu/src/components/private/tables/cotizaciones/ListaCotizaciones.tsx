import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import {
  RiFilter2Fill,
  RiSettings3Fill
} from 'react-icons/ri'
import { Loading } from '../../../shared/Loading'
import {
  type ListcotizacionValues
} from '../../../shared/schemas/Interfaces'
import { Paginacion } from '../../../shared/Paginacion'
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu'
import {
  limpiarCadena,
  quitarAcentos
} from '../../../shared/functions/QuitarAcerntos'
import { ModalContratos } from './contratos/ModalContratos'
import { Global } from '../../../../helper/Global'
import axios from 'axios'

export const ListaCotizaciones = (): JSX.Element => {
  const { setTitle } = useAuth()
  const [productos, setProductos] = useState<ListcotizacionValues[]>([])
  const [selectedItem, setSelectedItem] = useState<ListcotizacionValues | null>(null)
  const token = localStorage.getItem('token')
  const [loading, setLoading] = useState(true)
  const [totalRegistros, setTotalRegistros] = useState(0)
  const [paginaActual, setpaginaActual] = useState<number>(1)
  const [search, setSearch] = useState('')
  const [cantidadRegistros] = useState(12)
  //   const [selectedCotizacion, setSelectedCotizacion] = useState<ListcotizacionValues | null>(null)
  const [openContrato, setOpenContrato] = useState(false)

  const getCotizaciones = async (): Promise<void> => {
    const request = await axios.get(`${Global.url}/getCotizaciones`, {
      headers: {
        Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
      }
    })
    setProductos(request.data)
    setTotalRegistros(request.data.length)
  }

  useEffect(() => {
    setTitle('Listado de cotizaciones')
    Promise.all([
      getCotizaciones()
    ]).then(() => {
      setLoading(false)
    })
  }, [])

  const indexOfLastPost = paginaActual * cantidadRegistros
  const indexOfFirstPost = indexOfLastPost - cantidadRegistros
  let totalPosts = productos.length

  const filterDate = (): ListcotizacionValues[] => {
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

  const calcularTotal = (precio: string, descuento: string): string | number => {
    const precioNumerico = parseFloat(precio)
    const descuentoPorcentaje = parseFloat(descuento)
    // Verificar que ambos valores sean números válidos
    if (!isNaN(precioNumerico) && !isNaN(descuentoPorcentaje)) {
      // Convertir el porcentaje a un decimal
      const descuentoDecimal = descuentoPorcentaje / 100
      // Calcular el descuento
      const descuentoCalculado = precioNumerico * descuentoDecimal
      // Restar el descuento al precio original para obtener el total
      return precioNumerico - descuentoCalculado
    }
    // En caso de que no se puedan calcular los valores
    return '---'
  }

  const formatearFecha = (fechaStr: string): string => {
    const fecha = new Date(fechaStr)
    if (isNaN(fecha.getTime())) {
      return 'Fecha inválida'
    }
    const opcionesFormato: any = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }
    return new Intl.DateTimeFormat('es-ES', opcionesFormato).format(fecha)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type

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
      {loading
        ? <Loading />
        : (
        <div className="md:bg-[#fff] md:px-8 md:py-6 rounded-xl">
          <div
            className={'hidden md:grid pr-10 lg:pr-4 items-center grid-cols-9 gap-4 mb-2 md:px-4 md:py-2 text-gray-400 border-y border-gray-300'}
          >
            <h5 className="md:text-left line-clamp-1 col-span-1">COD</h5>
            <h5 className="md:text-left col-span-1">Total</h5>
            <h5 className="md:text-left line-clamp-1 col-span-2 ">Cliente</h5>
            <h5 className="md:text-left col-span-2">Empresa</h5>
            <h5 className="md:text-center col-span-1">Descuento</h5>
            <h5 className="md:text-center col-span-2">Fecha de creacion</h5>
          </div>
          {filterDate().map((orden: ListcotizacionValues, index: number) => (
            <div
              className={`grid grid-cols-9 md:pr-10 lg:pr-4 relative gap-3 items-center mb-3 md:mb-0 ${
                index % 2 == 0 ? 'bg-transparent' : 'bg-gray-200'
              } md:px-4 md:py-3 rounded-xl relative shadow_class`}
              key={orden.id}
            >
              <div className="hidden md:block md:text-center col-span-1">
                <span className="text-left block text-black w-full line-clamp-1">
                  {limpiarCadena(orden.correlativo)}
                </span>
              </div>
              <div className="hidden md:block md:text-left col-span-1">
                <span className="text-left block text-black">
                  S./ {calcularTotal(orden.precio, orden.descuento)}
                </span>
              </div>
              <div className="hidden md:block md:text-center col-span-2 relative h-full">
                <span className="text-left text-black line-clamp-1 transition-all  hover:bg-white hover:absolute hover:inset-0 w-full h-full z-10">
                    {orden.nombres} {orden.apellidos}
                </span>
              </div>

              <div className="hidden md:block md:text-center col-span-2 relative h-full">
                <span className="text-left text-black line-clamp-1 transition-all  hover:bg-white hover:absolute hover:inset-0 w-full h-full z-10">
                  {orden.empresa }
                  </span>
              </div>
              <div className="hidden md:block md:text-center col-span-1">
                <span className="text-center block text-black">
                   {orden.descuento} %
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
                        onClick={() => { setOpenContrato(true); setSelectedItem(orden) }}
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center justify-center gap-x-4 p-2 flex-1"
                      >
                        Generar Contrato
                      </button>
                    )}
                  </MenuItem>
                </Menu>
              </div>
            </div>
          ))}
          <ModalContratos open={openContrato} setOpen={setOpenContrato} selectedItem={selectedItem} getCotizaciones={getCotizaciones}/>
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
