import { motion } from 'framer-motion'
import { cn } from '../../../../shared/cn'
import { useState } from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'
import { type bannersValues } from '../../../../shared/Interfaces'
import { IndexCalendarioCm } from './IndexCalendarioCm'

interface Card {
  id: number
  title: string
}

export const IndexComunity = ({ cards, datos, getOneBrief }: { cards: Card[], datos: bannersValues, getOneBrief: () => Promise<void> }): JSX.Element => {
  const [selected, setSelected] = useState<Card | null>(null)
  const [lastSelected, setLastSelected] = useState<Card | null>(null)

  const handleClick = (card: Card): void => {
    setLastSelected(selected)
    setSelected(card)
  }

  const handleOutsideClick = (): void => {
    setLastSelected(null)
    setSelected(null)
  }

  return (
    <div className="w-full h-full  grid grid-cols-1 md:grid-cols-3  gap-4 ">
      {cards.map((card, i) => (
        <div key={i} >
          <motion.div
            onClick={() => {
              handleClick(card)
            }}
            className={cn('relative overflow-hidden',
              selected?.id === card.id
                ? 'rounded-lg cursor-pointer fixed inset-0 w-[90%] h-[90%] m-auto z-[120] flex justify-center items-center flex-wrap flex-col'
                : lastSelected?.id === card.id
                  ? 'z-40 bg-white rounded-xl h-full w-full'
                  : 'bg-white rounded-xl h-full w-full'
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} datos={datos} getOneBrief={getOneBrief}/>}
            <span className={cn('text-gray-600 flex items-center rounded-md transition-colors cursor-pointer hover:bg-gray-200 w-fit px-3 py-2 gap-3 text-lg font-medium', selected?.id ? 'hidden' : '')}>
              <FaCalendarAlt className="text-4xl text-green-700" /> Calendario
              comunnity manager{' '}
            </span>
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          'fixed h-full w-full inset-0 bg-black opacity-0 z-[100]',
          selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        animate={{ opacity: selected?.id ? 1 : 0 }}
      >
        <TiDelete onClick={handleOutsideClick} className='fixed top-4 right-4 text-4xl text-white cursor-pointer'/>
      </motion.div>
    </div>
  )
}

const SelectedCard = ({ selected, datos, getOneBrief }: { selected: Card | null, datos: bannersValues, getOneBrief: () => Promise<void> }): JSX.Element => {
  return (
    <div className="relative w-full h-full z-[9999] bg-white" key={selected?.id}>
      <motion.div
        initial={{
          opacity: 0,
          y: 100
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
        className="relative w-full h-full"
      >
        <IndexCalendarioCm datos={datos} getOneBrief={getOneBrief}/>
      </motion.div>
    </div>
  )
}
