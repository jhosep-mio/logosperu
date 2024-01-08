import { Dialog, DialogContent } from '@mui/material'
import { type Dispatch, type SetStateAction } from 'react'
export const ModalOpciones = ({
  eventoSelected,
  open,
  setOpen,
  setEvents,
  updateCita
}: {
  eventoSelected: any | []
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  setEvents: Dispatch<SetStateAction<Event[]>>
  updateCita: (updatedEvents: Event[]) => Promise<void>
}): JSX.Element => {
  return (
    <Dialog
      open={open}
      onClose={() => { setOpen(false) }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <div className='w-fit flex gap-4'>
            <button className='bg-green-600 px-4 py-2 rounded-lg text-white'
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/restrict-template-expressions
              window.open(`/admin/lista-clientes/editar/${eventoSelected.event.client.id}`)
              setOpen(false)
            }}
            >Datos de cliente</button>
            <button
            onClick={() => {
              setEvents((prevEvents) => {
                const updatedEvents = prevEvents.filter((e) => e !== eventoSelected.event)
                updateCita(updatedEvents)
                return updatedEvents
              })
              setOpen(false)
            }}
            className='bg-red-600 px-4 py-2 rounded-lg text-white'>Eliminar evento</button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
