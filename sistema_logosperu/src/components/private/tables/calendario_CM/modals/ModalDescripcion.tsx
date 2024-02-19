import { Dialog, DialogContent } from '@mui/material'
import { type Dispatch, type SetStateAction, useState, useEffect } from 'react'
import Editor from '../Editor'
import {
  type usurioValues,
  type arrayCategoriasToPortafolio
} from '../../../../shared/schemas/Interfaces'
import { RViewer, RViewerTrigger } from 'react-viewerjs'
import { Global } from '../../../../../helper/Global'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { IoImageOutline } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import useAuth from '../../../../../hooks/useAuth'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid'

export const ModalDescripcion = ({
  open,
  setOpen,
  eventSelected,
  colaboradores,
  events,
  setEvents,
  loadingUpdate,
  setLoadingUpdate
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  eventSelected: any | null
  colaboradores: never[]
  events: Event[]
  setEvents: Dispatch<SetStateAction<Event[]>>
  loadingUpdate: boolean
  setLoadingUpdate: Dispatch<SetStateAction<boolean>>
}): JSX.Element => {
  const [contexto, setContexto] = useState('')
  const [arrayArchivos, setArrayArchivos] = useState<
  arrayCategoriasToPortafolio[]
  >([])
  const { setShowError } = useAuth()
  const token = localStorage.getItem('token')
  const [selectedUser, setSelectedUser] = useState<usurioValues | null>(null)
  const [cantidadVistas, setCantidadVistas] = useState<string>('')
  const [openRegistro, setOpenRegistro] = useState(false)
  const [selectedArchivo, setselectedArchivo] = useState<string>('')
  const [archivosAEliminar, setarchivosAEliminar] = useState<arrayCategoriasToPortafolio[] | undefined>([])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    const file = e.target.files?.[0]
    if (file) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const uniqueFileName = `${uuidv4()}_${file.name}`
      setArrayArchivos((prevState) => [
        ...prevState,
        {
          id: uuidv4(),
          imagen1: {
            archivo: file,
            archivoName: uniqueFileName
          },
          arrayColaboradores: colaboradores
            .filter((cola: any) => cola.id_rol != '99')
            .map((cola: any) => ({
              usuario: {
                id: cola.id,
                name: cola.name
              },
              cantidadVistas: null
            }))
        }
      ])
    }
    e.target.value = ''
  }

  const isVideo = (fileName: string): boolean => {
    const videoExtensions = ['.mp4', '.avi', '.mov'] // Agregar más extensiones de video si es necesario
    const fileExtension = fileName
      .substr(fileName.lastIndexOf('.'))
      .toLowerCase()
    return videoExtensions.includes(fileExtension)
  }

  const eliminarArray = (id: number | null): void => {
    const imagenEliminada = arrayArchivos.find(imagen => imagen.id === id)
    if (imagenEliminada) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setarchivosAEliminar(prevArchivosAEliminar => [...prevArchivosAEliminar, imagenEliminada.imagen1.archivoName])
    }
    const nuevoArray = arrayArchivos.filter((peso) => peso.id !== id)
    setArrayArchivos(nuevoArray)
  }
  const updateCantidadVistas = (): void => {
    if (selectedUser && selectedArchivo) {
      setArrayArchivos(prevState => {
        return prevState.map((archivo: any) => {
          if (archivo.id == selectedArchivo) {
            return {
              ...archivo,
              arrayColaboradores: archivo.arrayColaboradores.map((col: any) => {
                if (col.usuario.id == selectedUser.id) {
                  return {
                    ...col,
                    cantidadVistas
                  }
                }
                return col
              })
            }
          }
          return archivo
        })
      })
      setOpenRegistro(false) // Cerrar el modal después de grabar
    }
  }

  const updateEventDescriptionById = (): void => {
    const updatedEvents = events.map((event: any) => {
      if (event.id == eventSelected?.event.id) {
        return {
          ...event,
          descripcion: {
            contexto,
            arrayArchivos
          }
        }
      }
      return event
    })
    updateCita(updatedEvents)
    setEvents(updatedEvents)
  }

  useEffect(() => {
    if (eventSelected?.event) {
      if (eventSelected?.event?.descripcion?.contexto) {
        setContexto(eventSelected?.event?.descripcion?.contexto)
      } else {
        setContexto('')
      }
      if (eventSelected?.event?.descripcion?.arrayArchivos) {
        setArrayArchivos(eventSelected?.event?.descripcion?.arrayArchivos)
      } else {
        setArrayArchivos([])
      }
      setarchivosAEliminar([])
    }
  }, [eventSelected])

  const updateCita = async (updatedEvents: Event[]): Promise<void> => {
    setLoadingUpdate(true)
    const data = new FormData()
    arrayArchivos.forEach((image1, index1) => {
      if (image1.imagen1.archivo) {
        data.append(`images1[${index1}]`, image1.imagen1.archivo)
        data.append(`names1[${index1}]`, image1.imagen1.archivoName)
      }
    })
    data.append('community', JSON.stringify(updatedEvents))
    data.append('archivosAEliminar', JSON.stringify(archivosAEliminar))
    data.append('_method', 'PUT')
    try {
      const respuesta = await axios.post(`${Global.url}/updateGestorComunnity/1`, data, {
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? token : ''
          }`
        }
      })

      if (respuesta.data.status == 'success') {
        setShowError({
          estado: 'success',
          texto: 'Evento actualizado'
        })
      } else {
        Swal.fire('Error al actualizar', '', 'error')
      }
    } catch (error) {
      Swal.fire('Error', '', 'error')
    } finally {
      setLoadingUpdate(false)
      setOpen(false)
    }
  }

  const eliminarRegistro = (): void => {
    if (arrayArchivos.length == 0) {
      const updatedEvents = events.filter((event: any) => event.id != eventSelected?.event.id)
      setEvents(updatedEvents)
      updateCita(updatedEvents)
    } else {
      Swal.fire('Los archivos deben ser eliminados.', '', 'warning')
    }
  }

  const handleDeleteClick = (): void => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el registro. ¿Deseas continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma la eliminación, ejecuta la acción de eliminación aquí
        eliminarRegistro() // Función para eliminar el registro
      }
    })
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="modal_citas_clientes3"
      >
        <DialogContent className="w-full ">
            <div className='w-full relative'>
                <h1 className="w-full uppercase text-center font-bold text-2xl">
                    {eventSelected?.title}
                </h1>
                <RiDeleteBin6Line className='absolute right-0 text-2xl text-red-500 top-0 bottom-0 cursor-pointer my-auto' onClick={handleDeleteClick}/>
            </div>
          <Editor editorHtml={contexto} setEditorHtml={setContexto} />

          <div className="w-fit mt-4">
            <div className="relative">
              <button
                type="button"
                className="bg-red-500 text-white px-4 text-lg rounded-lg flex gap-3 items-center"
              >
                <IoImageOutline className="text-xl" />
                Adjuntar archivo
              </button>
              <input
                className="absolute inset-0 file:hidden opacity-0 cursor-pointer"
                type="file"
                accept="image/*, video/*" // Aquí se aceptan tanto imágenes como videos
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div className="w-full flex flex-col mt-6 gap-6 justify-center flex-grow ">
            {arrayArchivos?.map((pro: any) => (
                <div className="flex gap-4" key={pro.id}>
                    <div className="group relative" key={pro.id}>
                        {pro.imagen1.archivo != null && pro.imagen1.archivo.size > 0
                          ? (
                              pro.imagen1.archivo.type.includes('image')
                                ? (
                            <RViewer
                            imageUrls={`${URL.createObjectURL(pro.imagen1.archivo)}`}
                            >
                            <RViewerTrigger>
                                <img
                                src={`${URL.createObjectURL(pro.imagen1.archivo)}`}
                                className="w-[200px] h-[200px] object-contain cursor-pointer bg-gray-100 shadow-md"
                                />
                            </RViewerTrigger>
                            </RViewer>
                                  )
                                : (
                            <video
                            src={`${URL.createObjectURL(pro.imagen1.archivo)}`}
                            muted
                            autoPlay
                            loop
                            className="w-[200px] h-[200px] object-contain bg-gray-100 shadow-md"
                            />
                                  )
                            )
                          : (
                              pro.imagen1.archivo && (
                            <div className="w-full">
                            {isVideo(pro.imagen1.archivoName)
                              ? (
                                <video
                                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                src={`${Global.urlImages}/archivosComunnity/${pro.imagen1.archivoName}`}
                                muted
                                autoPlay
                                loop
                                className="w-[200px] h-[200px] object-contain bg-gray-100 shadow-md"
                                />
                                )
                              : (
                                <img
                                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                src={`${Global.urlImages}/archivosComunnity/${pro.imagen1.archivoName}`}
                                alt=""
                                className="w-[200px] h-[200px]  object-contain bg-gray-100 shadow-md"
                                />
                                )}
                            </div>
                              )
                            )}
                        <RiDeleteBin6Line
                        className="cursor-pointer text-center opacity-0 text-main transition-opacity group-hover:opacity-100 absolute right-1 top-1 text-2xl z-10"
                        onClick={() => {
                          eliminarArray(pro.id)
                        }}
                        />
                    </div>
                    <div className="w-full">
                        <div className=" p-2 rounded-xl">
                        <div className="hidden  bg-gray-200 rounded-xl mb-3 md:grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4  text-black">
                            <h5 className="md:text-center">Usuario</h5>
                            <h5 className="md:text-center">Vistas</h5>
                        </div>
                        {pro.arrayColaboradores.map((col: any, index: number) => (
                            <div
                            key={index}
                            className="hidden md:grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4  text-black"
                            >
                                <p
                                  onClick={() => {
                                    setOpenRegistro(true)
                                    setSelectedUser(col.usuario)
                                    setCantidadVistas(col.cantidadVistas || '')
                                    setselectedArchivo(pro.id || '')
                                  }}
                                className={`w-full text-center cursor-pointer ${!col.cantidadVistas ? 'text-main' : 'text-black'}`}>{col.usuario.name}</p>
                                <p className="w-full text-center">{col.cantidadVistas}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </DialogContent>
        <AnimatePresence>
          {openRegistro && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className=" fixed inset-0 m-auto z-[999999999999] w-full h-full bg-black/30 flex items-center justify-center"
            >
              <div className="w-[400px] h-fit p-6 bg-white rounded-lg shadow-md relative">
                <span
                  onClick={() => {
                    setOpenRegistro(false)
                  }}
                  className="text-main text-lg absolute top-0 right-2 cursor-pointer hover:text-red-900 hover:scale-125 transition-all"
                >
                  x
                </span>
                <h2 className="text-xl uppercase mb-4 text-black w-full text-center font-bold">
                  Editar visitas
                </h2>
                <select
                  name=""
                  id=""
                  disabled
                  value={selectedUser?.id}
                  className="mb-4 w-full border border-gray-300 rounded-md px-4 py-2"
                >
                  <option value="">Seleccionar</option>
                  {colaboradores
                    .filter((cola: any) => cola.id_rol != 99)
                    .map((cola: usurioValues) => (
                    <option value={cola.id} key={cola.id}>
                      {cola.name}
                    </option>
                    ))}
                </select>
                <input
                  id="cantidadVistas"
                  className="swal2-input w-full border border-gray-300 rounded-md px-4 py-2"
                  placeholder="Cantidad de vistas"
                  value={cantidadVistas}
                  onChange={(e) => { setCantidadVistas(e.target.value) }}
                />
                <div className="w-full flex">
                  <button
                    type="button"
                    onClick={updateCantidadVistas}
                    className="mx-auto bg-red-500 rounded-lg px-5 py-1 mt-4 w-fit text-center text-white"
                  >
                    Grabar
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className='w-full flex justify-center mb-3'>
            {loadingUpdate
              ? <button
              disabled
            className='w-fit mx-auto px-5 py-2 rounded-md bg-green-700 transition-colors text-white'>Validando...</button>
              : <button
            className='w-fit mx-auto px-5 py-2 rounded-md bg-green-600 hover:bg-green-700 transition-colors text-white' onClick={() => { updateEventDescriptionById() }}>Grabar</button>
            }
        </div>
      </Dialog>
    </>
  )
}
