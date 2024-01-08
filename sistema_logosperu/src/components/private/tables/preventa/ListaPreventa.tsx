import React, { useEffect, useState } from 'react'
import useAuth from '../../../../hooks/useAuth'
import { RiFilter2Fill } from 'react-icons/ri'
import { Loading } from '../../../shared/Loading'
import { type ValuesPreventaModificate } from '../../../shared/schemas/Interfaces'
import { Paginacion } from '../../../shared/Paginacion'
import { getData2 } from '../../../shared/FetchingData'
import { quitarAcentos } from '../../../shared/functions/QuitarAcerntos'
import { ListaVentasPre } from './ListaVentasPre'

export const ListaPreventa = (): JSX.Element => {
  const { setTitle } = useAuth()

  // const token = localStorage.getItem('token')
  const [productos, setProductos] = useState<ValuesPreventaModificate[]>([])

  const [loading, setLoading] = useState(true)
  const [totalRegistros, setTotalRegistros] = useState(0)
  const [paginaActual, setpaginaActual] = useState<number>(1)
  const [search, setSearch] = useState('')
  const [cantidadRegistros] = useState(4)

  useEffect(() => {
    setTitle('Listado de Preventas')
    Promise.all([
      getData2('gePreventas', setProductos, setTotalRegistros)
      // getDataVentas('getVentas', setventas, setTotalRegistros)
    ]).then(() => {
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    setTotalRegistros(totalPosts)
  }, [search])

  const indexOfLastPost = paginaActual * cantidadRegistros
  const indexOfFirstPost = indexOfLastPost - cantidadRegistros
  let totalPosts = productos.length

  const filterDate = (): ValuesPreventaModificate[] => {
    if (search.length === 0) {
      const producto = productos.slice(indexOfFirstPost, indexOfLastPost)
      return producto
    }

    const filter = productos.filter((pro) => {
      return (
        quitarAcentos(pro.nombres.toLowerCase()).includes(
          quitarAcentos(search.toLowerCase())
        ) ||
        quitarAcentos(pro.apellidos.toLowerCase()).includes(
          quitarAcentos(search.toLowerCase())
        ) ||
        String(pro.id).includes(search) ||
        String(pro.celular).includes(search)
      )
    })

    totalPosts = filter.length
    return filter.slice(indexOfFirstPost, indexOfLastPost)
  }

  const onSeachChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setpaginaActual(1)
    setSearch(target.value)
  }

  return (
    <>
      <ListaVentasPre />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 my-5">
        <div className="flex gap-2 items-center h-fit justify-between w-full">
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
          <h2 className="text-black font-bold">NO SE GENERO VENTAS</h2>
        </div>
      </div>
      {loading
        ? (
        <Loading />
          )
        : (
        <div className="bg-[#fff] p-8 rounded-xl">
          <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4 rounded-md border-b-2 border-solid border-black-50">
            <h5 className="md:text-center text-black">ID</h5>
            <h5 className="md:text-center text-black">CLIENTE</h5>
            <h5 className="md:text-center text-black">CELULAR</h5>
            <h5 className="md:text-center text-black">MEDIO DE INGRESO</h5>
            <h5 className="md:text-center text-black">FECHA DE CREACIÓN</h5>
          </div>
          {filterDate().map((orden: ValuesPreventaModificate) => (
            <div
              className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-gray-50 p-4 rounded-xl shadow-sm cursor-pointer"
              key={orden.id}
            >
              <div className="md:text-center">
                <h5 className="text-black  md:hidden font-bold mb-2">ID</h5>
                <p className="line-clamp-2 text-black">#{orden.id}</p>
              </div>
              <div className="md:text-center md:flex md:justify-center">
                <h5 className="md:hidden text-black font-bold mb-2">Cliente</h5>
                <p className="line-clamp-2 text-black">
                  {orden.nombres} {orden.apellidos}
                </p>
              </div>

              <div className="md:text-center md:flex md:justify-center">
                <h5 className="md:hidden text-black font-bold mb-2">Celular</h5>
                <p className="line-clamp-2 text-black">{orden.celular}</p>
              </div>

              <div className="md:text-center md:flex md:justify-center ">
                <h5 className="md:hidden text-black font-bold mb-2">
                  Medio de ingreso
                </h5>
                <p className="line-clamp-2 text-black">
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
                </p>
              </div>

              <div className="md:text-center">
                <h5 className="md:hidden text-black font-bold mb-2">
                  Fecha de Creacion
                </h5>
                <span className="text-black">
                  {new Date(orden.created_at).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                  })}{' '}
                  {new Date(orden.created_at).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}

          <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-center md:justify-between content_buttons pt-3">
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
