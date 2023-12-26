import * as React from 'react'
import Button from '@mui/material/Button'
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

const Transition = React.forwardRef(function Transition (
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface values {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  avance: avanceValues
}

export const ViewAvance = ({ open, setOpen, avance }: values): JSX.Element => {
  const handleClose = (): void => {
    setOpen(false)
  }
  const [correos, setCorreos] = React.useState<arrayCorreos[]>([])
  const [arrayImagenes, setArrayImagenes] = React.useState<arrayImagenes[]>([])
  const [arrayArchivos, setArrayArchivos] = React.useState<arrayImagenes[]>([])
  const [contexto, setContexto] = React.useState('')
  const [asunto, setAsunto] = React.useState('')
  const [empresa, setEmpresa] = React.useState('')
  const [contacto, setContacto] = React.useState('')
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
          <section className="px-6 py-2 flex flex-col gap-4">
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
        </DialogContentText>
        : (
            'cargando ...'
          )}
      <DialogActions>
        <Button onClick={handleClose}>CERRAR</Button>
        {/* {!loading ? (
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          <button
            className="w-fit px-3 py-1 bg-secondary-150 text-white font-bold rounded-xl"
            onClick={async () => {
              await guardarAvance()
            }}
          >
            SUBIR AVANCE
          </button>
        ) : (
          <button className="w-fit px-3 py-1 bg-[#4E4263] text-white font-bold rounded-xl">
            Enviando...
          </button>
        )} */}
      </DialogActions>
    </Dialog>
  )
}
