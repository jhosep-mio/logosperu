import { Dialog, DialogContent } from '@mui/material'
import { type Dispatch, type SetStateAction } from 'react'
import { VerCliente } from './VerCliente'

export const ModalCliente = ({ open, setOpen, id }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, id: number }): JSX.Element => {
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
      <DialogContent>
            <VerCliente id={id}/>
      </DialogContent>
    </Dialog>
  )
}
