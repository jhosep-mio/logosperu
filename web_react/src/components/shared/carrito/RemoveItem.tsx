import React from 'react'
import { type carrito } from '../Interfaces'
import useAuth from '../../../hooks/useAuth'
import Swal from 'sweetalert2'
import { IoCloseCircle } from 'react-icons/io5'

interface ComponentProps {
  producto: carrito
}

export const RemoveItem: React.FC<ComponentProps> = ({
  producto
}): JSX.Element => {
  const { cart, setCart } = useAuth()

  function removeItemFromCart (producto: carrito): void {
    const updatedItems = cart.filter(
      (item) => item.id !== producto.id || item.titulo !== producto.titulo
    )
    setCart(updatedItems)
    Swal.fire('Producto eliminado', '', 'success')
    localStorage.setItem('cart', JSON.stringify(updatedItems))
  }

  return (
    <button
      className="border border-red-500 p-2 rounded-lg h-fit"
      onClick={() => {
        removeItemFromCart(producto)
      }}
    >
      <IoCloseCircle className="text-red-500" />
    </button>
  )
}
