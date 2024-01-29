// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { type Dispatch, type SetStateAction } from 'react'
import { type FinalValues, type avanceValues } from '../../../../shared/Interfaces'

export const SwiperAvances = ({
  arrayAvances,
  arrayFinal,
  setAvance,
  setFinal,
  setOpenFinal,
  setOpen
}: {
  arrayAvances: never[]
  arrayFinal: never[]
  setAvance: Dispatch<SetStateAction<avanceValues>>
  setFinal: Dispatch<SetStateAction<FinalValues>>
  setOpenFinal: Dispatch<SetStateAction<boolean>>
  setOpen: Dispatch<SetStateAction<boolean>>
}): JSX.Element => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper w-full"
      spaceBetween={30}
      breakpoints={{
        0: {
          slidesPerView: 2
        },
        576: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 4
        },
        992: {
          slidesPerView: 5
        },
        1200: {
          slidesPerView: 6
        }
      }}
    >
      {arrayAvances.map((avance: avanceValues, index: number) => (
        <SwiperSlide className="" key={index}>
          <div
            className="w-full h-64 bg-form p-7 border-2 border-main rounded-xl relative duration-300 transition-all ease-out group overflow-visible hover:border-main
        hover:shadow-md hover:shadow-main "
          >
            <div className="h-full flex justify-between flex-col gap-2 text-black ">
              <p className="text-xl font-bold text-center">{avance.asunto}</p>
              <div className="w-full flex flex-col justify-center">
                <p className="text-gray-400 w-full text-center">
                  {avance.fecha}
                </p>
                <p className="text-gray-400 w-full text-center">
                  {avance.hora}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="absolute -bottom-20 ease-out transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-bottom-5 left-0 right-0 w-fit mx-auto rounded-lg bg-main/80 text-white px-4 py-2 hover:bg-main"
              onClick={() => {
                setAvance(avance)
                setOpen(true)
              }}
            >
              Ver más
            </button>
          </div>
        </SwiperSlide>
      ))}

      {arrayFinal.map((final: FinalValues, index: number) => (
        <SwiperSlide className="" key={index}>
          <div
            className="w-full h-64 bg-form p-7 border-2 border-main rounded-xl relative duration-300 transition-all ease-out group overflow-visible hover:border-main
        hover:shadow-md hover:shadow-main "
          >
            <div className="h-full flex justify-between flex-col gap-2 text-black ">
              <p className="text-xl font-bold text-center">{final.asunto}</p>
              <div className="w-full flex flex-col justify-center">
                <p className="text-gray-400 w-full text-center">
                  {final.fecha}
                </p>
                <p className="text-gray-400 w-full text-center">
                  {final.hora}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="absolute -bottom-20 ease-out transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-bottom-5 left-0 right-0 w-fit mx-auto rounded-lg bg-main/80 text-white px-4 py-2 hover:bg-main"
              onClick={() => {
                setFinal(final)
                setOpenFinal(true)
              }}
            >
              Ver más
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
