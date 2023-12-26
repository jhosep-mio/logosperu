'use client'
import { SetStateAction, Dispatch } from 'react'
import Dialog from '@mui/material/Dialog'
import { Button, DialogActions, DialogContent, DialogContentText } from '@mui/material'

export interface SimpleDialogProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  setVideo: Dispatch<SetStateAction<string>>
  video: string
}

export const ModalVideo = (props: SimpleDialogProps) => {
  const { video, setOpen, open, setVideo } = props

  return (
    <>
      {video && (
        <Dialog open={open} className='z-9999 px-0'>
          <DialogContent className='px-0'>
            <DialogContentText id='alert-dialog-slide-description px-0'>
              <iframe
                width='560'
                height='315'
                src={video}
                title='YouTube video player'
                frameBorder='0'
                allowFullScreen
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setVideo('')
                setOpen(false)
              }}
              className='bg-primary text-white text-2xl border-none hover:bg-[#d23741e0]'
            >
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  )
}
