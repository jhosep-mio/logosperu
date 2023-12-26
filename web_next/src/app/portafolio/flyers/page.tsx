import { Global } from '@/components/shared/Helper/global'
import {
  ValuesCategoriasPortafolio,
  ValuesItemsPortafolio
} from '@/components/shared/interfaces/interfaces'
import axios from 'axios'
import Link from 'next/link'
import { Contenido } from '../diseno-de-logotipos/Contenido'

export const metadata = {
  title: 'Portafolio de Flyers - Logos Perú',
  description:
    'Flyers diseñados de manera experta para capturar la atención y comunicar eficazmente. Navega por un portafolio que exhibe una amplia gama de flyers, desde minimalistas hasta los más vibrantes, todos creados para resonar y dejar una impresión duradera en tu audiencia.',
  msvalidate: 'A01D8EBEAA551809606CCFFE234E6DF5',
  alternate: {
    canonical: 'https://logosperu.com.pe/portafolio/flyers'
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
    title: 'Portafolio de Flyers - Logos Perú',
    description:
      'Flyers diseñados de manera experta para capturar la atención y comunicar eficazmente. Navega por un portafolio que exhibe una amplia gama de flyers, desde minimalistas hasta los más vibrantes, todos creados para resonar y dejar una impresión duradera en tu audiencia.',
    url: 'https://logosperu.com.pe/portafolio/flyers',
    site_name: 'Logos Perú',
    type: 'website',
    images: [
      {
        url: 'https://logosperu.com/public/img/seo/PORTADA_WEB_ALTA_DE_PORTAFOLIO.png'
      }
    ]
  },
  twitter: {
    site: '@DLogosPeru',
    title: 'Portafolio de Flyers - Logos Perú',
    description:
      'Flyers diseñados de manera experta para capturar la atención y comunicar eficazmente. Navega por un portafolio que exhibe una amplia gama de flyers, desde minimalistas hasta los más vibrantes, todos creados para resonar y dejar una impresión duradera en tu audiencia.',
    creator: '@DLogosPeru',
    image:
      'https://logosperu.com/public/img/seo/PORTADA_WEB_ALTA_DE_PORTAFOLIO.png'
  }
}

const getData = async (texto: string) => {
  try {
    const response = await axios.get(
      `${Global.url}/getUrlToPortafolio/${texto}`,
      {
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    )
    return response.data[0]
  } catch (error) {
    console.error('Error fetching data from getUrlToPortafolio', error)
    throw error
  }
}

const getData2 = async (id: string) => {
  try {
    const response = await axios.get(
      `${Global.url}/getSubCategoriasToPortafolioWhereUrl/${id}`,
      {
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    )
    return response.data
  } catch (error) {
    console.error('Error fetching data from getUrlToPortafolio with ID', error)
    throw error
  }
}

const getData3 = async (id: string) => {
  try {
    const response = await axios.get(
      `${Global.url}/getItemsToPortafolioWhereCategorias/${id}`,
      {
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    )
    return response.data
  } catch (error) {
    console.error('Error fetching data from getUrlToPortafolio with ID', error)
    throw error
  }
}

const fetchData = async (texto: string) => {
  try {
    const firstData = await getData(texto)
    const id = firstData.id // Asegúrate de que estás extrayendo el ID correctamente
    const secondData = await getData2(id)
    const tercerData = await getData3(id)
    return {
      firstData,
      secondData,
      tercerData
    }
  } catch (error) {
    console.error('Error fetching chained data', error)
    throw error
  }
}

export default async function Portafolio () {
  const texto = 'flyers'
  const response = await fetchData(texto)
  const productos: ValuesCategoriasPortafolio = response.firstData
  //   const subcategorias: ValuesSubCategoriasPortafolio[] = response.secondData
  const items: ValuesItemsPortafolio[] = response.tercerData

  return (
    <>
      <section className='section_portafolio pt-60 md:pt-72'>
        <div className='titulo_portafolio'>
          <h1>{productos.titulo}</h1>
          <hr className='hr_first' />
          <hr className='hr_second' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='descrip_portafolio'>
                <p>
                  Proporcionamos <b>soluciones digitales</b> que impulsan al
                  empresario en su incursión al mundo del internet, creando
                  <b>servicios de alta calidad</b> como{' '}
                  <b>
                    diseño de logotipos, diseño de páginas web, diseño gráfico,
                    hosting web, audiovisual
                  </b>
                  que suman valor y generan la <b>construcción de una marca</b>.
                </p>
              </div>
              <div className='boton_portafolio mt-0'>
                <Link href='/portafolio'>Volver al Portafolio</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1200px] mx-auto mb-24'>
        <div className='mb-16' id='userefprimercontenido' />
        <Contenido items={items} />
      </section>
    </>
  )
}
