import axios from 'axios'
import { Categorias } from './Categorias'
import { Formulario } from './Formulario'
import { SwiperWebs } from './SwiperWebs'
import { TablaWebs } from './TablaWebs'
import { Global } from '@/components/shared/Helper/global'
import { ValuesItemsPortafolio } from '@/components/shared/interfaces/interfaces'
import DemoAdministrable from './demos/DemoAdministrable'
import DemoTienda from './demos/DemoTienda'
import SwiperPlanes from './planes/SwiperPlanes'
import { IoEllipse } from 'react-icons/io5'
import { VideoIntroductorio } from './VideoIntroductorio'

export const metadata = {
  title: 'Desarollo de Paginas Webs - Logos Perú',
  description:
    'Desarrollamos páginas web actualizadas a las últimas tendencias relacionadas al diseño web y desarrollo Web para empresas o negocios en Perú, ofrecemos 4 tipos de páginas web: Landing Page, Informativas, administrables y tiendas virtuales, adaptables a cualquier dispositivo y preparadas para el posicionamiento web.',
  msvalidate: 'A01D8EBEAA551809606CCFFE234E6DF5',
  alternate: {
    canonical: 'https://logosperu.com.pe/diseno_web'
  },
  themeColor: '#4e54c8',
  generator: 'Microsoft FrontPage 4.0',
  dcLanguage: 'SPANISH',
  distribution: 'all',
  vw96ObjectType: 'Homepage',
  resourceType: 'Homepage',
  revisit: '1 days',
  robots: 'index,follow',
  pragma: 'no-cache',
  cacheControl: 'no-cache',
  fbAppId: '129856497709093',
  fbAdmins: '129856497709093',
  articlePublisher: 'https://www.facebook.com/DLogosPeru/',
  ogType: 'article',
  httpEquiv: {
    'content-type': 'text/html; charset=UTF-8',
    'content-language': 'es'
  },
  icons: {
    icon: '/logos/web.png'
  },
  keywords: [
    'Agencia de Marketing Digital',
    'Agencia de diseño',
    'diseño de paginas web',
    'diseño grafico',
    'carritos de compras',
    'hosting',
    'venta de hosting',
    'dominios',
    'dominio .com',
    'dominio .pe',
    'dominio .com.pe',
    'tiendas virtuales',
    'web administrables',
    'posionamiento seo',
    'posicionamiento sem',
    'google adwords',
    'produccion audiovisual',
    'videos institucionales',
    'videos corporativos',
    'videos para empresas',
    'papelería',
    'brochures',
    'catalogo',
    'hojas menbretadas',
    'logos peru',
    'logos perú diseño de logotipos',
    'logos perú diseño de logos',
    'diseño de logotipos logos perú',
    'diseño de logos logos perú',
    'logos peru home',
    'home logos peru',
    'logotipos creativos',
    'logos creativos',
    'logos de diseño',
    'diseño de logotipos para empresas',
    'diseno de logotipos',
    'diseño de logotipos peru',
    'diseño de Logotipos',
    'logos',
    'logo',
    'logotipos',
    'crear logo',
    'servicios de logos',
    'Diseño Gráfico',
    'logo design',
    'make a logo',
    'design a logo',
    'how to design a logo',
    'diseño grafico',
    'diseño',
    'logotipo',
    'logos de empresas',
    'diseño web',
    'creador de logos',
    'como hacer un logo',
    'diseño de logos',
    'logotipos de empresas',
    'crear logo online',
    'imagen corporativa',
    'identidad corporativa',
    'logos para empresas',
    'diseñar logos',
    'crear logotipo',
    'logos online',
    'como diseñar un logo',
    'crear tu logo',
    'hacer logos online',
    'paginas para crear logos',
    'crear logos para empresa',
    'paginas para hacer logos',
    'logo empresa',
    'logotipos diseño',
    'empresas de diseño grafico',
    'logotipos de marcas',
    'diseño de marca',
    'diseño corporativo',
    'diseño grafico de logos',
    'creador de logos para empresas',
    'logotipos para empresas',
    'logos corporativos',
    'como hacer un logo de una empresa',
    'que es diseño de logotipos',
    'crear logotipos',
    'brochure',
    'flyers',
    'diseño de logo',
    'logos de diseñadores',
    'logos de eventos',
    'modelos de logos',
    'logos de dj',
    'logos para polos',
    'Crear logo gratis',
    'como crear logos gratis',
    'logo gratis',
    'crear logos gratis para empresas',
    'hacer logos gratis',
    'crea tu logo',
    'editor de logos',
    'logos de bancos',
    'los mejores logos',
    'logo definicion',
    'freelogos',
    'logos gratis',
    'logos crear',
    'que es el logotipo',
    'logos de marcas',
    'tipos de logos',
    'crear logos gratis',
    'logo free',
    'logos para restaurantes',
    'diseño online',
    'logotipos peru',
    'logos perú',
    'logos de peru',
    'logos del peru',
    'logos en peru',
    'logotipos de peru',
    'logotipos del peru',
    'logotipos en peru',
    'logos perú agencia de marketing digital',
    'agencia de marketing digital logos perú',
    'logos perú diseño web',
    'logos perú desarrollo web',
    'logos peru diseño web',
    'diseño web logos peru',
    'logos peru desarrollo web',
    'desarrollo web logos peru',
    'diseño y desarrollo web',
    'desarrollo web y diseño web',
    'diseño y desarrollo para paginas web',
    'desarrollo y diseño web para paginas web',
    'diseñpo web profesional',
    'diseño web peru',
    'empresas de diseño web',
    'tipos de diseño web',
    'tipos de desarrollo web',
    'desarrollo web profesional',
    'desarrollo web en peru',
    'diseño y desarrollo web en lima peru',
    'desarrollo y diseño web en lima peru',
    'diseño web para empresas',
    'desarrollo web para empresas',
    'diseño y desarrollo de paginas web para empresas',
    'desarrollo y diseño de paginas web para empresas',
    'diseño web responsive',
    'entornos de desarrollo web',
    'entornos de diseño web',
    'paginas de diseño web',
    'páginas de desarrollo web',
    'aplicaciones de desarrollo web',
    'aplicaciones de diseño web',
    'desarrollo y diseño de sitios web',
    'diseño y desarrollo de sitios web',
    'logos peru diseño grafico',
    'logos perú diseño gráfico',
    'diseño grafico',
    'diseño gráfico',
    'servico de diseño grafico',
    'servicio de diseño gráfico',
    'identidad corporativa',
    'flyer',
    'flyers',
    'tarjetas de presentacion',
    'hojas menbretadas',
    'volantes',
    'banners',
    'brochure',
    'manual de logotipo',
    'diseño de etiquetas',
    'tarjetas de presentación',
    'elementos graficos',
    'papeleria corporativa',
    'diseño grafico logos peru',
    'diseño gráfico logos perú',
    'proyectos graficos digitales',
    'medios digitales',
    'diseño grafico para redes sociales',
    'diseño grafico marcas',
    'marketing diseño grafico',
    'diseño grafico creativo',
    'diseño grafico profesional',
    'servico de diseño grafico en perú',
    'servico de diseño grafico en peru',
    'servicio de diseño grafico peru',
    'servicio de diseño grafico perú',
    'servicios de marketing digital',
    'marketing digital servicios',
    'agencia de marketing digital peru',
    'agencia de marketing digital perú',
    'servicios de marketing digital en peru',
    'servicios de marketing digital en perú',
    'posicionamiento web en google',
    'posicionamiento sem',
    'servicio de marketing digital comunity manager',
    'posicionamiento web con google ads',
    'posicionamiento web con google adwords',
    'posicionamiento web con facebook ads',
    'servicio digital comunity manager',
    'servicios de marketing y publicidad',
    'servicios que ofrece una agencia de marketing digital',
    'agencia digital',
    'agencias de marketing digital en perú',
    'cuales son los servicios de marketing digital',
    'listado de servicio de marketing digital',
    'que es servicio de marketing digital',
    'servicios de marketing digital precios',
    'propuesta de servicios de marketing digital',
    'servicio audiovisual',
    'servicios audiovisiales',
    'logos perú audiovisual',
    'audiovisual logos perú',
    'servicios audivisuales en perú',
    'servicios audivisuales en peru',
    'servicios audiovisuales para empresas',
    'produccion audiovisual',
    'videos corporativos',
    'videos institucionales',
    'videos animados',
    'videos promocionales',
    'videos corporativos animados',
    'videos corporativos grabados',
    'videos grabados',
    'videos publicitarios animados',
    'videos publicitarios grabados',
    'video promocionales grabados',
    'videos promicionales animados',
    'sesiones fotograficas y retoque',
    'sesion fotografica promacional',
    'sesion fotografica corporativa'
  ],
  authors: [{ name: 'Logos Perú' }],
  openGraph: {
    title: 'Desarollo de Paginas Webs - Logos Perú',
    description:
      'Desarrollamos páginas web actualizadas a las últimas tendencias relacionadas al diseño web y desarrollo Web para empresas o negocios en Perú, ofrecemos 4 tipos de páginas web: Landing Page, Informativas, administrables y tiendas virtuales, adaptables a cualquier dispositivo y preparadas para el posicionamiento web.',
    url: 'https://logosperu.com.pe/diseno_web',
    site_name: 'Logos Perú',
    type: 'website',
    images: [
      {
        url: 'https://logosperu.com/public/img/seo/PORTADA_WEB_DISEÑO_PARA_PAGINAS.png'
      }
    ]
  },
  twitter: {
    site: '@DLogosPeru',
    title: 'Desarollo de Paginas Webs - Logos Perú',
    description:
      'Desarrollamos páginas web actualizadas a las últimas tendencias relacionadas al diseño web y desarrollo Web para empresas o negocios en Perú, ofrecemos 4 tipos de páginas web: Landing Page, Informativas, administrables y tiendas virtuales, adaptables a cualquier dispositivo y preparadas para el posicionamiento web.',
    creator: '@DLogosPeru',
    image:
      'https://logosperu.com/public/img/seo/PORTADA_WEB_DISEÑO_PARA_PAGINAS.png'
  }
}

