import api from './api'
import {
  carrito
} from '@/components/shared/interfaces/interfaces'
import axios from 'axios'
import { Global } from '@/components/shared/Helper/global'

// eslint-disable-next-line camelcase
// export const createOrder = async ({
//   amount,
//   order_number,
//   currency,
//   sk
// }: {
//   amount: any;
//   order_number: any;
//   currency: any;
//   sk: any;
// }) => {
//   try {
//     const response = await api.post(
//       '/charges',
//       {
//         amount,
//         currency_code: currency,
//         description: 'Gafas de sol Ryan Ban',
//         // eslint-disable-next-line camelcase
//         order_number,
//         client_details: {
//           first_name: 'Name Demo',
//           last_name: 'LastName Demo',
//           email: 'demo.demo@culqi.com',
//           phone_number: '+51999999999'
//         },
//         expiration_date: timestamp,
//         confirm: false,
//         metadata: {
//           order_id: 'demo-01'
//         }
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${sk}`
//         }
//       }
//     )
//     console.log('createOrder ~> response: ', response)
//     if (response.status === 201 || response.status === 200) {
//       return { res: response.data, success: true }
//     }
//   } catch (error: any) {
//     console.log('error createOrder', error.response.data)
//     return { res: error.response.data, success: false }
//   }
// }

export const crearPago = async ({
  amount,
  currency,
  sk,
  email,
  token,
  cart,
  setLoading
}: {
  amount: any;
  currency: any;
  sk: any;
  email: string;
  token: string;
  cart: carrito [];
  setLoading: any
}) => {
  try {
    const response = await api.post(
      '/charges',
      {
        amount,
        currency_code: currency,
        description: 'Productos - Logos Perú',
        // eslint-disable-next-line camelcase
        email,
        source_id: token
      },
      {
        headers: {
          Authorization: `Bearer ${sk}`
        }
      }
    )
    if (response.status === 201 || response.status === 200) {
      const orden = response.data
      const values = JSON.parse(localStorage.getItem('Contacto') ?? '')
      //   const txm = order.purchase_units[0].payments.captures[0].id
      const token = localStorage.getItem('token')
      const data = new FormData()
      //   const uniqueId = uuidv4()
      data.append('id_transaccion', orden.id)
      data.append('status', orden.outcome.type)
      data.append('tipo', JSON.stringify(orden.source))
      data.append('order_id', orden.outcome.type)
      data.append('nombres', values?.nombres ?? '')
      data.append('apellidos', values?.apellidos ?? '')
      data.append('email', values?.correo ?? '')
      data.append('celular', values?.celular ?? '')
      data.append('total_pago', amount)
      data.append('array_productos', JSON.stringify(cart))
      try {
        const respuesta = await axios.post(
          `${Global.url}/handleSuccessTransaction`,
          data,
          {
            headers: {
              Authorization: `Bearer ${
                token !== null && token !== '' ? token : ''
              }`
            }
          }
        )
        if (respuesta.data.status == 'success') {
          localStorage.setItem('cart', '[]')
          setLoading(false)
          window.location.href = '/succes_pago'
        }
      } catch (error) {
        console.log(error)
      }
    }
  } catch (error: any) {
    return { res: error.response.data, success: false }
  }
}
