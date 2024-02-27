export interface Values {
  nombres: string
  celular: string
  email: string
  base_proyecto: string
  nombre_empresa: string
  historia_empresa: string
  principales_servicios: string
  colores: string
  referencias: string
  transmitir: string
}

export interface ImagenState {
  archivo: File | null
  archivoName: string
}

export interface ImagePreviewProps {
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>
  boton: boolean
  setBoton: React.Dispatch<React.SetStateAction<boolean>>
  setImagen: React.Dispatch<React.SetStateAction<ImagenState>>
  clase: string
}

export interface ImagePreviewPropsUdpdate {
  globalUrl: string
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>
  boton: boolean
  setBoton: React.Dispatch<React.SetStateAction<boolean>>
  imagen: string
  setImagen: React.Dispatch<React.SetStateAction<ImagenState>>
  clase: string
}

export interface interfaceListaDiseño {
  id: number
  nombres: string
  celular: number
  email: string
  nombre_empresa: string
  created_at: string
  uptated_at: string
}

// PAGINACION
export interface paginacionValues {
  totalPosts: number
  cantidadRegistros: number
  paginaActual: number
  setpaginaActual: (pagina: number) => void
}

// DELETE
export interface deleteValues {
  ruta: string
  id: number
  token: string | null
  getData: () => Promise<void>
  totalPosts: number
  cantidadRegistros: number
  paginaActual: number
  setpaginaActual: (pagina: number) => void
}

export interface arrayImagenes {
  id: number | null
  imagen1: ImagenState
}

export interface arrayPropuestas {
  id: number | null
  sustentacion: string
  imagen1: ImagenState
}

export interface arrayCorreos {
  id: number | null
  correo: string
}

export interface FinalValues {
  contexto: string
  correos: arrayCorreos[]
  asunto: string
  fecha: string
  hora: string
}

export interface avanceValues {
  contexto: string
  imagenes: arrayImagenes[]
  correos: arrayCorreos[]
  asunto: string
  fecha: string
  hora: string
}

export interface editorValues {
  content: string
  setContent: React.Dispatch<React.SetStateAction<string>>
}

export interface arrayCategoriasToPortafolio {
  id: number | null
  imagen1: ImagenState
}

export interface comentariosValues {
  id: number
  texto: string
  fecha: string
  hora: string
  idUser: string
  user: string
  respuestas: any
}
export interface ValuesPreventaModificate {
  id: number
  nombres: string
  empresa: string
  dni_ruc: string
  apellidos: string
  email: string
  celular: string
  edad: string
  sexo: string
  medio_ingreso: string
  estado: string
  id_contrato: string
  created_at: string
  arraycontacto: string
  antiguo: string
}

export interface usurioValues {
  id: number
  name: string
  email: string
  firma: string
  estado: number
  resumen: string
}

// BANNERS
export interface bannersValues {
  id: number
  id_ventas: number
  pdf_contrato: string
  id_contrato: string
  nombre_empresa: string
  archivos_finales: string
  imagen1: string
  limitar_descarga: number
  fecha_fin: string
  fecha_inicio: string
  propuestas: string
  asignacion: string
  created_at: string
  updated_at: string | null
  community: string
  nombre_marca: string
}

// PRODUCTOS
export interface productosValues {
  id: number
  nombre: number
  precio: string
  imagen1: string
  created_at: string | null
  updated_at: string | null
}

// MARCAS
export interface marcasValue {
  id: number
  imagen1: string
  imagen2: string
  created_at: string | null
  updated_at: string | null
}

// CATEGORIAS
// LISTA
export interface categoriasValues {
  id: number
  nombre: string
  created_at: string | null
  updated_at: string | null
}
// CREACION - UPDATE
export interface categoriasValuesMoficate {
  nombre: string
}

// PRODUCTOS
export interface productosValuesModificate {
  nombre: string
  precio: string
  idCategoria: string
}

// PRIMERA SECCION
export interface primeraSeccionValues {
  nombre: string
  descripcion: string
}

export interface segundaSeccionValues {
  id: number
  titulo: string
  imagen1: string
  imagen2: string
  created_at: string | null
  updated_at: string | null
}
// UPDATE-CREATE
export interface segundaSeccionValuesModificate {
  titulo: string
  descripcion: string
}

export interface valoresValues {
  titulo: string
}

export interface mapaValues {
  mapa: string
  mapa2: string
}
