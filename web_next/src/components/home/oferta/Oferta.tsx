import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { type TransitionProps } from '@mui/material/transitions'
import { IoCloseCircleSharp } from 'react-icons/io5'
import { valuesPromocion } from '@/components/shared/interfaces/interfaces'

const Transition = React.forwardRef(function Transition (
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

export const Oferta = ({ open, setOpen }: valuesPromocion) => {
  const handleClose = (): void => {
    setOpen(false)
  }
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby='alert-dialog-slide-description'
      className='modal_ofertas'
    >
      <DialogContent className='relative'>
        <IoCloseCircleSharp className='absolute text-5xl m-4 cursor-pointer top-0 left-0 text-white' onClick={handleClose} />
        {/* <img src='https://logosperu.com/public/logoperu/flayer_logo.jpeg' className='object-contain' alt='Logos Perú' /> */}
        <iframe src='https://www.youtube.com/embed/OLxcRPpoZVo?si=qxZpC3N97Mj0gpcI' className='min-h-[450px] w-[800px] object-cover' />
      </DialogContent>
    </Dialog>
  )
}
