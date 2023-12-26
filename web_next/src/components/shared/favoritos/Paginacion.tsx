'use client'
import { useState, useEffect, ChangeEvent } from 'react'
import Pagination from '@mui/material/Pagination'
import { paginacionValues } from '../interfaces/interfaces'

export const Paginacion = ({
  totalPosts,
  cantidadRegistros,
  paginaActual,
  setpaginaActual
}: paginacionValues) => {
  const [numPaginas, setNumPaginas] = useState(0)

  useEffect(() => {
    const calcularNumPaginas = Math.ceil(totalPosts / cantidadRegistros)
    setNumPaginas(calcularNumPaginas)
  }, [totalPosts, cantidadRegistros])

  const handleChange = (event: ChangeEvent<unknown>, value: number): void => {
    event.preventDefault()
    setpaginaActual(value)
    const element = document.getElementById('userefprimercontenido')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Pagination
      count={numPaginas}
      page={paginaActual}
      onChange={handleChange}
      className='text-gray-300'
    />
  )
}
