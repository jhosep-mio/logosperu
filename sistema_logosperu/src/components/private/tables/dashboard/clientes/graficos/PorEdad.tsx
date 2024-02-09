import { Doughnut } from 'react-chartjs-2'
import { type Dispatch, type SetStateAction, useEffect } from 'react'
import { type ValuesPreventaModificate } from '../../../../../shared/schemas/Interfaces'

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        font: {
          size: 14 // Ajusta el tamaño de las etiquetas del eje x aquí
        }
      }
    },
    y: {
      ticks: {
        font: {
          size: 14 // Ajusta el tamaño de las etiquetas del eje y aquí
        }
      }
    }
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        font: {
          size: 16 // Ajusta el tamaño de las letras aquí
        }
      }
    },
    tooltip: {
      titleFont: {
        size: 18 // Ajusta el tamaño del título del tooltip aquí
      },
      bodyFont: {
        size: 18 // Ajusta el tamaño del cuerpo del tooltip aquí
      }
    }
  },
  elements: {
    bar: {
      borderWidth: 2 // Ajusta el ancho de las barras aquí
    },
    point: {
      radius: 4, // Ajusta el tamaño de los puntos aquí
      borderWidth: 2 // Ajusta el ancho de los puntos aquí
    }
  }
}

export const PorEdad = ({ dataGenero, clientes, setDataEdad }: { dataGenero: any, clientes: ValuesPreventaModificate[], setDataEdad: Dispatch<SetStateAction<any>> }): JSX.Element => {
  useEffect(() => {
    todasLasEdades()
  }, [clientes])

  const todasLasEdades = (): void => {
    if (clientes.length > 0) {
      const countByAgeRange: Record<string, number> = {
        '11-20': 0,
        '21-30': 0,
        '31-40': 0,
        '41-50': 0,
        '51+': 0
      }

      clientes.forEach((cliente: ValuesPreventaModificate) => {
        const edad = Number(cliente.edad)
        if (edad >= 11 && edad <= 20) {
          countByAgeRange['11-20']++
        } else if (edad >= 21 && edad <= 30) {
          countByAgeRange['21-30']++
        } else if (edad >= 31 && edad <= 40) {
          countByAgeRange['31-40']++
        } else if (edad >= 41 && edad <= 50) {
          countByAgeRange['41-50']++
        } else if (edad >= 51) {
          countByAgeRange['51+']++
        }
      })

      const total = Object.values(countByAgeRange).reduce((acc, value) => acc + value, 0)
      const sortedKeys = Object.keys(countByAgeRange)
      const sortedData = sortedKeys.map((key) => countByAgeRange[key])
      const percentages = sortedData.map((value) => ((value / total) * 100).toFixed(2))

      const chartData = {
        labels: sortedKeys.map((key, index) => `${key} (${percentages[index]}%)`),
        datasets: [
          {
            label: 'Todo',
            data: sortedData,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
          }
        ]
      }

      setDataEdad(chartData)
    }
  }

  return (
    <Doughnut
      data={dataGenero}
      options={options}
      className="m-auto p-4 object-contain graficaas"
    />
  )
}
