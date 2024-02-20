'use client'
import { useRouter } from 'next/navigation'

const DemoTienda = () => {
  const router = useRouter()

  return (
    <div className='relative px-5 pb-5 bg-white shadow-2xl w-full md:w-[50%] h-[300px] rounded-3xl hover:scale-105 hover:rotate-1 transition-all'>
      <div
        className='absolute w-1/2 h-full bg-primary -translate-y-20 right-0'
        style={{ clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0 50%)' }}
      />
      <div className='absolute top-0 left-0 right-0 w-full h-full mx-auto -mt-20'>
        <img
          src='/demos/DEMO2.png'
          alt='Image'
          loading='lazy'
          className='object-contain mx-auto w-full h-full'
        />
      </div>
      <div className='absolute bottom-0 left-0 right-0 mx-auto p-4'>
        <h3 className='font-bold bg-white text-2xl pt-3 max-w-max pr-8 rounded-xl -mt-5 z-10 relative'>
          TIENDA VIRTUAL
        </h3>
        <h5 className='text-gray-500 mb-8'>DEMO</h5>
        <button
          onClick={() => router.push('https://demo2.logosperu.com.pe/')}
          type='button'
          className='cursor-pointer py-3 mt-5 w-full bg-secondary font-bold rounded-xl hover:bg-primary  text-white transition-colors duration-300'
        >
          PROBAR DEMO
        </button>
      </div>
    </div>
  )
}

export default DemoTienda
