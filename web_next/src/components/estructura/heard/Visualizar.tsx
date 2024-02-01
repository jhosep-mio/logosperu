import { Global } from '@/components/shared/Helper/global'
import { carrito } from '@/components/shared/interfaces/interfaces'
import React from 'react'
import { FaRegShareFromSquare } from 'react-icons/fa6'

interface ComponentProps {
  producto: carrito
}

export const Visualizar: React.FC<ComponentProps> = ({
  producto
}) => {
  const RedirigirWsp = (): void => {
    const numero = '+51987038024' // Reemplaza con el número de teléfono en formato internacional sin el signo + o 00.
    let mensaje = '' // Tu mensaje.
    mensaje = `Hola, estoy interesado(a) en el servicio de ${producto.categoria}, me gusta este logo: ${Global.urlImages}/itemsportafolios/${producto.imagen1}`
    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje)
    // Construir la URL completa
    const urlWhatsApp = `https://wa.me/${numero}?text=${mensajeCodificado}`
    // Abrir la nueva pestaña con la URL
    window.open(urlWhatsApp, '_blank')
  }

  return (
    <p
      className='border border-red-500 p-2 rounded-lg h-fit cursor-pointer relative'
    >
      <FaRegShareFromSquare className='text-red-500' title='Ver' onClick={() => RedirigirWsp()} />
    </p>
  )
}
