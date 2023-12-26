import Slider from '@/components/home/Slider'
import { SliderEquipo } from '@/components/home/equipo/SliderEquipo'
import ListaCategorias from '@/components/home/portafolio/ListaCategorias'
import SliderLogos from '@/components/home/portafolio/SliderLogos'
import SliderWebs from '@/components/home/portafolio/SliderWebs'
import { SwiperServicios } from '@/components/home/servicios/SwiperServicios'
import Link from 'next/link'
import { TablasHosting } from './TablasHosting'
import { Formulario } from './venta_hosting/Formulario'
import axios from 'axios'
import { Global } from '@/components/shared/Helper/global'
import { ValuesItemsPortafolio } from '@/components/shared/interfaces/interfaces'

const getData = () => {
  return axios.get(`${Global.url}/indexWhereCategoriaAleatorio/1`, {
    headers: {
      'Cache-Control': 'no-store'
    }
  })
}

const getDataWebs = () => {
  return axios.get(`${Global.url}/indexWhereCategoriaAleatorio/2`)
}

export const metadata = {
  title: 'Logos Perú | Agencia de Diseño de logos, logotipos y Diseño Grafico',
  description: 'Agencia de diseño de logos, logotipos, Diseño Grafico y Desarrollo Web especializada en diseño de logotipos, diseño web, hosting, diseño gráfico, audiovisual, fotografía corporativa para empresa o negocio.',
  msvalidate: 'A01D8EBEAA551809606CCFFE234E6DF5',
  alternate: {
    canonical: 'https://logosperu.com.pe/'
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
    'Agencia de Marketing Digital', 'Agencia de diseño', 'diseño de paginas web',
    'diseño grafico', 'carritos de compras', 'hosting', 'venta de hosting',
    'dominios', 'dominio .com', 'dominio .pe', 'dominio .com.pe', 'tiendas virtuales',
    'web administrables', 'posionamiento seo', 'posicionamiento sem', 'google adwords',
    'produccion audiovisual', 'videos institucionales', 'videos corporativos',
    'videos para empresas', 'papelería', 'brochures', 'catalogo', 'hojas menbretadas',
    'logos peru', 'logos perú diseño de logotipos', 'logos perú diseño de logos',
    'diseño de logotipos logos perú', 'diseño de logos logos perú',
    'logos peru home', 'home logos peru', 'logotipos creativos', 'logos creativos',
    'logos de diseño', 'diseño de logotipos para empresas', 'diseno de logotipos',
    'diseño de logotipos peru', 'diseño de Logotipos', 'logos', 'logo', 'logotipos',
    'crear logo', 'servicios de logos', 'Diseño Gráfico', 'logo design', 'make a logo',
    'design a logo', 'how to design a logo', 'diseño grafico', 'diseño', 'logotipo',
    'logos de empresas', 'diseño web', 'creador de logos', 'como hacer un logo',
    'diseño de logos', 'logotipos de empresas', 'crear logo online', 'imagen corporativa',
    'identidad corporativa', 'logos para empresas', 'diseñar logos', 'crear logotipo',
    'logos online', 'como diseñar un logo', 'crear tu logo', 'hacer logos online',
    'paginas para crear logos', 'crear logos para empresa', 'paginas para hacer logos',
    'logo empresa', 'logotipos diseño', 'empresas de diseño grafico', 'logotipos de marcas',
    'diseño de marca', 'diseño corporativo', 'diseño grafico de logos',
    'creador de logos para empresas', 'logotipos para empresas', 'logos corporativos',
    'como hacer un logo de una empresa', 'que es diseño de logotipos', 'crear logotipos',
    'brochure', 'flyers', 'diseño de logo', 'logos de diseñadores', 'logos de eventos',
    'modelos de logos', 'logos de dj', 'logos para polos', 'Crear logo gratis',
    'como crear logos gratis', 'logo gratis', 'crear logos gratis para empresas',
    'hacer logos gratis', 'crea tu logo', 'editor de logos', 'logos de bancos',
    'los mejores logos', 'logo definicion', 'freelogos', 'logos gratis', 'logos crear',
    'que es el logotipo', 'logos de marcas', 'tipos de logos', 'crear logos gratis',
    'logo free', 'logos para restaurantes', 'diseño online', 'logotipos peru', 'logos perú',
    'logos de peru', 'logos del peru', 'logos en peru', 'logotipos de peru',
    'logotipos del peru', 'logotipos en peru', 'logos perú agencia de marketing digital',
    'agencia de marketing digital logos perú', 'logos perú diseño web',
    'logos perú desarrollo web', 'logos peru diseño web', 'diseño web logos peru',
    'logos peru desarrollo web', 'desarrollo web logos peru', 'diseño y desarrollo web',
    'desarrollo web y diseño web', 'diseño y desarrollo para paginas web',
    'desarrollo y diseño web para paginas web', 'diseñpo web profesional',
    'diseño web peru', 'empresas de diseño web', 'tipos de diseño web',
    'tipos de desarrollo web', 'desarrollo web profesional', 'desarrollo web en peru',
    'diseño y desarrollo web en lima peru', 'desarrollo y diseño web en lima peru',
    'diseño web para empresas', 'desarrollo web para empresas',
    'diseño y desarrollo de paginas web para empresas',
    'desarrollo y diseño de paginas web para empresas', 'diseño web responsive',
    'entornos de desarrollo web', 'entornos de diseño web', 'paginas de diseño web',
    'páginas de desarrollo web', 'aplicaciones de desarrollo web',
    'aplicaciones de diseño web', 'desarrollo y diseño de sitios web',
    'diseño y desarrollo de sitios web', 'logos peru diseño grafico', 'logos perú diseño gráfico',
    'diseño grafico', 'diseño gráfico', 'servico de diseño grafico',
    'servicio de diseño gráfico', 'identidad corporativa', 'flyer', 'flyers',
    'tarjetas de presentacion', 'hojas menbretadas', 'volantes', 'banners', 'brochure',
    'manual de logotipo', 'diseño de etiquetas', 'tarjetas de presentación',
    'elementos graficos', 'papeleria corporativa', 'diseño grafico logos peru',
    'diseño gráfico logos perú', 'proyectos graficos digitales', 'medios digitales',
    'diseño grafico para redes sociales', 'diseño grafico marcas', 'marketing diseño grafico',
    'diseño grafico creativo', 'diseño grafico profesional', 'servico de diseño grafico en perú',
    'servico de diseño grafico en peru', 'servicio de diseño grafico peru',
    'servicio de diseño grafico perú', 'servicios de marketing digital',
    'marketing digital servicios', 'agencia de marketing digital peru',
    'agencia de marketing digital perú', 'servicios de marketing digital en peru',
    'servicios de marketing digital en perú', 'posicionamiento web en google',
    'posicionamiento sem', 'servicio de marketing digital comunity manager',
    'posicionamiento web con google ads', 'posicionamiento web con google adwords',
    'posicionamiento web con facebook ads', 'servicio digital comunity manager',
    'servicios de marketing y publicidad', 'servicios que ofrece una agencia de marketing digital',
    'agencia digital', 'agencias de marketing digital en perú',
    'cuales son los servicios de marketing digital', 'listado de servicio de marketing digital',
    'que es servicio de marketing digital', 'servicios de marketing digital precios',
    'propuesta de servicios de marketing digital', 'servicio audiovisual',
    'servicios audiovisiales', 'logos perú audiovisual', 'audiovisual logos perú',
    'servicios audivisuales en perú', 'servicios audivisuales en peru',
    'servicios audiovisuales para empresas', 'produccion audiovisual', 'videos corporativos',
    'videos institucionales', 'videos animados', 'videos promocionales',
    'videos corporativos animados', 'videos corporativos grabados', 'videos grabados',
    'videos publicitarios animados', 'videos publicitarios grabados',
    'video promocionales grabados', 'videos promicionales animados',
    'sesiones fotograficas y retoque', 'sesion fotografica promacional',
    'sesion fotografica corporativa'
  ],
  authors: [{ name: 'Logos Perú' }],
  openGraph: {
    title: 'Logos Perú | Agencia de Diseño de logos, logotipos y Diseño Grafico',
    description: 'Agencia de diseño de logos, logotipos, Diseño Grafico y Desarrollo Web especializada en diseño de logotipos, diseño web, hosting, diseño gráfico, audiovisual, fotografía corporativa para empresa o negocio.',
    url: 'https://www.logosperu.com.pe',
    site_name: 'Logos Perú',
    type: 'website',
    images: [
      {
        url: 'https://logosperu.com/public/img/seo/AGENCIA_GRAFICO_Y_WEB.png'
      }
    ]
  },
  twitter: {
    site: '@DLogosPeru',
    title: 'Logos Perú | Agencia de Diseño de logos, logotipos y Diseño Grafico',
    description: 'Agencia de diseño de logos, logotipos, Diseño Grafico y Desarrollo Web especializada en diseño de logotipos, diseño web, hosting, diseño gráfico, audiovisual, fotografía corporativa para empresa o negocio.',
    creator: '@DLogosPeru',
    image: 'https://logosperu.com/public/img/seo/AGENCIA_GRAFICO_Y_WEB.png'
  }
}

