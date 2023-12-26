import { useState } from 'react'
export const ModalNotificaciones = (): JSX.Element => {
  const [estado, setEstado] = useState(0)
  return (
    <div className="w-full fixed h-full inset-0 bg-black/50 flex items-center z-10">
      <div className="bg-white w-[500px] h-[90%] ml-[16%] my-auto block rounded-lg p-5">
        <h1 className="text-black font-bold text-lg">Notificaciones</h1>
        <div className="grid grid-cols-3 mt-3 bg-[#161618] rounded-lg border-2 border-black relative">
            <span className={`absolute w-1/3 h-full bg-[#56555a] rounded-lg transition-all duration-300
            ${estado == 0 ? 'left-0' : estado == 1 ? 'left-1/3' : 'left-2/3'}
            `}></span>
          <button
            onClick={() => {
              setEstado(0)
            }}
            className={`w-full h-full z-10 ${
              estado == 0
                ? 'text-white'
                : 'text-gray-400'
            } rounded-lg py-1 bg-transparent`}
          >
            Nuevos
          </button>
          <button
            onClick={() => {
              setEstado(1)
            }}
            className={`w-full h-full z-10 ${
              estado == 1
                ? 'text-white'
                : 'bg-transparent text-gray-400'
            } rounded-lg py-1 `}
          >
            Leidos
          </button>
          <button
            onClick={() => {
              setEstado(2)
            }}
            className={`w-full h-full z-10 ${
              estado == 2
                ? 'text-white'
                : 'bg-transparent text-gray-400'
            } rounded-lg py-1 `}
          >
            Eliminados
          </button>
        </div>
      </div>
    </div>
  )
}
