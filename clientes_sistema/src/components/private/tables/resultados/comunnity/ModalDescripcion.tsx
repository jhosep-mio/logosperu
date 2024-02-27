/* eslint-disable multiline-ternary */
import { Dialog, DialogContent } from '@mui/material'
import { type Dispatch, type SetStateAction, useState, useEffect } from 'react'
import { Global } from '../../../../../helper/Global'
import {
  type comentariosValues,
  type arrayCategoriasToPortafolio
} from '../../../../shared/Interfaces'
import Editor from './Editor'
import { CrearComentario } from './CrearComentario'
import { ListaComentarios } from './ListaComentarios'
import { ResponderComentario } from './ResponderComentario'
import { Link } from 'react-router-dom'

export const ModalDescripcion = ({
  open,
  setOpen,
  eventSelected,
  events,
  setEvents,
  getOneBrief
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  eventSelected: any | null
  events: Event[]
  setEvents: Dispatch<SetStateAction<Event[]>>
  getOneBrief: () => Promise<void>
}): JSX.Element => {
  const [contexto, setContexto] = useState('')
  const [arrayArchivos, setArrayArchivos] = useState<
  arrayCategoriasToPortafolio[]
  >([])
  const [comentarios, setComentarios] = useState<comentariosValues[]>([])
  const [openResponder, setOpenResponder] = useState(false)
  const [idComentario, setIdComentario] = useState<string | null>('')
  const [texto, setTexto] = useState<string | null>('')

  const isVideo = (fileName: string): boolean => {
    const videoExtensions = ['.mp4', '.avi', '.mov'] // Agregar más extensiones de video si es necesario
    const fileExtension = fileName
      .substr(fileName.lastIndexOf('.'))
      .toLowerCase()
    return videoExtensions.includes(fileExtension)
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

      if (eventSelected?.event?.comentarios) {
        setComentarios(eventSelected?.event?.comentarios)
      } else {
        setComentarios([])
      }
    }
  }, [eventSelected, open])

  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="modal_community_clientes"
      >
        <DialogContent className="w-full h-[550px] grid grid-cols-2 gap-10 bg-transparent quitaR_padding">
          <section className="w-full h-[550px] bg-white p-4 rounded-md flex flex-col justify-between ">
            <div className="w-full ">
              <div className="w-full relative">
                <h1 className="w-full uppercase text-center font-bold text-2xl">
                  {eventSelected?.title}
                </h1>
              </div>
              <div className="mt-6">
                <Editor content={contexto} setContent={setContexto} />
              </div>
              <div className="w-full mt-4 flex items-center justify-between gap-3">
                <p className="uppercase text-gray-600">
                  Creado por:{' '}
                  <span className="font-bold">
                    {eventSelected?.event?.user?.name}
                  </span>
                </p>
              </div>
              <div className="w-full grid grid-cols-2 mt-6 gap-6 justify-center flex-grow ">
                {arrayArchivos?.map((pro: any) => (
                  <div className="flex gap-4 justify-center" key={pro.id}>
                    <div className="group relative">
                      {pro.imagen1.archivo != null && pro.imagen1.archivo && (
                          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                          <Link to={`${Global.urlImages}/archivosComunnity/${pro.imagen1.archivoName}`} target='_blank' className="w-full cursor-pointer">
                            {isVideo(pro.imagen1.archivoName) ? (
                              <video
                                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                src={`${Global.urlImages}/archivosComunnity/${pro.imagen1.archivoName}`}
                                muted
                                autoPlay
                                loop
                                className="w-[150px] h-[150px] object-contain bg-gray-100 shadow-md"
                              />
                            ) : (
                              <img
                                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                src={`${Global.urlImages}/archivosComunnity/${pro.imagen1.archivoName}`}
                                alt=""
                                className="w-[150px] h-[150px]  object-contain bg-gray-100 shadow-md"
                              />
                            )}
                          </Link>
                      )
                          }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full ">
            <CrearComentario
              setComentarios={setComentarios}
              getOneBrief={getOneBrief}
              events={events}
              setEvents={setEvents}
              eventSelected={eventSelected}
            />
            <ListaComentarios
              setIdComentario={setIdComentario}
              setOpen={setOpenResponder}
              setTexto={setTexto}
              comentarios={comentarios}
              setComentarios={setComentarios}
              getOneBrief={getOneBrief}
              events={events}
              setEvents={setEvents}
              eventSelected={eventSelected}
            />
            <ResponderComentario
              comentarios={comentarios}
              getComentarios={getOneBrief}
              idComentario={idComentario}
              open={openResponder}
              setComentarios={setComentarios}
              setIdComentario={setIdComentario}
              setOpen={setOpenResponder}
              textoComentario={texto}
              eventSelected={eventSelected}
              events={events}
              setEvents={setEvents}
            />
          </section>
        </DialogContent>

      </Dialog>
    </>
  )
}
