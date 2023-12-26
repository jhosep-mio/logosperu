import { Contenido } from '@/app/portafolio/diseno-de-logotipos/Contenido'
import { Global } from '@/components/shared/Helper/global'
import {
  ValuesCategoriasPortafolio,
  ValuesItemsPortafolio,
  ValuesSubCategoriasPortafolio
} from '@/components/shared/interfaces/interfaces'
import axios from 'axios'
import Link from 'next/link'

export const metadata = {
  title: 'Logotipos de Arquitectura - Logos Perú',
  description:
    'Descubre logotipos que no solo capturan la esencia de una marca, sino que también cuentan su historia de manera poderosa y efectiva.',
  msvalidate: 'A01D8EBEAA551809606CCFFE234E6DF5',
  alternate: {
    canonical: 'https://www.logosperu.com.pe/portafolio/diseno-de-logotipos/arquitectura'
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
    title: 'Logotipos de Arquitectura - Logos Perú',
    description:
      'Descubre logotipos que no solo capturan la esencia de una marca, sino que también cuentan su historia de manera poderosa y efectiva.',
    url: 'https://www.logosperu.com.pe/portafolio/diseno-de-logotipos/arquitectura',
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
    title: 'Logotipos de Arquitectura - Logos Perú',
    description:
      'Descubre logotipos que no solo capturan la esencia de una marca, sino que también cuentan su historia de manera poderosa y efectiva.',
    creator: '@DLogosPeru',
    image:
      'https://logosperu.com/public/img/seo/PORTADA_WEB_ALTA_DE_PORTAFOLIO.png'
  }
}

const getData = async (texto: string) => {
  try {
    const response = await axios.get(
      `${Global.url}/getSubcategoriaUrlToPortafolio/${texto}`,
      {
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    )
    return response.data[0]
  } catch (error) {
    console.error(
      'Error fetching data from getSubcategoriaUrlToPortafolio',
      error
    )
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
      `${Global.url}/getItemsToPortafolioWhereSubCategorias/${id}`,
      {
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    )
    return response.data
  } catch (error) {
    console.error(
      'Error fetching data from getItemsToPortafolioWhereSubCategorias with ID',
      error
    )
    throw error
  }
}

const fetchData = async (texto: string) => {
  try {
    const firstData = await getData(texto)
    const idCategoria = firstData.id_categoria
    const id = firstData.id // Asegúrate de que estás extrayendo el ID correctamente
    const secondData = await getData2(idCategoria)
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
  const texto = 'arquitectura'
  const response = await fetchData(texto)
  const productos: ValuesCategoriasPortafolio = response.firstData
  const subcategorias: ValuesSubCategoriasPortafolio[] = response.secondData
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
                <Link href={`/portafolio/${productos.url}`}>
                  Volver a la vista anterior
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1200px] mx-auto mb-24'>
        <div className='mb-16' id='userefprimercontenido'>
          <ul className='w-full flex flex-wrap items-center justify-center text-3xl py-5'>
            {subcategorias.map((sub) => (
              <Link
                href={`/portafolio/diseno-de-logotipos/${sub.url}`}
                className={`decoration-none w-[40%] md:w-1/6 text-2xl  mx-5 text-center my-3 md:my-7 py-3 font-semibold cursor-pointer hover:text-[#D23741] transition-colors px-2 border-b-2 hover:border-[#D23741] ${
                  sub.url === texto ? 'text-[#D23741]' : 'text-[black]'
                }`}
                key={sub.id}
              >
                {sub.titulo}
              </Link>
            ))}
          </ul>
        </div>
        <Contenido items={items} />
      </section>
    </>
  )
}
