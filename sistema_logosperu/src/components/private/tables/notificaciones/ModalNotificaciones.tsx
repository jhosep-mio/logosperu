import { GrClose } from 'react-icons/gr'
import useAuth from '../../../../hooks/useAuth'
import { Skeleton, Stack } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { AcordionNotifications } from './AcordionNotifications'
export const ModalNotificaciones = ({ colaboradores }: { colaboradores: never[] }): JSX.Element => {
  const { auth } = useAuth()
  const [selectectid, setSelectedId] = useState('0')
  const [groupedNotificacioness, setGroupedNotificaciones] = useState()
  const {
    loadingComponents,
    setLoadingComponents,
    notificaciones,
    loadingNotifi,
    estado,
    setEstado
  } = useAuth()

  const obtenerFechaKey = (fecha: string): string => {
    const fechaObj = new Date(fecha)
    const year = fechaObj.getUTCFullYear() // Obtener año en UTC
    const month = String(fechaObj.getUTCMonth() + 1).padStart(2, '0') // Obtener mes en UTC
    const day = String(fechaObj.getUTCDate()).padStart(2, '0') // Obtener día en UTC
    return `${day}-${month}-${year}`
  }
  // Función para calcular la diferencia de tiempo en horas
  useEffect(() => {
    const newGroupedNotificaciones: any = {}
    if (selectectid != '0') {
      notificaciones
        .filter(notificacion => notificacion.id_usuario == Number(selectectid))
        .forEach((notificacion) => {
          const fechaKey = obtenerFechaKey(notificacion.created_at)
          if (!newGroupedNotificaciones[fechaKey]) {
            newGroupedNotificaciones[fechaKey] = []
          }
          newGroupedNotificaciones[fechaKey].push(notificacion)
        })
    } else {
      notificaciones.forEach((notificacion) => {
        const fechaKey = obtenerFechaKey(notificacion.created_at)
        if (!newGroupedNotificaciones[fechaKey]) {
          newGroupedNotificaciones[fechaKey] = []
        }
        newGroupedNotificaciones[fechaKey].push(notificacion)
      })
    }
    setGroupedNotificaciones(newGroupedNotificaciones)
  }, [selectectid, notificaciones])

  return (
    <AnimatePresence>
      {loadingComponents && (
        <>
            {auth.id_rol == 99
              ? <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full fixed h-full inset-0 bg-black/50 flex items-center z-10"
                onClick={() => { setLoadingComponents(false) }}
            >
                <div className="bg-white w-1/3 h-[97vh] ml-[15%] my-auto block rounded-lg overflow-hidden"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation() // Evita que el evento se propague al contenedor padre
            }}
                >
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-black font-bold text-2xl p-5">
                    Notificaciones
                    </h1>
                    <div className="flex gap-4 p-5">
                    {/* <FaExpandAlt className='text-gray-400 hover:text-black transition-colors cursor-pointer text-lg'/> */}
                    <GrClose
                        className="text-gray-400 hover:text-black transition-colors cursor-pointer text-xl"
                        onClick={() => {
                          setLoadingComponents(!loadingComponents)
                        }}
                    />
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-3 bg-white rounded-lg  py-[3px] relative border_inner mx-5" >
                    <span
                    className={`absolute w-1/2 h-[32px] my-auto top-0 bottom-0 bg_gradiante rounded-lg transition-all duration-300
                    ${
                        estado == 0
                        ? 'left-[3px]'
                        : estado == 1
                        ? 'left-[49%]'
                        : 'left-2/3'
                    }
                    `}
                    ></span>
                    <button
                    onClick={() => {
                      setEstado(0)
                    }}
                    className={`w-full h-full z-10 transition-colors duration-300 ${
                        estado == 0 ? 'text-white' : 'text-gray-400'
                    } rounded-lg py-1 bg-transparent`}
                    >
                    Nuevos
                    </button>
                    <button
                    onClick={() => {
                      setEstado(1)
                    }}
                    className={`w-full h-full z-10 transition-colors duration-300 ${
                        estado == 1 ? 'text-white' : 'bg-transparent text-gray-400'
                    } rounded-lg py-1 `}
                    >
                    Todos
                    </button>
                    {/* <button
                    onClick={() => {
                        setEstado(2)
                    }}
                    className={`w-full h-full z-10 transition-colors duration-300 ${
                        estado == 2 ? 'text-white' : 'bg-transparent text-gray-400'
                    } rounded-lg py-1 `}
                    >
                    Archivados
                    </button> */}
                </div>
                <div className='flex flex-wrap px-4 justify-center gap-3 mt-4'>
                    {colaboradores.filter((colaborador: { id_rol: string, id: string, name: string }) => colaborador.id != auth.id && colaborador.id != '25')
                      .map((colaborador: { id_rol: string, id: string, name: string }) => (
                        <span key={colaborador.id} className={`px-4 py-1 bg-gray-200 cursor-pointer rounded-md text-black text-sm hover:text-white hover:bg-main transition-colors ${selectectid == colaborador.id ? 'bg-main text-white' : ''} transition-colors`}
                        onClick={() => { if (selectectid != colaborador.id) { setSelectedId(colaborador.id) } else { setSelectedId('0') } }}>{colaborador.name}</span>
                      ))}
                </div>

                {!loadingNotifi
                  ? <AcordionNotifications groupedNotificaciones={groupedNotificacioness} setLoadingComponents={setLoadingComponents}/>
                  : (
                    <section className=" h-[90%] overflow-y-hidden p-5">
                    <div className="h-full ">
                        <Stack spacing={1} className="w-full">
                        {/* For variant="text", adjust the height via font-size */}
                        <Skeleton variant="rounded" height={130} animation="wave" />
                        <Skeleton variant="rounded" height={130} animation="wave" />
                        <Skeleton variant="rounded" height={130} animation="wave" />
                        <Skeleton variant="rounded" height={130} animation="wave" />
                        <Skeleton variant="rounded" height={130} animation="wave" />
                        <Skeleton variant="rounded" height={130} animation="wave" />
                        </Stack>
                    </div>
                    </section>
                    )}
                </div>
            </motion.div>
              : <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full fixed h-full inset-0 bg-black/50 flex items-center z-10"
            onClick={() => { setLoadingComponents(false) }}
            >
            <div className="bg-white w-1/3 h-[97vh] ml-[15%] my-auto block rounded-lg overflow-hidden"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation() // Evita que el evento se propague al contenedor padre
            }}
            >
                <div className="w-full flex items-center justify-between">
                <h1 className="text-black font-bold text-2xl p-5">
                    Notificaciones
                </h1>
                <div className="flex gap-4 p-5">
                    {/* <FaExpandAlt className='text-gray-400 hover:text-black transition-colors cursor-pointer text-lg'/> */}
                    <GrClose
                    className="text-gray-400 hover:text-black transition-colors cursor-pointer text-xl"
                    onClick={() => {
                      setLoadingComponents(!loadingComponents)
                    }}
                    />
                </div>
                </div>
                <div className="grid grid-cols-2 mt-6 bg-white rounded-lg  py-[3px] relative border_inner mx-5">
                <span
                    className={`absolute w-1/2 h-[32px] my-auto top-0 bottom-0 bg_gradiante rounded-lg transition-all duration-300
                    ${
                    estado == 0
                        ? 'left-[3px]'
                        : estado == 1
                        ? 'left-[49%]'
                        : 'left-2/3'
                    }
                    `}
                ></span>
                <button
                    onClick={() => {
                      setEstado(0)
                    }}
                    className={`w-full h-full z-10 transition-colors duration-300 ${
                    estado == 0 ? 'text-white' : 'text-gray-400'
                    } rounded-lg py-1 bg-transparent`}
                >
                    Nuevos
                </button>
                <button
                    onClick={() => {
                      setEstado(1)
                    }}
                    className={`w-full h-full z-10 transition-colors duration-300 ${
                    estado == 1 ? 'text-white' : 'bg-transparent text-gray-400'
                    } rounded-lg py-1 `}
                >
                    Todos
                </button>
                {/* <button
                    onClick={() => {
                    setEstado(2)
                    }}
                    className={`w-full h-full z-10 transition-colors duration-300 ${
                    estado == 2 ? 'text-white' : 'bg-transparent text-gray-400'
                    } rounded-lg py-1 `}
                >
                    Archivados
                </button> */}
                </div>
                {!loadingNotifi
                  ? <AcordionNotifications groupedNotificaciones={groupedNotificacioness} setLoadingComponents={setLoadingComponents}/>
                  : (
                <section className=" h-[90%] overflow-y-hidden p-5">
                    <div className="h-full ">
                    <Stack spacing={1} className="w-full">
                        {/* For variant="text", adjust the height via font-size */}
                        <Skeleton variant="rounded" height={130} animation="wave" />
                        <Skeleton variant="rounded" height={130} animation="wave" />
                        <Skeleton variant="rounded" height={130} animation="wave" />
                        <Skeleton variant="rounded" height={130} animation="wave" />
                        <Skeleton variant="rounded" height={130} animation="wave" />
                        <Skeleton variant="rounded" height={130} animation="wave" />
                    </Stack>
                    </div>
                </section>
                    )}
            </div>
            </motion.div>
        }
        </>
      )}
    </AnimatePresence>
  )
}
