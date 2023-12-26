import { Global } from '@/components/shared/Helper/global'
import { capitalizeFirstLetter } from '@/components/shared/functions/capitalizer'
import { ValuesItemsPortafolio } from '@/components/shared/interfaces/interfaces'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'

const getData = () => {
  return axios.get(`${Global.url}/getCategoriasToPortafolio`, {
    headers: {
      'Cache-Control': 'no-store'
    }
  })
}

export default async function ListaCategorias () {
  const response = await getData()
  const categorias: ValuesItemsPortafolio[] = response.data

  return (
    <ul className='flex items-center flex-wrap justify-center gap-x-3 font-family-1'>
      {categorias.map((cat, index) => (
        <li key={cat.id} className='text-[1.75rem] group'>
          <Link
            href={`/portafolio/${cat.url}`}
            className='text-[1.75rem text-black group-hover:text-[#696EB9] group-hover:font-extrabold transition-colors'
          >
            {capitalizeFirstLetter(cat.titulo)}
          </Link>
          {index !== categorias.length - 1 && <span className='ml-3'>|</span>}
        </li>
      ))}
    </ul>
  )
}
