import { CiPen, CiViewTimeline, CiSquareCheck } from 'react-icons/ci'
import Swal, { type SweetAlertResult } from 'sweetalert2'
import { ArchivosFinales } from '../ArchivosFinales'
import { SwiperAvances } from '../SwiperAvances'
import { Errors } from '../../../../shared/Errors'
import { motion } from 'framer-motion'
import { PiCalendarLight, PiCalendarCheckLight } from 'react-icons/pi'
import { BsFiletypePdf } from 'react-icons/bs'
import { Fragment, useState, useEffect } from 'react'

interface Proceso {
  titulo: string
  fecha: string
  icono: string
}

interface Datadiseno {
  propuestas: boolean
  fecha_propuestas: string
  envio_informacion: boolean
  fecha_informacion: string
}

export const PlanLogotipo = ({
  handleSubmit,
  updateStructuraDiseno,
  dataUpdatedDiseno,
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
  validateBrief,
  colaborador,
  colaboradores
}: {
  fechaCreacion: any
  updateStructuraDiseno: any
  pdfName: any
  dataUpdatedDiseno: Datadiseno
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
  const percentage = datos.fecha_fin ? 100 : 50
  const pathLength = percentage / 100

  function formatearFecha (fecha: string): string {
    // Dividir la cadena de fecha en día, mes y año
    if (fecha === '' || fecha === undefined || fecha === null) {
      return '--'
    }
    const partes = fecha.split('/')
    const dia = partes[0]
    const mes = partes[1]
    const anio = partes[2]

    // Reorganizar la fecha en el formato YYYY-MM-DD
    const fechaISO = `${anio}-${mes}-${dia}`

    // Crear un objeto de fecha
    const fechaObj = new Date(fechaISO)

    // Verificar si la fecha es válida
    if (isNaN(fechaObj.getTime())) {
      return 'Fecha inválida'
    }

    // Array con los nombres de los meses
    const meses = [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic'
    ]

    // Obtener el día y el mes
    const diaFormateado = fechaObj.getDate()
    const mesFormateado = meses[fechaObj.getMonth()]

    // Crear la cadena HTML con los datos
    const resultado = `<span>${diaFormateado}</span><br/>
                       <span>${mesFormateado}</span>`

    return resultado
  }

  const procesosAntiguos: Proceso[] = [
    {
      titulo: 'Brief completado',
      fecha: datos.fecha_fin,
      icono: 'br'
    },
    {
      titulo: `${datos.id_contrato.includes('LPBRO') ? 'Avance del brochure' : 'Sustentación de propuestas'}`,
      fecha: datos.fecha_fin,
      icono: 'pdf'
    },
    {
      titulo: 'Proyecto finalizado',
      fecha: datos.fecha_fin,
      icono: 'fin'
    }
  ]

  const procesosPiezas: Proceso[] = [
    {
      titulo: 'Recopilación de información',
      fecha: datos.fecha_fin,
      icono: 'br'
    },
    {
      titulo: 'Envío de propuestas',
      fecha: datos.fecha_fin,
      icono: 'pdf'
    },
    {
      titulo: 'Proyecto finalizado',
      fecha: datos.fecha_fin,
      icono: 'fin'
    }
  ]

  function compararFechas (fecha1: string): boolean {
    if (fecha1 === '' || fecha1 === undefined || fecha1 === null) {
      return false
    }
    const date1 = new Date(fecha1.split('/').reverse().join('/'))
    const date2 = new Date('2024-03-27') // Formato 'YYYY-MM-DD'
    return date1 < date2
  }

  const [sendPropuestas, setSendPropuestas] = useState(false)
  const [informacionRecopilada, setInformacionRecopilada] = useState(false)
  const [dataDiseno, setDataDiseno] = useState<Datadiseno>({
    fecha_propuestas: '',
    propuestas: false,
    envio_informacion: false,
    fecha_informacion: ''
  })

  useEffect(() => {
    setDataDiseno(prevDataDiseno => ({
      ...prevDataDiseno,
      fecha_propuestas: sendPropuestas ? new Date().toString() : '',
      propuestas: sendPropuestas,
      envio_informacion: informacionRecopilada,
      fecha_informacion: informacionRecopilada ? new Date().toString() : ''
    }))
  }, [sendPropuestas, informacionRecopilada])

  useEffect(() => {
    if (sendPropuestas || informacionRecopilada) {
      updateStructuraDiseno(dataDiseno)
    }
  }, [dataDiseno])

  function formatearFecha2 (fechaString: any): string {
    // Crear un objeto Date a partir de la cadena de fecha
    const fecha = new Date(fechaString)

    // Obtener día, mes y año de la fecha
    const dia = fecha.getDate().toString().padStart(2, '0')
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0') // Se suma 1 porque los meses van de 0 a 11
    const año = fecha.getFullYear().toString()

    // Formatear la fecha en el formato "dd/mm/yyyy"
    return `${dia}/${mes}/${año}`
  }

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
          <div className="bg-white flex flex-col w-full lg:max-w-[48%] xl:max-w-[40%]  rounded-2xl p-4 border border-gray-300 transition-colors hover:border-secundario/50">
            <div className="flex items-center justify-between gap-24 pb-4 border-b border-gray-300">
              <div className="flex gap-2 items-center">
                <CiPen className="text-secundario text-2xl flex flex-none" />
                <p className="text-[#252525] lowercase first-letter:uppercase">
                  {datos.nombre_marca}
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
              <h5 className="typografy_plan text-secundario text-4xl text-center">
                {datos.id_contrato.includes('LP69') && 'Plan 69'}
                {datos.id_contrato.includes('LP79') && 'Plan 79'}
                {datos.id_contrato.includes('LP89') && 'Plan 89'}
                {datos.id_contrato.includes('LPPG') && 'Plan Piezas Gráficas'}

                {datos.id_contrato.includes('LPEXC') && 'Plan Excepcional'}
                {datos.id_contrato.slice(0, 5) === 'LPBRO' && 'Plan Brochure'}
                {datos.id_contrato.includes('LPB') && 'Plan Básico'}

              </h5>
            </div>
            <div className="flex py-4 px-4 text-[#252525]">
              <p className="font-semibold flex items-center flex-wrap gap-4 w-full justify-around">
                Colaborador a cargo:{' '}
                <span className="font-normal block p-1 px-4 bg-secundario/20 rounded-full">
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
              </p>
            </div>
            <div className="flex py-4 px-4 pt-0 text-[#252525]">
              <p className="font-semibold flex items-center flex-wrap gap-2 w-full justify-around">
                Cliente:{' '}
                <span className="font-normal block p-1 px-4 rounded-full">
                  {datos.nombres}
                </span>
              </p>
            </div>
          </div>
          <div className="bg-white w-full  lg:max-w-[48%] xl:max-w-[33%]  rounded-2xl p-4 px-5 md:px-8 effect_neu_porcentaje_dise">
            <div className="flex justify-center">
              <h5 className="text-2xl tex-center pb-4 text-secundario font-semibold my-6">
                Procesos completados
              </h5>
            </div>
            <div className="flex flex-col gap-3 relative z-10">
              <div className="absolute -z-10 w-[78%] h-[80%] inset-0 m-auto bg-transparente border-2 border-gray-300 "></div>
              {compararFechas(datos.fecha_fin)
                ? procesosAntiguos.map((proceso: Proceso) => (
                  <>
                    <div className="bg-secundario prue w-full flex flex-col items-center py-2 px-2 rounded-2xl border border-gray-300 relative">
                      <div className="w-full flex justify-between items-center rounded-full px-3 md:px-4 py-1 ">
                        <div className="flex gap-2 items-center text-base md:text-lg text-white">
                          <span className="prue_circulo bg-white rounded-full p-2 flex items-center justify-center">
                            {proceso.icono === 'br' && (
                              <CiViewTimeline className="text-secundario text-3xl" />
                            )}
                            {proceso.icono === 'pdf' && (
                              <BsFiletypePdf className="text-secundario text-3xl" />
                            )}
                            {proceso.icono === 'fin' && (
                              <CiSquareCheck className="text-secundario text-3xl" />
                            )}
                          </span>
                          <span className="flex flex-col">
                            <p className="">{proceso.titulo}</p>
                          </span>
                        </div>
                        <div className="flex">
                          <span className="text-base text-[#fff]">
                            {proceso.fecha}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                ))
                : (

                  <>

                      {datos.id_contrato.includes('LPPG')
                        ? (
                            procesosPiezas.map((proceso: Proceso, index: number) => (
                              <div key={index} className={`${(dataUpdatedDiseno.propuestas && index === 1) || (dataUpdatedDiseno.envio_informacion && index === 0) || datos.fecha_fin ? 'prue' : ''} bg-white w-full flex flex-col items-center py-2 px-2 rounded-2xl border border-gray-300 relative`}>
                                <div className="w-full flex justify-between items-center rounded-full px-3 md:px-4 py-1 ">
                                  <div className={`flex gap-2 items-center text-base md:text-lg ${(dataUpdatedDiseno.propuestas && index === 1) || (dataUpdatedDiseno.envio_informacion && index === 0) ? 'text-white' : 'text-[#252525]'}`}>
                                    <span className="prue_circulo bg-white rounded-full p-2 flex items-center justify-center">
                                      {proceso.icono === 'br' && (
                                        <CiViewTimeline className="text-secundario text-3xl" />
                                      )}
                                      {proceso.icono === 'pdf' && (
                                        <BsFiletypePdf className="text-secundario text-3xl" />
                                      )}
                                      {proceso.icono === 'fin' && (
                                        <CiSquareCheck className="text-secundario text-3xl" />
                                      )}
                                    </span>
                                    <span className="flex flex-col">
                                      <p className="">{proceso.titulo}</p>
                                    </span>
                                  </div>
                                  <div className="flex relative ctn_confirmacion">
                                    <span className={`text-base ${(dataUpdatedDiseno.propuestas && index === 1) || (dataUpdatedDiseno.envio_informacion && index === 0) ? 'text-white' : 'text-[#252525]'} `}>

                                      {index === 0 && (
                                        dataUpdatedDiseno.envio_informacion ? formatearFecha2(dataUpdatedDiseno.fecha_informacion) : '--'
                                      )}
                                      {index === 1 && (
                                        dataUpdatedDiseno.propuestas ? formatearFecha2(dataUpdatedDiseno.fecha_propuestas) : '--'

                                      )}

                                    </span>

                                    {!dataUpdatedDiseno.envio_informacion && index === 0 && (
                                      <button type="button" onClick={() => { setInformacionRecopilada(true) }} className="w-[90px] h-full absolute right-0 top-0 bottom-0 my-auto bg-secundario px-4 py-0 text-white rounded-md">Enviado</button>

                                    )}

                                    {!dataUpdatedDiseno.propuestas && index === 1 && (
                                      <button type="button" onClick={() => { setSendPropuestas(true) }} className="w-[90px] h-full absolute right-0 top-0 bottom-0 my-auto bg-secundario px-4 py-0 text-white rounded-md">Enviado</button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))
                          )
                        : (
                            procesosAntiguos.map((proceso: Proceso, index: number) => (
                            <div key={index} className={`${dataUpdatedDiseno.propuestas && index === 1 ? 'prue' : ''} bg-white w-full flex flex-col items-center py-2 px-2 rounded-2xl border border-gray-300 relative`}>
                              <div className="w-full flex justify-between items-center rounded-full px-3 md:px-4 py-1 ">
                                <div className={`flex gap-2 items-center text-base md:text-lg ${dataUpdatedDiseno.propuestas && index === 1 ? 'text-white' : 'text-[#252525]'}`}>
                                  <span className="prue_circulo bg-white rounded-full p-2 flex items-center justify-center">
                                    {proceso.icono === 'br' && (
                                      <CiViewTimeline className="text-secundario text-3xl" />
                                    )}
                                    {proceso.icono === 'pdf' && (
                                      <BsFiletypePdf className="text-secundario text-3xl" />
                                    )}
                                    {proceso.icono === 'fin' && (
                                      <CiSquareCheck className="text-secundario text-3xl" />
                                    )}
                                  </span>
                                  <span className="flex flex-col">
                                    <p className="">{proceso.titulo}</p>
                                  </span>
                                </div>
                                <div className="flex relative ctn_confirmacion">
                                  <span className={`text-base ${dataUpdatedDiseno.propuestas && index === 1 ? 'text-white' : 'text-[#252525]'} `}>
                                    {index === 1 && dataUpdatedDiseno.propuestas ? formatearFecha2(dataUpdatedDiseno.fecha_propuestas) : '--'}
                                  </span>

                                  {!dataUpdatedDiseno.propuestas && index === 1 && (
                                    <button type="button" onClick={() => { setSendPropuestas(true) }} className="w-[90px] h-full absolute right-0 top-0 bottom-0 my-auto bg-secundario px-4 py-0 text-white rounded-md">Enviado</button>
                                  )}
                                </div>
                              </div>
                            </div>
                            ))

                          )}
                    </>
                  )}
              {/* <div className="bg-secundario prue w-full flex flex-col items-center py-2 px-2 rounded-2xl border border-gray-300 relative">
                <div className="w-full flex justify-between items-center rounded-full px-3 md:px-4 py-1 ">
                  <div className="flex gap-2 items-center text-base md:text-lg text-white">
                    <span className="prue_circulo bg-white rounded-full p-2 flex items-center justify-center">
                      <CiViewTimeline className="text-secundario text-3xl" />
                    </span>
                    <span className="flex flex-col">
                      <p className="">Brief completado</p>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-base text-[#fff]">23/03</span>
                  </div>
                </div>
              </div>
              <div className="bg-secundario prue w-full flex flex-col items-center py-2 px-2 rounded-2xl border border-gray-300">
                <div className="w-full flex justify-between items-center rounded-full px-3 md:px-4 py-1">
                  <div className="flex gap-2 items-center text-base md:text-lg text-white">
                    <span className="prue_circulo rounded-full p-3 flex items-center justify-center">
                      <BsFiletypePdf className="text-secundario text-[22px]" />
                    </span>
                    <span className="flex flex-col">
                      <p>Sustentación de propuestas</p>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-base text-[#fff]">23/03</span>
                  </div>
                </div>
              </div>
              <div className="bg-white w-full flex flex-col items-center py-2 px-2 rounded-2xl border border-gray-300">
                <div className="w-full flex justify-between items-center rounded-full px-3 md:px-4 py-1">
                  <div className="flex gap-2 items-center text-base md:text-lg text-[#252525]">
                    <span className="border border-secundario rounded-full p-2 flex items-center justify-center">
                      <CiSquareCheck className="text-secundario text-3xl" />
                    </span>
                    <span className="flex flex-col">
                      <p>Proyecto Finalizado</p>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-base text-[#404040]">23/03</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className=" flex flex-col gap-4 w-full xl:max-w-[23%]  ">
            <div className="flex bg-white effect_neu_porcentaje_dise flex-col rounded-2xl p-4 pt-6 pb-0  border-gray-300">
              <p className="text-center text-secundario font-semibold text-xl mb-4">
                Porcentaje del proyecto
              </p>
              <div className="min-w-[246px] rounded-xl flex px-6 py-8 pb-0 pt-0 flex-col justify-center items-center">
                <div className="w-60 h-40 relative overflow-visible">
                  <div className="absolute w-full h-full">
                    <svg
                      viewBox="25 35 150 100"
                      width="100%"
                      height="auto"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 50,100
           A 50,50 0 0,1 150,100"
                        fill="none"
                        stroke="#ddd"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <svg
                      viewBox="25 35 150 100"
                      width="100%"
                      height="auto"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.path
                        d="M 150,100 A 50,50 0 0,0 50,100"
                        fill="none"
                        stroke="#4E54C8"
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, pathOffset: 1 }}
                        animate={{ pathLength, pathOffset: 1 - pathLength }}
                        transition={{ duration: 1 }}
                      />
                    </svg>
                  </div>

                  <div className="absolute inset-0 flex justify-center items-center text-lg font-bold text-gray-800">
                    <span>{percentage}%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex effect_neu_porcentaje_dise  flex-col gap-4 rounded-2xl p-4 ">
              <div className="flex items-center justify-between">
                <p className="text-[#252525] text-lg flex gap-2 items-center">
                  <PiCalendarLight className="text-2xl text-secundario" />
                  Fecha de inicio
                </p>
                <div className="flex flex-col bg_date_inicio_diseno rounded-lg w-[65px] h-[60px] text-white items-center font-medium justify-center text-center">
                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: formatearFecha(datos.fecha_inicio)
                    }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#252525] text-lg flex gap-2 items-center">
                  <PiCalendarCheckLight className="text-2xl text-secundario" />
                  Fecha final
                </p>
                <div className="flex flex-col bg_date_final_diseno rounded-lg w-[65px] h-[60px] text-white items-center font-medium justify-center text-center">
                  {/* <span>27</span>
                  <span>Mar</span> */}
                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: formatearFecha(datos.fecha_fin)
                    }}
                  ></div>
                </div>
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
