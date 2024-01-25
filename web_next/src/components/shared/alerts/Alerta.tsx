import { motion } from 'framer-motion'

interface errorValues {
  showError: {
    estado: string
    texto: string
  }
}
export const Alerta = ({ showError }: errorValues) => {
  return (
    <motion.div
      initial={{ opacity: 0, left: '-200px' }}
      animate={{ opacity: 1, left: '1rem' }}
      exit={{ opacity: 0, left: '-200px' }}
      className='flex bg-white shadow-lg rounded-2xl fixed left-6 top-6 z-[99999]'
    >
      {showError.estado == 'success'
        ? (
          <>
            <div className='icon bg-green-600 flex justify-center items-center py-1 px-12 rounded-tr-[3.5rem] rounded-2xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-[3.4rem] w-[3.4rem] bg-white rounded-full text-green-600 p-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5 13l4 4L19 7'
                />
              </svg>
            </div>
            <div className='flex flex-col py-1 px-8 rounded-tr-lg rounded-br-lg'>
              <h2 className='font-semibold text-[1.8rem] text-green-600'>Éxito</h2>
              <p className='text-gray-600 text-[1.8rem]'>{showError.texto}</p>
            </div>
          </>
          )
        : showError.estado == 'warning'
          ? (
            <div className='flex bg-white shadow-lg rounded-2xl'>
              <div className='icon bg-yellow-600 flex justify-center items-center py-1 px-10 rounded-tr-[3.5rem] rounded-2xl'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-[3.4rem] w-[3.4rem] bg-white rounded-full text-yellow-600 p-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <div className='flex flex-col py-1 px-8 rounded-tr-lg rounded-br-lg'>
                <h2 className='font-semibold text-[1.8rem] text-yellow-600'>Advertencia</h2>
                <p className='text-gray-600 text-[1.8rem]'>{showError.texto}</p>
              </div>
            </div>

            )
          : (
              showError.estado == 'error' && (
                <div className='flex bg-white shadow-lg rounded-2xl'>
                  <div className='icon bg-red-600 flex justify-center items-center py-4 px-6 rounded-tr-3xl rounded-2xl'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-8 w-8 bg-white rounded-full text-red-600 p-1'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </div>
                  <div className='flex flex-col p-4 rounded-tr-lg rounded-br-lg'>
                    <h2 className='font-semibold text-red-600'>Error</h2>
                    <p className='text-gray-700'>{showError.texto}</p>
                  </div>
                </div>
              )
            )}
    </motion.div>
  )
}
