import * as Yup from 'yup'

// CLASIFICADOS

export const SchemaCotizacion = Yup.object().shape({
  precio: Yup.string().required('Este campo es requerido'),
  descuento: Yup.string().nullable()
})

export const SchemaClasificado = Yup.object().shape({
  nombre: Yup.string().required('Este campo es requerido'),
  celular: Yup.string().required('Este campo es requerido'),
  correo: Yup.string().required('Este campo es requerido').email('Digite un correo valido')
})

export const SchemaBriefFlyer = Yup.object().shape({
  nombres: Yup.string().nullable(),
  id_venta: Yup.string().required('Este campo es requerido').min(1),
  nombre_comercial: Yup.string()
    .required('Este campo es requerido')
    .min(3, 'El campo debe tener al menos 3 caracteres'),
  medida1: Yup.string().nullable(),
  medida2: Yup.string().nullable(),
  categoria: Yup.string().required('Este campo es requerido'),
  titular: Yup.string().required('Este campo es requerido'),
  descripcion: Yup.string().required('Este campo es requerido'),
  enlace: Yup.string().required('Este campo es requerido'),
  colores: Yup.string().required('Este campo es requerido')
})

export const SchemaBriefComunity = Yup.object().shape({
  nombres: Yup.string().nullable(),
  id_venta: Yup.string().required('Este campo es requerido').min(1),
  nombre_comercial: Yup.string()
    .required('Este campo es requerido')
    .min(3, 'El campo debe tener al menos 3 caracteres'),
  historia_empresa: Yup.string().required('Este campo es requerido').min(1),
  competidores: Yup.string().required('Este campo es requerido').min(1),
  propuesta_valor: Yup.string().required('Este campo es requerido').min(1),
  objetivos_especificos: Yup.string().required('Este campo es requerido').min(1),
  clientes_ideales: Yup.string().required('Este campo es requerido').min(1),
  propuesta_producto: Yup.string().required('Este campo es requerido').min(1),
  preferencia_canal: Yup.string().required('Este campo es requerido').min(1),
  presupuesto: Yup.string().required('Este campo es requerido').min(1),
  link_recursos: Yup.string().required('Este campo es requerido').min(1),
  fechas_importantes: Yup.string().required('Este campo es requerido').min(1),
  directrises_marca: Yup.string().required('Este campo es requerido').min(1),
  elementos_visuales: Yup.string().required('Este campo es requerido').min(1),
  restricciones_legales: Yup.string().required('Este campo es requerido').min(1),
  factores_consideracion: Yup.string().required('Este campo es requerido').min(1)
})

export const SchemaGenerarActa = Yup.object().shape({
  nombres: Yup.string().nullable()
})

export const SchemaMarca = Yup.object().shape({
  nombre_marca: Yup.string().required('Este campo es requerido').min(1)
})
export const SchemaEmail = Yup.object().shape({
  email: Yup.string().email('Registre en email valido').required('Este campo es requerido').min(1)
})

export const SchemaBriefBrochure = Yup.object().shape({
  nombres: Yup.string().nullable(),
  id_venta: Yup.string().required('Este campo es requerido').min(1),
  nombre_comercial: Yup.string()
    .required('Este campo es requerido')
    .min(3, 'El campo debe tener al menos 3 caracteres'),
  medida1: Yup.string().nullable(),
  medida2: Yup.string().nullable(),
  datoscontacto: Yup.string().required('Este campo es requerido'),
  historia: Yup.string().required('Este campo es requerido'),
  objetivo: Yup.string().required('Este campo es requerido'),
  servicios: Yup.string().required('Este campo es requerido'),
  enlace: Yup.string().required('Este campo es requerido')
})

export const SchemaPlanes = Yup.object().shape({
  nombre: Yup.string().required('Este campo es requerido'),
  codigo: Yup.string().required('Este campo es requerido'),
  descripcion: Yup.string().required('Este campo es requerido')
})

export const SchemaValidarAlta = Yup.object().shape({
  nombre_cliente: Yup.string().required('Este campo es requerido'),
  id_contrato: Yup.string(),
  fecha_inicio: Yup.string().required('Este campo es requerido'),
  asunto: Yup.string().required('Este campo es requerido')
})

export const SchemaValidarVentas = Yup.object().shape({
  nombre_empresa: Yup.string().required('Este campo es requerido'),
  id_cliente: Yup.string().required('Este campo es requerido')
})

export const SchemaValidarObsequio = Yup.object().shape({
  nombre_empresa: Yup.string().required('Este campo es requerido')
})

export const SchemaContrato = Yup.object().shape({
  dni_cliente: Yup.string().required('Este campo es requerido'),
  tipo_documento: Yup.string().required('Este campo es requerido'),
  tiempo: Yup.string().required('Este campo es requerido'),
  precio: Yup.string().required('Este campo es requerido'),
  fecha: Yup.string().required('Este campo es requerido')
})

export const SchemaPropuestas = Yup.object().shape({
  comentarios: Yup.string().nullable()
})

