/* eslint-disable multiline-ternary */
import { Dialog, DialogContent } from '@mui/material'
import { type Dispatch, type SetStateAction, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Global } from '../../../../../../helper/Global'
import { toast } from 'sonner'
import Editor from '../../../calendario_CM/Editor'
import { IoMdCloseCircle } from 'react-icons/io'

export const ModalInformacion = ({
  open,
  setOpen,
  eventSelected,
  events,
  setEvents,
  loadingUpdate,
  getOneBrief
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  eventSelected: any | null
  events: Event[]
  setEvents: Dispatch<SetStateAction<Event[]>>
  loadingUpdate: boolean
  setLoadingUpdate: Dispatch<SetStateAction<boolean>>
  getOneBrief: () => Promise<void>
}): JSX.Element => {
  const { id } = useParams()
  const [contexto, setContexto] = useState('')
  const token = localStorage.getItem('token')

  useEffect(() => {
    console.log(eventSelected)
    if (eventSelected?.event) {
      if (eventSelected?.event?.descripcion?.contexto) {
        setContexto(eventSelected?.event?.descripcion?.contexto)
      } else {
        setContexto('')
      }
    }
  }, [eventSelected, open])

  const updateCita = async (updatedEvents: Event[]): Promise<void> => {
    const data = new FormData()
    data.append('community', JSON.stringify(updatedEvents))
    data.append('_method', 'PUT')
    try {
      const respuesta = await axios.post(
        `${Global.url}/updateCalendarioComunnityVentas/${id ?? ''}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${
              token !== null && token !== '' ? token : ''
            }`
          }
        }
      )
      if (respuesta.data.status == 'success') {
        toast.success('Informacion guardada')
        getOneBrief()
      } else {
        toast.error('Error al guardar')
      }
    } catch (error) {
      console.log(error)
      toast.error('Error al guardar')
    }
  }

  const updateEventDescriptionById = (): void => {
    const updatedEvents = events.map((event: any) => {
      if (event.id == eventSelected?.event.id) {
        return {
          ...event,
          descripcion: {
            contexto
          }
        }
      }
      return event
    })
    updateCita(updatedEvents)
    setEvents(updatedEvents)
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
        className="modal_community_clientes"
      >
        <DialogContent className="w-full h-fit bg-transparent quitaR_padding relative">
        <IoMdCloseCircle className='absolute top-2 right-6 text-3xl z-10 cursor-pointer' onClick={() => { setOpen(false) }}/>
          <section className="w-full h-fit bg-white p-4 rounded-md flex flex-col justify-between overflow-y-auto">
            <div className="w-full ">
              <div className="w-full relative">
                <h1 className="w-full uppercase text-center font-bold text-2xl">
                  {eventSelected?.title}
                </h1>
              </div>
              <div className="mt-6">
                <Editor content={contexto} setContent={setContexto} />
              </div>
            </div>
            <div className="w-full flex justify-center my-3">
              {loadingUpdate ? (
                <button
                  disabled
                  className="w-fit mx-auto px-5 py-2 rounded-md bg-green-700 transition-colors text-white"
                >
                  Validando...
                </button>
              ) : (
                <button
                  className="w-fit mx-auto px-5 py-2 rounded-md bg-green-600 hover:bg-green-700 transition-colors text-white"
                  onClick={() => {
                    updateEventDescriptionById()
                  }}
                >
                  Grabar
                </button>
              )}
            </div>
          </section>
        </DialogContent>
      </Dialog>
    </>
  )
}
