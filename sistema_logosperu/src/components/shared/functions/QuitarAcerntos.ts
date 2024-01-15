type Acentos = Record<string, string>

export function quitarAcentos (cadena: string): string {
  const acentos: Acentos = {
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u',
    Á: 'A',
    É: 'E',
    Í: 'I',
    Ó: 'O',
    Ú: 'U'
  }
  return cadena
    .toLowerCase()
    .replace(/\s/g, '')
    .split('')
    .map((letra) => acentos[letra] || letra)
    .join('')
    .toString()
}

export const formatDate = (date: Date): string | null => {
  try {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  } catch (error) {
    console.error('Error al formatear la fecha', error)
    return null
  }
}

export const convertirFecha = (fecha: string): Date => {
  const [dia, mes, ano] = fecha.split('/').map(Number)
  return new Date(ano, mes - 1, dia)
}

export const formatAPIdate = (apiDate: string): string => {
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ]

  // Dividiendo la fecha basada en "/"
  const [day, month, year] = apiDate.split('/')

  // Creando un nuevo objeto de fecha
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const date = new Date(year, month - 1, day)

  // Construyendo la cadena de fecha formateada
  const formatted = `${date.getDate()} de ${months[date.getMonth()]} del ${date.getFullYear()}`

  return formatted
}

// LIMPIAR CODGIOS DE CONTRATOS
export function limpiarCadena (cadena: string): string {
  const matches = cadena.match(/_(\d+)_/)
  if (matches && matches.length >= 2) {
    return matches[1]
  } else {
    return '--'
  }
}

export function limpiarNombreArchivo (uniqueFileName: string): string {
  const parts = uniqueFileName.split('_')
  // Si hay al menos dos partes (UUID y nombre de archivo), devuelve la segunda parte
  return parts.length >= 2 ? parts.slice(1).join('_') : uniqueFileName
}
