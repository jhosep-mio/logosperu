'use client'
import React from 'react'
import { IoHeartOutline } from 'react-icons/io5'
import { productosValues } from '../interfaces/interfaces'
import useAuth from '../hooks/useAuth'

interface ComponentProps {
  producto: productosValues
  contador: number
}

export const AddHeard: React.FC<ComponentProps> = ({
  producto,
  contador
}) => {
  const { heard, setHeard, setShowError } = useAuth()

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
          categoria: product.categoria,
          precio: product.precio
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
            categoria: product.categoria,
            precio: product.precio
          }
        ])
      )
      setShowError({
        estado: 'success',
        texto: 'Agregado a favoritos'
      })
    } else {
      setShowError({
        estado: 'warning',
        texto: 'Ya se encuentra en tu lista de favoritos'
      })
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
