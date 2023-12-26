import {
  type Dispatch,
  type SetStateAction
} from 'react'

export interface ValuesCategoriasPortafolio {
  id: number
  array: string
  titulo: string
  url: string
}

export interface valuesFormularioContacto {
  nombres: string
  email: string
  celular: string
  servicios: string
  mensaje: string
}

export interface valuesFormularioInternas {
  nombres: string
  empresa: string
  email: string
  celular: string
}

export interface valuesPromocion {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export interface ValuesSubCategoriasPortafolio {
  id: number
  titulo: string
  url: string
  categoria: string
  id_categoria: number
}

export interface paginacionValues {
  totalPosts: number
  cantidadRegistros: number
  paginaActual: number
  setpaginaActual: (pagina: number) => void
}

export interface ValuesItemsPortafolio {
  id: number
  imagen1: string
  tipo: string
  url: string
  id_subcategoria: number
  subcategoria: string
  categoria: string
  array: string
  titulo: string
}

export interface productosValues {
  id: number
  imagen1: string
  tipo: string
  url: string
  subcategoria: string
  categoria: string
  array: string
  titulo: string
}

export interface productosValues2 {
  id: number | null
  imagen1: string
  categoria: string
  titulo: string
}

export interface carrito {
  id: number | null
  titulo: string
  cantidad: number | null
  imagen1: string
  categoria: string
}

export interface ImagenState {
  archivo: File | null
  archivoName: string
}

export interface arrayCategoriasToPortafolio {
  id: number | null
  url: string
  imagen1: ImagenState
}
