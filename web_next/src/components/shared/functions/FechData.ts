import axios from 'axios'
import { type SetStateAction, type Dispatch } from 'react'
import { ValuesCategoriasPortafolio, ValuesItemsPortafolio, ValuesSubCategoriasPortafolio } from '../interfaces/interfaces'
import { Global } from '../Helper/global'
const token = localStorage.getItem('token')

export const getDataCategoriasToPortafolio = async (
  ruta: string,
  setDatos: Dispatch<SetStateAction<ValuesCategoriasPortafolio[]>>,
  setTotalRegistros: Dispatch<SetStateAction<number>>
): Promise<void> => {
  const request = await axios.get(`${Global.url}/${ruta}`, {
    headers: {
      Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
    }
  })
  setDatos(request.data)
  setTotalRegistros(request.data.length)
}

export const getDataSubCategoriasToPortafolio = async (
  ruta: string,
  setDatos: Dispatch<SetStateAction<ValuesSubCategoriasPortafolio[]>>,
  setTotalRegistros: Dispatch<SetStateAction<number>>
): Promise<void> => {
  const request = await axios.get(`${Global.url}/${ruta}`, {
    headers: {
      Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
    }
  })
  setDatos(request.data)
  setTotalRegistros(request.data.length)
}

export const getCategoriasToPortafolioWhereUrl = async (
  ruta: string,
  ruta2: string,
  ruta3: string,
  setDatos: Dispatch<SetStateAction<ValuesCategoriasPortafolio>>,
  setDatos2: Dispatch<SetStateAction<ValuesSubCategoriasPortafolio[]>>,
  setDatos3: Dispatch<SetStateAction<ValuesItemsPortafolio[]>>,
  setTotalRegistros: Dispatch<SetStateAction<number>>
): Promise<void> => {
  const request = await axios.get(`${Global.url}/${ruta}`, {
    headers: {
      Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
    }
  })
  const request2 = await axios.get(
    `${Global.url}/${ruta2}/${request.data[0].id}`,
    {
      headers: {
        Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
      }
    }
  )
  const request3 = await axios.get(
    `${Global.url}/${ruta3}/${request.data[0].id}`,
    {
      headers: {
        Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
      }
    }
  )
  setDatos(request.data[0])
  setTotalRegistros(request.data.length)
  setDatos2(request2.data)
  setDatos3(request3.data)
}

export const getItemsToPortafolioWhereUrl = async (
  ruta: string,
  ruta2: string,
  ruta3: string,
  setDatos: Dispatch<SetStateAction<ValuesCategoriasPortafolio>>,
  setDatos2: Dispatch<SetStateAction<ValuesSubCategoriasPortafolio[]>>,
  setDatos3: Dispatch<SetStateAction<ValuesItemsPortafolio[]>>,
  setTotalRegistros: Dispatch<SetStateAction<number>>
): Promise<void> => {
  const request = await axios.get(`${Global.url}/${ruta}`, {
    headers: {
      Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
    }
  })
  const request2 = await axios.get(
      `${Global.url}/${ruta2}/${request.data[0].id_categoria}`,
      {
        headers: {
          Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
        }
      }
  )
  const request3 = await axios.get(
      `${Global.url}/${ruta3}/${request.data[0].id}`,
      {
        headers: {
          Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
        }
      }
  )
  setDatos(request.data[0])
  setTotalRegistros(request.data.length)
  setDatos2(request2.data)
  setDatos3(request3.data)
}

export const getItems = async (
  ruta: string,
  setDatos: Dispatch<SetStateAction<ValuesItemsPortafolio[]>>
): Promise<void> => {
  const request = await axios.get(`${Global.url}/${ruta}`, {
    headers: {
      Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
    }
  })
  setDatos(request.data)
}

const shuffledArray = (array: ValuesItemsPortafolio[]): any[] => {
  const shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}

export const getItems2 = async (
  ruta: string,
  setDatos1: Dispatch<SetStateAction<ValuesItemsPortafolio[]>>,
  setDatos2: Dispatch<SetStateAction<ValuesItemsPortafolio[]>>,
  setDatos3: Dispatch<SetStateAction<ValuesItemsPortafolio[]>>

): Promise<void> => {
  const request = await axios.get(`${Global.url}/${ruta}`, {
    headers: {
      Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
    }
  })
  setDatos1(request.data)
  setDatos2(shuffledArray(request.data))
  setDatos3(shuffledArray(request.data))
}
