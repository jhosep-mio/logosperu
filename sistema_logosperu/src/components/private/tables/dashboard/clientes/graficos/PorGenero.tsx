import { Pie } from 'react-chartjs-2'
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

export const PorGenero = ({ dataGenero, clientes, setDataEdad }: { dataGenero: any, clientes: ValuesPreventaModificate[], setDataEdad: Dispatch<SetStateAction<any>> }): JSX.Element => {
  useEffect(() => {
    todasLasEdades()
  }, [clientes])

  const todasLasEdades = (): void => {
    if (clientes.length > 0) {
      const countByGender: Record<string, number> = {
        Hombres: 0,
        Mujeres: 0,
        Otros: 0
      }

      clientes.forEach((cliente: ValuesPreventaModificate) => {
        const sexo = cliente.sexo
        // Aquí debes implementar la lógica para contar la cantidad de personas por género
        if (sexo == 'hombre') {
          countByGender.Hombres++
        } else if (sexo == 'mujer') {
          countByGender.Mujeres++
        } else {
          countByGender.Otros++
        }
      })

      const total = Object.values(countByGender).reduce((acc, value) => acc + value, 0)
      const sortedKeys = Object.keys(countByGender)
      const sortedData = sortedKeys.map((key) => countByGender[key])
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
    <Pie
      data={dataGenero}
      options={options}
      className="m-auto p-4 object-contain graficaas"
    />
  )
}
