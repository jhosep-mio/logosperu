import { Dialog, DialogContent } from '@mui/material'
import moment from 'moment'
import { type Dispatch, type SetStateAction } from 'react'
import { GoCalendar, GoComment, GoDatabase, GoTrash, GoX } from 'react-icons/go'
import { Link } from 'react-router-dom'

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
      aria-describedby="alert-dialog-description "
      className='modal_opciones'
    >
      <DialogContent className='shadow-2xl shadow-slate-950 w-[500px] bg-white overflow-hidden'>
        <div className='w-full flex flex-col gap-4 p-2'>
            <div className='flex gap-1 text-2xl text-gray-400 w-full justify-end items-center'>
                <div className='hover:bg-gray-200 p-2 rounded-full group cursor-pointer transition-colors'
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/restrict-template-expressions
                  window.open(`/admin/lista-clientes/editar/${eventoSelected?.event?.client.id}`)
                  setOpen(false)
                }}
                >
                    <GoDatabase className='group-hover:text-gray-400'/>
                </div>
                <Link
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/restrict-template-expressions
                to={`/admin/lista-clientes/resumen/${eventoSelected?.event?.client.id}`} className='hover:bg-gray-200 p-2 rounded-full group cursor-pointer transition-colors'>
                    <GoComment className='group-hover:text-gray-400'/>
                </Link>
                <div className='hover:bg-gray-200 p-2 rounded-full group cursor-pointer transition-colors'
                onClick={() => {
                  setEvents((prevEvents) => {
                    const updatedEvents = prevEvents.filter((e) => e !== eventoSelected.event)
                    updateCita(updatedEvents)
                    return updatedEvents
                  })
                  setOpen(false)
                }}
                >
                    <GoTrash className='group-hover:text-gray-400'/>
                </div>
                <div className='hover:bg-gray-200 p-1 rounded-full group cursor-pointer transition-colors'
                onClick={() => { setOpen(false) }}
                >
                    <GoX className='group-hover:text-gray-400 text-3xl'/>
                </div>
            </div>
            <div className='flex flex-col px-4'>
                <div className='flex gap-4 items-center'>
                    <span className='w-3 h-3 bg-main rounded-full text-black'></span>
                    <div className='flex flex-col'>
                        <span className='text-lg'>{eventoSelected?.event?.title }</span>
                        <div className='flex text-gray-500 gap-2 items-center'>
                            <span className='first-letter:uppercase '>{moment(eventoSelected?.event?.start).format('dddd, DD [de] MMMM')}</span>
                            <span>.</span>
                            <span>{moment(eventoSelected?.event?.start).format('HH:mm')}</span>
                            <span>-</span>
                            <span>{moment(eventoSelected?.event?.end).format('HH:mm')}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-4 pt-2 pb-6'>
                <div className='flex gap-3 items-center'>
                    <GoCalendar className='text-xl text-gray-600'/>
                    <span className='text-base text-gray-600'> {eventoSelected?.event?.user?.name}</span>
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
