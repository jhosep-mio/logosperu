import { Global } from '@/components/shared/Helper/global'
import { ValuesCategoriasPortafolio } from '@/components/shared/interfaces/interfaces'
import axios from 'axios'
import { RedirigirProyectos } from './RedirigirProyectos'
import { SwiperContenido } from './SwiperContenido'

export const metadata = {
  title: 'Portafolio - Logos Perú',
  description:
    'Explora un portafolio diversificado y ricamente creativo, reflejando habilidades y talento en diversas disciplinas de Diseño Grafico y Desarollo Web',
  msvalidate: 'A01D8EBEAA551809606CCFFE234E6DF5',
  alternate: {
    canonical: 'https://logosperu.com.pe/portafolio'
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
    title: 'Portafolio - Logos Perú',
    description:
      'Explora un portafolio diversificado y ricamente creativo, reflejando habilidades y talento en diversas disciplinas de Diseño Grafico y Desarollo Web',
    url: 'https://logosperu.com.pe/portafolio',
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
    title: 'Portafolio - Logos Perú',
    description:
      'Explora un portafolio diversificado y ricamente creativo, reflejando habilidades y talento en diversas disciplinas de Diseño Grafico y Desarollo Web',
    creator: '@DLogosPeru',
    image:
      'https://logosperu.com/public/img/seo/PORTADA_WEB_ALTA_DE_PORTAFOLIO.png'
  }
}

const getData = () => {
  return axios.get(`${Global.url}/getCategoriasToPortafolio`, {
    headers: {
      'Cache-Control': 'no-store'
    }
  })
}

export default async function Portafolio () {
  const response = await getData()
  const categorias: ValuesCategoriasPortafolio[] = response.data

  return (
    <>
      <section className='section_portafolio pt-56 md:pt-72'>
        <div className='titulo_portafolio'>
          <h1>PORTAFOLIOS</h1>
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
                  <b>servicios de alta calidad</b> como
                  <b>
                    diseño de logotipos, diseño de páginas web, diseño gráfico,
                    hosting web, audiovisual
                  </b>
                  que suman valor y generan la <b>construcción de una marca</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1200px] mx-auto mb-24 pt-10 md:pt-0'>
        <div className='w-full flex flex-wrap justify-center lg:grid-cols-4 gap-5 md:gap-10 px-5 md:px-0 '>
          {categorias.map((categoria: ValuesCategoriasPortafolio) => (
            <div
              className='box_portafolio_new rounded-lg group relative marg_b_0 h-[250px] md:h-[340px] w-[168px] md:w-[280px] hover:translate-y-[-10px] transition-transform'
              key={categoria.id}
            >
              <div className='p-0 rounded-t-lg h-[70%] md:h-[80%] w-full'>
                <SwiperContenido categoria={categoria} />
              </div>
              <p className='w-full px-5 md:px-10 bg-white text-[#252525] font-semibold text-xl md:text-2xl text-center rounded-b-lg h-[30%] md:h-[20%] flex items-center justify-center flex-col'>
                PORTAFOLIO DE {categoria.titulo}
              </p>
              <div className='opacity-0 group-hover:opacity-100 group-hover:bg-[#00000075] transition-opacity inset-0 absolute -z-10 group-hover:z-10 flex items-center justify-center rounded-lg '>
                <RedirigirProyectos categoria={categoria} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
