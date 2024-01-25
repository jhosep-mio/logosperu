import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import { RiFilter2Fill, RiSettings3Fill } from 'react-icons/ri'
import { Loading } from '../../../shared/Loading'
import {
  type ValuesPreventaModificate
} from '../../../shared/schemas/Interfaces'
import { Paginacion } from '../../../shared/Paginacion'
import { getData2 } from '../../../shared/FetchingData'
import { quitarAcentos } from '../../../shared/functions/QuitarAcerntos'

export const ListaClientesColaboradores = (): JSX.Element => {
  const { setTitle } = useAuth()
  const [productos, setProductos] = useState<ValuesPreventaModificate[]>([
    {
      id: 0,
      nombres: '',
      apellidos: '',
      email: '',
      celular: '',
      empresa: '',
      edad: '',
      sexo: '',
      medio_ingreso: '',
      id_contrato: '',
      created_at: '',
      dni_ruc: '',
      antiguo: '',
      estado: ''
    }
  ])
  const [loading, setLoading] = useState(true)
  const [totalRegistros, setTotalRegistros] = useState(0)
  const [paginaActual, setpaginaActual] = useState<number>(1)
  const [search, setSearch] = useState('')
  const [cantidadRegistros] = useState(14)

  useEffect(() => {
    setTitle('Listado de clientes')
    Promise.all([
      getData2('getClientesToColaborador', setProductos, setTotalRegistros)
    ]).then(() => {
      setLoading(false)
    })
  }, [])

  const indexOfLastPost = paginaActual * cantidadRegistros
  const indexOfFirstPost = indexOfLastPost - cantidadRegistros
  let totalPosts = productos.length

  const filterDate = (): ValuesPreventaModificate[] => {
    if (search.length === 0) {
      const producto = productos.slice(indexOfFirstPost, indexOfLastPost)
      return producto
    }
    const searchTerm = quitarAcentos(search.toLowerCase())

    const filter = productos.filter((pro) => {
      const fullName = `${pro.nombres} ${pro.apellidos}`.toLowerCase()
      const empresa = `${pro.empresa}`.toLowerCase()
      return (
        quitarAcentos(fullName).includes(searchTerm) ||
        quitarAcentos(empresa).includes(searchTerm) ||
        String(pro.id).includes(searchTerm) ||
        String(pro.celular).includes(searchTerm)
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

  return (
    <>
      <div
        className="w-full flex flex-row items-center justify-between gap-y-4 gap-2 md:gap-0 mb-5"
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
        </div>
      </div>
      {loading
        ? (
        <Loading />
          )
        : (
        <div className="md:bg-[#fff] p-0 md:p-8 rounded-xl">
          <div className="hidden md:grid grid-cols-1 md:grid-cols-9 gap-3 mb-2 md:px-4 md:py-2 text-gray-400 border-y border-gray-300">
            <h5 className="md:text-left line-clamp-1">ID</h5>
            <h5 className="md:text-left line-clamp-1 col-span-2">Cliente</h5>
            <h5 className="md:text-left line-clamp-1 ">Empresa</h5>
            <h5 className="md:text-left line-clamp-1 md:block">Celular</h5>
            <h5 className="md:text-left line-clamp-1 w-full">DNI/RUC</h5>
            <h5 className="md:text-left line-clamp-1 w-full">
              Medio de ingreso
            </h5>
            <h5 className="md:text-center line-clamp-1">Fecha de creación</h5>
            <h5 className="md:text-center line-clamp-1"></h5>
          </div>
          {filterDate().map(
            (orden: ValuesPreventaModificate, index: number) => (
              <div
                className={`grid grid-cols-1 md:grid-cols-9 relative gap-3 items-center mb-3 md:mb-0 ${
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
                  <div className="md:hidden flex justify-between gap-3">
                    <div className="md:text-center ">
                      <h5 className="md:hidden text-black font-bold mb-0 text-sm">
                        Cliente
                      </h5>
                      <span className="text-left w-full text-black line-clamp-1">
                        {orden.nombres} {orden.apellidos}
                      </span>
                    </div>
                    <div className="md:text-right ">
                      <h5 className="md:hidden text-black font-bold mb-0 text-sm bg text-right">
                        Celular
                      </h5>
                      <span className="text-right w-full text-black line-clamp-1">
                        {orden.celular}
                      </span>
                    </div>
                  </div>
                  {orden.empresa && (
                    <div className="md:hidden flex justify-between gap-3">
                      <div className="md:text-center ">
                        <h5 className="md:hidden text-black font-bold mb-0 text-sm">
                          Empresa
                        </h5>
                        <span className="text-left w-full text-black line-clamp-1">
                          {orden.empresa}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="md:hidden flex justify-between gap-3">
                    <div className="md:text-center ">
                      <h5 className="md:hidden text-[#62be6d] font-bold mb-0 text-sm ">
                        Fecha de creación
                      </h5>
                      <span className="text-left block text-[#62be6d]">
                        {new Date(orden.created_at).toLocaleDateString(
                          undefined,
                          {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                          }
                        )}{' '}
                      </span>
                    </div>
                    <div className="md:text-right ">
                      <h5 className="md:hidden text-black font-bold mb-0 text-sm bg text-right">
                        DNI/RUC
                      </h5>
                      <span className="text-right w-full text-black line-clamp-1">
                        {orden.dni_ruc}
                      </span>
                    </div>
                  </div>
                  {orden.email && (
                    <div className="md:hidden flex justify-between gap-3">
                      <div className="md:text-left w-full">
                        <h5 className="md:hidden text-black text-left font-bold mb-0 text-sm ">
                          Email
                        </h5>
                        <span className="text-left w-full text-black line-clamp-1">
                          {orden.email}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="hidden md:block md:text-center">
                  <span className="text-left block text-black w-full line-clamp-1">
                    #{orden.id}
                  </span>
                </div>
                <div className="hidden md:block md:text-center col-span-2">
                  <div className="line-clamp-1">
                    <span className="text-left block text-black w-full lowercase first-letter:uppercase">
                      {orden.nombres} {orden.apellidos}
                    </span>
                  </div>
                </div>
                <div className="hidden md:block md:text-center">
                  <div className="line-clamp-1">
                    <span className="text-left block text-black w-full lowercase first-letter:uppercase">
                      {orden.empresa}
                    </span>
                  </div>
                </div>
                <div className="hidden md:block md:text-center">
                  <span className="text-left block text-black w-full line-clamp-1">
                    {orden.celular}
                  </span>
                </div>
                <div className="hidden md:block md:text-center">
                  <span className="text-left block text-black w-full line-clamp-1">
                    {orden.dni_ruc}
                  </span>
                </div>
                <div className="hidden md:block md:text-center">
                  <span className="text-left block text-black w-full line-clamp-1">
                    {orden.medio_ingreso == '0'
                      ? 'Facebook'
                      : orden.medio_ingreso == '1'
                        ? 'Google'
                        : orden.medio_ingreso == '5'
                          ? 'Instagram'
                          : orden.medio_ingreso == '2'
                            ? 'Ventas'
                            : orden.medio_ingreso == '3'
                              ? 'Post Venta'
                              : orden.medio_ingreso == '4'
                                ? 'Whatsapp'
                                : orden.medio_ingreso == '6'
                                  ? 'Recomendación'
                                  : orden.medio_ingreso == '7'
                                    ? 'Logos'
                                    : ''}
                  </span>
                </div>
                <div className="hidden md:block md:text-center">
                  <p className="line-clamp-2 text-black">
                    {new Date(orden.created_at).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit'
                    })}{' '}
                    {new Date(orden.created_at).toLocaleTimeString()}
                  </p>
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
                        to={`resumen/${orden.id}`}
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center justify-center gap-x-4 p-2 flex-1"
                      >
                        Reporte
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
