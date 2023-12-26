'use client'
import { motion } from 'framer-motion'
import { Formulario } from '../Formulario'

export const Cotizacion = () => {
  return (
    <section className='sect_cotizacion' id='formCotizador'>
      <div className='bg-primary w-full h-50px'>
        <motion.h3
          initial={{ opacity: 0, translateX: '-200px' }}
          whileInView={{ opacity: 1, translateX: '0px' }}
          viewport={{ once: true }}
          className='font_baloo text-4xl lg:text-6xl py-4 font-bold text-center'
        >
          ¿QUÉ TIPO DE SERVICIO BUSCAS?
        </motion.h3>
      </div>
      <div className='container max-w-[1200px] mx-auto overflow-hidden'>
        <div
          className='row'
        >
          <div
            className='col-lg-12'
          >
            <motion.div
              initial={{ opacity: 0, translateY: '-200px' }}
              whileInView={{ opacity: 1, translateY: '0px' }}
              viewport={{ once: true }}
              id='wizard_container' className='wizard'
            >
              <Formulario />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
