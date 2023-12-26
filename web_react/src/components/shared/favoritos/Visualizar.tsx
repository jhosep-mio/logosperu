import React from 'react'
import { type carrito } from '../Interfaces'
import { IoEyeSharp } from 'react-icons/io5'
import RViewerJS from 'viewerjs-react'
import { Global } from '../../../helper/Global'

interface ComponentProps {
  producto: carrito
}

export const Visualizar: React.FC<ComponentProps> = ({
  producto
}): JSX.Element => {
  return (
    <p
      className="border border-red-500 p-2 rounded-lg h-fit cursor-pointer relative"
    >
      <IoEyeSharp className="text-red-500" title="Ver" />
      {producto.imagen1 && (
      // @ts-expect-error: Type 'any' has no properties in common with type 'Autoplay'
        <RViewerJS className="absolute w-full h-full inset-0 opacity-0">
          <img
            src={`${Global.urlImages}/itemsportafolios/${producto.imagen1}`}
            className="w-10 h-10 object-cover"
            title='Visualizar'
          />
        </RViewerJS>
      )}
    </p>
  )
}
