import axios from 'axios'
import { Global } from '../shared/Helper/global'
import Link from 'next/link'
import { IoFolderOpenOutline } from 'react-icons/io5'
import { Tipeit } from './Tipeit'
import { ValuesItemsPortafolio } from '../shared/interfaces/interfaces'
import Cards from './Cards'
import { ContentSwiper } from './ContentSwiper'

const getData = () => {
  return axios.get(`${Global.url}/indexWhereCategoriaAleatorio/1`, {
    headers: {
      'Cache-Control': 'no-store'
    }
  })
}

export default async function Slider () {
  const response = await getData()
  const response2 = await getData()
  const response3 = await getData()
  const data: ValuesItemsPortafolio[] = response.data
  const data2: ValuesItemsPortafolio[] = response2.data
  const data3: ValuesItemsPortafolio[] = response3.data

  return (
    <section className='fondogeneral_incio h-screen w-full  overflow-hidden relative max-h-[850px] bg-tercero'>
      <section className='max-w-[1450px] mx-auto h-full lg:pt-0 flex justify-between relative w-full '>
        <div className='w-full h-full flex flex-col items-center justify-center md:px-4 lg:pl-20 lg:pr-32 md:pb-10 gap-0'>
          <div className='w-full h-full  flex flex-col gap-10 justify-center lg:justify-end'>
            <div className='distortion-container '>
              <h1 className='text_principal_toseo text-6xl md:text-[8rem] font-bold distorted-text text-center lg:text-left w-full lg:w-fit text-white lg:text-black'>
                Agencia de <br />
                <span className=''>Diseño gráfico</span>
              </h1>
            </div>
            <div className='w-full h-fit flex flex-col lg:flex-row gap-10 items-center modificate_text'>
              <Link
                href='/portafolio'
                className='bg-black text-white text-[1.7rem] md:text-4xl px-6 py-5 flex gap-3 items-center justify-center button_portafolio_new rounded-xl text_principal_toseo '
              >
                Portafolio <IoFolderOpenOutline />
              </Link>
              <Tipeit />
            </div>
          </div>
          <div className='w-full h-full flex flex-col justify-start lg:justify-center items-center'>
            <Cards />
          </div>
        </div>
        <ContentSwiper data={data} data2={data2} data3={data3} />
      </section>
    </section>
  )
}
