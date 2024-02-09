import { useState, useEffect } from 'react'
import { Loading } from '../../../../shared/Loading'
import { IoOptionsSharp } from 'react-icons/io5'
import { getData2 } from '../../../../shared/FetchingData'
import { type ValuesPreventaModificate } from '../../../../shared/schemas/Interfaces'
import { PorEdad } from './graficos/PorEdad'
import { PorGenero } from './graficos/PorGenero'
import { MdOutlineZoomOutMap } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'
import { PorMedioDeIngreso } from './graficos/PorMedioDeIngreso'
import { PorCrecimiento } from './graficos/PorCrecimiento'

export const MetricasClientes = (): JSX.Element => {
  const [loading, setLoading] = useState(true)
  const [clientes, setClientes] = useState<ValuesPreventaModificate[]>([])
  const [totalRegistros, setTotalRegistros] = useState(0)
  const [dataEdad, setDataEdad] = useState<any>({
    labels: [],
    datasets: [
      {
        label: 'Cantidad de Personas por Rango de Edad',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1
      }
    ]
  })
  const [dataGenero, setDataGenero] = useState<any>({
    labels: [],
    datasets: [
      {
        label: 'Cantidad de Personas por Genero',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1
      }
    ]
  })
  const [dataMedioIngreso, setDataMedioIngreso] = useState<any>({
    labels: [],
    datasets: [
      {
        label: 'Cantidad de Personas por Medio de ingreso',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1
      }
    ]
  })
  const [dataCrecimiento, setDataCrecimiento] = useState<any>({
    labels: [],
    datasets: [
      {
        label: 'Crecimiento',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1
      }
    ]
  })

  const [selectedId, setSelectedId] = useState<string | null>(null)

  useEffect(() => {
    Promise.all([getData2('getClientes', setClientes, setTotalRegistros)]).then(
      () => {
        setLoading(false)
      }
    )
  }, [])

  return (
    <div className="w-full h-auto relative overflow-hidden">
      {loading
        ? <Loading />
        : (
        <>
          <div className="flex flex-col bg-gray-100 p-4 w-full h-full min-h-screen">
            <div className="w-full flex justify-between">
              <h1 className="w-full text-left text-gray-600 px-4 text-2xl uppercase font-bold">
                Clientes ({totalRegistros}){' '}
              </h1>
              <div className="px-4">
                <IoOptionsSharp className="text-3xl text-black bg-transparent transition-colors cursor-pointer hover:bg-gray-300 p-1 rounded-md w-10 h-10" />
              </div>
            </div>

            {/* GRAFICOS */}
            <section className="grid grid-cols-2 w-full h-fit gap-4 px-4 py-4 ">
              <div className="w-full h-96 bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between px-4">
                  <h1 className="w-full text-left text-gray-600 font-semibold text-xl ">
                    Por rango de edad
                  </h1>
                  <MdOutlineZoomOutMap
                    className="text-2xl text-gray-600 cursor-pointer hover:text-gray-700 hover:scale-105"
                    onClick={() => {
                      setSelectedId('1')
                    }}
                  />
                </div>
                <PorEdad
                  dataGenero={dataEdad}
                  clientes={clientes}
                  setDataEdad={setDataEdad}
                />
              </div>
              <div className="w-full h-96 bg-white p-4 rounded-lg shadow-md">
                    <div className="flex justify-between px-4">
                    <h1 className="w-full text-left text-gray-600 font-semibold text-xl ">
                        Crecimiento
                    </h1>
                    <MdOutlineZoomOutMap className="text-2xl text-gray-600 cursor-pointer hover:text-gray-700 hover:scale-105" onClick={() => {
                      setSelectedId('4')
                    }}/>
                    </div>
                    <PorCrecimiento
                    dataGenero={dataCrecimiento}
                    clientes={clientes}
                    setDataEdad={setDataCrecimiento}
                    />
                </div>
            </section>
            <section className="grid grid-cols-2 w-full h-hit gap-4 px-4 py-4 ">
                <div className="w-full h-96 bg-white p-4 rounded-lg shadow-md">
                    <div className="flex justify-between px-4">
                    <h1 className="w-full text-left text-gray-600 font-semibold text-xl ">
                        Por Medio de ingreso
                    </h1>
                    <MdOutlineZoomOutMap className="text-2xl text-gray-600 cursor-pointer hover:text-gray-700 hover:scale-105" onClick={() => {
                      setSelectedId('3')
                    }}/>
                    </div>
                    <PorMedioDeIngreso
                    dataGenero={dataMedioIngreso}
                    clientes={clientes}
                    setDataEdad={setDataMedioIngreso}
                    />
                </div>
                <div className="w-full h-96 bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between px-4">
                  <h1 className="w-full text-left text-gray-600 font-semibold text-xl ">
                    Por genero
                  </h1>
                  <MdOutlineZoomOutMap className="text-2xl text-gray-600 cursor-pointer hover:text-gray-700 hover:scale-105" onClick={() => {
                    setSelectedId('2')
                  }}/>
                </div>
                <PorGenero
                  dataGenero={dataGenero}
                  clientes={clientes}
                  setDataEdad={setDataGenero}
                />
              </div>
            </section>
          </div>
          <AnimatePresence>
            {selectedId != null && (
              <motion.div
                layoutId={selectedId}
                initial={{ opacity: 0, scale: 0.5 }} // Ajusta la escala inicial
                animate={{ opacity: 1, scale: 1 }} // Ajusta la escala final
                exit={{ opacity: 0, scale: 0.8 }} // Ajusta la escala al salir
                className="absolute w-full h-full inset-0 flex justify-center items-center before:bg-black/40 before:w-full before:absolute before:inset-0 overflow-hidden"
              >
                {selectedId == '1'
                  ? (
                  <motion.div
                   initial={{ opacity: 0 }} // Inicialmente invisible
                    animate={{ opacity: 1 }} // Animación de entrada
                    exit={{ opacity: 0 }} // Animación de salida
                    className="w-[70%] h-[70%] bg-white p-4 rounded-lg shadow-md z-10">
                    <div className="flex justify-between px-4">
                      <h1 className="w-full text-left text-gray-600 font-semibold text-xl ">
                        Por rango de edad
                      </h1>
                      <MdOutlineZoomOutMap
                        className="text-2xl text-gray-600 cursor-pointer hover:text-gray-700 hover:scale-105"
                        onClick={() => {
                          setSelectedId(null)
                        }}
                      />
                    </div>
                    <PorEdad
                  dataGenero={dataEdad}
                  clientes={clientes}
                  setDataEdad={setDataEdad}
                />
                  </motion.div>
                    )
                  : selectedId == '2'
                    ? (
                  <motion.div
                  initial={{ opacity: 0 }} // Inicialmente invisible
                  animate={{ opacity: 1 }} // Animación de entrada
                  exit={{ opacity: 0 }} // Animación de salida
                  className="w-[70%] h-[70%] bg-white p-4 rounded-lg shadow-md z-10">
                    <div className="flex justify-between px-4">
                      <h1 className="w-full text-left text-gray-600 font-semibold text-xl ">
                        Por genero
                      </h1>
                      <MdOutlineZoomOutMap
                        className="text-2xl text-gray-600 cursor-pointer hover:text-gray-700 hover:scale-105"
                        onClick={() => {
                          setSelectedId(null)
                        }}
                      />
                    </div>
                    <PorGenero
                      dataGenero={dataGenero}
                      clientes={clientes}
                      setDataEdad={setDataGenero}
                    />
                  </motion.div>
                      )
                    : null}
              </motion.div>
            )}
          </AnimatePresence>
        </>
          )}
    </div>
  )
}
