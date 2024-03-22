/* eslint-disable @typescript-eslint/no-misused-promises */
import { IoMdCloseCircle } from 'react-icons/io'
import { cn } from '../../../../../shared/cn'
import { useFormik } from 'formik'
import { SchemaValidarHosting } from '../../../../../shared/schemas/Schemas'
import { Errors2 } from '../../../../../shared/Errors2'
import { useState, useEffect } from 'react'
export const ModalHosting = ({
  open,
  setOpen,
  hosting,
  getDatos
}: {
  open: any
  setOpen: any
  hosting: any | null
  getDatos: any
}): JSX.Element => {
  const [loading, setLoading] = useState(false)

  const SaveContrato = async (): Promise<void> => {
    setLoading(true)
    localStorage.setItem('contratoData', JSON.stringify(values))
    getDatos()
    setLoading(false)
  }

  const {
    handleSubmit,
    handleChange,
    setValues,
    errors,
    isSubmitting,
    values,
    touched,
    handleBlur
  } = useFormik({
    initialValues: {
      dominio: '',
      pdominio: '',
      phosting: '',
      tieneDominio: false,
      plan: '',
      inicio: '',
      usuario: '',
      password: '',
      montoC: '',
      montoP: '',
      ganancia: ''
    },
    validationSchema: SchemaValidarHosting,
    onSubmit: SaveContrato
  })

  useEffect(() => {
    if (errors && isSubmitting) {
      const firstErrorKey = Object.keys(errors)[0]
      const firstErrorElement = document.getElementsByName(firstErrorKey)[0]
      if (firstErrorElement) {
        firstErrorElement.focus()
      }
    }
  }, [touched, errors, isSubmitting])

  const handleFormSubmit = async (): Promise<void> => {
    try {
      // eslint-disable-next-line @typescript-eslint/await-thenable, @typescript-eslint/no-confusing-void-expression
      await handleSubmit() // Llama a la función de envío del formulario
    } catch (error) {
      console.error('Error al enviar los datos:', error)
    }
  }

  useEffect(() => {
    if (hosting) {
      setValues({
        ...values,
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        dominio: hosting?.dominio,
        pdominio: hosting?.pdominio,
        phosting: hosting?.phosting,
        tieneDominio: hosting?.tieneDominio,
        plan: hosting?.plan,
        inicio: hosting?.inicio,
        usuario: hosting?.usuario,
        password: hosting?.password,
        montoC: hosting?.montoC,
        montoP: hosting?.montoP,
        ganancia: hosting?.ganancia
      })
    }
  }, [hosting])

  return (
    <>
      <div
        className={cn(
          ' bg-white shadow_hosting_grafico transition-all rounded-md  relative duration-300',
          open ? 'w-[30%] p-4' : 'w-0 p-0 overflow-hidden'
        )}
      >
        <IoMdCloseCircle
          className="absolute top-2 right-2 text-2xl text-red-500 hover:text-main_dark transition-colors cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        <h2 className="w-full text-center text-black text-xl font-bold uppercase">
          Edicion
        </h2>

        <form
          className="flex flex-col bg-white rounded-md relative p-4"
          onSubmit={(e) => { e.preventDefault() }} // Evita el envío predeterminado del formulario
        >
          <div className="flex w-full flex-col">
            <div className="w-full flex flex-col text-white">
              <div className="mb-3 md:mb-0 w-full bg-form rounded-md rounded-tl-none md:p-3 text-black flex flex-col items-end gap-0 lg:gap-x-5 lg:gap-y-0">
                <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-5 mt-3 lg:mt-0">
                  <div className="w-full relative pb-0 md:pb-5">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Cliente (dominio)
                    </label>
                    <input
                      className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                      name="dominio"
                      value={values.dominio}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Errors2
                      errors={errors.dominio}
                      touched={touched.dominio}
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-5 mt-3 lg:mt-0">
                  <div className="w-full gap-4 flex items-center relative pb-0 md:pb-5">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="dominio"
                    >
                      ¿Cuenta con dominio?
                    </label>
                    <input
                      type="checkbox"
                      name="tieneDominio"
                      className="h-4 w-4 rounded border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                      checked={values.tieneDominio}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-0 lg:gap-5 mt-3 lg:mt-0">
                  <div className="w-full relative pb-5 ">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Proovedor hosting
                    </label>
                    <select
                      className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                      name="phosting"
                      value={values.phosting}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      {/* FB GOOGLE, VENTAS, POST VENTA, RECOMENDACION, ISNTAGRAM) */}
                      <option value="">Seleccionar</option>
                      <option value="BlueHost">BlueHost</option>
                      <option value="Hostgator">Hostgator</option>
                      <option value="A2 Hosting">A2 Hosting</option>
                    </select>
                    <Errors2
                      errors={errors.phosting}
                      touched={touched.phosting}
                    />
                  </div>
                  {values.tieneDominio && (
                    <div className="w-full relative pb-5 ">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Proovedor dominio
                      </label>
                      <select
                        className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                        name="pdominio"
                        value={values.pdominio}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {/* FB GOOGLE, VENTAS, POST VENTA, RECOMENDACION, ISNTAGRAM) */}
                        <option value="">Seleccionar</option>
                        <option value="GoDaddy">GoDaddy</option>
                        <option value="Punto pe">Punto pe</option>
                      </select>
                      <Errors2
                        errors={errors.pdominio}
                        touched={touched.pdominio}
                      />
                    </div>
                  )}
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-0 lg:gap-5 mt-3 lg:mt-0">
                  <div className="w-full relative pb-5 ">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Plan contratado
                    </label>
                    <select
                      className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                      name="plan"
                      value={values.plan}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      {/* FB GOOGLE, VENTAS, POST VENTA, RECOMENDACION, ISNTAGRAM) */}
                      <option value="">Seleccionar</option>
                      <option value="400 MB">400 MB</option>
                      <option value="1000 MB">1000 MB</option>
                      <option value="3000 MB">3000 MB</option>
                      <option value="10000 MB">10000 MB</option>
                      <option value="Ilimitado">Ilimitado</option>
                    </select>
                    <Errors2 errors={errors.plan} touched={touched.plan} />
                  </div>
                  <div className="w-full relative pb-5 ">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Fecha de inicio
                    </label>
                    <input
                      className="h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                      name="inicio"
                      type='date'
                      value={values.inicio}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Errors2
                      errors={errors.inicio}
                      touched={touched.inicio}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-0 lg:gap-5 mt-3 lg:mt-0">
                  <div className="w-full relative pb-5 ">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Usuario
                    </label>
                    <input
                      className="h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                      name="usuario"
                      type='text'
                      value={values.usuario}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Errors2
                      errors={errors.usuario}
                      touched={touched.usuario}
                    />
                  </div>
                  <div className="w-full relative pb-5 ">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Contraseña
                    </label>
                    <input
                      className="h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Errors2
                      errors={errors.password}
                      touched={touched.password}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-0 lg:gap-5 mt-3 lg:mt-0">
                  <div className="w-full relative pb-5 ">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Monto a Cobrar
                    </label>
                    <input
                      className="h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                      name="montoC"
                      type='text'
                      value={values.montoC}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Errors2
                      errors={errors.montoC}
                      touched={touched.montoC}
                    />
                  </div>
                  <div className="w-full relative pb-5 ">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Monto a Pagar
                    </label>
                    <input
                      className="h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                      name="montoP"
                      value={values.montoP}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Errors2
                      errors={errors.montoP}
                      touched={touched.montoP}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-0 lg:gap-5 mt-3 lg:mt-0">
                  <div className="w-full relative pb-5 ">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Ganancia
                    </label>
                    <input
                      className="h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                      name="ganancia"
                      type='text'
                      value={values.ganancia}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Errors2
                      errors={errors.ganancia}
                      touched={touched.ganancia}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-fit flex w-full justify-end items-center gap-3 rounded-md text-black ">
            <div className="flex w-fit gap-3 rounded-md text-black ">
              {!loading
                ? (
                <input
                  type="button"
                  className="bg-secondary-150 px-3 py-2 text-white rounded-md cursor-pointer"
                  value="Grabar"
                  onClick={handleFormSubmit} // Llama a la función para enviar el formulario
                />
                  )
                : (
                <input
                  type="button"
                  disabled
                  className="bg-secondary-150/70 px-3 py-2 text-white rounded-md cursor-pointer"
                  value="Cargando..."
                />
                  )}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
