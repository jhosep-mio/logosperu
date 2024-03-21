// import { Fragment } from 'react'
import { Link } from 'react-router-dom'
// import Swal, { type SweetAlertResult } from 'sweetalert2'
// import { SwiperAvances } from '../SwiperAvances'
// import { Errors } from '../../../../shared/Errors'
import { BiSupport } from 'react-icons/bi'
import { GrDomain } from 'react-icons/gr'
import { MdOutlineStorage, MdSecurity } from 'react-icons/md'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { FaLink } from 'react-icons/fa6'

export const PlanHosting = ({
  handleSubmit
//   colaborador,
//   colaboradores,
//   values,
//   datos2,
//   setOpenCorreoFinal,
//   setOpenMailFinal,
//   datos,
//   setOpenQuestion,
//   setOpenMail,
//   arrayAlta,
//   arrayAvances,
//   setAvance,
//   setOpenAvance,
//   setOpenFinal,
//   arrayFinal,
//   setfinal,
//   setOpenActa,
//   arrayActa,
//   setopenAlta,
//   handleBlur,
//   handleChange,
//   errors,
//   touched
}: {
  handleSubmit: any
  colaborador: never[]
  colaboradores: never[]
  values: any
  datos2: any
  setOpenCorreoFinal: any
  setOpenMailFinal: any
  datos: any
  setOpenQuestion: any
  setOpenMail: any
  arrayAlta: any
  arrayAvances: any
  setAvance: any
  setOpenAvance: any
  setOpenFinal: any
  arrayFinal: any
  setfinal: any
  setOpenActa: any
  arrayActa: any
  setopenAlta: any
  handleBlur: any
  handleChange: any
  errors: any
  touched: any
}): JSX.Element => {
//   const { id } = useParams()
  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        {/* <div className="bg-white p-4 rounded-xl mt-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-0">
            <span className="text-left flex flex-col md:flex-row gap-2 md:gap-6 text-black uppercase">
              <span className="text-sm md:text-base font-bold">
                COLABORADOR(ES) A CARGO:
              </span>
              {colaborador?.map((asignacion: any, index: number) => {
                const assignedCollaborators = colaboradores
                  .filter(
                    (colaborador: { id: number, name: string }) =>
                      colaborador.id == asignacion.peso
                  )
                  .map((colaborador: { name: string }) => colaborador.name)
                return (
                  <Fragment key={index}>
                    {assignedCollaborators && (
                      <span>{assignedCollaborators}</span>
                    )}
                    {index < colaborador.length - 1}
                  </Fragment>
                )
              })}
            </span>
            {!values.fecha_fin && (
              <div className="p-0 bg-yellow-600 hover:bg-yellow-700 rounded-xl">
                {id != null && values.fecha_fin == null && (
                  <button
                    type="button"
                    onClick={() => {
                      if (datos2?.email && datos2?.comentarios) {
                        setOpenCorreoFinal(true)
                      } else if (!datos2?.comentarios) {
                        Swal.fire(
                          'Debe colocar sus comentarios generales',
                          '',
                          'warning'
                        )
                      } else {
                        Swal.fire({
                          title: 'EL cliente no tiene un email registrado',
                          showDenyButton: true,
                          confirmButtonText: 'Registrar email',
                          denyButtonText: 'Cancelar'
                        }).then(async (result: SweetAlertResult) => {
                          if (result.isConfirmed) {
                            setOpenMailFinal(true)
                          }
                        })
                      }
                    }}
                    className="text-sm text-center w-full md:text-base transition-colors text-white font-bold flex items-center justify-center gap-x-4 p-2 flex-1 rounded-xl"
                  >
                    Finalizar servicio
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl mt-6">
          <div className="w-full flex flex-col justify-start md:items-start gap-y-2 relative">
            <div className="flex flex-col gap-2 mb-3 ">
              <h2 className="text-xl lg:text-2xl font-bold text-black">
                Seguimiento del proyecto
              </h2>
              <h3 className="font-bold text-base">
                <span className="text-gray-400 text-sm lg:text-base">
                  Correos recibidos
                </span>{' '}
              </h3>
            </div>
            <span
              className="w-fit px-4 py-2 bg-main text-white font-bold rounded-xl absolute right-2 flex gap-2 items-center cursor-pointer"
              onClick={() => {
                if (
                  datos.correo &&
                  datos.correo != 'null' &&
                  datos.correo != null
                ) {
                  setOpenQuestion(true)
                } else {
                  Swal.fire({
                    title: 'EL cliente no tiene un email registrado',
                    showDenyButton: true,
                    confirmButtonText: 'Registrar email',
                    denyButtonText: 'Cancelar'
                  }).then(async (result: SweetAlertResult) => {
                    if (result.isConfirmed) {
                      setOpenMail(true)
                    }
                  })
                }
              }}
            >
              Agregar avance
            </span>
            <section className="w-full quitar_padding_bottom">
              <SwiperAvances
                arrayAlta={arrayAlta}
                arrayAvances={arrayAvances}
                setAvance={setAvance}
                setOpen={setOpenAvance}
                setOpenFinal={setOpenFinal}
                arrayFinal={arrayFinal}
                setFinal={setfinal}
                setOpenActa={setOpenActa}
                arrayActa={arrayActa}
                datos={datos}
                setOpenAlta={setopenAlta}
              />
            </section>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl mt-6">
          <div className="flex justify-between gap-2 mb-4">
            <h2 className="text-xl w-full lg:text-2xl font-bold text-black">
              Comentario general
            </h2>
            <div className="flex gap-2 w-full justify-end">
              <input
                type="submit"
                className="bg-main_2-200 text-white hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors cursor-pointer"
                value="Grabar comentario"
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center flex-col md:flex-row gap-2 lg:gap-5">
            <div className="w-full">
              <textarea
                cols={30}
                rows={10}
                className="border placeholder-gray-400 focus:outline-none
                                                            focus:border-black w-full  pr-4 h-24 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                                            border-gray-300 rounded-md transition-all text-black"
                name="comentarios"
                value={values.comentarios}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>

              <Errors
                errors={errors.comentarios}
                touched={touched.comentarios}
              />
            </div>
          </div>
        </div> */}

        <section className="w-full ">
          <h2 className="font-bold text-2xl text-black">Hosting Web</h2>
          <span className="text-gray-500 mt-3">Panel administrativo</span>
        </section>

        <section className="grid grid-cols-2 w-full mt-6 gap-20">
          <div className="w-full shadow_hosting bg-white rounded-2xl p-6 flex flex-col space-y-5">
            <div className="flex justify-between text-black w-full">
              <div className="font-medium text-xl">Frecuencia de pagos</div>
            </div>
            <div className="mx-auto flex flex-col md:flex-row flex-1 md:space-x-3 space-y-3 md:space-y-0">
              <div className="flex md:flex-col items-center space-y-2 md:justify-end gap-x-2 md:gap-x-0">
                <div className="w-5 order-1 md:order-none mt-2 bg-gradient-to-t from-[#4E54C8] to-[#D23741] cursor-pointer hover:w-6 transition-all h-5 rounded-full"></div>
                <div className="text-black">
                  <h5 className="text-[10px] font-bold">ENERO</h5>
                </div>
              </div>
              <div className="flex md:flex-col items-center space-y-2 md:justify-end gap-x-2 md:gap-x-0">
                <div className="w-8 md:w-5 order-1 md:order-none mt-2 bg-gradient-to-t from-[#4E54C8] to-[#D23741] cursor-pointer hover:w-6 transition-all h-5 md:h-8 rounded-full"></div>
                <div className="text-black">
                  <h5 className="text-[10px] font-bold">FEBRERO</h5>
                </div>
              </div>
              <div className="flex md:flex-col items-center space-y-2 md:justify-end gap-x-2 md:gap-x-0">
                <div className="w-12 md:w-5 order-1 md:order-none mt-2 bg-gradient-to-t from-[#4E54C8] to-[#D23741] cursor-pointer hover:w-6 transition-all h-5 md:h-12 rounded-full"></div>
                <div className="text-black">
                  <h5 className="text-[10px] font-bold">MARZO</h5>
                </div>
              </div>
              <div className="flex md:flex-col items-center space-y-2 md:justify-end gap-x-2 md:gap-x-0">
                <div className="w-16 md:w-5 order-1 md:order-none mt-2 bg-gradient-to-t from-[#4E54C8] to-[#D23741] cursor-pointer hover:w-6 transition-all h-5 md:h-16 rounded-full"></div>
                <div className="text-black">
                  <h5 className="text-[10px] font-bold">ABRIL</h5>
                </div>
              </div>
              <div className="flex md:flex-col items-center space-y-2 md:justify-end gap-x-2 md:gap-x-0">
                <div className="w-20 md:w-5 order-1 md:order-none mt-2 bg-gradient-to-t from-[#4E54C8] to-[#D23741] cursor-pointer hover:w-6 transition-all h-5 md:h-20 rounded-full"></div>
                <div className="text-black">
                  <h5 className="text-[10px] font-bold">MAYO</h5>
                </div>
              </div>
              <div className="flex md:flex-col items-center space-y-2 md:justify-end gap-x-2 md:gap-x-0">
                <div className="w-32 md:w-5 order-1 md:order-none mt-2 bg-gradient-to-t from-[#4E54C8] to-[#D23741] cursor-pointer hover:w-6 transition-all h-5 md:h-32 rounded-full"></div>
                <div className="text-black">
                  <h5 className="text-[10px] font-bold">JUNIO</h5>
                </div>
              </div>
              <div className="flex md:flex-col items-center space-y-2 md:justify-end gap-x-2 md:gap-x-0">
                <div className="w-16 md:w-5 order-1 md:order-none mt-2 bg-gradient-to-t from-[#4E54C8] to-[#D23741] cursor-pointer hover:w-6 transition-all h-5 md:h-16 rounded-full"></div>
                <div className="text-black">
                  <h5 className="text-[10px] font-bold">JULIO</h5>
                </div>
              </div>
              <div className="flex md:flex-col items-center space-y-2 md:justify-end gap-x-2 md:gap-x-0">
                <div className="w-12 md:w-5 order-1 md:order-none mt-2 bg-gradient-to-t from-[#4E54C8] to-[#D23741] cursor-pointer hover:w-6 transition-all h-5 md:h-12 rounded-full"></div>
                <div className="text-black">
                  <h5 className="text-[10px] font-bold">AGOSTO</h5>
                </div>
              </div>
              <div className="flex md:flex-col items-center space-y-2 md:justify-end gap-x-2 md:gap-x-0">
                <div className="w-10 md:w-5 order-1 md:order-none mt-2 bg-gradient-to-t from-[#4E54C8] to-[#D23741] cursor-pointer hover:w-6 transition-all h-5 md:h-10 rounded-full"></div>
                <div className="text-black">
                  <h5 className="text-[10px] font-bold">SEPTIEMBRE</h5>
                </div>
              </div>
              <div className="flex md:flex-col items-center space-y-2 md:justify-end gap-x-2 md:gap-x-0">
                <div className="w-4 md:w-5 order-1 md:order-none mt-2 bg-gradient-to-t from-[#4E54C8] to-[#D23741] cursor-pointer hover:w-6 transition-all h-5 md:h-4 rounded-full"></div>
                <div className="text-black">
                  <h5 className="text-[10px] font-bold">OCTUBRE</h5>
                </div>
              </div>
              <div className="flex md:flex-col items-center space-y-2 md:justify-end gap-x-2 md:gap-x-0">
                <div className="w-2 md:w-5 order-1 md:order-none mt-2 bg-gradient-to-t from-[#4E54C8] to-[#D23741] cursor-pointer hover:w-6 transition-all h-5 md:h-2 rounded-full"></div>
                <div className="text-black">
                  <h5 className="text-[10px] font-bold">NOVIEMBRE</h5>
                </div>
              </div>
            </div>
          </div>
          <section className="grid grid-cols-2 gap-6">
            <div className="w-full shadow_hosting bg-white rounded-2xl p-6 flex flex-col space-y-5">
              <div className="flex justify-between text-black w-full">
                <div className="font-medium text-xl">Balance</div>
              </div>
              <div className="flex gap-0 flex-col">
                <span className="text-main text-3xl font-bold">S/ 430</span>
                <span className="text-main/60">Pago anual</span>
              </div>
              <div className="flex gap-3 flex-col">
                <span className="text-black/60 font-bold">
                  Estado:{' '}
                  <span className="text-green-600 text-lg">Vigente</span>
                </span>
                <span className="text-black/60 font-bold">
                  F. Inicio: <span className="text-gray-400">13/10/2023</span>
                </span>
              </div>
            </div>
            <div className="w-full shadow_hosting bg-white rounded-2xl p-6 flex flex-col space-y-5">
              <div className="flex justify-between text-black w-full">
                <div className="font-medium text-xl">Soporte</div>
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <BiSupport className="text-3xl text-main" />
                </div>
                <div className="flex flex-col">
                  <span className="text-black/90 font-medium">
                    +51 982 408 652
                  </span>
                  <span className="text-gray-600 text-sm">
                    Numero de contacto
                  </span>
                </div>
              </div>
              <div className="flex gap-3 flex-col">
                <span className="text-main font-bold">
                  ID: <span className="text-gray-700">5492</span>
                </span>
                <span className="text-gray-700 font-bold">
                  Horario de atencion:
                </span>
                <span className="text-black">9:00 - 6:00pm</span>
              </div>
            </div>
          </section>
        </section>

        <section className="grid grid-cols-2 w-full mt-6 gap-20">
          <section className="grid grid-cols-3 gap-6">
            <div className="w-full shadow_hosting bg-white rounded-2xl p-6 flex flex-col space-y-5">
              <div className="flex gap-3 items-center text-black w-full">
                <GrDomain className="text-2xl text-main" />
                <div className="font-medium text-xl">Dominios</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex flex-col">
                  <span className="text-black/90 font-medium flex gap-3">
                    <span className='text-red-500'> 1 </span> Dominio
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full shadow_hosting bg-white rounded-2xl p-6 flex flex-col space-y-5">
              <div className="flex gap-3 items-center text-black w-full">
                <MdOutlineStorage className="text-2xl text-main" />
                <div className="font-medium text-xl">Espacio</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex flex-col">
                  <span className="text-black/90 font-medium flex gap-3">
                    <span className='text-red-500'> 2000 </span> MB
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full shadow_hosting bg-white rounded-2xl p-6 flex flex-col space-y-5">
              <div className="flex gap-3 items-center text-black w-full">
                <AiOutlineCloudServer className="text-2xl text-main" />
                <div className="font-medium text-xl">Hosting</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex flex-col">
                  <span className="text-black/90 font-medium flex gap-3">
                     Hostgator
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full shadow_hosting bg-white rounded-2xl p-6 flex flex-col space-y-5">
              <div className="flex gap-3 items-center text-black w-full">
                <AiOutlineCloudServer className="text-2xl text-main" />
                <div className="font-medium text-xl">Dominio</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex flex-col">
                  <span className="text-black/90 font-medium flex gap-3">
                     GoDaddy
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-1 gap-6">
            <div className="w-full shadow_hosting bg-white rounded-2xl p-6 flex flex-col space-y-5">
              <div className="flex gap-7 items-center">
                <div className="flex flex-col">
                  <Link to='https://www.gic.pe/' target='_black' className="text-blue-500 font-medium flex gap-3 items-center">
                    <span className='text-red-500'> <FaLink className='text-xl'/> </span> www.gic.pe
                  </Link>
                </div>
                <div className='text-green-600 flex gap-1 text-lg items-center'>
                    <MdSecurity />
                    <span>SSL</span>
                </div>
              </div>
            </div>
            <div className="w-full shadow_hosting bg-white rounded-2xl p-6 flex flex-col space-y-5">
              <div className="flex gap-7 items-center">
                <div className="flex flex-col">
                  <Link to='https://www.gic.pe/' target='_black' className="text-blue-500 font-medium flex gap-3 items-center">
                    <span className='text-red-500'> <FaLink className='text-xl'/> </span> www.gic.pe
                  </Link>
                </div>
                <div className='text-green-600 flex gap-1 text-lg items-center'>
                    <MdSecurity />
                    <span>SSL</span>
                </div>
              </div>
            </div>
            <div className="w-full shadow_hosting bg-white rounded-2xl p-6 flex flex-col space-y-5">
              <div className="flex gap-7 items-center">
                <div className="flex flex-col">
                  <Link to='https://www.gic.pe/' target='_black' className="text-blue-500 font-medium flex gap-3 items-center">
                    <span className='text-red-500'> <FaLink className='text-xl'/> </span> www.gic.pe
                  </Link>
                </div>
                <div className='text-green-600 flex gap-1 text-lg items-center'>
                    <MdSecurity />
                    <span>SSL</span>
                </div>
              </div>
            </div>
          </section>
        </section>
      </form>
    </>
  )
}
