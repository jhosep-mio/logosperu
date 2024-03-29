import * as Yup from 'yup'

export const SchemaCupon = Yup.object().shape({
  nombres: Yup.string()
    .required('Este campo es requerido').min(3, 'Debe tener almenos 3 digitos'),
  apellidos: Yup.string()
    .required('Este campo es requerido').min(3, 'Debe tener almenos 3 digitos'),
  celular: Yup.string()
    .required('Este campo es requerido').min(7, 'Debe tener almenos 7 digitos'),
  correo: Yup.string().email('Digite un email valido')
    .required('Este campo es requerido')
})

export const SchemaCompras = Yup.object().shape({
  nombre: Yup.string()
    .required('Este campo es requerido')
    .min(3, 'Debe tener como minimo 3 digitos'),
  apellido: Yup.string()
    .required('Este campo es requerido')
    .min(3, 'Debe tener como minimo 3 digitos'),
  celular1: Yup.string()
    .required('Este campo es requerido')
    .min(9, 'El numero debe tener 9 digitos')
    .max(9, 'El numero debe tener 9 digitos'),
  email: Yup.string()
    .email('Email invalido')
    .required('Este campo es requerido'),
  comentario: Yup.string(),
  despacho: Yup.string().required('Este campo es requerido'),
  direccion: Yup.string().min(20, 'Sea mas especifico').nullable(),
  departamento: Yup.string().nullable(),
  distrito: Yup.string().nullable()
})

export const SchemaContacto = Yup.object().shape({
  nombres: Yup.string()
    .required('Este campo es requerido')
    .min(3, 'Debe tener como minimo 3 digitos'),
  celular: Yup.string()
    .required('Este campo es requerido')
    .min(7, 'Debe tener como minimo 7 digitos'),
  email: Yup.string()
    .required('Este campo es requerido')
    .email('Introduce un email válido'),
  servicios: Yup.string().required('Este campo es requerido'),
  mensaje: Yup.string().required('Este campo es requerido')
})

export const SchemaValidacion = Yup.object().shape({
  preguntas: Yup.string()
    .required('Este campo es requerido')
})

export const SchemaFormularioEnvio = Yup.object().shape({
  nombres: Yup.string()
    .required('Este campo es requerido')
    .min(3, 'Debe tener como minimo 3 digitos'),
  empresa: Yup.string()
    .required('Este campo es requerido')
    .min(3, 'Debe tener como minimo 3 digitos'),
  celular: Yup.string()
    .required('Este campo es requerido')
    .min(7, 'Debe tener como minimo 7 digitos'),
  email: Yup.string()
    .required('Este campo es requerido')
    .email('Introduce un email válido')
})
