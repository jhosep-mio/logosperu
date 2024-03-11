/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable multiline-ternary */
import { Dialog, DialogContent } from '@mui/material'
import { type Dispatch, type SetStateAction } from 'react'
import axios from 'axios'
import { Global } from '../../../../../../helper/Global'
import { toast } from 'sonner'
import { IoMdCloseCircle } from 'react-icons/io'
import moment from 'moment'
import useAuth from '../../../../../../hooks/useAuth'

interface valuesDatos {
  nombres: string
  email: string
  correo: string
  celular: string
  fecha: string
  hora_acta: string
  nombre_marca: string
  archivos: string
  id_contrato: string
  fecha_fin: string
  fecha_inicio: string
  observaciones: string
  comunnity: string
}

export const ModalInformacion = ({
  open,
  setOpen,
  eventSelected,
  loadingUpdate,
  brief,
  datos,
  setLoadingUpdate,
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
  brief: any | null
  datos: valuesDatos
}): JSX.Element => {
  const token = localStorage.getItem('token')
  const { auth } = useAuth()

  const enviarCorreo = async (): Promise<void> => {
    setLoadingUpdate(true)
    try {
      let currentDate = moment()
      if (currentDate.day() === 5) {
        currentDate = currentDate.add(2, 'days')
      } else if (currentDate.day() === 6) {
        currentDate = currentDate.add(1, 'days')
      }
      currentDate = currentDate.add(2, 'days')
      currentDate = currentDate.startOf('day').add(12, 'hours')
      const formattedDate = currentDate.format('DD/MM/YYYY')
      const data = new FormData()
      // @ts-expect-error
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      data.append('titulo', `SOLICITUD DE LLENADO DE BRIEF - ${datos?.empresa}`)
      data.append('nombres', datos.nombres)
      data.append('codigo', brief.codigo)
      data.append('fecha', formattedDate)
      data.append('firma', auth.firma)

      const respuesta = await axios.post(`${Global.url}/enviarSolicitudBriefCommunity`, data,
        {
          headers: {
            Authorization: `Bearer ${
              token !== null && token !== '' ? token : ''
            }`
          }
        }
      )
      if (respuesta.data.status == 'success') {
        toast.success('Correo enviado')
        setOpen(false)
        getOneBrief()
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingUpdate(false)
    }
  }

  const fechaActual = new Date()
  const fechaVencimiento = new Date(eventSelected?.fecha_vencimiento)
  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className=""
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
                {fechaVencimiento < fechaActual && brief.uso == '0'
                  ? <span className='text-red-700 text-xl'>PLAZO DE ENVIO DE INFORMACIÓN VENCIDO</span>
                  : brief.uso == '0' ? <span className='text-gray-700 text-xl'>El cliente aun no completo el brief con codigo <strong>{brief.codigo}</strong></span>
                    : <span className='text-gray-700 text-xl'>El cliente ya completo el llenado de brief con codigo <strong>{brief.codigo}</strong></span>
                }
              </div>
            </div>
            {fechaVencimiento < fechaActual && brief.uso == '0'
              ? <div className="w-full flex justify-center mt-10">
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
                    enviarCorreo()
                  }}
                >
                  Enviar acta de estado
                </button>
              )}
            </div>
              : brief.uso == '0' && <div className="w-full flex justify-center mt-10">
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
                    enviarCorreo()
                  }}
                >
                  Enviar solicitud de información
                </button>
              )}
            </div>}
          </section>
        </DialogContent>
      </Dialog>
    </>
  )
}
