import { Global } from '@/components/shared/Helper/global'
import { ValuesItemsPortafolio } from '@/components/shared/interfaces/interfaces'
import axios from 'axios'
import { SwiperWebs } from './SwiperWebs'
import Link from 'next/link'

export const metadata = {
  title: 'Animación de Logotipo - Logos Perú',
  description:
    'Transforma tu logo con nuestro servicio de animación de logotipos. Aportamos dinamismo y creatividad, dando movimiento a tu marca para captar la atención y permanecer en la mente de tu audiencia.',
  msvalidate: 'A01D8EBEAA551809606CCFFE234E6DF5',
  alternate: {
    canonical: 'https://logosperu.com.pe/animacion_logo'
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
    title: 'Animación de Logotipo - Logos Perú',
    description:
      'Transforma tu logo con nuestro servicio de animación de logotipos. Aportamos dinamismo y creatividad, dando movimiento a tu marca para captar la atención y permanecer en la mente de tu audiencia.',
    url: 'https://logosperu.com.pe/animacion_logo',
    site_name: 'Logos Perú',
    type: 'website',
    images: [
      {
        url: 'https://logosperu.com/public/img/seo/ANIMACION_LOGOTIPO.png'
      }
    ]
  },
  twitter: {
    site: '@DLogosPeru',
    title: 'Animación de Logotipo - Logos Perú',
    description:
      'Transforma tu logo con nuestro servicio de animación de logotipos. Aportamos dinamismo y creatividad, dando movimiento a tu marca para captar la atención y permanecer en la mente de tu audiencia.',
    creator: '@DLogosPeru',
    image: 'https://logosperu.com/public/img/seo/ANIMACION_LOGOTIPO.png'
  }
}

const getData = () => {
  return axios.get(`${Global.url}/getItemsToPortafolioWhereSubCategorias/22`, {
    headers: {
      'Cache-Control': 'no-store'
    }
  })
}

export default async function AnimacionLogo () {
  const response = await getData()
  const logos: ValuesItemsPortafolio[] = response.data

  return (
    <>
      <section className='descrip_facebok_ads pt-60 md:pt-72'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>ANIMACION DE LOGOTIPO</h1>
              <hr className='hr_first' />
              <hr className='hr_second' />
              <div className='cont_descrip_facebok_ads'>
                <p>
                  Damos vida a tu logotipo a través de cautivadoras{' '}
                  <span> animaciones </span>. Ya sea para tu empresa o para tus
                  estrategias publicitarias, nuestros hábiles
                  <span> diseñadores e ilustradores </span> están preparados
                  para transformar tu logotipo en una experiencia animada.
                  Inicia hoy este emocionante proyecto de animación de logotipo
                  y asegúrate de obtener un resultado que supere tus
                  expectativas.
                </p>
              </div>
              <div className='boton_portafolio'>
                <Link href='/portafolio/audiovisual/animacion_logotipo'>
                  Ver Portafolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='sec_porque'>
        <div className='container max-w-[1200px]'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='row centrar_todo'>
                <div className='col-lg-7'>
                  <div className='persona_titulo'>
                    <h4 className='title_animacion_video'>
                      ¿BUSCAS DESTACAR ENTRE <br /> LA MULTITUD?{' '}
                    </h4>
                  </div>
                  <div className='personaje_texto'>
                    <p className='text-3xl'>
                      Nuestro servicio de animación de logotipo es la solución
                      perfecta para darle vida a tu identidad visual. Trabajamos
                      con un equipo de diseñadores e ilustradores profesionales,
                      listos para convertir tu logotipo en una experiencia
                      visual sorprendente.
                    </p>
                  </div>
                </div>
                <div className='col-lg-5'>
                  <div className='conte_imagen_gif'>
                    <video
                      src='https://api.logosperu.com.pe/public/itemsportafolios/1699394965507_KAFENSA.mp4'
                      muted
                      autoPlay
                      loop
                      className='rounded-lg object-cover w-full h-full rounded-b-none group-hover:scale-12  transition-transform overflow-hidden '
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='boton_portafolio'>
                <a href='#'>Empieza Ahora</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='titulos'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h4 className='text-white text-center text-7xl font-bold'>
                NUESTRO PROCESO CREATIVO
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className='contenido'>
        <div className='container max-w-[1200px]'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='conte_imagen_gif2'>
                <video
                  src='https://api.logosperu.com.pe/public/itemsportafolios/1699394984914_VIAJE_PICABLOR.mp4'
                  muted
                  autoPlay
                  loop
                  className='rounded-lg object-contain w-full h-full rounded-b-none group-hover:scale-12  transition-transform overflow-hidden '
                />
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='listado2'>
                <ul className=''>
                  <li>
                    <p>
                      <strong>CONCEPTUALIZACIÓN</strong> <br />
                      Comprendemos tu marca <br /> y valores para crear una{' '}
                      <br /> animación que resuene con <br /> tu audiencia
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>DISEÑO PERSONALIZADO</strong>
                      <br />
                      Creamos una animación <br />
                      que captura la esencia de tu
                      <br />
                      logotipo y lo lleva más allá de <br />
                      lo estático
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>ANIMACIÓN PROFESIONAL</strong>
                      <br />
                      Nuestro equipo de expertos <br />
                      transforma el diseño en una <br />
                      secuencia fluida y cautivadora
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>REVISIÓN Y AJUSTES</strong>
                      <br />
                      Trabajamos contigo para perfeccionar
                      <br />
                      la animación según tus
                      <br />
                      comentarios y sugerencias.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='titulos'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h4 className='text-white text-center text-7xl font-bold'>
                ¿PORQUE ELEGIRNOS?
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className='contenido2'>
        <div className='container max-w-[1200px]'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='body_proceso'>
                <div className='head_proceso'>
                  <img
                    src='/disenoPersonajes/s1.png'
                    className='img1 mx-auto'
                    alt=''
                  />
                </div>
                <div className='titulo_proceso'>
                  <h2>EXPERIENCIA</h2>
                </div>
                <div className='imagenp'>
                  <img
                    src='/disenoPersonajes/paso1.png'
                    alt=''
                    className='mx-auto'
                  />
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='body_proceso'>
                <div className='head_proceso'>
                  <img
                    src='/disenoPersonajes/s2.png'
                    className='img2 mx-auto'
                    alt=''
                  />
                </div>
                <div className='titulo_proceso'>
                  <h2>CREATIVIDAD</h2>
                </div>
                <div className='imagenp'>
                  <img
                    src='/disenoPersonajes/paso2.png'
                    alt=''
                    className='mx-auto'
                  />
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='body_proceso'>
                <div className='head_proceso'>
                  <img
                    src='/disenoPersonajes/s3.png'
                    className='img3 mx-auto'
                    alt=''
                  />
                </div>
                <div className='titulo_proceso'>
                  <h2>DIGITALIZAR</h2>
                </div>
                <div className='imagenp'>
                  <img
                    src='/disenoPersonajes/paso3.png'
                    alt=''
                    className='mx-auto'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='portafolios max-w-[1450px] mx-auto pt-20'>
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
