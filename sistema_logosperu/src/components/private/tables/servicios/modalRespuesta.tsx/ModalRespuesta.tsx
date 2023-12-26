import { Dialog, DialogContent } from '@mui/material'
import { type Dispatch, type SetStateAction, useState } from 'react'
import {
  type errorValues,
  type valuesResumen
} from '../../../../shared/schemas/Interfaces'
import Swal from 'sweetalert2'
import axios from 'axios'
import { Global } from '../../../../../helper/Global'
import useAuth from '../../../../../hooks/useAuth'

interface values {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  setResumen: Dispatch<SetStateAction<valuesResumen[]>>
  id: string | undefined
  getOneBrief: () => Promise<void>
  resumen: valuesResumen[]
  idIem: number | null
  setShowError: Dispatch<SetStateAction<errorValues | null>>
}

export const ModalRespuesta = ({
  open,
  setOpen,
  setResumen,
  idIem,
  id,
  getOneBrief,
  setShowError
}: values): JSX.Element => {
  const [respuestaAdmin, setRespuestaAdmin] = useState('')
  const [loading, setLoading] = useState(false)
  const token = localStorage.getItem('token')
  const { auth } = useAuth()
  const handleTextAdmin = (e: any): void => {
    setRespuestaAdmin(e.target.value)
    e.target.style.height = 'inherit'
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    e.target.style.height = `${e.target.scrollHeight}px` // Ajusta la altura
  }

  const obtenerFecha = (): string => {
    const fecha = new Date()
    return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`
  }

  const obtenerHora = (): string => {
    const fecha = new Date()
    return `${fecha.getHours()}:${fecha
      .getMinutes()
      .toString()
      .padStart(2, '0')}`
  }

  const agregarResumen = async (): Promise<void> => {
    if (respuestaAdmin) {
      setLoading(true)
      // Crear el nuevo resumen primero
      setResumen((resumenesPrevios) => {
        const nuevosResumenes = resumenesPrevios.map((resu) => {
          if (resu.id == idIem) {
            // Asegurémonos de que respuestas sea un array
            const respuestasArray = resu.respuestas || []

            return {
              ...resu,
              respuestas: [
                ...respuestasArray,
                {
                  id: Date.now(),
                  fecha: obtenerFecha(),
                  hora: obtenerHora(),
                  user: auth.name,
                  userId: auth.id,
                  texto: respuestaAdmin
                }
              ]
            }
          }
          return resu
        })
        const enviarDatos = async (): Promise<void> => {
          const data = new FormData()
          data.append('resumen', JSON.stringify(nuevosResumenes))
          data.append('_method', 'PUT')
          try {
            const respuesta = await axios.post(
              `${Global.url}/saveChat/${id ?? ''}`,
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
              setRespuestaAdmin('')
              setShowError({
                estado: 'success',
                texto: 'Respuesta enviada'
              })
              getOneBrief()
            } else {
              Swal.fire('Error al agregar respuesta', '', 'error')
            }
          } catch (error: unknown) {
            Swal.fire('Error al agregar respuesta', '', 'error')
          }
        }
        enviarDatos()
        return nuevosResumenes
      })
      setOpen(false)
      setRespuestaAdmin('')
      setLoading(false)
    } else {
      Swal.fire('Ingrese su resumen', '', 'warning')
    }
  }

  return (
    <>
      <Dialog
        open={open}
        keepMounted
        onClose={() => {
          setOpen(false)
        }}
        aria-describedby="alert-dialog-slide-description"
        className="dialog_comentario"
      >
        <DialogContent>
          <section className="flex flex-col justify-center items-center w-[500px]">
            <h2 className="font-bold mb-10 text-xl w-full">
              REGISTRAR COMENTARIO
            </h2>
            <textarea
              placeholder="Escribir..."
              className="w-full h-fit pl-4 pr-14 outline-none placeholder:text-black/60 py-4 resize-none overflow-hidden bg-gray-300 text-black "
              rows={1}
              value={respuestaAdmin}
              onFocus={handleTextAdmin}
              onChange={handleTextAdmin}
            ></textarea>
            <button
              type="button"
              className={`${
                !loading ? 'bg-green-700' : 'bg-green-700/60'
              } px-4 py-2 rounded-xl text-white mt-10`}
              onClick={() => {
                if (!loading) {
                  agregarResumen()
                }
              }}
            >
              Guardar comentario
            </button>
          </section>
        </DialogContent>
      </Dialog>
    </>
  )
}
