import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'
import { type Dispatch, type SetStateAction, useState } from 'react'

export const ModalQuestion = ({
  open,
  setOpen,
  openCorreo,
  setOpenCorreoActa
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  openCorreo: Dispatch<SetStateAction<boolean>>
  setOpenCorreoActa: Dispatch<SetStateAction<boolean>>
}): JSX.Element => {
  const [tipo, setTipo] = useState('')
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false)
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="dialog_fecha_inicio"
    >
      <DialogTitle id="alert-dialog-title" className="text-center w-full">
        {'SELECCIONAR TIPO DE CORREO'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
        //   className="min-h-[200px]"
        >
          <>
            <select name="" id="" value={tipo} onChange={(e) => { setTipo(e.target.value) }} className='bg-gray-300 px-4 py-2 rounded-xl text-center w-full outline-none'>
                <option value="">Seleccionar</option>
                <option value="correo">Correo de avance/entrega</option>
                <option value="acta">Acta de estado de proyecto</option>
            </select>
          </>
        </DialogContentText>
      </DialogContent>
      <DialogActions className="flex items-center">
        <button
          className="bg-gray-600 text-white font-bold text-sm px-3 py-2 rounded-xl"
          onClick={() => {
            setOpen(false)
          }}
        >
          CERRAR
        </button>
        <button
          className="bg-green-600 text-white font-bold text-sm px-3 py-2 rounded-xl"
          onClick={() => {
            if (tipo == 'correo') {
              setOpen(false)
              openCorreo(true)
            } else if (tipo == 'acta') {
              setOpen(false)
              setOpenCorreoActa(true)
            }
          }}
        >
          CONTINUAR
        </button>
      </DialogActions>
    </Dialog>
  )
}
