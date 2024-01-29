import { Dialog, DialogContent } from '@mui/material'
import { type Dispatch, type SetStateAction, useState, useEffect } from 'react'
import { type arrayContacto, type contactoClientes } from '../../../../shared/schemas/Interfaces'
import { useFormik } from 'formik'
import axios from 'axios'
import { Global } from '../../../../../helper/Global'
import useAuth from '../../../../../hooks/useAuth'
import { SchemaContactoClientes } from '../../../../shared/schemas/Schemas'
import { Errors } from '../../../../shared/Errors'
import { v4 as uuidv4 } from 'uuid'

export const RegistroContacto = ({
  open,
  setOpen,
  id,
  arrayContacto,
  setarrayConacto,
  getOneBrief
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  id: string | undefined
  arrayContacto: arrayContacto[]
  setarrayConacto: Dispatch<SetStateAction<arrayContacto[]>>
  getOneBrief: () => Promise<void>
}): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const { setShowError } = useAuth()
  const token = localStorage.getItem('token')

  const savePreventa = async (values: contactoClientes): Promise<void> => {
    // Create a copy of the existing array
    const updatedArray = [...arrayContacto]
    // Add the new contact to the copy
    const newContact = { id: uuidv4(), nombres: values.nombres, celular: values.celular, correo: values.correo }
    updatedArray.push(newContact)
    // Update the state with the new array
    setarrayConacto(updatedArray)
    const data = new FormData()
    data.append('arraycontacto', JSON.stringify(updatedArray))
    data.append('_method', 'PUT')

    try {
      const respuesta = await axios.post(
        `${Global.url}/updateContacto/${id ?? ''}`,
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
        setShowError({
          estado: 'success',
          texto: 'Contacto guardado'
        })
        getOneBrief()
        resetForm()
        setOpen(false)
      } else {
        setShowError({
          estado: 'warning',
          texto: 'Error al guardar contacto'
        })
      }
    } catch (error) {
      console.log(error)
      setShowError({
        estado: 'error',
        texto: 'Error al guardar contacto'
      })
    }
    setLoading(false)
  }

  const {
    handleSubmit,
    handleChange,
    errors,
    values,
    touched,
    handleBlur,
    isSubmitting,
    resetForm
  } = useFormik({
    initialValues: {
      nombres: '',
      celular: '',
      correo: ''
    },
    validationSchema: SchemaContactoClientes,
    onSubmit: savePreventa
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

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false)
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className=""
    >
      <DialogContent>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="max-w-lg mb-4 relative">
            <input
              type="text"
              autoComplete="off"
              className="w-full py-3 px-4 rounded-xl outline-none bg-transparent border border-gray-300 text-gray-500 group"
              placeholder="Nombres / Empresa"
              name="nombres"
              value={values.nombres}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={false}
            />
            <Errors errors={errors.nombres} touched={touched.nombres} />
          </div>
          <div className="max-w-lg mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative">
              <input
                type="text"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-transparent border border-gray-300 text-gray-500 group"
                placeholder="Celular"
                name="celular"
                value={values.celular}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={false}
              />
              <Errors errors={errors.celular} touched={touched.celular} />
            </div>
            <div className="relative">
              <input
                type="text"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-transparent border border-gray-300 text-gray-500 group"
                placeholder="Correo"
                name="correo"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={false}
              />
              <Errors errors={errors.correo} touched={touched.correo} />
            </div>
          </div>
          <div className="max-w-lg mt-10">
            {!loading
              ? <button type='submit' className="bg-main text-white w-full py-3 px-4 rounded-full hover:bg-main_dark transition-colors">
                Registrar contacto
                </button>
              : <button type='button' className="bg-main_dark text-white w-full py-3 px-4 rounded-full hover:bg-main_dark transition-colors">
                Validando...
              </button>
            }
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
