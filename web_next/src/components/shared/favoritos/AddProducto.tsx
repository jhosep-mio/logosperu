'use client'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { IoCartOutline } from 'react-icons/io5'
import { carrito, productosValues } from '../interfaces/interfaces'

interface ComponentProps {
  producto: productosValues
  contador: number
}

export const AddProducto: React.FC<ComponentProps> = ({
  producto,
  contador
}) => {
  const [cart, setCart] = useState<carrito[]>([])

  useEffect(() => {
    // Recuperar el carrito del almacenamiento local cuando la página se cargue
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart)
      setCart(parsedCart)
    }
  }, [])

  function addProduct (product: productosValues, cantidad: number): void {
    const itemIndex = cart.findIndex(
      (item) => item.id === product.id && item.titulo === product.titulo && item.categoria === product.categoria
    )
    // const imagen = (JSON.parse(product.array[0]))
    const imagen = (JSON.parse(product.array)[0].imagen1.archivoName)
    if (itemIndex === -1) {
      // No existe un elemento coincidente en el carrito, agregar uno nuevo
      setCart([
        ...cart,
        {
          id: product.id,
          titulo: product.titulo,
          cantidad,
          imagen1: imagen,
          categoria: product.categoria
        }
      ])
      localStorage.setItem(
        'cart',
        JSON.stringify([
          ...cart,
          {
            id: product.id,
            titulo: product.titulo,
            cantidad,
            imagen1: imagen,
            categoria: product.categoria
          }
        ])
      )
      Swal.fire(`${product.titulo} agregado al carrito`, '', 'success')
    } else {
      // Ya existe un elemento en el carrito con el mismo id y titulo, actualizar la cantidad
      const updatedItems = [...cart]
      if (cantidad != null) {
        updatedItems[itemIndex].cantidad =
          (updatedItems[itemIndex].cantidad ?? 0) + cantidad
      }
      setCart(updatedItems)
      Swal.fire(`Se agrego mas unidades a ${product.titulo}`, '', 'success')
      localStorage.setItem('cart', JSON.stringify(updatedItems))
    }
  }
  return (
    <div
      className='bg-white rounded-lg h-14 w-14 flex items-center justify-center cursor-pointer cursor_a'
      onClick={() => {
        addProduct(producto, contador)
      }}
    >
      <IoCartOutline
        className='text-black text-4xl font-bold hover:text-primary'
        title='Agregar al carrito'
      />
    </div>
  )
}
