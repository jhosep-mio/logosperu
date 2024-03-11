/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable multiline-ternary */
import { Dialog, DialogContent } from '@mui/material'
import { type Dispatch, type SetStateAction, useState } from 'react'
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

export const ModalCorreoConfirmacion = ({
  open,
  setOpen,
  eventSelected,
  loadingUpdate,
  datos,
  setLoadingUpdate,
  getOneBrief
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  eventSelected: any | null
  loadingUpdate: boolean
  setLoadingUpdate: Dispatch<SetStateAction<boolean>>
  getOneBrief: () => Promise<void>
  datos: valuesDatos
}): JSX.Element => {
  const token = localStorage.getItem('token')
  const { auth } = useAuth()
  const marca = datos?.nombre_marca
  const [asunto, setAsunto] = useState(`CONFIRMACION DE CALENDARIO ${(marca).toUpperCase()} -`)

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
      data.append('titulo', asunto)
      data.append('nombres', datos.nombres)
      data.append('fecha', formattedDate)
      data.append('firma', auth.firma)
      data.append('email_cliente', datos?.email)
      data.append('celular_cliente', datos?.celular)

      const respuesta = await axios.post(`${Global.url}/confirmacionCalendario`, data,
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
        <DialogContent className="w-[600px] h-fit bg-transparent quitaR_padding relative">
        <IoMdCloseCircle className='absolute top-2 right-6 text-3xl z-10 cursor-pointer' onClick={() => { setOpen(false) }}/>
          <section className="w-full h-fit bg-white p-4 mt-3 rounded-md flex flex-col justify-between overflow-y-auto">
          <input
            type="text"
            placeholder="ASUNTO"
            className="text-black outline-none px-4 py-3 border border-gray-400 w-full"
            value={asunto}
            onChange={(e) => {
              setAsunto(e.target.value)
            }}
          />
           <div className="w-full flex justify-center mt-10">
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
                  Enviar confirmación
                </button>
              )}
            </div>
          </section>
        </DialogContent>
      </Dialog>
    </>
  )
}
