/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState } from 'react'
import { RiFilter2Fill } from 'react-icons/ri'
import { Paginacion } from '../../../../shared/Paginacion'
import { quitarAcentos } from '../../../../shared/functions/QuitarAcerntos'

export const DiasFestivos = ({ festivos }: { festivos: any }): JSX.Element => {
  const [paginaActual, setpaginaActual] = useState<number>(1)
  const [search, setSearch] = useState('')
  const [cantidadRegistros] = useState(14)
  console.log(festivos)
  const indexOfLastPost = paginaActual * cantidadRegistros
  const indexOfFirstPost = indexOfLastPost - cantidadRegistros
  let totalPosts = festivos.length

  const filterDate = (): any => {
    let filteredItems: any

    if (search.length === 0) {
      filteredItems = festivos.slice(indexOfFirstPost, indexOfLastPost)
    } else {
      const searchTerm = quitarAcentos(search.toLowerCase())
      const filter = festivos.filter((pro: any) => {
        const fullName = `${pro.title}`.toLowerCase()
        return quitarAcentos(fullName).includes(searchTerm)
      })

      totalPosts = filter.length
      filteredItems = filter.slice(indexOfFirstPost, indexOfLastPost)
    }
    return filteredItems.reverse()
  }

  const onSeachChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setpaginaActual(1)
    setSearch(target.value)
  }

  return (
    <div className="w-full h-screen p-0 flex flex-col gap-6 relative">
      <div className="w-full h-full ">
        <div className="w-full flex mb-3 justify-between">
          <div className="flex gap-3 w-full mx-2">
            <div className="w-full flex gap-2 items-center h-fit">
              <button className="bg-white hover:bg-gray-100 w-full md:w-full flex items-center text-black gap-2 py-2 px-4 rounded-lg hover:text-main transition-colors">
                <RiFilter2Fill />
                <input
                  placeholder="Buscar por nombre"
                  className="bg-transparent outline-none w-full"
                  value={search}
                  onChange={onSeachChange}
                  type="search"
                />
              </button>
            </div>
          </div>
        </div>
        <h2 className="mt-2 w-full text-center uppercase text-main font-bold text-2xl">
          Dias festivos
        </h2>
        <div className="md:bg-[#fff] p-0 md:p-8 rounded-xl">
          <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-3 mb-2 md:px-4 md:py-2 text-gray-400 border-y border-gray-300">
            <h5 className="md:text-left text-gray-700 font-medium line-clamp-1">
              ID
            </h5>
            <h5 className="md:text-left text-gray-700 font-medium line-clamp-1">
              Nombre
            </h5>
            <h5 className="md:text-left text-gray-700 font-medium line-clamp-1 col-span-2">
              Fecha
            </h5>
            <h5 className="md:text-center line-clamp-1"></h5>
          </div>
          {filterDate().map((orden: any, index: number) => (
            <div
              className={`grid grid-cols-1 md:grid-cols-4 relative gap-3 items-center mb-3 md:mb-0 ${
                index % 2 == 0 ? 'bg-transparent' : 'bg-gray-200'
              } md:px-4 md:py-1 rounded-xl relative shadow_class`}
              key={index + 1}
            >
              {/* PC */}
              <div className="hidden md:block md:text-center">
                <span className="text-left block text-black w-full line-clamp-1">
                  #{totalPosts - index}
                </span>
              </div>
              <div className="hidden md:block md:text-center">
                <div className="line-clamp-1">
                  <span className="text-left block text-black w-full lowercase first-letter:uppercase">
                    {orden.title}
                  </span>
                </div>
              </div>
              <div className="hidden md:block md:text-center  col-span-2">
                <span className="text-left block text-black w-full line-clamp-1">
                  {orden?.start instanceof Date &&
                    orden.start.toLocaleDateString('es-ES', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    })}
                </span>
              </div>
            </div>
          ))}
          <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-center md:justify-between content_buttons pt-3 mt-5">
            <p className="text-md ml-1 text-black">{totalPosts} Registros</p>
            <Paginacion
              totalPosts={totalPosts}
              cantidadRegistros={cantidadRegistros}
              paginaActual={paginaActual}
              setpaginaActual={setpaginaActual}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
