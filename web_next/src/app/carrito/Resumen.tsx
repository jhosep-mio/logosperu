'use client'
import { Errors3 } from '@/components/shared/functions/Errors3'
import useAuth from '@/components/shared/hooks/useAuth'
import { SchemaCupon } from '@/components/shared/interfaces/Schemas'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { LuTicket } from 'react-icons/lu'
import { crearPago } from './checkout'
import { cuponValues } from '@/components/shared/interfaces/interfaces'

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    culqi?: any;
    Culqi: any;
  }
}

export const Resumen = () => {
  const { cart, setShowError } = useAuth()
  const [culqiInstance, setCulqiInstance] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Culqi = window.Culqi
      Culqi.publicKey = 'pk_test_df74a93b1bc11f38'
      Culqi.init()
      setCulqiInstance(Culqi)
    }
  }, [])

  const payment = (values: cuponValues) => {
    setShowError({
      estado: 'warning',
      texto: 'Pago en online en matenimiento'
    })
    // if (culqiInstance) {
    //   localStorage.setItem('Contacto', JSON.stringify(values))
    //   culqiInstance.settings({
    //     title: 'Logos Perú',
    //     currency: 'PEN',
    //     amount: calculateTotal2()
    //   })
    //   culqiInstance.options({
    //     style: {
    //       logo: 'https://logosperu.com.pe/logos/web.png',
    //       bannerColor: '', // hexadecimal
    //       buttonBackground: '', // hexadecimal
    //       menuColor: '', // hexadecimal
    //       linksColor: '', // hexadecimal
    //       buttonText: '', // texto que tomará el botón
    //       buttonTextColor: '', // hexadecimal
    //       priceColor: '' // hexadecimal
    //     }
    //   })
    //   culqiInstance.open()
    // }
  }

  const {
    handleSubmit,
    handleChange,
    errors,
    values,
    touched,
    handleBlur,
    isSubmitting
  } = useFormik({
    initialValues: {
      nombres: '',
      apellidos: '',
      celular: '',
      correo: ''
    },
    validationSchema: SchemaCupon,
    onSubmit: payment
  })

  function calculateTotal (): string {
    let total = 0
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i]
      if (item.precio !== null && item.cantidad) {
        const subtotal = parseFloat(item.precio) * item.cantidad
        total += subtotal
      }
    }
    return total.toFixed(2) // Redondeamos a dos decimales
  }

  function calculateTotal2 (): string {
    let total = 0
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i]
      if (item.precio !== null && item.cantidad) {
        const subtotal = parseFloat(item.precio) * item.cantidad
        total += subtotal
      }
    }
    return (total * 100).toFixed(0) // Redondeamos a dos decimales
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && culqiInstance) {
      window.culqi = () => {
        if (culqiInstance.token && culqiInstance.token.object === 'token') {
          const token = culqiInstance.token.id
          const email = culqiInstance.token.email
          enviarTokenAlBackend(token, email)
        } else {
          alert(
            `Hubo un error al generar el token: \n ${
              culqiInstance.error.user_message ??
              culqiInstance.error.merchant_message ??
              ''
            }`
          )
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [culqiInstance])

  const enviarTokenAlBackend = async (
    token: string,
    email: string
  ): Promise<void> => {
    const amount = calculateTotal2()
    const currency = 'PEN'
    setLoading(true)
    // const order = uuidv4() // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    await crearPago({
      amount,
      currency,
      sk: 'sk_test_8bbd58ab7efbd965',
      email,
      token,
      cart,
      setLoading
    })
  }

  useEffect(() => {
    if (errors && isSubmitting) {
      const firstErrorKey = Object.keys(errors)[0]
      const firstErrorElement = document.getElementsByName(firstErrorKey)[0]
      if (firstErrorElement) {
        firstErrorElement.focus()
      }
    }
  }, [touched, errors, isSubmitting])

  return (
    <>
      {loading &&
        <div className='fixed z-[99999999999] w-screen h-screen bg-black/40 inset-0'>
          <div className='centrarclase_do_spinner'>
            <div className='dot-spinner'>
              <div className='dot-spinner__dot' />
              <div className='dot-spinner__dot' />
              <div className='dot-spinner__dot' />
              <div className='dot-spinner__dot' />
              <div className='dot-spinner__dot' />
              <div className='dot-spinner__dot' />
              <div className='dot-spinner__dot' />
              <div className='dot-spinner__dot' />
            </div>
          </div>
        </div>}
      <form
        className='w-[30%] flex flex-col gap-6'
        action=''
        onSubmit={handleSubmit}
      >
        {cart.length > 0 && (
          <>
            <div className='border border-gray-400 p-6 w-full'>
              <h2 className='text-gray-800 font-semibold text-3xl m-0 p-0 flex gap-4 items-center '>
                {' '}
                <LuTicket className='text-4xl' />
                Datos de contacto
              </h2>
              <div className='my-8 w-full flex flex-col gap-5 '>
                <div className='flex flex-col gap-7'>
                  <div className='flex gap-4'>
                    <div className='flex relative'>
                      <input
                        type='text'
                        name='nombres'
                        value={values.nombres}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='outline-none w-full px-4 py-4 bg-transparent border border-gray-300 rounded-xl text-[1.6rem]'
                        placeholder='Nombres'
                      />
                      <Errors3
                        errors={errors.nombres}
                        touched={touched.nombres}
                      />
                    </div>
                    <div className='flex relative'>
                      <input
                        type='text'
                        name='apellidos'
                        value={values.apellidos}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='outline-none w-full px-4 py-4 bg-transparent border border-gray-300 rounded-xl text-[1.6rem]'
                        placeholder='Apellidos'
                      />
                      <Errors3
                        errors={errors.apellidos}
                        touched={touched.apellidos}
                      />
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div className='flex relative'>
                      <input
                        type='text'
                        name='celular'
                        value={values.celular}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='outline-none w-full px-4 py-4 bg-transparent border border-gray-300 rounded-xl text-[1.6rem]'
                        placeholder='Celular'
                      />
                      <Errors3
                        errors={errors.celular}
                        touched={touched.celular}
                      />
                    </div>
                    <div className='flex relative'>
                      <input
                        type='text'
                        name='correo'
                        value={values.correo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='outline-none w-full px-4 py-4 bg-transparent border border-gray-300 rounded-xl text-[1.6rem]'
                        placeholder='Correo electronico'
                      />
                      <Errors3 errors={errors.correo} touched={touched.correo} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='border border-gray-400 p-6 w-full'>
              {/* <h2 className='text-gray-800 font-semibold text-3xl m-0 p-0 flex gap-4 items-center '>
            {' '}
            <FaBoxOpen />
            Resumen de orden
            </h2> */}
              <div className='my-8 w-full flex flex-col gap-5'>
                {/* <div className='flex gap-5 justify-between'>
                <span className='w-1/2 text-right text-[1.7rem]'>Cantidad de productos </span>
                <span className='w-1/2 text-right text-[1.7rem]'>{cart.length}</span>
            </div> */}
                <div className='flex gap-5 justify-between border-b border-gray-300 pb-2'>
                  <span className='w-1/2 text-right text-[1.7rem]'>Subtotal</span>
                  <span className='w-1/2 text-right text-[1.7rem]'>
                    S./{calculateTotal()}
                  </span>
                </div>
                <div className='flex gap-5 justify-between'>
                  <span className='w-1/2 text-right text-[1.7rem] font-semibold'>
                    Total
                  </span>
                  <span className='w-1/2 text-right text-[1.7rem] font-semibold'>
                    S./{calculateTotal()}
                  </span>
                </div>
              </div>
            </div>
            <button
              type='submit'
              className='bg-primary w-full block py-4 rounded-2xl text-[1.8rem] hover:bg-primary_dark transition-colors'
            >
              {' '}
              Comprar
            </button>
          </>
        )}
      </form>
    </>
  )
}
