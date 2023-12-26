'use client'
import React from 'react'
import Swal from 'sweetalert2'
import { IoHeartOutline } from 'react-icons/io5'
import { carrito, productosValues } from '../interfaces/interfaces'

interface ComponentProps {
  producto: productosValues
  contador: number
}

export const AddHeard: React.FC<ComponentProps> = ({
  producto,
  contador
}) => {
  const [heard, setHeard] = React.useState<carrito[]>([])

  React.useEffect(() => {
    const storedHeard = localStorage.getItem('heard')
    if (storedHeard) {
      const parsedHeardt = JSON.parse(storedHeard)
      setHeard(parsedHeardt)
    }
  }, [])

  function addProduct (product: productosValues, cantidad: number): void {
    const itemIndex = heard.findIndex(
      (item) =>
        item.id === product.id &&
        item.titulo === product.titulo &&
        item.categoria === product.categoria
    )
    // const imagen = (JSON.parse(product.array[0]))
    const imagen = JSON.parse(product.array)[0].imagen1.archivoName
    if (itemIndex === -1) {
      // No existe un elemento coincidente en el carrito, agregar uno nuevo
      setHeard([
        ...heard,
        {
          id: product.id,
          titulo: product.titulo,
          cantidad,
          imagen1: imagen,
          categoria: product.categoria
        }
      ])
      localStorage.setItem(
        'heard',
        JSON.stringify([
          ...heard,
          {
            id: product.id,
            titulo: product.titulo,
            cantidad,
            imagen1: imagen,
            categoria: product.categoria
          }
        ])
      )
      Swal.fire('Agregado a favoritos', '', 'success')
    } else {
      Swal.fire('Ya se encuentra en tu lista de favoritos', '', 'warning')
    }
  }
  return (
    <div
      className='bg-white rounded-lg h-14 w-14 flex items-center justify-center cursor-pointer cursor_a'
      onClick={() => {
        addProduct(producto, contador)
      }}
    >
      <IoHeartOutline
        className='text-black text-4xl font-bold '
        title='Me gusta'
      />
    </div>
  )
}
