'use client'
import { Global } from '@/components/shared/Helper/global'
import { capitalizeFirstLetter } from '@/components/shared/functions/capitalizer'
import { ValuesCategoriasPortafolio } from '@/components/shared/interfaces/interfaces'
import axios from 'axios'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export const Categorias = () => {
  const [categorias, setCategorias] = useState<ValuesCategoriasPortafolio[]>(
    []
  )

  const getCategorias = async (): Promise<void> => {
    const request = await axios.get(`${Global.url}/getSubCategoriasToPortafolioWhereUrl/1`)
    setCategorias(request.data)
  }

  useEffect(() => {
    getCategorias()
  }, [])

  return (
    <ul className='flex items-center flex-wrap justify-center gap-x-3 font-family-1'>
      {categorias.map((cat, index) => (
        <li key={cat.id} className='text-[1.75rem] group'>
          <Link
            href={`/portafolio/diseno-de-logotipos/${cat.url}`}
            className='text-[1.75rem text-black group-hover:text-[#696EB9] group-hover:font-extrabold transition-colors'
          >
            {capitalizeFirstLetter(cat.titulo)}
          </Link>
          {index !== categorias.length - 1 && (
            <span className='ml-3'>|</span>
          )}
        </li>
      ))}
    </ul>
  )
}
