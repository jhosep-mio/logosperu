import Dialog from '@mui/material/Dialog'
import { DialogActions, DialogContent, DialogContentText } from '@mui/material'
import { Button } from 'react-bootstrap'

export interface SimpleDialogProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setVideo: React.Dispatch<React.SetStateAction<string>>
  video: string
}

export const ModalVideo = (props: SimpleDialogProps): JSX.Element => {
  const { video, setOpen, open, setVideo } = props

  return (
    <>
      {video && (
        <Dialog open={open} className="z-9999 px-0">
          <DialogContent className="px-0">
            <DialogContentText id="alert-dialog-slide-description px-0">
              <iframe
                width="560"
                height="315"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setVideo('')
                setOpen(false)
              }}
              className="bg-primary text-white text-2xl border-none hover:bg-[#d23741e0]"
            >
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  )
}
