'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCheck } from 'react-icons/fa'

export const Planes = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section className='bg-[#EFEFEF] border-t-4 border-primary overflow-hidden'>
      <div className='comunity_secction max-w-[1300px] mx-auto py-10 flex flex-col relative px-10'>
        <h2 className='text-5xl lg:text-7xl font-extrabold font_baloo text-center text-secondary'>
          PLANES
        </h2>
        <span className='border-2  border-primary rounded-2xl text-3xl lg:text-4xl w-fit mx-auto text-center px-6 py-3 mt-6 bg-white'>
          CONTRATO MINIMO X 3 MESES
        </span>
        <div className='grid grid-cols-1 lg:grid-cols-3 my-20 gap-6' ref={ref}>
          <div
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s'
            }}
            className='flex flex-col gap-3 bg-white border-2 border-secondary rounded-[4rem] w-full'
          >
            <div className='w-[80%] mx-auto flex flex-col gap-6 py-10'>
              <h2 className='text-center font_baloo font-normal text-secondary text-6xl uppercase'>
                PLAN <span className='text-primary'>COBRE</span>
              </h2>
              <div className='flex gap-4'>
                <FaCheck className='text-4xl text-secondary' />
                <p className='text-3xl text-secondary'>
                  3 Publicaciones por semana <br />
                  <strong>(Lunes a Sabado)</strong>
                </p>
              </div>
              <p className='text-3xl'>
                <strong>Diseño de Flyer o Post</strong> (Entregable
                cronograma)
              </p>
              <p className='text-3xl'>
                <strong>Respuestas o Comentarios a potenciales</strong>{' '}
                (clientes o seguidores)
              </p>
              <p className='text-3xl'>
                <strong>1 Diseño de Perfil</strong> (facebook - instagram)
              </p>
              <p className='text-3xl'>
                <strong>1 Diseño de portada</strong> (facebook - WSP Bussines)
              </p>
              <p className='text-3xl'>
                <strong>Asesoria en creación de redes</strong> (facebook -
                instagram)
              </p>
            </div>
          </div>
          <div
            style={{
              transform: isInView ? 'none' : 'translateY(200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
            }}
            className='flex flex-col gap-3 bg-white border-2 border-secondary rounded-[4rem] w-full'
          >
            <div className='w-[80%] mx-auto flex flex-col gap-6 py-10'>
              <h2 className='text-center font_baloo font-normal text-secondary text-6xl uppercase'>
                PLAN <span className='text-primary'>Silver</span>
              </h2>
              <div className='flex gap-4'>
                <FaCheck className='text-4xl text-secondary' />
                <p className='text-3xl text-secondary'>
                  5 Publicaciones por semana <br />
                  <strong>(Lunes a Sabado)</strong>
                </p>
              </div>
              <p className='text-3xl'>
                <strong>Diseño de Flyer o Post</strong> (Entregable
                cronograma)
              </p>
              <p className='text-3xl'>
                <strong>Respuestas o Comentarios a potenciales</strong>{' '}
                (clientes o seguidores)
              </p>
              <p className='text-3xl'>
                <strong>1 Diseño de Perfil</strong> (facebook - instagram -
                Tik Tok)
              </p>
              <p className='text-3xl'>
                <strong>1 Diseño de portada</strong> (facebook - WSP Bussines)
              </p>
              <p className='text-3xl'>
                <strong>1 Desarrollo de Reel max. 10s</strong> (dentro del
                mes)
              </p>
              <p className='text-3xl'>
                <strong>Desarrollo de respuestas</strong> (Fan page)
              </p>
              <p className='text-3xl'>
                <strong>Asesoria en creación de redes</strong> (facebook -
                instagram - Tik Tok)
              </p>
              <p className='text-3xl'>
                <strong>Reporte de metricas - Quincenal</strong>
              </p>
            </div>
          </div>
          <div
            style={{
              transform: isInView ? 'none' : 'translateX(200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s'
            }}
            className='flex flex-col gap-3 bg-white border-2 border-secondary rounded-[4rem] w-full'
          >
            <div className='w-[80%] mx-auto flex flex-col gap-6 py-10'>
              <h2 className='text-center font_baloo font-normal text-secondary text-6xl uppercase'>
                PLAN <span className='text-primary'>GOLDEN</span>
              </h2>
              <div className='flex gap-4'>
                <FaCheck className='text-4xl text-secondary' />
                <p className='text-3xl text-secondary'>
                  8 Publicaciones por semana - Incluye retoque fotográfico
                  <br />
                  <strong>(Lunes a Sabado)</strong>
                </p>
              </div>
              <p className='text-3xl'>
                <strong>Investigación Digital</strong>
              </p>
              <p className='text-3xl'>
                <strong>Análisis  de Marketing Digital</strong> (Documentación, Linea Grafica)
              </p>
              <p className='text-3xl'>
                <strong>Diseño de Flyer o Post</strong> (Entregable
                cronograma)
              </p>
              <p className='text-3xl'>
                <strong>Respuestas o Comentarios</strong>
              </p>
              <p className='text-3xl'>
                <strong>1 Diseño de Perfil</strong> (facebook - instagram)
              </p>
              <p className='text-3xl'>
                <strong>1 Diseño de portada</strong> (facebook - WSP Bussines)
              </p>
              <p className='text-3xl'>
                <strong>2 Desarrollo de Reel max. 20s</strong> (dentro del mes
                - efecto y sonido)
              </p>
              <p className='text-3xl'>
                <strong>Indexación de Fan page al WSP Business</strong> (fan
                page)
              </p>
              <p className='text-3xl'>
                <strong>
                  Desarrollo de campañas interactivas - WEB - Redes
                </strong>
              </p>
              <p className='text-3xl'>
                <strong>Capacitación de campaña pagada</strong>(Inversión a
                cargo del cliente)
              </p>
              <p className='text-3xl'>
                <strong>Asesoria en creación de redes</strong>(facebook -
                instagram)
              </p>
              <p className='text-3xl'>
                <strong>Reporte de metricas - Quincenal</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
