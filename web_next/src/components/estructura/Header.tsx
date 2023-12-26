'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
  IoCartSharp,
  IoHeartSharp
} from 'react-icons/io5'
import { Oferta } from '../home/oferta/Oferta'
import { useRouter } from 'next/navigation'
import { FaRegImages } from 'react-icons/fa'
import { RiBrushFill, RiCameraLine, RiComputerLine } from 'react-icons/ri'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const [seleccion, setSeleccion] = useState(0)
  const [openoferta, setopenoferta] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setInterval(() => {
      const ofertali = document.querySelector('.item-ofertas')
      ofertali?.classList.remove('showOffer')
    }, 4000)
    setInterval(() => {
      const ofertali = document.querySelector('.item-ofertas')
      ofertali?.classList.add('showOffer')
    }, 8000)
  }, [])

  return (
    <>
      <div id='imgBannerHome1 ' className='transition-all'>
        <div
          id='imgBanner'
          className='p_relative refeBannerShow menos4 bannerwebite'
        >
          <div className='p_absolute clickBannerShow'>
            <span className='fa fa-close ' />
          </div>
        </div>
      </div>

      <div id='imgBannerHome2' className='transition-all'>
        <div
          id='imgBanner2'
          className='p_relative refeBannerShow menos4 bannermovil'
        >
          <div className='p_absolute clickBannerShow'>
            <span className='fa fa-close ' />
          </div>
        </div>
      </div>
      <section className='social_icon transition-all'>
        <ul>
          <li className='iconomorado'>
            <a
              href='https://logosperu.com/noticias/'
              title='Portafolio'
              className=''
            >
              {/* <IoNewspaperOutline /> */}
              <i className='fa-regular fa-newspaper' />
              Noticias
            </a>
          </li>
          <li className='item-ofertas showOffer'>
            <Link
              href='#'
              onClick={() => {
                setopenoferta(true)
              }}
              title='Ofertas'
              className='iconomorado link-oferta2'
            >
              <i className='fas fa-tag' />
              Ofertas
            </Link>
          </li>
        </ul>
      </section>
      <header className='header_top transition-all '>
        <div className='header_content_top'>
          <div className='img_header_top'>
            <Link href='/'>
              <img
                src='/vid/logo.gif'
                alt='Diseño de Logos - Agencia de diseño Gráfico - logotipos'
                className='object-contain'
              />
            </Link>
          </div>
          <div className='menu_header_top'>
            <ul className='ul_menu_header_top'>
              <li className='li_limp menu_header_new'>
                <button>
                  Diseño de Logotipo <i className='fa-solid fa-chevron-down' />
                </button>
                <div className='w-fit bg-white border border-gray-400 shadow-sm absolute top-full mt-2 left-[-50px] right-0 div'>
                  <div className='p-4 grid grid-cols-2 gap-4 w-[320px]'>
                    <div
                      className='flex gap-3 items-center group li_limp'
                      onClick={() =>
                        router.push('/portafolio/diseno-de-logotipos')}
                    >
                      <FaRegImages className='w-14 h-14 p-2 bg-[#F6F9FC] text-primary/80' />
                      <h2 className='text-black/80 m-0 text-[18px] font-semibold font_baloo group-hover:underline'>
                        Portafolio
                      </h2>
                    </div>
                    <div
                      className='flex gap-3 items-center group li_limp'
                      onClick={() => router.push('/diseno_logotipo')}
                    >
                      <RiBrushFill className='w-14 h-14 p-2 bg-[#F6F9FC] text-primary/80' />
                      <h2 className='text-black/80 m-0 text-[18px] font-semibold font_baloo group-hover:underline'>
                        Servicio
                      </h2>
                    </div>
                  </div>
                </div>
              </li>
              <li className='li_limp menu_header_new'>
                <button>
                  Desarrollo Web <i className='fa-solid fa-chevron-down' />
                </button>
                <div className='w-fit bg-white border border-gray-400 shadow-sm absolute top-full mt-2 left-[-70px] right-0 div'>
                  <div className='p-4 grid grid-cols-2 gap-4 w-[320px]'>
                    <div
                      className='flex gap-3 items-center group li_limp'
                      onClick={() =>
                        router.push('/portafolio/diseno-de-paginas-web')}
                    >
                      <FaRegImages className='w-14 h-14 p-2 bg-[#F6F9FC] text-primary/80' />
                      <h2 className='text-black/80 m-0 text-[18px] font-semibold font_baloo group-hover:underline'>
                        Portafolio
                      </h2>
                    </div>
                    <div
                      className='flex gap-3 items-center group li_limp'
                      onClick={() => router.push('/diseno_web')}
                    >
                      <RiComputerLine className='w-14 h-14 p-2 bg-[#F6F9FC] text-primary/80' />
                      <h2 className='text-black/80 m-0 text-[18px] font-semibold font_baloo group-hover:underline'>
                        Servicio
                      </h2>
                    </div>
                  </div>
                </div>
              </li>

              <li className='text-primary group li_limp menu_header_new'>
                <button>
                  Servicios <i className='fa-solid fa-chevron-down' />
                </button>
                <div className='w-fit bg-white border border-gray-400 shadow-sm absolute top-full mt-2 left-[-320px] right-0 div'>
                  <div className='p-4 grid grid-cols-3 gap-4 w-[800px]'>
                    <div>
                      <div className='flex gap-3 items-center'>
                        <RiBrushFill className='w-14 h-14 p-2 bg-[#F6F9FC] text-primary/80' />
                        <h2 className='text-black/80 m-0 text-[22px] font-bold font_baloo'>
                          Diseño grafico
                        </h2>
                      </div>
                      <div className='flex flex-col pl-[4.5rem] gap-4 mt-4'>
                        <Link
                          href='/diseno_logotipo'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Diseño de Logotipo
                        </Link>
                        <Link
                          href='/comunity_manager'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Comunity Manager
                        </Link>
                        <Link
                          href='/diseno_brochure'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Diseño de brochure
                        </Link>
                        <Link
                          href='/identidad_corporativa'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Identidad corporativa
                        </Link>
                        <Link
                          href='/diseno_flyer'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Diseño de flyers
                        </Link>
                        <Link
                          href='/diseno_personaje'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Diseño de personajes
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className='flex gap-3 items-center'>
                        <RiCameraLine className='w-14 h-14 p-2 bg-[#F6F9FC] text-primary/80' />
                        <h2 className='text-black/80 m-0 text-[22px] font-bold font_baloo'>
                          Audiovisual
                        </h2>
                      </div>
                      <div className='flex flex-col pl-[4.5rem] gap-4 mt-4'>
                        <Link
                          href='/animacion_logo'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Animación de logotipo
                        </Link>
                        <Link
                          href='/audiovisual'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Producción audiovisual
                        </Link>
                        <Link
                          href='/produccion_fotografica'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Producción fotografica
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className='flex gap-3 items-center'>
                        <RiComputerLine className='w-14 h-14 p-2 bg-[#F6F9FC] text-primary/80' />
                        <h2 className='text-black/80 m-0 text-[22px] font-bold font_baloo'>
                          Desarrollo web
                        </h2>
                      </div>
                      <div className='flex flex-col pl-[4.5rem] gap-4 mt-4'>
                        <Link
                          href='/diseno_web'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Diseño de paginas web
                        </Link>
                        <Link
                          href='/venta_hosting'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Hosting y Dominio
                        </Link>
                        <Link
                          href='/alta_google'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Alta de google
                        </Link>
                        <Link
                          href='/posicionamiento_seo'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Posicionamiento SEO
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className='text-primary group li_limp menu_header_new'>
                <button>
                  Catalogos <i className='fa-solid fa-chevron-down' />
                </button>
                <div className='w-fit bg-white border border-gray-400 shadow-sm absolute top-full mt-2 left-[-170px] right-0 div'>
                  <div className='p-4 grid grid-cols-2 gap-4 w-[500px]'>
                    <div>
                      <div className='flex gap-3 items-center'>
                        <RiBrushFill className='w-14 h-14 p-2 bg-[#F6F9FC] text-primary/80' />
                        <h2 className='text-black/80 m-0 text-[22px] font-bold font_baloo'>
                          Diseño grafico
                        </h2>
                      </div>
                      <div className='flex flex-col pl-[4.5rem] gap-4 mt-4'>
                        <Link
                          href='/brochure'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Brochure Logos Perù
                        </Link>
                        <a
                          href='https://logosperu.com.pe/catalogos/LOGOFOLIO_2023.pdf'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Logofolio
                        </a>
                        <a
                          href='https://logosperu.com.pe/catalogos/CATALOGO_FIRMA_DE_CORREO_2023.pdf'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Firma de correos
                        </a>
                        <a
                          href='https://logosperu.com.pe/catalogos/CATALOGO_FLYERS_2023.pdf'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Flyers
                        </a>
                        <a
                          href='https://logosperu.com.pe/catalogos/catalogo_uniformes.pdf'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Uniformes
                        </a>
                        <a
                          href='https://logosperu.com.pe/catalogos/CATALOGO_ROTULADOS_2023.pdf'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Rotulados
                        </a>
                        <a
                          href='https://logosperu.com.pe/catalogos/CATALOGO_REDES_SOCIALES_2023.pdf'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Redes sociales
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className='flex gap-3 items-center'>
                        <RiComputerLine className='w-14 h-14 p-2 bg-[#F6F9FC] text-primary/80' />
                        <h2 className='text-black/80 m-0 text-[22px] font-bold font_baloo'>
                          Desarrollo web
                        </h2>
                      </div>
                      <div className='flex flex-col pl-[4.5rem] gap-4 mt-4'>
                        <a
                          href='https://logosperu.com.pe/catalogos/CATALOGO_SEO_ALTA_DE_GOOGLE.pdf'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          SEO -Alta de google
                        </a>
                        <a
                          href='https://logosperu.com.pe/catalogos/CATALOGO_WEB_INFORMATIVA_2023.pdf'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Web informativas
                        </a>
                        <a
                          href='https://logosperu.com.pe/catalogos/CATALOGO_WEB_ADMINISTRABLES_2023.pdf'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Web administrables
                        </a>
                        <a
                          href='https://logosperu.com.pe/catalogos/CATALOGO_TIENDAS_VIRTUALES_2023.pdf'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Tiendas virtuales
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className='text-primary group li_limp menu_header_new'>
                <button onClick={() => router.push('/portafolio')}>
                  Recursos <i className='fa-solid fa-chevron-down' />
                </button>
                <div className='w-fit bg-white border border-gray-400 shadow-sm absolute top-full mt-2 left-[-20px] right-0 div'>
                  <div className='p-4 grid grid-cols-1 gap-4 w-[260px]'>
                    <div>
                      <div className='flex flex-col pl-[1.5rem] gap-4 mt-4'>
                        <Link
                          href='/portafolio'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Portafolios
                        </Link>
                        <a
                          href='https://demo.logosperu.com/'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Demo web administrable
                        </a>
                        <a
                          href='https://demo2.logosperu.com/'
                          className='flex text-[18px] items-center justify-left m-0 hover:underline text-black/80 font_baloo'
                        >
                          Demo tienda virtual
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <Link href='https://clientes.logosperu.com.pe/login' target='_blank' className='button_intranet h-fit rounded-[1.8rem]'>
            <svg data-v-0545141b='' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='24px' height='24px' className='mr-2'><g data-v-0545141b='' fill='none'><path data-v-0545141b='' d='M0 0h24v24H0V0z' /><path data-v-0545141b='' d='M0 0h24v24H0V0z' opacity='.87' /></g><path data-v-0545141b='' d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z' /></svg>
            Intranet
          </Link>
          <div className='button_portafolio_header_top flex flex-col gap-4'>
            <div className='flex gap-3'>
              <div className='primero_box_header relative'>
                <Link
                  href='#'
                  aria-label='Visita nuestra página de Twitter'
                  className='hover:bg-[#BC3741]'
                >
                  <IoHeartSharp className='text-white text-4xl' />
                </Link>
              </div>
              <div className='primero_box_header'>
                <Link
                  href='#'
                  className='hover:bg-[#BC3741]'
                  aria-label='Visita nuestra página de Facebook'
                >
                  <IoCartSharp className='text-white text-4xl' />
                </Link>
              </div>
            </div>
            <span
              className='text-2xl font-bold font_baloo cursor-pointer'
              onClick={() => {
                window.open(
                  'https://api.whatsapp.com/send/?phone=%2B51987038024&text&type=phone_number&app_absent=0'
                )
              }}
            >
              +51 987 038 024
            </span>
          </div>

        </div>

        <div className='header_content_top2'>
          <div
            className={`box_primero_header_mobil ${
              open ? 'backroudactive' : ''
            }`}
          >
            <IoCartSharp className='text-white text-5xl' />
          </div>
          <Link
            href='/'
            className={`box_segundo_header_mobil ${
              open ? 'backroudactive' : ''
            }`}
          >
            {!open
              ? (
                <img
                  src='/vid/logo.gif'
                  alt='Diseño de Logos - Agencia de diseño Gráfico - logotipos'
                  className='icono2__img'
                />
                )
              : (
                <img
                  src='/vid/logo.gif'
                  alt='Diseño de Logos - Agencia de diseño Gráfico - logotipos'
                  className='icono1__img '
                />
                )}
          </Link>
          <div
            className={`box_tercero_header_mobil ${
              open ? 'backroudactive' : ''
            }`}
            onClick={() => {
              setOpen(!open)
              setSeleccion(0)
            }}
          >
            <i className='fa fa-align-left' />
          </div>

          <CSSTransition
            in={open}
            timeout={300}
            classNames='alert'
            unmountOnExit
          >
            <div className='flotante_cuarto_mobil'>
              {seleccion == 0
                ? (
                  <ul className='content_flotante_cuarto_mobil'>
                    <li className='item-menu__mobil'>
                      <Link
                        href='/'
                        onClick={() => {
                          setOpen(false)
                        }}
                      >
                        INICIO
                      </Link>
                    </li>
                    <li className='item-menu__mobil'>
                      <a
                        className='link-menu'
                        id='submenu1'
                        onClick={() => {
                          setSeleccion(1)
                        }}
                      >
                        DISEÑO GRÁFICO
                      </a>
                    </li>
                    <li className='item-menu__mobil'>
                      <a
                        className='link-menu'
                        id='submenu2'
                        onClick={() => {
                          setSeleccion(3)
                        }}
                      >
                        DISEÑO WEB
                      </a>
                    </li>
                    <li className='item-menu__mobil'>
                      <a
                        className='link-menu'
                        id='submenu3'
                        onClick={() => {
                          setSeleccion(2)
                        }}
                      >
                        SERVICIOS
                      </a>
                    </li>
                    <li className='item-menu__mobil'>
                      <span
                        className='link-menu'
                        id='submenu4'
                        onClick={() => {
                          setSeleccion(5)
                        }}
                      >
                        CATÁLOGOS
                      </span>
                    </li>
                    <li className='item-menu__mobil'>
                      <a href='https://www.logosperu.com/noticias/'>NOTICIAS</a>
                    </li>

                    <Link href='https://clientes.logosperu.com.pe/login' target='_blank' className='button_intranet2 h-fit rounded-[1.8rem]'>
                      <svg data-v-0545141b='' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#4e54c8' width='24px' height='24px' className='mr-2'><g data-v-0545141b='' fill='none'><path data-v-0545141b='' d='M0 0h24v24H0V0z' /><path data-v-0545141b='' d='M0 0h24v24H0V0z' opacity='.87' /></g><path data-v-0545141b='' d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z' /></svg>
                      Intranet
                    </Link>
                  </ul>
                  )
                : seleccion == 1
                  ? (
                    <ul className='sub-menu submenu1 item'>
                      <a
                        className='back-menu'
                        onClick={() => {
                          setSeleccion(0)
                        }}
                      >
                        <i
                          className='fas fa-chevron-left'
                          style={{ color: '#ffffff' }}
                        />{' '}
                        Volver al menú anterior
                      </a>
                      <li className='item__submenu'>
                        <Link
                          href='/portafolio/diseno-de-logotipos/'
                          className='link__submenu'
                          onClick={() => {
                            setOpen(false)
                          }}
                        >
                          Portafolio
                        </Link>
                      </li>
                      <li className='item__submenu'>
                        <Link
                          href='/diseno_logotipo/'
                          className='link__submenu'
                          onClick={() => {
                            setOpen(false)
                          }}
                        >
                          Servicio
                        </Link>
                      </li>
                    </ul>
                    )
                  : seleccion == 2
                    ? (
                      <ul className='sub-menu submenu3'>
                        <a
                          className='back-menu'
                          onClick={() => {
                            setSeleccion(0)
                          }}
                        >
                          <i
                            className='fas fa-chevron-left'
                            style={{ color: '#ffffff' }}
                          />{' '}
                          Volver al menú anterior
                        </a>
                        <li className='item__submenu'>
                          <Link
                            href='/diseno_logotipo'
                            className='link__submenu'
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            Diseño de Logotipos
                          </Link>
                        </li>
                        <li className='item__submenu'>
                          <Link
                            href='/diseno_web'
                            className='link__submenu'
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            Desarrollo web
                          </Link>
                        </li>
                        <li className='item__submenu'>
                          <Link
                            href='/comunity_manager'
                            className='link__submenu'
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            Comunity Manager
                          </Link>
                        </li>
                        <li className='item__submenu'>
                          <Link
                            href='/diseno_brochure'
                            className='link__submenu'
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            Diseño de brochure
                          </Link>
                        </li>
                        <li className='item__submenu'>
                          <Link
                            href='/diseno_personaje'
                            className='link__submenu'
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            Diseño de personajes
                          </Link>
                        </li>
                        <li className='item__submenu'>
                          <Link
                            href='/alta_google'
                            className='link__submenu'
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            Alta de google
                          </Link>
                        </li>
                        <li className='item__submenu'>
                          <Link
                            href='/venta_hosting'
                            className='link__submenu'
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            Hosting y Dominio
                          </Link>
                        </li>
                        <li className='item__submenu'>
                          <Link
                            href='/identidad_corporativa'
                            className='link__submenu'
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            Identidad Corporativa
                          </Link>
                        </li>
                        <li className='item__submenu'>
                          <Link
                            href='/alta_google'
                            className='link__submenu'
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            Alta de google
                          </Link>
                        </li>
                        <li className='item__submenu'>
                          <Link
                            href='/animacion_logo'
                            className='link__submenu'
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            Animación de Logotipo
                          </Link>
                        </li>
                        <li className='item__submenu'>
                          <Link
                            href='/audiovisual'
                            className='link__submenu'
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            Producción Audiovisual
                          </Link>
                        </li>
                        <li className='item__submenu'>
                          <Link
                            href='/produccion_fotografica'
                            className='link__submenu'
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            Producción Fotográfica
                          </Link>
                        </li>
                        <li className='item__submenu'>
                          <Link
                            href='/posicionamiento_seo'
                            className='link__submenu'
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            Posicionamiento SEO
                          </Link>
                        </li>
                        <li className='item__submenu'>
                          <Link
                            href='/diseno_flyer'
                            className='link__submenu'
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            Diseño de Flyers
                          </Link>
                        </li>
                      </ul>
                      )
                    : seleccion == 3
                      ? (
                        <ul className='sub-menu submenu2'>
                          <a
                            className='back-menu'
                            onClick={() => {
                              setSeleccion(0)
                            }}
                          >
                            <i
                              className='fas fa-chevron-left'
                              style={{ color: '#ffffff' }}
                            />{' '}
                            Volver al menú anterior
                          </a>
                          <li className='item__submenu'>
                            <Link
                              href='/portafolio/diseno-de-paginas-web/'
                              className='link__submenu'
                              onClick={() => {
                                setOpen(false)
                              }}
                            >
                              Portafolio
                            </Link>
                          </li>
                          <li className='item__submenu'>
                            <Link
                              href='/diseno_web/'
                              className='link__submenu'
                              onClick={() => {
                                setOpen(false)
                              }}
                            >
                              Servicio
                            </Link>
                          </li>
                        </ul>
                        )
                      : seleccion == 5
                        ? (
                          <ul className='sub-menu submenu4'>
                            <a
                              href='#'
                              className='back-menu'
                              onClick={() => {
                                setSeleccion(0)
                              }}
                            >
                              <i
                                className='fas fa-chevron-left'
                                style={{ color: '#ffffff' }}
                              />{' '}
                              Volver al menú anterior
                            </a>
                            <li className='item__submenu'>
                              <Link
                                href='/brochure'
                                className='link__submenu'
                                onClick={() => {
                                  setOpen(false)
                                }}
                              >
                                Brochure Logos Perú
                              </Link>
                            </li>
                            <li className='item__submenu'>
                              <a
                                href='/catalogos/CATALOGO_TIENDAS_VIRTUALES_2023.pdf'
                                target='_blank'
                                className='link__submenu'
                              >
                                Tiendas Virtuales
                              </a>
                            </li>
                            <li className='item__submenu'>
                              <a
                                href='/catalogos/CATALOGO_FIRMA_DE_CORREO_2023.pdf'
                                target='_blank'
                                className='link__submenu'
                              >
                                Firma de correos
                              </a>
                            </li>
                            <li className='item__submenu'>
                              <a
                                href='/catalogos/CATALOGO_FLYERS_2023.pdf'
                                target='_blank'
                                className='link__submenu'
                              >
                                Flyer
                              </a>
                            </li>
                            <li className='item__submenu'>
                              <a
                                href='/catalogos/CATALOGO_UNIFORMES.pdf'
                                target='_blank'
                                className='link__submenu'
                              >
                                Uniformes
                              </a>
                            </li>
                            <li className='item__submenu'>
                              <a
                                href='/catalogos/CATALOGO_SEO_ALTA_DE_GOOGLE.pdf'
                                target='_blank'
                                className='link__submenu'
                              >
                                SEO - Alta de Google
                              </a>
                            </li>
                            <li className='item__submenu'>
                              <a
                                href='/catalogos/CATALOGO_WEB_INFORMATIVA_2023.pdf'
                                target='_blank'
                                className='link__submenu'
                              >
                                Web Informativas
                              </a>
                            </li>
                            <li className='item__submenu'>
                              <a
                                href='/catalogos/CATALOGO_WEB_ADMINISTRABLES_2023.pdf'
                                target='_blank'
                                className='link__submenu'
                              >
                                Web Administrables
                              </a>
                            </li>
                            <li className='item__submenu'>
                              <a
                                href='/catalogos/CATALOGO_REDES_SOCIALES_2023.pdf'
                                target='_blank'
                                className='link__submenu'
                              >
                                Redes Sociales
                              </a>
                            </li>
                            <li className='item__submenu'>
                              <a
                                href='/catalogos/CATALOGO_ROTULADOS_2023.pdf'
                                target='_blank'
                                className='link__submenu'
                              >
                                Rotulados
                              </a>
                            </li>
                            <li className='item__submenu'>
                              <a
                                href='/catalogos/LOGOFOLIO_2023.pdf'
                                target='_blank'
                                className='link__submenu'
                              >
                                Logofolio
                              </a>
                            </li>
                          </ul>
                          )
                        : null}
            </div>
          </CSSTransition>
        </div>
      </header>
      <section className='fixed bottom-0 left-0 m-6 z-50'>
        <div className='w-full items-center justify-center gap-6 cambiar_ss'>
          <div
            className='rounded-full overflow-hidden transition-all scale-125 group mb-0 quitar_margen hover:bg-white cursor-pointer'
            onClick={() => {
              window.open('https://www.facebook.com/DLogosPeru/', '_blank')
            }}
          >
            <img src='/redes/facebook.png' alt='' className='' />
          </div>
          <div
            className='rounded-full overflow-hidden transition-all scale-125 group mb-0 quitar_margen hover:bg-white cursor-pointer'
            onClick={() => {
              window.open('https://www.instagram.com/dlogosperu/', '_blank')
            }}
          >
            <img src='/redes/instagram.png' alt='' className='' />
          </div>
          <div
            className='rounded-full overflow-hidden transition-all scale-125 group mb-0 quitar_margen hover:bg-white cursor-pointer'
            onClick={() => {
              window.open(
                'https://www.youtube.com/channel/UCPXxUSJAk5VaWGEaRmgFeew',
                '_blank'
              )
            }}
          >
            <img src='/redes/youtube.png' alt='' className='' />
          </div>
        </div>
      </section>
      <Oferta open={openoferta} setOpen={setopenoferta} />
    </>
  )
}