export default async function Home () {
  const response = await getData()
  const responsewebs = await getDataWebs()
  const logos: ValuesItemsPortafolio[] = response.data
  const webs: ValuesItemsPortafolio[] = responsewebs.data

  return (
    <>
      <Slider />
      <section className='nosotros'>
        <div className='container w-full lg:w-[1140px] ' id='titulo'>
          <div className='row'>
            <div className='col-sm-6 col-lg-7 resp'>
              <div
                className='img_nosotros'
              >
                <img
                  src='/sliders/lampara1.png'
                  alt='Logos Perú - Agencia de Marketing Digital'
                  className='object-contain'
                />
              </div>
            </div>
            <div className='col-sm-6 col-lg-5'>
              <div className='boss_content'>
                <div
                  className='contenedor_text'
                >
                  <div className='title_nosotros mb-7'>
                    <p>Somos</p>
                    <h2>Logos Perú</h2>
                  </div>
                  <div className='texto_nosotros mb-7'>
                    <p className='text-2xl'>
                      En{' '}
                      <b>
                        Logos Perú Agencia de Diseño Gráfico y Desarrollo Web
                      </b>{' '}
                      proporcionamos <b>soluciones digitales</b> que impulsan al
                      empresario en su incursión al mundo del internet,
                      desarrollando y creando <b>servicios de alta calidad</b>{' '}
                      como{' '}
                      <b>
                        diseño de logotipos, diseño web, identidad corporativa,
                        web hosting, audiovisual
                      </b>{' '}
                      que suman valor y generan la{' '}
                      <b>construcción de una marca.</b>
                    </p>
                  </div>
                  <div className='redes_nosotros'>
                    <h2>Socializa:</h2>
                    <ul>
                      <li>
                        <a
                          href='https://www.facebook.com/DLogosPeru/'
                          target='_blank'
                          aria-label='Visita nuestra página de Facebook'
                          rel='noreferrer'
                        >
                          <i className='fa-brands fa-facebook' />
                        </a>
                      </li>
                      <li>
                        <a
                          target='_blank'
                          href='https://www.instagram.com/dlogosperu/'
                          aria-label='Visita nuestra página de Instagram'
                          rel='noreferrer'
                        >
                          <i className='fa-brands fa-instagram' />
                        </a>
                      </li>
                      <li>
                        <a
                          target='_blank'
                          href='https://twitter.com/DLogosPeru'
                          aria-label='Visita nuestra página de Twitter'
                          rel='noreferrer'
                        >
                          <i className='fa-brands fa-twitter' />
                        </a>
                      </li>
                      <li>
                        <a
                          target='_blank'
                          href='https://wa.me//+51987038024'
                          aria-label='Escríbenos por WhatsApp'
                          rel='noreferrer'
                        >
                          <i className='fa-brands fa-whatsapp' />
                        </a>
                      </li>
                      <li>
                        <a
                          target='_blank'
                          href='https://www.youtube.com/channel/UCPXxUSJAk5VaWGEaRmgFeew'
                          aria-label='Visita nuestro canal de Youtube'
                          rel='noreferrer'
                        >
                          <i className='fa-brands fa-youtube' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
                <ListaCategorias />
              </div>
            </div>
          </div>
        </div>
        <SliderLogos logos={logos} />
        <SliderWebs logos={webs} />
        <div className='boton_portafolio bbbmmm'>
          <Link href='/portafolio'>Ver Portafolio</Link>
        </div>
      </section>

      <section className='servicio'>
        <div className='titulo_servicios'>
          <h2>SERVICIOS</h2>
        </div>
        <div className='container max-w-[1450px]'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='descrip_services'>
                <p>NUESTROS MEJORES SERVICIOS</p>
                <hr className='hr_first' />
                <hr className='hr_second' />
              </div>
            </div>
            <div className='col-lg-12'>
              <SwiperServicios />
            </div>
          </div>
        </div>
      </section>

      <section className='descrip_hosting '>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>HOSTING, DOMINIOS, CORREOS CORPORATIVOS</h1>
              <hr className='hr_first' />
              <hr className='hr_second' />
              <div className='cont_descrip_hosting'>
                <p>
                  Consigue un<span> Hosting Profesional</span> con soporte
                  técnico. Obten variados<span> Dominios</span> comerciales
                  excelentes para subir tus Proyectos y con ello obtén{' '}
                  <span>Correos Corporativos</span> 100% de tu propiedad con
                  soporte via chat o email. Obten un{' '}
                  <span>Manual de Configuración</span> de Correos Corporativos.
                  <br />
                  <span>
                    Tu Sitio Web Comienza Con el Dominio y Hosting Perfecto,
                  </span>{' '}
                  Comienza con <span>Logos Perú.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-10'>
        <div className='container max-w-[1200px] mx-auto'>
          <div className='row'>
            <div className='col-lg-12'>
              <TablasHosting />
            </div>
          </div>
        </div>
      </section>

      <section className='sect_cotizacion mb-10' id='cotiza'>
        <div className='container max-w-[1200px]'>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div id='wizard_container' className='wizard'>
                <Formulario />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='equipo'>
        <div className='titulo_equipo'>
          <h2>NUESTRO EQUIPO CREATIVO</h2>
        </div>
        <div className='container max-w-[1350px] mx-auto'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='descrip_equipo'>
                <p>CONOZCA UN POCO MAS DE ELLOS</p>
                <hr className='hr_first' />
                <hr className='hr_second' />
              </div>
            </div>
            <SliderEquipo />
          </div>
        </div>
      </section>
    </>
  )
}
