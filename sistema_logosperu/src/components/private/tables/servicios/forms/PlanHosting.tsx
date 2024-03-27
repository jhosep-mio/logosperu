import { Link } from 'react-router-dom'
import Swal, { type SweetAlertResult } from 'sweetalert2'
import { SwiperAvances } from '../SwiperAvances'
import { Errors } from '../../../../shared/Errors'
import { BiRename, BiSupport } from 'react-icons/bi'
import { MdOutlineStorage, MdSecurity } from 'react-icons/md'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { Fragment, useState, useEffect } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { ModalHosting } from './modals/ModalHosting'
import { cn } from '../../../../shared/cn'
import { format } from 'date-fns'
import { IoAddCircle, IoCloseCircle } from 'react-icons/io5'

export const PlanHosting = ({
  handleSubmit,
  colaborador,
  colaboradores,
  hosting,
  values,
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
  setHosting
}: {
  handleSubmit: any
  colaborador: never[]
  colaboradores: never[]
  values: any
  datos2: any
  hosting: any | null
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
  setHosting: any
}): JSX.Element => {
  const [openEdit, setOpenEdit] = useState(false)
  const [fechas, setFechas] = useState<any>([])
  const [addFecha, setAdFecha] = useState(false)
  const [nuevaFecha, setNuevaFecha] = useState<string>('')

  useEffect(() => {
    if (hosting?.fechas) {
      setFechas(hosting?.fechas)
    }
    if (hosting) {
      localStorage.setItem('contratoData', JSON.stringify(hosting))
    }
  }, [hosting])

  const agregarFecha = (): void => {
    setFechas([...fechas, nuevaFecha])
    // Verificar si hosting.fechas existe antes de actualizarlo
    if (hosting.fechas) {
      setHosting({ ...hosting, fechas: [...hosting.fechas, nuevaFecha] })
    } else {
      setHosting({ ...hosting, fechas: [nuevaFecha] })
    }
    setAdFecha(false)
  }

  return (
    <form
      className={cn(
        'fixed inset-0 p-8 w-[86%] ml-[14%] bg-white overflow-y-auto flex',
        openEdit ? 'flex gap-10 pr-4' : ''
      )}
      onSubmit={handleSubmit}
    >
      <div
        className={cn(
          'h-full transition-all duration-300',
          openEdit ? 'w-[70%]' : 'w-full '
        )}
      >
        <section className="w-full flex justify-between items-center group">
          <div className="w-full flex gap-4 items-center">
            <div className="w-ful">
              <h2 className="font-bold text-2xl text-black">Hosting Web</h2>
              <span className="text-gray-500 mt-3">Panel administrativo</span>
            </div>
            <FaRegEdit
              onClick={() => {
                setOpenEdit(!openEdit)
              }}
              className="text-main text-3xl hover:text-main_dark cursor-pointer group-hover:opacity-100 opacity-0 transition-all"
            />
          </div>
          <div className="w-full flex justify-end items-center">
            <span className="text-left flex flex-col md:flex-row gap-2 md:gap-6 text-black uppercase">
              <span className="text-sm md:text-base font-bold text-[#3c70a6]">
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
        </section>
        {hosting && (
          <>
            <section
              className={cn(
                'grid w-full mt-6',
                openEdit ? 'grid-cols-1 gap-3' : 'grid-cols-2 gap-20'
              )}
            >
              <div className="w-full shadow_hosting_grafico bg-white rounded-2xl p-6 flex group flex-col space-y-5 relative">
                {!addFecha
                  ? (
                  <>
                    <IoAddCircle
                      className="absolute top-2 right-2 text-main text-2xl opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                      onClick={() => {
                        setAdFecha(!addFecha)
                      }}
                    />
                    <div className="flex justify-between text-[#3c70a6] w-full">
                      <div className="font-bold text-xl uppercase">
                        Frecuencia de pagos
                      </div>
                    </div>
                    <div className="mx-auto flex flex-col md:flex-row flex-1 md:space-x-3 space-y-3 md:space-y-0">
                      {hosting?.inicio && (
                        <div className="flex md:flex-col items-center space-y-2 md:justify-end gap-x-2 md:gap-x-0">
                          <div className="w-32 md:w-5 order-1 md:order-none mt-2 bg-gradient-to-t from-[#3c70a6] to-[#7aade3] cursor-pointer hover:w-6 transition-all h-5 md:h-32 rounded-full"></div>
                          <div className="text-black">
                            <h5 className="text-[11px] font-bold">
                              {format(hosting?.inicio, 'MM/yyyy')}
                            </h5>
                          </div>
                        </div>
                      )}
                      {hosting?.fechas?.map((fecha: any, index: number) => (
                        <div key={index} className="flex md:flex-col items-center space-y-2 md:justify-end gap-x-2 md:gap-x-0">
                        <div className="w-32 md:w-5 order-1 md:order-none mt-2 bg-gradient-to-t from-[#3c70a6] to-[#7aade3] cursor-pointer hover:w-6 transition-all h-5 md:h-32 rounded-full"></div>
                        <div className="text-black">
                          <h5 className="text-[11px] font-bold">
                            {format(fecha, 'MM/yyyy')}
                          </h5>
                        </div>
                      </div>
                      ))}
                    </div>
                  </>
                    )
                  : (
                  <div className="w-full h-full flex flex-col items-center justify-center relative">
                     <IoCloseCircle
                      className="absolute top-2 right-2 text-main text-2xl opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                      onClick={() => {
                        setAdFecha(!addFecha)
                      }}
                    />
                    <input
                      className="h-9 w-full text-black rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                      name="inicio"
                      type="date"
                      value={nuevaFecha}
                      onChange={(e) => { setNuevaFecha(e.target.value) }}
                    />
                    <input
                      type="button"
                      className="bg-secondary-150 px-3 py-2 mt-4 text-white rounded-md cursor-pointer"
                      value="Grabar"
                      onClick={agregarFecha}
                    />
                  </div>
                    )}
              </div>

              <section className="w-full grid grid-cols-2 gap-6">
                <div className="w-full shadow_hosting bg-[#3c70a6] rounded-2xl p-6 flex flex-col space-y-5">
                  <div className="flex justify-between text-white w-full">
                    <div className="font-bold text-xl uppercase">Balance</div>
                  </div>
                  <div className="flex gap-0 flex-col">
                    <span className="text-white text-3xl font-bold">
                      S/ {hosting?.montoC}
                    </span>
                    <span className="text-gray-300">Pago anual</span>
                  </div>
                  <div className="flex gap-3 flex-col">
                    <span className="text-white font-bold">
                      Estado:{' '}
                      <span className="text-green-400 text-lg font-medium">
                        Vigente
                      </span>
                    </span>
                    <span className="text-white font-bold">
                      F. Inicio:{' '}
                      <span className="text-yellow-500 font-medium">
                        {hosting?.inicio}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="w-full shadow_hosting bg-[#3c70a6]  rounded-2xl p-6 flex flex-col space-y-5">
                  <div className="flex justify-between text-white w-full">
                    <div className="font-bold uppercase text-xl">Soporte</div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div>
                      <BiSupport className="text-5xl text-white bg-[#5B87B4] p-2 rounded-full" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-medium">
                        +51 982 408 652
                      </span>
                      <span className="text-gray-300 text-sm">
                        Numero de contacto
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 flex-col">
                    <span className="text-white font-bold">
                      ID: <span className="text-yellow-500">5492</span>
                    </span>
                    <span className="text-white font-bold">
                      Horario de atencion:
                    </span>
                    <span className="text-white">9:00 - 6:00pm</span>
                  </div>
                </div>
              </section>
            </section>

            <section
              className={cn(
                'grid w-full',
                openEdit
                  ? 'grid-cols-1 gap-3  mt-3'
                  : 'grid-cols-2 gap-20  mt-6 '
              )}
            >
              <section className="grid grid-cols-3 gap-6 ">
                <div className="w-full shadow_hosting bg-[#3c70a6] rounded-2xl p-6 flex flex-col space-y-5">
                  <div className="flex gap-3 items-center text-white w-full">
                    <MdOutlineStorage className="text-4xl bg-white rounded-full p-2 text-[#3c70a6]" />
                    <div className="font-medium text-xl">Espacio</div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex flex-col w-full">
                      <div className="flex gap-3 items-center text-white w-full">
                        <BiRename className="text-4xl opacity-0 bg-white rounded-full p-2 text-[#3c70a6]" />
                        <div className="text-lg">{hosting?.plan}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full shadow_hosting bg-[#3c70a6] rounded-2xl p-6 flex flex-col space-y-5">
                  <div className="flex gap-3 items-center text-white w-full">
                    <MdOutlineStorage className="text-4xl bg-white rounded-full p-2 text-[#3c70a6]" />
                    <div className="font-medium text-xl">Hosting</div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex flex-col w-full">
                      <div className="flex gap-3 items-center text-white w-full">
                        <AiOutlineCloudServer className="text-4xl opacity-0 bg-white rounded-full p-2 text-[#3c70a6]" />
                        <div className="text-lg">{hosting?.phosting}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full shadow_hosting bg-[#3c70a6] rounded-2xl p-6 flex flex-col space-y-5">
                  <div className="flex gap-3 items-center text-white w-full">
                    <MdOutlineStorage className="text-4xl bg-white rounded-full p-2 text-[#3c70a6]" />
                    <div className="font-medium text-xl">Dominio</div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex flex-col w-full">
                      <div className="flex gap-3 items-center text-white w-full">
                        <AiOutlineCloudServer className="text-4xl opacity-0 bg-white rounded-full p-2 text-[#3c70a6]" />
                        <div className="text-lg">
                          {hosting?.pdominio && hosting?.tieneDominio
                            ? hosting?.pdominio
                            : 'Sin dominio'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="grid grid-cols-2 gap-6">
                <div className="w-full shadow_hosting bg-[#3c70a6] rounded-2xl p-6 flex flex-col space-y-5">
                  <div className="relative">
                    <h2 className="bg-[#5B87B4] rounded-md px-2 py-1 text-white font-bold uppercase">
                      {datos?.nombre_marca ? datos?.nombre_marca : 'No registrado'}
                    </h2>
                    <span className="absolute h-5 border-2 border-dashed  w-1 top-10 left-5 before:w-4 before:h-4 before:absolute before:-bottom-5 before:border-2 before:border-white before:rounded-full before:-left-2"></span>
                    <div className="flex gap-7 items-center mt-6 pl-10">
                      <div className="flex flex-col items-center text-lg">
                        <Link
                          to="https://www.gic.pe/"
                          target="_black"
                          className="text-white font-medium flex gap-3 items-center"
                        >
                          {hosting?.dominio}
                        </Link>
                      </div>
                      <div className="text-green-400 flex gap-1 text-lg items-center">
                        <MdSecurity />
                        <span>SSL</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full shadow_hosting bg-[#3c70a6] rounded-2xl p-6 flex flex-col space-y-5">
                  <div className="relative">
                    <h2 className="bg-[#5B87B4] rounded-md px-2 py-1 text-white font-bold uppercase">
                      Accesos
                    </h2>
                    <div className="flex gap-7 items-center mt-3 ">
                      <div className="flex flex-col text-lg">
                        <p className="text-white  flex gap-3 items-center">
                          <span className="font-bold">Usuario:</span>{' '}
                          {hosting?.usuario}
                        </p>
                        <p className="text-white  flex gap-3 items-center">
                          <span className="font-bold">Contraseña:</span>{' '}
                          {hosting?.password}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            <div className="bg-white  rounded-xl mt-10">
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

            <div className="bg-white  rounded-xl mt-6">
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
          </>
        )}
      </div>
      <ModalHosting
        open={openEdit}
        setOpen={setOpenEdit}
        hosting={hosting}
        getDatos={getDatos}
      />
    </form>
  )
}