export const SchemaEditarVentas = Yup.object().shape({
  nombre_empresa: Yup.string(),
  medio_ingreso: Yup.string(),
  dni_ruc: Yup.string().nullable(),
  id_contrato: Yup.string(),
  nombres: Yup.string(),
  apellidos: Yup.string()
})

export const SchemaBrief = Yup.object().shape({
  nombres: Yup.string().required('Este campo es requerido').min(1),
  email: Yup.string()
    .email('Email invalido')
    .required('Este campo es requerido'),
  celular: Yup.string()
    .required('Este campo es requerido')
    .min(9, 'El numero debe tener 9 digitos')
    .max(9, 'El numero debe tener 9 digitos'),
  base_proyecto: Yup.string().required('Este campo es requerido'),
  nombre_empresa: Yup.string()
    .required('Este campo es requerido')
    .min(3, 'El campo debe tener al menos 3 caracteres'),
  principales_servicios: Yup.string()
    .required('Este campo es requerido')
    .min(3, 'El campo debe tener al menos 3 caracteres'),
  referencias: Yup.string().required('Este campo es requerido'),
  transmitir: Yup.string()
    .required('Este campo es requerido')
    .min(3, 'El campo debe tener al menos 3 caracteres')
})

export const SchemaBriefNew = Yup.object().shape({
  nombres: Yup.string().nullable(),
  id_venta: Yup.string().required('Este campo es requerido').min(1),
  base_proyecto: Yup.string().required('Este campo es requerido'),
  nombre_empresa: Yup.string()
    .required('Este campo es requerido')
    .min(3, 'El campo debe tener al menos 3 caracteres'),
  principales_servicios: Yup.string()
    .required('Este campo es requerido')
    .min(3, 'El campo debe tener al menos 3 caracteres'),
  referencias: Yup.string().required('Este campo es requerido'),
  transmitir: Yup.string()
    .required('Este campo es requerido')
    .min(3, 'El campo debe tener al menos 3 caracteres')
})

export const SchemaCategoriasToPortafolio = Yup.object().shape({
  titulo: Yup.string().required('Este campo es requerido'),
  url: Yup.string().required('Este campo es requerido')
})

export const SchemaSubCategoriasToPortafolio = Yup.object().shape({
  titulo: Yup.string().required('Este campo es requerido'),
  idCategoria: Yup.string().required('Este campo es requerido'),
  url: Yup.string().required('Este campo es requerido')
})

export const SchemaItemsToPortafolio = Yup.object().shape({
  titulo: Yup.string().required('Este campo es requerido'),
  idSubcategoria: Yup.string().required('Este campo es requerido')
})

export const SchemaLlamadas = Yup.object().shape({
  evento: Yup.string().required('Este campo es requerido').min(1),
  id_cliente: Yup.string().required('Este campo es requerido').min(1)
})

export const SchemePreClientes = Yup.object().shape({
  nombres: Yup.string().required('Este campo es requerido').min(1),
  apellidos: Yup.string().required('Este campo es requerido').min(1)
})

export const ShemaUsuarios = Yup.object().shape({
  name: Yup.string().required('Este campo es requerido').min(1)
})

export const SchemePreventas = Yup.object().shape({
  nombres: Yup.string().required('Este campo es requerido').min(1),
  empresa: Yup.string().required('Este campo es requerido').min(1),
  apellidos: Yup.string().required('Este campo es requerido').min(1),
  celular: Yup.string()
    .nullable()
    .min(7, 'El numero debe ser mayor a 6 digitos')
    .max(12, 'El numero debe ser menor a 12 digitos'),
  sexo: Yup.string().nullable(),
  medio_ingreso: Yup.string().nullable()
})

export const SchemaContactoClientes = Yup.object().shape({
  nombres: Yup.string().required('Este campo es requerido').min(1),
  correo: Yup.string()
    .required('Este campo es requerido')
    .email('Email invalido'),
  celular: Yup.string()
    .required('Este campo es requerido')
    .min(7, 'El numero debe tener al menos 7 digitos'),
  marca: Yup.string().required('Este campo es requerido').min(1),
  tipo_documento: Yup.string().required('Este campo es requerido').min(1)
})

export const SchemeVentas = Yup.object().shape({
  id: Yup.number().required('Este campo es requerido'),
  nombres: Yup.string().required('Este campo es requerido').min(1),
  empresa: Yup.string().required('Este campo es requerido').min(1),
  apellidos: Yup.string().required('Este campo es requerido').min(1),
  email: Yup.string()
    .required('Este campo es requerido')
    .email('Email invalido'),
  celular: Yup.string()
    .required('Este campo es requerido')
    .min(7, 'El numero debe tener al menos 7 digitos'),
  edad: Yup.string().nullable(),
  sexo: Yup.string().nullable(),
  medio_ingreso: Yup.string().required('Este campo es requerido')
})

export const SchemeVentasNew = Yup.object().shape({
  id_contrato: Yup.string().required('Este campo es requerido'),
  nombres: Yup.string(),
  apellidos: Yup.string()
})
