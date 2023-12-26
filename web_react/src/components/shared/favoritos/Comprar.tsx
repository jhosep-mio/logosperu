import { type productosValues2 } from '../Interfaces'
import React from 'react'
import useAuth from '../../../hooks/useAuth'
import Swal from 'sweetalert2'
import { IoCartSharp } from 'react-icons/io5'

interface ComponentProps {
  producto: productosValues2
  contador: number
}

export const Comprar: React.FC<ComponentProps> = ({
  producto,
  contador
}): JSX.Element => {
  const { cart, setCart, heard, setHeard } = useAuth()

  function removeItemFromCart2 (product: productosValues2): void {
    const updatedItems = heard.filter(
      (item) => item.id !== product.id || item.titulo !== product.titulo
    )
    setHeard(updatedItems)
    localStorage.setItem('heard', JSON.stringify(updatedItems))
  }

  function addProduct (product: productosValues2, cantidad: number): void {
    const itemIndex = cart.findIndex(
      (item) =>
        item.id === product.id &&
        item.titulo === product.titulo &&
        item.categoria === product.categoria
    )
    // const imagen = (JSON.parse(product.array[0]))
    if (itemIndex === -1) {
      // No existe un elemento coincidente en el carrito, agregar uno nuevo
      setCart([
        ...cart,
        {
          id: product.id,
          titulo: product.titulo,
          cantidad,
          imagen1: product.imagen1,
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
            imagen1: product.imagen1,
            categoria: product.categoria
          }
        ])
      )
      Swal.fire(`${product.titulo} se movio al carrito`, '', 'success')
    } else {
      // Ya existe un elemento en el carrito con el mismo id y titulo, actualizar la cantidad
      const updatedItems = [...cart]
      if (cantidad != null) {
        updatedItems[itemIndex].cantidad =
          (updatedItems[itemIndex].cantidad ?? 0) + cantidad
      }
      setCart(updatedItems)
      Swal.fire(`${product.titulo} se movio al carrito`, '', 'success')
      localStorage.setItem('cart', JSON.stringify(updatedItems))
    }
  }

  return (
    <p
      className="border border-red-500 p-2 rounded-lg h-fit cursor-pointer"
      onClick={() => {
        addProduct(producto, contador)
        removeItemFromCart2(producto)
      }}
    >
      <IoCartSharp className="text-red-500" title="Comprar" />
    </p>
  )
}
