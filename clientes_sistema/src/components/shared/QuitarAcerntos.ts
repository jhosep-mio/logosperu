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
