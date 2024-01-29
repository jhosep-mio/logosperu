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

export interface arrayImagesClasificados {
  id: number | null
  imagenproducto: ImagenState
  titulo: string
  descripcion: string
}

export interface ImagePreviewPropsUdpdateClasificados {
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>
  boton: boolean
  setBoton: React.Dispatch<React.SetStateAction<boolean>>
  imagen: string | null
  setImagen: React.Dispatch<React.SetStateAction<ImagenState>>
  clase: string
  disabled: boolean
  carpeta: string
}

export interface editorValues {
  content: string
  setContent: React.Dispatch<React.SetStateAction<string>>
}

export interface clasificadosRegistroValues {
  nombre: string
  correo: string
  celular: string
  icono: string
  logo: string
  instragram: string
  facebook: string
  tiktok: string
  color: string
  // BANNER
  banner1: string
  banner2: string
  // INFORMACION
  titulo1: string
  titulo2: string
  titulo3: string
  titulo4: string
  subtitulo1: string
  subtitulo2: string
  subtitulo3: string
  subtitulo4: string
  imagentitulo1: string
  imagentitulo2: string
  imagentitulo3: string
  imagentitulo4: string
  // INTERNAS
  interna1: string
  interna2: string
  interna3: string
  interna4: string
  //
  //   PRODUCTOS - SERCIVIOS
  tipoenfoque: string
  productos: arrayImagesClasificados []
  //   SEO
  imagenseo: string
  descripcionseo: string
  marcas: arrayCategoriasToPortafolio []
}

export interface arrayCategoriasToPortafolio {
  id: number | null
  imagen1: ImagenState
}

export interface clasificadosValues {
  id: number
  nombre: string
  icono: string
  correo: string
  celular: string
  created_at: string
  updated_at: string
  pagina_web: string
}

// BANNERS
export interface bannersValues {
  id: number
  nombre: string
  correo: string
  celular: string
  icono: string
  logo: string
  instragram: string
  facebook: string
  tiktok: string
  color: string
  // BANNER
  banner1: string
  banner2: string
  // INFORMACION
  titulo1: string
  titulo2: string
  titulo3: string
  titulo4: string
  subtitulo1: string
  subtitulo2: string
  subtitulo3: string
  subtitulo4: string
  imagentitulo1: string
  imagentitulo2: string
  imagentitulo3: string
  imagentitulo4: string
  // INTERNAS
  interna1: string
  interna2: string
  interna3: string
  interna4: string
  //
  //   PRODUCTOS - SERCIVIOS
  tipoenfoque: string
  productos: arrayImagesClasificados []
  //   SEO
  imagenseo: string
  descripcionseo: string
  marcas: arrayCategoriasToPortafolio []
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
