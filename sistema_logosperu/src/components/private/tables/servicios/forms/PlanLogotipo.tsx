import {
  CiPen,
  CiViewTimeline
} from 'react-icons/ci'
import Swal, { type SweetAlertResult } from 'sweetalert2'
import { ArchivosFinales } from '../ArchivosFinales'
import { SwiperAvances } from '../SwiperAvances'
import { Errors } from '../../../../shared/Errors'
import { motion } from 'framer-motion'

import { IoCalendarOutline } from 'react-icons/io5'
export const PlanLogotipo = ({
  handleSubmit,
  id,
  plan,
  pdfName,
  fechaCreacion,
  limite,
  values,
  getOneBrief,
  datos,
  setOpenQuestion,
  setOpenMail,
  arrayAlta,
  arrayAvances,
  setAvance,
  setOpenAvance,
  setOpenFinal,
  arrayFinal,
  setfinal,
  setOpenActa,
  arrayActa,
  setopenAlta,
  handleBlur,
  handleChange,
  errors,
  touched,
  getDatos,
  validateBrief
}: {
  fechaCreacion: any
  pdfName: any
  getOneBrief: any
  id: any
  validateBrief: any
  plan: any
  limite: any
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
  getDatos: any
}): JSX.Element => {
  const percentage = 30

  const fillWidth = (percentage * 100) / 50
  //   const circumference = 2 * Math.PI * 25
  return (
    <>
      <form className="mt-5" onSubmit={handleSubmit}>
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

                            </div>
                        </div> */}

        <div className="flex flex-wrap lg:flex-row gap-4 justify-between">
          <div className="bg-white flex flex-col w-full lg:max-w-[48%] xl:max-w-[40%]  rounded-2xl p-4 border border-gray-300">
            <div className="flex items-center justify-between gap-24 pb-4 border-b border-gray-300">
              <div className="flex gap-2 items-center">
                <CiPen className="text-secundario text-2xl" />
                <p className="text-[#252525] lowercase first-letter:uppercase">
                  ANELISSA COLLECTION
                </p>
              </div>
              {!values.fecha_fin && (
                <div className="p-0 ">
                  {id != null && values.fecha_fin == null && (
                    <button
                      type="button"
                      // onClick={() => {
                      //   if (datos2?.email && datos2?.comentarios) {
                      //     setOpenCorreoFinal(true)
                      //   } else if (!datos2?.comentarios) {
                      //     Swal.fire(
                      //       'Debe colocar sus comentarios generales',
                      //       '',
                      //       'warning'
                      //     )
                      //   } else {
                      //     Swal.fire({
                      //       title: 'EL cliente no tiene un email registrado',
                      //       showDenyButton: true,
                      //       confirmButtonText: 'Registrar email',
                      //       denyButtonText: 'Cancelar'
                      //     }).then(async (result: SweetAlertResult) => {
                      //       if (result.isConfirmed) {
                      //         setOpenMailFinal(true)
                      //       }
                      //     })
                      //   }
                      // }}
                      className="text-sm text-center w-full  text-white font-normal flex items-center justify-center gap-x-4 p-2 px-4 flex-1 bg-secundario border border-secundario hover:bg-white hover:text-secundario  rounded-lg transition-all active:scale-90"
                    >
                      Finalizar
                    </button>
                  )}
                </div>
              )}
            </div>
            <div className="flex py-16 px-4 items-center justify-center border-b border-gray-300">
              <h5 className="typografy_plan text-secundario text-3xl ">
                PLAN EXCEPCIONAL
              </h5>
            </div>
            <div className="flex py-4 px-4 text-[#252525]">
              <p className="font-semibold flex items-center flex-wrap gap-4">
                Colaborador a cargo:{' '}
                <span className="font-normal block p-1 px-4 bg-secundario/20 rounded-full">
                  Milagros Chero
                </span>
              </p>
            </div>
            <div className="flex py-4 px-4 pt-0 text-[#252525]">
              <p className="font-semibold flex items-center flex-wrap gap-2">
                Cliente:{' '}
                <span className="font-normal block p-1 px-4 rounded-full">
                  Gabriel Stefano Garcia Rodriguez
                </span>
              </p>
            </div>
          </div>
          <div className="bg-white w-full  lg:max-w-[48%] xl:max-w-[33%]  rounded-2xl p-4 px-8 border border-gray-300">
                <div className="flex justify-center">
                    <h5 className='text-2xl tex-center text-secundario font-semibold my-6'>Procesos completados</h5>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="w-full flex flex-col items-center py-2 px-2 rounded-2xl border border-gray-300">
                        <div className="w-full flex justify-between items-center rounded-full px-4 py-1 ">
                            <div className='flex gap-2 items-center text-lg text-[#252525]'>
                                <span className='border border-secundario rounded-full p-2 flex items-center justify-center'>
                                    <CiViewTimeline className="text-secundario text-3xl"/>
                                </span>
                                <span className='flex flex-col'>
                                    <p>Brief completado</p>
                                </span>
                            </div>
                            <div className="flex">
                                <span className='text-base text-[#404040]'>23/03</span>

                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center py-2 px-2 rounded-2xl border border-gray-300">
                        <div className="w-full flex justify-between items-center rounded-full px-4 py-1 ">
                            <div className='flex gap-2 items-center text-lg text-[#252525]'>
                                <span className='border border-secundario rounded-full p-2 flex items-center justify-center'>
                                    <CiViewTimeline className="text-secundario text-3xl"/>
                                </span>
                                <span className='flex flex-col'>
                                    <p>Sustentación de propuestas</p>
                                </span>
                            </div>
                            <div className="flex">
                                <span className='text-base text-[#404040]'>23/03</span>

                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center py-2 px-2 rounded-2xl border border-gray-300">
                        <div className="w-full flex justify-between items-center rounded-full px-4 py-1 ">
                            <div className='flex gap-2 items-center text-lg text-[#252525]'>
                                <span className='border border-secundario rounded-full p-2 flex items-center justify-center'>
                                    <CiViewTimeline className="text-secundario text-3xl"/>
                                </span>
                                <span className='flex flex-col'>
                                    <p>Proyecto Finalizado</p>
                                </span>
                            </div>
                            <div className="flex">
                                <span className='text-base text-[#404040]'>23/03</span>

                            </div>
                        </div>
                    </div>

                </div>
          </div>
          <div className=" flex flex-col gap-4 w-full xl:max-w-[23%]  ">
            <div className="flex bg-white  flex-col gap-4 rounded-2xl p-4 border border-gray-300">
              <div className="flex items-center justify-between">
                <p className="text-[#252525] text-lg flex gap-2 items-center"><IoCalendarOutline className="text-2xl text-secundario"/>Fecha de inicio</p>
                <div className="flex flex-col bg_date_inicio_diseno rounded-lg w-[65px] h-[60px] text-white items-center font-medium justify-center text-center">
                  <span>22</span>
                  <span>Mar</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#252525] text-lg flex gap-2 items-center"><IoCalendarOutline className="text-2xl text-secundario"/>Fecha final</p>
                <div className="flex flex-col bg_date_final_diseno rounded-lg w-[65px] h-[60px] text-white items-center font-medium justify-center text-center">
                  <span>27</span>
                  <span>Mar</span>
                </div>
              </div>
            </div>
            <div className="flex bg-white  flex-col gap-4 rounded-2xl p-4 border border-gray-300">
              <p className="text-center text-secundario font-semibold text-xl mb-4">
                Porcentaje del proyecto
              </p>
              <div className="bg-white min-w-[246px] rounded-xl flex px-6 py-8 pb-4 flex-col justify-center items-center">
                <div className="w-40 h-20 relative overflow-visible"> {/* Modificado el estilo overflow */}
                <svg className="w-full h-full" viewBox="0 0 100 50">
                    <path
                    fill="none"
                    stroke="#D23741"
                    strokeWidth="10"
                    strokeLinecap="round"
                    d="M 0 25 A 25 25 0 0 1 100 25"
                    />
                    {percentage > 0 && (
                    <motion.path
                        fill="none"
                        stroke="#38e36b"
                        strokeWidth="10"
                        strokeLinecap="round"
                        d={`M 0 25 A 25 25 0 0 1 ${fillWidth} 25`}
                        style={{ clipPath: `url(#clip-${percentage})` }}
                    />
                    )}
                    <defs>
                    <clipPath id={`clip-${percentage}`}>
                        <rect x="0" y="0" width={fillWidth} height="50" />
                    </clipPath>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex justify-center items-center text-lg font-bold text-gray-800">
                    <span>{percentage}%</span>
                </div>
                </div>
                <span className="block mt-5 text-[#252525]">
                {Number(percentage) === 100 ? 'Proyecto terminado' : 'Porcentaje del proyecto'}
                </span>
            </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl mt-6">
          <ArchivosFinales
            getOneBrief={getOneBrief}
            values={values}
            pdfName={pdfName}
            setpdfName={pdfName}
            fechaCreacion={fechaCreacion}
            limite={limite}
            plan={plan}
            validateBrief={validateBrief}
          />
        </div>

        <div className="bg-white p-4 rounded-xl mt-6">
          <div className="w-full flex flex-col justify-start md:items-start gap-y-2 relative">
            <div className="flex flex-col gap-2 mb-3 ">
              <h2 className="text-xl lg:text-2xl font-bold text-black">
                Seguimiento del proyecto
              </h2>
            </div>
            <span
              className="w-fit px-4 py-2 bg-main text-white font-semibold rounded-xl absolute right-2 flex gap-2 items-center cursor-pointer transition-all active:scale-90"
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
            <section className="w-full pt-6">
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
        </div>
      </form>
    </>
  )
}
