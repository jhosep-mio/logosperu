import { Line } from 'react-chartjs-2'
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

export const PorCrecimiento = ({ dataGenero, clientes, setDataEdad }: { dataGenero: any, clientes: ValuesPreventaModificate[], setDataEdad: Dispatch<SetStateAction<any>> }): JSX.Element => {
  useEffect(() => {
    generarDatosCrecimiento()
  }, [clientes])

  const generarDatosCrecimiento = (): void => {
    clientes.sort((a, b) => {
      const fechaA: any = new Date(a.created_at)
      const fechaB: any = new Date(b.created_at)
      return fechaA - fechaB
    })
    // Preprocesar los datos para contar el número de nuevos clientes por período de tiempo
    const newData = {
      labels: [],
      datasets: [
        {
          label: 'Nuevos clientes',
          data: [],
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 2
        }
      ]
    }

    // Agrupar clientes por fecha de creación (por ejemplo, por mes)
    const clientesPorFecha = clientes.reduce((acumulador: any, cliente: ValuesPreventaModificate) => {
      const fechaCreacion = new Date(cliente.created_at)
      const mes = fechaCreacion.getMonth() + 1 // Sumar 1 porque los meses en JavaScript van de 0 a 11
      const año = fechaCreacion.getFullYear()
      const clave = `${año}-${mes}`

      if (!acumulador[clave]) {
        acumulador[clave] = 0
      }

      acumulador[clave]++

      return acumulador
    }, {})

    // Convertir los datos agrupados en un formato adecuado para el gráfico
    Object.entries(clientesPorFecha).forEach(([clave, valor]) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      newData.labels.push(clave)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      newData.datasets[0].data.push(valor)
    })

    setDataEdad(newData)
  }

  return (
    <Line
      data={dataGenero}
      options={options}
      className="m-auto p-4 object-contain graficaas"
    />
  )
}
