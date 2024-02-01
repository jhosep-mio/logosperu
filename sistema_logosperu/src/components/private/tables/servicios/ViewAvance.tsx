import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import Slide from '@mui/material/Slide'
import { type TransitionProps } from '@mui/material/transitions'
import {
  type arrayImagenes,
  type arrayCorreos,
  type avanceValues
} from '../../../shared/schemas/Interfaces'
import { ViewSwiperCorreos } from './ViewSwiperCorreos'
import { ViewSwiperImagenes } from './ViewSwiperImagenes'
import { ViewSwiperArchivos } from './modals/ViewSwiperArchivos'
import { SwiperCorreos } from './reenvioCorreos/SwiperCorreos'
import useAuth from '../../../../hooks/useAuth'
import axios from 'axios'
import { Global } from '../../../../helper/Global'
import Swal from 'sweetalert2'
import { motion, AnimatePresence } from 'framer-motion'
import { Loading } from '../../../shared/Loading'
import { AgregarCorreos } from './reenvioCorreos/AgregarCorreos'

const Transition = React.forwardRef(function Transition (
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface valuesDatos {
  nombres: string
  email: string
  nombre_marca: string
}

interface values {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  avance: avanceValues
  datos: valuesDatos
}

export const ViewAvance = ({ open, setOpen, avance, datos }: values): JSX.Element => {
  const handleClose = (): void => {
    setOpen(false)
  }
  const { auth } = useAuth()
  const [correos, setCorreos] = React.useState<arrayCorreos[]>([])
  const [correosReenvio, setCorreosReenvio] = React.useState<arrayCorreos[]>([])
  const [arrayImagenes, setArrayImagenes] = React.useState<arrayImagenes[]>([])
  const [arrayArchivos, setArrayArchivos] = React.useState<arrayImagenes[]>([])
  const [contexto, setContexto] = React.useState('')
  const [asunto, setAsunto] = React.useState('')
  const [empresa, setEmpresa] = React.useState('')
  const [contacto, setContacto] = React.useState('')
  const [openReenvio, setOpenReenvio] = React.useState(false)
  const [motivo, setMotivo] = React.useState('')
  const [fechaacta, setFecha] = React.useState('')
  const [conclusion, setConclusion] = React.useState('')
  const [firma, setFirma] = React.useState('')
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if (avance.contexto) {
      setContexto(avance.contexto)
    } else {
      setContexto('')
    }
    if (avance.imagenes) {
      setArrayImagenes(avance.imagenes)
    } else {
      setArrayImagenes([])
    }
    if (avance.archivos) {
      setArrayArchivos(avance.archivos)
    } else {
      setArrayArchivos([])
    }
    if (avance.correos) {
      setCorreos(avance.correos)
    } else {
      setCorreos([])
    }
    if (avance.asunto) {
      setAsunto(avance.asunto)
    } else {
      setAsunto('')
    }
    if (avance.empresa) {
      setEmpresa(avance.empresa)
    } else {
      setEmpresa('')
    }
    if (avance.motivo) {
      setMotivo(avance.motivo)
    } else {
      setMotivo('')
    }
    if (avance.contacto) {
      setContacto(avance.contacto)
    } else {
      setContacto('')
    }
    if (avance.fechaacta) {
      setFecha(avance.fechaacta)
    } else {
      setFecha('')
    }
    if (avance.conclusion) {
      setConclusion(avance.conclusion)
    } else {
      setConclusion('')
    }
    if (avance.firma) {
      setFirma(avance.firma)
    } else {
      setFirma('')
    }
    setLoading(false)
  }, [avance])

  React.useEffect(() => {}, [open])

  const reenviarCorreo = async (): Promise<void> => {
    console.log(arrayArchivos)
    console.log(arrayImagenes)
    if (correosReenvio.length > 0) {
      const token = localStorage.getItem('token')
      setLoading(true)
      const data = new FormData()
      if (asunto && empresa && contacto && motivo && fechaacta && conclusion) {
        data.append('titulo', `RE:${asunto}`)
        data.append('empresa', empresa)
        data.append('contacto', contacto)
        data.append('motivo', motivo)
        data.append('fecha', fechaacta)
        data.append('nombres', datos.nombres)
        data.append('contexto', contexto)
        data.append('conclusion', conclusion)
        data.append('email', auth.email)
        data.append('email_alter', auth.email_alter)
        data.append('correos', JSON.stringify(correosReenvio))
        data.append('password', auth.pass_email)
        if (firma) {
          data.append('firma', firma)
        } else {
          data.append('firma', auth.firma)
        }
        avance.imagenes.forEach((image1, index1) => {
          data.append(`names1[${index1}]`, image1.imagen1.archivoName)
        })
        avance.archivos.forEach((image1, index1) => {
          data.append(`names2[${index1}]`, image1.imagen1.archivoName)
        })
        try {
          const respuesta = await axios.post(
              `${Global.url}/renviarActaEstado`,
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
            Swal.fire('Correo reenviado', '', 'success')
            setOpenReenvio(false)
            setCorreosReenvio([])
          } else {
            Swal.fire('Error al registrar', '', 'error')
          }
        } catch (error: unknown) {
          console.log(error)
          Swal.fire('Error', '', 'error')
        }
      } else {
        data.append('titulo', `RE:${asunto}`)
        data.append('nombres', datos.nombres)
        data.append('contexto', contexto)
        data.append('email', auth.email)
        data.append('email_alter', auth.email_alter)
        data.append('correos', JSON.stringify(correosReenvio))
        data.append('password', auth.pass_email)
        if (firma) {
          data.append('firma', firma)
        } else {
          data.append('firma', auth.firma)
        }
        avance.imagenes.forEach((image1, index1) => {
          data.append(`names1[${index1}]`, image1.imagen1.archivoName)
        })
        try {
          const respuesta = await axios.post(
                `${Global.url}/renviarAvances`,
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
            Swal.fire('Correo reenviado', '', 'success')
            setOpenReenvio(false)
            setCorreosReenvio([])
          } else {
            Swal.fire('Error al registrar', '', 'error')
          }
        } catch (error: unknown) {
          console.log(error)
          Swal.fire('Error', '', 'error')
        }
      }
      setLoading(false)
    } else {
      Swal.fire('Debe colocar almenos un corrreo', '', 'warning')
    }
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      className="moda_registro"
    >
      {!loading
        ? <DialogContentText id="alert-dialog-slide-description">
          <h2 className="w-full font-bold text-2xl text-center text-white bg-main/80 py-2">
            {asunto}
          </h2>
          <div className="w-full flex flex-col gap-2 items-center justify-center py-2 px-6">
            <h2 className="w-full text-left text-black font-bold text-xl">
              Correos
            </h2>
            <ViewSwiperCorreos correos={correos} />
          </div>
          {empresa &&
          <div className="flex items-center  border border-b-gray-400">
            <p className="block h-full py-3 px-4 border-r border-r-gray-400 text-black font-bold w-[150px]">
              EMPRESA:
            </p>
            <input
              type="text"
              className="uppercase text-black outline-none px-4 py-3 w-full"
              value={empresa}
              disabled
            />
          </div>}
          {contacto &&
          <div className="flex items-center  border border-b-gray-400">
            <p className="block h-full py-3 px-4 border-r border-r-gray-400 text-black font-bold w-[150px]">
              CONTACTO:
            </p>
            <input
              type="text"
              className="uppercase text-black outline-none px-4 py-3 w-full"
              value={contacto}
            />
          </div>}
          {motivo &&
          <div className="flex items-center  border border-b-gray-400">
            <p className="block h-full py-3 px-4 border-r border-r-gray-400 text-gray-500 font-bold w-[150px]">
              MOTIVO:
            </p>
            <input
              type="text"
              className="uppercase text-gray-500 outline-none px-4 py-3 w-full"
              value={motivo}
              disabled
            />
          </div>}
          {fechaacta &&
          <>
            <div className="flex items-center  border border-b-gray-400">
                <p className="block h-full py-3 px-4 border-r border-r-gray-400 text-black font-bold w-[150px]">
                FECHA:
                </p>
                <input
                type="text"
                className="uppercase text-black outline-none px-4 py-3 w-full"
                value={fechaacta}
                />
            </div>
            <div className="flex items-center  border border-b-gray-400">
                <p className="block h-full py-3 px-4 border-r border-r-gray-400 text-gray-500 font-bold w-[150px]">
                ASUNTO:
                </p>
                <input
                type="text"
                className="uppercase text-gray-500 outline-none px-4 py-3 w-full"
                value={asunto}
                disabled
                />
            </div>
          </>
          }
          <hr className="py-2" />
          <section className="px-6 py-2 flex flex-col gap-4 overflow-hidden">
            <h2 className="w-full text-left text-black font-bold text-xl">
              Contenido
            </h2>
            <div
              className="descripcion-producto"
              dangerouslySetInnerHTML={{ __html: contexto }}
            ></div>
          </section>
          {/* <hr className="py-2" /> */}
          {arrayImagenes.length > 0 && (
            <section className="px-6">
              <h2 className="w-full text-left text-black font-bold text-xl">
                Imagenes adjuntas
              </h2>
              <ViewSwiperImagenes arrayImagenes={arrayImagenes} />
            </section>
          )}
          {arrayArchivos.length > 0 && (
            <section className="px-6">
              <h2 className="w-full text-left text-black font-bold text-xl">
                Archivos adjuntos
              </h2>
              <ViewSwiperArchivos arrayImagenes={arrayArchivos} />
            </section>
          )}
          {conclusion.length > 10 &&
          <section className="px-6 py-2 flex flex-col gap-4">
            <h2 className="w-full text-left text-black font-bold text-xl">
              Conclusión
            </h2>
            <div
              className="descripcion-producto"
              dangerouslySetInnerHTML={{ __html: conclusion }}
            ></div>
          </section>}
          {firma &&
          <div className="flex items-start flex-col px-4">
            <p className="block h-full py-3 px-4 text-black font-bold w-[150px]">
              ATTE:
            </p>
            <img src={`https://api.logosperu.com.pe/public/firmas/${firma}`} alt="" className='w-[350px]'/>
          </div>}
        </DialogContentText >
        : (
            <DialogContentText id="alert-dialog-slide-description" className='min-h-96'>
          <Loading/>
        </DialogContentText>
          )}
      <DialogActions className='relative'>
        <AnimatePresence>
        {openReenvio && !loading &&
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='rounded-xl bg-white shadow-lg shadow-black w-full md:w-[80%] h-fit left-0 ml-auto right-0 absolute bottom-full overflow-hidden'>
                    <div className="w-full flex-col items-center justify-center gap-6 pb-4 md:pb-0">
                        <div className='flex flex-col md:flex-row justify-between gap-2 md:gap-6 items-center md:pr-4'>
                            <AgregarCorreos correos={correosReenvio} setCorreos={setCorreosReenvio} />
                            <button
                            disabled={loading}
                            // eslint-disable-next-line @typescript-eslint/no-misused-promises
                            onClick={ async () => { await reenviarCorreo() }}
                            className='bg-blue-600 hover:bg-blue-800 text-white h-fit px-4 text-lg rounded-md'>Continuar</button>
                        </div>
                        {correosReenvio.length > 0 &&
                            <SwiperCorreos correos={correosReenvio} setCorreos={setCorreosReenvio} />
                        }
                    </div>
                </motion.div>
            }
        </AnimatePresence>
        <button className='bg-red-600 hover:bg-red-800 text-white px-4 text-lg rounded-md' onClick={handleClose}>Cerrar</button>
        <button className='bg-green-600 hover:bg-green-800 text-white px-4 text-lg rounded-md' onClick={() => { setOpenReenvio(!openReenvio) }}>Reenviar</button>
      </DialogActions>
    </Dialog>
  )
}