const getData = () => {
  return axios.get(`${Global.url}/indexWhereCategoriaAleatorio/2`, {
    headers: {
      'Cache-Control': 'no-store'
    }
  })
}

export default async function DiseñoWeb () {
  const response = await getData()
  const webs: ValuesItemsPortafolio[] = response.data

  return (
    <>
      <section className='descrip_logotipo pt-60 h-[100vh]'>
        <div className='container w-full h-full flex flex-col max-w-[1200px] mx-auto justify-between'>
          <div className='row h-[45%]'>
            <div className='col-lg-12'>
              <h1>DESARROLLO DE PAGINAS WEB</h1>
              <hr className='hr_first' />
              <hr className='hr_second' />
              <div className='cont_descrip_logotipo'>
                <p>
                  Somos una agencia de <span>diseño de paginas web</span> donde
                  implementamos las ultimas tecnologias relacionadas al{' '}
                  <span>diseño web</span> y <span>desarrollo web</span>, ¿Tienes
                  un negocio y aún no tienes una web? Te ofrecemos 3{' '}
                  <span>tipos de paginas web</span>, adaptables a cualquier
                  dispositivo y preparas para el{' '}
                  <span>posicionamiento web</span> en google. Muestra tus
                  productos o servicios en internet y aumente sus ventas.
                </p>
              </div>
            </div>
          </div>
          <div className='shadow_comunity2 h-full'>
            <img
              src='/disenoweb/fondo.svg'
              alt='Desarrollo web'
              className='mx-auto h-full object-contain px-16'
            />
          </div>
        </div>
      </section>

      <section className='container font_baloo mb-10 flex items-center justify-center flex-col mt-24 md:mt-32'>
        <h1 className='text-secondary font-extrabold text-[2.8rem] md:text-6xl'>PLANES DE DESARROLLO WEB </h1>
        <div className='flex gap-4'>
          <hr className='hr_first' />
          <hr className='hr_second' />
        </div>
        <div className='mt-10 w-full'>
          <h2 className='text-[2.3rem] md:text-[2.5rem] font-bold text-center mb-10'>¿Que esta incluido?</h2>
          <ul className=' gap-10 text-[1.5rem] md:text-[1.7rem] w-fit mx-auto columns-2'>
            <li className='flex gap-3 items-center'><IoEllipse className='text-secondary text-sm' /> <span className='flex-1'>Todo nuestro servicio es  Sistematizado.</span> </li>
            <li className='flex gap-3 items-center'><IoEllipse className='text-secondary text-sm' /> <span className='flex-1'>Tiempo de trabajo  SEGÚN PLAN</span> </li>
            <li className='flex gap-3 items-center'><IoEllipse className='text-secondary text-sm' /> <span className='flex-1'>Trabajamos bajo contrato.</span> </li>
            <li className='flex gap-3 items-center'><IoEllipse className='text-secondary text-sm' /> <span className='flex-1'>Nuestros costos NO incluyen IGV .</span> </li>
          </ul>
        </div>
      </section>

      <section className='container relative mb-32' id='swiper_button'>
        <SwiperPlanes />
      </section>

      <VideoIntroductorio />

      <section className='sect_cotizacion' id='formCotizador'>
        <div className='container max-w-[1200px] mx-auto'>
          <div className='row'>
            <div className='col-lg-12'>
              <div id='wizard_container' className='wizard'>
                <Formulario />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1200px] mx-auto w-full px-6 md:px-10 pt-10 md:pt-20 pb-32'>
        <div className='w-full flex flex-col md:flex-row justify-center gap-32 md:gap-10'>
          <DemoAdministrable />
          <DemoTienda />
        </div>
      </section>

      <section className='descripcion_web'>
        <div className='titulo'>
          <h2>SOMOS UNA AGENCIA</h2>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='descrip'>
                <p>EXPERTOS EN DISEÑO Y DESARROLLO WEB</p>
                <hr className='hr_first' />
                <hr className='hr_second' />
              </div>
            </div>
            <div className='' />
          </div>
        </div>
      </section>

      <section className='nosotros'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <TablaWebs />
            </div>
          </div>
        </div>
      </section>

      <section className='portafolios max-w-[1450px] mx-auto'>
        <div className='titulo_portafolio'>
          <h2>PORTAFOLIO</h2>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='descrip_portafolio'>
                <hr className='hr_first' />
                <hr className='hr_second' />
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='menu_portadolios'>
                <Categorias />
              </div>
            </div>
          </div>
        </div>
        <SwiperWebs logos={webs} />
      </section>
    </>
  )
}
