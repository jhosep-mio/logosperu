'use client'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
export const Whatsapp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber='+51987038024'
      accountName='Logos Peru'
      statusMessage='En linea'
      placeholder='Envianos un mensaje'
      chatMessage='Bienvenido a Logos Perú! 🤝, ¿Por cual de nuestros servicios esta interesado?'
      avatar='/logos/iconowsp.jpg'
      allowEsc
      allowClickAway
      notification
      notificationSound
    />
  )
}
