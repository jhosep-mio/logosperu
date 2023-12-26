import axios from 'axios'
// import { Categorias } from './Categorias'
import { SwiperWebs } from './SwiperWebs'
import { Global } from '@/components/shared/Helper/global'
import { ValuesItemsPortafolio } from '@/components/shared/interfaces/interfaces'
import Link from 'next/link'

export const metadata = {
  title: 'Diseño de Brochure - Logos Perú',
  description:
          'Descubre nuestro excepcional servicio de diseño de brochures, donde fusionamos creatividad y estrategia para capturar y comunicar la esencia de tu marca. Cada brochure es cuidadosamente diseñado para resonar con tu audiencia y promover tus productos o servicios de manera impactante. ¡Convierte a los espectadores en clientes y haz que tu mensaje destaque hoy!',
  msvalidate: 'A01D8EBEAA551809606CCFFE234E6DF5',
  alternate: {
    canonical: 'https://logosperu.com.pe/diseno_brochure'
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
    title: 'Diseño de Brochure - Logos Perú',
    description:
            'Descubre nuestro excepcional servicio de diseño de brochures, donde fusionamos creatividad y estrategia para capturar y comunicar la esencia de tu marca. Cada brochure es cuidadosamente diseñado para resonar con tu audiencia y promover tus productos o servicios de manera impactante. ¡Convierte a los espectadores en clientes y haz que tu mensaje destaque hoy!',
    url: 'https://logosperu.com.pe/diseno_brochure',
    site_name: 'Logos Perú',
    type: 'website',
    images: [
      {
        url: 'https://logosperu.com/public/img/seo/PORTADA_COMUNITY_MANAGER.jpg'
      }
    ]
  },
  twitter: {
    site: '@DLogosPeru',
    title: 'Diseño de Brochure - Logos Perú',
    description:
            'Descubre nuestro excepcional servicio de diseño de brochures, donde fusionamos creatividad y estrategia para capturar y comunicar la esencia de tu marca. Cada brochure es cuidadosamente diseñado para resonar con tu audiencia y promover tus productos o servicios de manera impactante. ¡Convierte a los espectadores en clientes y haz que tu mensaje destaque hoy!',
    creator: '@DLogosPeru',
    image:
            'https://logosperu.com/public/img/seo/PORTADA_COMUNITY_MANAGER.jpg'
  }
}

const getData = () => {
  return axios.get(`${Global.url}/indexWhereCategoriaAleatorio/8`, {
    headers: {
      'Cache-Control': 'no-store'
    }
  })
}

export default async function DisenoBrochure () {
  const response = await getData()
  const logos: ValuesItemsPortafolio[] = response.data

  return (
    <>
      <section className='descrip_comunity_manager pt-60 md:pt-72'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>DISEÑO DE BROCHURE</h1>
              <hr className='hr_first' />
              <hr className='hr_second' />
              <div className='cont_descrip_comunity_manager'>
                <p>
                  Realizamos <span>diseño de brochure</span> innovador,
                  profesional y llamativo, personalizado para tu negocio.
                  Nuestro objetivo es ayudarte a cautivar a tus clientes desde
                  el primer vistazo. Te ofrecemos la oportunidad de trabajar con
                  un diseñador dedicado para lograr el impacto visual que
                  buscas. ¡Compruébalo!
                </p>
              </div>
              <div className='boton_portafolio'>
                <Link href='/portafolio/brochure'>
                  Ver Portafolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='procesos'>
        <div className='container max-w-[1200px]'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='titulo_opcion'>
                <h2>NUESTRO PROCESO</h2>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='descrip'>
                <hr className='hr_first' />
                <hr className='hr_second' />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='aea'>
                <div className='numero'>
                  <span>1</span>
                </div>
                <div className='descriptivo'>
                  <h4 className='mb-6'>
                    <b>INNOVACIÓN CREATIVA A TU DISPOSICIÓN</b>
                  </h4>
                  <p>
                    Colabora directamente y con fluidez para lograr resultados
                    sorprendentes. Tu visión se combinará con nuestra
                    creatividad.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='aea'>
                <div className='numero'>
                  <span>2</span>
                </div>
                <div className='descriptivo'>
                  <h4 className='mb-6'>
                    <b>DISEÑO ESTRUCTURADO Y LEGIBLE</b>
                  </h4>
                  <p>
                    Tu brochure reflejará la esencia de tu negocio con una
                    composición impecable que cautivará a tu audiencia.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='aea'>
                <div className='numero'>
                  <span>3</span>
                </div>
                <div className='descriptivo'>
                  <h4 className='mb-6'>
                    <b>ENTREGABLES</b>
                  </h4>
                  <p>
                    Te proporcionamos archivos editables en PDF, JPG y PNG, una
                    vez que estén aprobados. Cada detalle estará a la altura de
                    tus expectativas.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <img
                src='/brochure/brochure_grafico.webp'
                width='100%'
                alt='Diseño de Flyer - Agencia de Marketing Digital'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='sect_title_mo'>
        <div className='titulo_white'>
          <h2>REQUISITOS</h2>
        </div>
      </section>

      <section className='requisitos_flyer'>
        <div className='container max-w-[1200px]'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='aea_requisitos'>
                <div className='descriptivo '>
                  <p>
                    Logotipo vectorizado en Ai o cualquier otro programa de
                    Adobe
                  </p>
                </div>
                <div className='numero'>
                  <span>
                    <img
                      src='/brochure/illustrator.png'
                      width='100%'
                      className='w-[100px]'
                      alt='Requisitos Flyer'
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mt-5 lg:mt-0'>
              <div className='aea_requisitos'>
                <div className='descriptivo'>
                  <p>
                    Imagen de logotipo JPG o PNG con más de 2000 píxeles de
                    anchura
                  </p>
                </div>
                <div className='numero '>
                  <span>
                    <img
                      src='/brochure/picture.png'
                      width='100%'
                      className='w-[100px]'
                      alt='Requisitos Flyer'
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mt-5 lg:mt-0'>
              <div className='aea_requisitos'>
                <div className='descriptivo'>
                  <p>Enviar información ó tema que se realizará el diseño.</p>
                </div>
                <div className='numero '>
                  <span>
                    <img
                      src='/brochure/content.png'
                      width='100%'
                      className='w-[100px]'
                      alt='Requisitos Flyer'
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='portafolios max-w-[1450px] mx-auto pt-40'>
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
              {/* <div className='menu_portadolios'>
                <Categorias />
              </div> */}
            </div>
          </div>
        </div>
        <SwiperWebs logos={logos} />
      </section>
    </>
  )
}
