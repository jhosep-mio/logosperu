import React from 'react'
// import Swal from 'sweetalert2'
import { BsFillTrashFill } from 'react-icons/bs'
import useAuth from '../hooks/useAuth'
import { carrito } from '../interfaces/interfaces'

interface ComponentProps {
  producto: carrito
}

export const RemoveItemCart: React.FC<ComponentProps> = ({
  producto
}) => {
  const { cart, setCart, setShowError } = useAuth()

  function removeItemFromCart (producto: carrito): void {
    const updatedItems = cart.filter(
      (item) => item.id !== producto.id || item.titulo !== producto.titulo
    )
    setCart(updatedItems)
    setShowError({
      estado: 'success',
      texto: 'Producto eliminado'
    })
    localStorage.setItem('cart', JSON.stringify(updatedItems))
  }
  return (
    <BsFillTrashFill className='text-3xl text-primary cursor-pointer mb-1' title='Eliminar item' onClick={() => { removeItemFromCart(producto) }} />
  )
}
