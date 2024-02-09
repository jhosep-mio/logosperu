import { Bar } from 'react-chartjs-2'
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

export const PorMedioDeIngreso = ({ dataGenero, clientes, setDataEdad }: { dataGenero: any, clientes: ValuesPreventaModificate[], setDataEdad: Dispatch<SetStateAction<any>> }): JSX.Element => {
  useEffect(() => {
    todasLasEdades()
  }, [clientes])

  const todasLasEdades = (): void => {
    if (clientes.length > 0) {
      const countByMedio: Record<string, number> = {
        Facebook: 0,
        Google: 0,
        Instagram: 0,
        Ventas: 0,
        'Post Venta': 0,
        Whatsapp: 0,
        Recomendación: 0
      }

      clientes.forEach((cliente: ValuesPreventaModificate) => {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const medio_ingreso = String(cliente.medio_ingreso)
        // Mapear el valor de medio_ingreso a la cadena correspondiente
        const medio =
           medio_ingreso == '0'
             ? 'Facebook'
             : medio_ingreso == '1'
               ? 'Google'
               : medio_ingreso == '2'
                 ? 'Ventas'
                 : medio_ingreso == '3'
                   ? 'Post Venta'
                   : medio_ingreso == '4'
                     ? 'Whatsapp'
                     : medio_ingreso == '5'
                       ? 'Instagram'
                       : medio_ingreso == '6'
                         ? 'Recomendación'
                         : ''

        // Incrementar el contador para el medio de ingreso correspondiente
        if (medio in countByMedio) {
          countByMedio[medio]++
        }
      })

      const total = Object.values(countByMedio).reduce((acc, value) => acc + value, 0)
      const sortedKeys = Object.keys(countByMedio)
      const sortedData = sortedKeys.map((key) => countByMedio[key])
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
    <Bar
      data={dataGenero}
      options={options}
      className="m-auto p-4 object-contain graficaas"
    />
  )
}
