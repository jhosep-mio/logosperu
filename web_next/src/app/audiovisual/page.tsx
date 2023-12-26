import axios from 'axios'
import { Categorias } from './Categorias'
import { Global } from '@/components/shared/Helper/global'
import { ValuesItemsPortafolio } from '@/components/shared/interfaces/interfaces'
import { Titulo } from './animation/Titulo'
import { Cotizacion } from './animation/Cotizacion'
import { Proceso } from './animation/Proceso'
import { Requisitos } from './animation/Requisitos'
import { SwiperWebs } from './SwiperWebs'

export const metadata = {
  title: 'Producción Audiovisual - Logos Perú',
  description:
    'Destacamos en la creación de videos corporativos, animaciones promocionales y la animación de logotipos. Estamos comprometidos en brindar soluciones visuales efectivas para diversos entornos digitales, permitiendo la transmisión dinámica e interactiva de ideas y mensajes.',
  msvalidate: 'A01D8EBEAA551809606CCFFE234E6DF5',
  alternate: {
    canonical: 'https://logosperu.com.pe/audiovisual'
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
    'servicios Audiovisualeses para empresas',
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
    title: 'Producción Audiovisual - Logos Perú',
    description:
      'Destacamos en la creación de videos corporativos, animaciones promocionales y la animación de logotipos. Estamos comprometidos en brindar soluciones visuales efectivas para diversos entornos digitales, permitiendo la transmisión dinámica e interactiva de ideas y mensajes.',
    url: 'https://www.logosperu.com.pe/audiovisual',
    site_name: 'Logos Perú',
    type: 'website',
    images: [
      {
        url: 'https://www.logosperu.com/public/img/seo/PORTADA_WEB_PRODUCCION_AUDIOVISUAL.png'
      }
    ]
  },
  twitter: {
    site: '@DLogosPeru',
    title: 'Producción Audiovisual - Logos Perú',
    description:
      'Destacamos en la creación de videos corporativos, animaciones promocionales y la animación de logotipos. Estamos comprometidos en brindar soluciones visuales efectivas para diversos entornos digitales, permitiendo la transmisión dinámica e interactiva de ideas y mensajes.',
    creator: '@DLogosPeru',
    image:
      'https://www.logosperu.com/public/img/seo/PORTADA_WEB_PRODUCCION_AUDIOVISUAL.png'
  }
}

const getData = () => {
  return axios.get(`${Global.url}/getItemsToPortafolioWhereSubCategorias/14`, {
    headers: {
      'Cache-Control': 'no-store'
    }
  })
}
export default async function Audiovisual () {
  const response = await getData()
  const audiovisual: ValuesItemsPortafolio[] = response.data
  return (
    <>
      <Titulo />
      <Cotizacion />
      <Proceso />
      <Requisitos />
      <section className='portafolios mx-auto pt-10 lg:pt-40 border-t-gray-700 border-t-[6px]'>
        <div className='w-full text-center font_baloo text-5xl lg:text-7xl text-secondary font-bold flex justify-center gap-10 items-center'>
          <hr className='bg-primary h-2 w-[10%] rounded-xl' />
          <p className='w-fit px-10 m-0'>PORTAFOLIO</p>
          <hr className='bg-primary h-2 w-[10%] rounded-xl' />
        </div>
        <div className='container max-w-[1450px] mx-auto mt-10'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='menu_portadolios'>
                <Categorias />
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-[1450px] mx-auto'>
          <SwiperWebs logos={audiovisual} />
        </div>
      </section>
    </>
  )
}
