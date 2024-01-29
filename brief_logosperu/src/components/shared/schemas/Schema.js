import * as Yup from "yup";


export const SchemaClasificados = Yup.object().shape({
    nombre_comercial: Yup.string()
      .required("Este campo es requerido")
      .min(3, "El campo debe tener al menos 3 caracteres"),
    historia_empresa: Yup.string().required('Este campo es requerido').min(25, 'Mínimo 25 caracteres'),
    info1: Yup.string().required('Este campo es requerido').min(3, 'Mínimo 3 caracteres'),
    info2: Yup.string().required('Este campo es requerido').min(3, 'Mínimo 3 caracteres'),
    facebook: Yup.string().nullable(),
    instragram: Yup.string().nullable(),
    tiktok: Yup.string().nullable(),
  }).test('red_social', null, (values) => {
    const { facebook, instragram, tiktok } = values;
    const atLeastOneInfoFieldFilled = !!facebook || !!instragram || !!tiktok;
    if (!atLeastOneInfoFieldFilled) {
      return new Yup.ValidationError('Al menos debe completar una red social', null, 'red_social');
    }
    return true;
  });


export const SchemaBriefBrochure = Yup.object().shape({
  nombre_comercial: Yup.string()
    .required("Este campo es requerido")
    .min(3, "El campo debe tener al menos 3 caracteres"),
  medida1: Yup.string().nullable(),
  medida2: Yup.string().nullable(),
  datoscontacto: Yup.string().required("Este campo es requerido"),
  historia: Yup.string().required("Este campo es requerido"),
  objetivo: Yup.string().required("Este campo es requerido"),
  servicios: Yup.string().required("Este campo es requerido"),
  enlace: Yup.string().required("Este campo es requerido"),
});


export const SchemaBriefComunity = Yup.object().shape({
  nombre_comercial: Yup.string()
    .required('Este campo es requerido')
    .min(3, 'El campo debe tener al menos 3 caracteres'),
  historia_empresa: Yup.string().required('Este campo es requerido').min(25, 'Mínimo 25 caracteres'),
  competidores: Yup.string().required('Este campo es requerido').min(3, 'Minimo 3 caracteres'),
  propuesta_valor: Yup.string().required('Este campo es requerido').min(3, 'Minimo 3 caracteres'),
  objetivos_especificos: Yup.string().required('Este campo es requerido').min(3, 'Minimo 3 caracteres'),
  clientes_ideales: Yup.string().required('Este campo es requerido').min(3, 'Minimo 3 caracteres'),
  propuesta_producto: Yup.string().required('Este campo es requerido').min(3, 'Minimo 3 caracteres'),
  preferencia_canal: Yup.string().required('Este campo es requerido').min(3, 'Minimo 3 caracteres'),
  presupuesto: Yup.string().required('Este campo es requerido').min(3, 'Minimo 3 caracteres'),
  link_recursos: Yup.string().required('Este campo es requerido').min(3, 'Minimo 3 caracteres'),
  fechas_importantes: Yup.string().required('Este campo es requerido').min(3, 'Minimo 3 caracteres'),
  directrises_marca: Yup.string().required('Este campo es requerido').min(3, 'Minimo 3 caracteres'),
  elementos_visuales: Yup.string().required('Este campo es requerido').min(3, 'Minimo 3 caracteres'),
  restricciones_legales: Yup.string().required('Este campo es requerido').min(3, 'Minimo 3 caracteres'),
  factores_consideracion: Yup.string().required('Este campo es requerido').min(3, 'Minimo 3 caracteres')
})

export const SchemaCodigo = Yup.object().shape({
  codigo: Yup.string()
    .required("Este campo es requerido")
    .min(4, "El campo debe tener 4 caracteres"),
});

export const SchemaDatosCliente = Yup.object().shape({
    nombres: Yup.string()
      .required("Este campo es requerido")
      .min(3, "El campo debe tener 3 caracteres"),
    correo: Yup.string().email('Digite un email valido')
      .required("Este campo es requerido"),
    celular: Yup.string()
      .required("Este campo es requerido")
      .min(7, "El campo debe tener almenos 7 digitos"),
  });

export const SchemaCliente = Yup.object().shape({
  nombres: Yup.string().required("Este campo es requerido"),
  apellidos: Yup.string().required("Este campo es requerido"),
  celular: Yup.string()
    .required("Este campo es requerido")
    .min(7, "Debe tener almenos 7 digitos"),
  email: Yup.string()
    .email("Digite un email valido")
    .required("Este campo es requerido"),
  edad: Yup.string().required("Este campo es requerido"),
  sexo: Yup.string().required("Este campo es requerido"),
  medio_ingreso: Yup.string().required("Este campo es requerido"),
});

export const SchemaBriefFlyer = Yup.object().shape({
  nombres: Yup.string().nullable(),
  nombre_comercial: Yup.string()
    .required("Este campo es requerido")
    .min(3, "El campo debe tener al menos 3 caracteres"),
  medida1: Yup.string().nullable(),
  medida2: Yup.string().nullable(),
  categoria: Yup.string().required("Este campo es requerido"),
  titular: Yup.string().required("Este campo es requerido"),
  descripcion: Yup.string().required("Este campo es requerido"),
  enlace: Yup.string().required("Este campo es requerido"),
  colores: Yup.string().required("Este campo es requerido"),
});
