import axios from 'axios'
import { SwiperWebs } from './SwiperWebs'
import { Global } from '@/components/shared/Helper/global'
import { ValuesItemsPortafolio } from '@/components/shared/interfaces/interfaces'

export const metadata = {
  title: 'Identidad Visual Corporativa - Logos Perú',
  description:
          'Desarrolla una identidad corporativa sólida y coherente con nuestro especializado servicio. Trabajamos contigo para crear o revitalizar la imagen de tu empresa, asegurándonos de que cada elemento, desde el logo hasta los materiales de marketing, comunique tus valores y visión de manera efectiva. Eleva la percepción de tu marca y construye una conexión poderosa con tu audiencia con una identidad corporativa que destaque y perdure.',
  msvalidate: 'A01D8EBEAA551809606CCFFE234E6DF5',
  alternate: {
    canonical: 'https://logosperu.com.pe/identidad_corporativa'
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
    title: 'Identidad Visual Corporativa - Logos Perú',
    description:
            'Desarrolla una identidad corporativa sólida y coherente con nuestro especializado servicio. Trabajamos contigo para crear o revitalizar la imagen de tu empresa, asegurándonos de que cada elemento, desde el logo hasta los materiales de marketing, comunique tus valores y visión de manera efectiva. Eleva la percepción de tu marca y construye una conexión poderosa con tu audiencia con una identidad corporativa que destaque y perdure.',
    url: 'https://logosperu.com.pe/identidad_corporativa',
    site_name: 'Logos Perú',
    type: 'website',
    images: [
      {
        url: 'https://logosperu.com/public/img/seo/IDENTIDAD_CORPORATIVA.png'
      }
    ]
  },
  twitter: {
    site: '@DLogosPeru',
    title: 'Identidad Visual Corporativa - Logos Perú',
    description:
            'Desarrolla una identidad corporativa sólida y coherente con nuestro especializado servicio. Trabajamos contigo para crear o revitalizar la imagen de tu empresa, asegurándonos de que cada elemento, desde el logo hasta los materiales de marketing, comunique tus valores y visión de manera efectiva. Eleva la percepción de tu marca y construye una conexión poderosa con tu audiencia con una identidad corporativa que destaque y perdure.',
    creator: '@DLogosPeru',
    image:
            'https://logosperu.com/public/img/seo/IDENTIDAD_CORPORATIVA.png'
  }
}

const getData = () => {
  return axios.get(`${Global.url}/indexWhereCategoriaAleatorio/4`, {
    headers: {
      'Cache-Control': 'no-store'
    }
  })
}

export default async function IdentidadCorporativa () {
  const response = await getData()
  const logos: ValuesItemsPortafolio[] = response.data

  return (
    <>
      <section className='descrip_identidad_corporativa pt-60 md:pt-72'>
        <div className='container max-w-[1200px]'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>CREAMOS Y DESARROLLAMOS TU IDENTIDAD VISUAL CORPORATIVA</h1>
              <div className='cont_descrip_identidad_corporativa'>
                <p>
                  Su identidad corporativa es la imagen visual de su negocio.
                  Incluye elementos gráficos (logotipo, tarjetas de
                  presentación, membretes, folletos) y otras que comparten el
                  mismo estilo y los colores de la marca. Esto hace que su
                  empresa se vea más presentable y profesional a los ojos de sus
                  socios y clientes. También aumenta su reconocimiento de nombre
                  y la confianza de otros en su marca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='img_descrip_identidad'>
        <div className='img_identidad1'>
          <img
            src='/identidad/identidad.png'
            className='img_identidad'
            alt='Identidad corporativa'
          />
        </div>
      </section>

      {/* SECTION RAZONES */}
      <section className='descrip_razones'>
        <div className='container max-w-[1200px]'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>SE NECESITA UNA IDENTIDAD VISUAL CORPORATIVA PARA:</h1>
              <hr className='hr_first' />
              <hr className='hr_second' />
              <div className='cont_descrip_razones' />

              <div className='container'>
                <div className='col-md-12'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <ul>
                        <li>
                          <img
                            src='/identidad/color1.png'
                            alt='Impulsar reconocimiento'
                          />
                          <p>
                            Impulsar el reconocimiento de tu empresa y sus
                            productos.
                          </p>
                        </li>
                        <li>
                          <img
                            src='/identidad/color2.png'
                            alt='Diferenciar tu empresa'
                          />
                          <p>Diferenciar su empresa de la competencia.</p>
                        </li>
                        <li>
                          <img
                            src='/identidad/color3.png'
                            alt='Mejorar la imagen de tu empresa'
                          />
                          <p>Mejorar la imagen de tu empresa.</p>
                        </li>
                      </ul>
                    </div>

                    <div className='col-md-6'>
                      <ul>
                        <li>
                          <img
                            src='/identidad/color4.png'
                            alt='Mejorar la confianza de tu marca'
                          />
                          <p>
                            Mejorar la confianza de la marca entre tus socios y
                            clientes.
                          </p>
                        </li>
                        <li>
                          <img
                            src='/identidad/color5.png'
                            alt='Realizar campañas publicitarias'
                          />
                          <p>
                            Realizar campañas publicitarias y hacerlas más
                            exitosas.
                          </p>
                        </li>
                        <li>
                          <img
                            src='/identidad/color5.png'
                            alt='Ayudar a que los lcientes lleguen a su negocio '
                          />
                          <p>
                            Ayudar a que los clientes lleguen a su negocio, e
                            identificar vuestra gama de productos.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='sect_infografia'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>NUESTRA FORMA DE TRABAJO:</h1>
              <hr className='hr_first' />
              <hr className='hr_second' />
              <div className='cont_descrip_razones' />
            </div>
          </div>
        </div>

        <ul className='list_infografia'>
          <li className='part1'>
            <svg
              version='1.1'
              id='Capa_1'
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='100%'
              // eslint-disable-next-line react/no-unknown-property
              //   heigth={'100%'}
              viewBox='0 0 1366 1306'
              //   style="enable-background:new 0 0 1366 1306;"
              xmlSpace='preserve'
            >
              <path className='st0' d='M-358-176' />

              <path
                fill='none'
                stroke='#403F41'
                strokeWidth='3.252'
                className='st1'
                d='M135.6-54c0,0,143.3,23.3,199.3,165.3c0,0,28,49.6,8,195.5c-1.9,14.2-0.2,28.8,5.6,41.9 c10.4,23.9,34.4,50.8,94.4,67.2c0,0,58.7,18,108.7,28c0,0,130,22,185.3,89.3c0,0,60,66-13.3,142c0,0-126,104.7-86,258 c0,0,16.7,84.7,183,147c23.8,8.9,45.9,22,64.6,39.2c16.5,15.2,31.7,34.5,33.1,55.2c0,0,10.7,53.3-37.3,132'
              />
            </svg>
          </li>

          <li className='part2 absolute'>
            <svg
              version='1.1'
              id='Capa_2'
              xmlns='http://www.w3.org/2000/svg'
              //   xmlns:xlink="http://www.w3.org/1999/xlink"
              x='0px'
              y='0px'
              width='100%'
              height='100%'
              viewBox='0 0 1366 1306'
              //   style="enable-background:new 0 0 1366 1306;"
              xmlSpace='preserve'
            >
              <g className='g_tuerca'>
                <g>
                  <g>
                    <path
                      className='st10'
                      d='M180.8,161.3l5.8,0.6v-7.4l-5.8,0.6c-0.3-1.6-1-3-1.8-4.4l4.7-3.7l-5.7-5.7l-3.7,4.6c0,0,0,0-0.1,0 c-1.2-0.7-2.6-1.3-4-1.7c0,0,0,0,0,0l0.7-5.9h-8l0.7,5.8c-1.6,0.4-3,1-4.3,1.8c0,0,0,0,0,0l-3.6-4.5l-5.2,5.2l4.5,3.6 c0,0,0,0.1-0.1,0.1c-0.8,1.3-1.4,2.7-1.8,4.2c0,0.1-0.1,0.2-0.1,0.2l-5.7-0.6v7.4l5.7-0.6c0.3,1.5,0.9,2.9,1.7,4.2l-4.6,3.6 l5.7,5.7l3.6-4.6c1.3,0.8,2.6,1.4,4.1,1.7l-0.7,5.9h8l-0.7-5.8c1.6-0.4,3-1,4.4-1.8l3.6,4.5l5.2-5.2l-4.5-3.6 C179.7,164.5,180.4,163,180.8,161.3C180.8,161.4,180.8,161.3,180.8,161.3z M166.8,164.5c-3.5,0-6.4-2.8-6.3-6.4 c0-3.5,2.9-6.4,6.4-6.4c3.5,0,6.4,2.8,6.3,6.4C173.2,161.6,170.3,164.5,166.8,164.5z'
                    />
                    <g>
                      <path
                        className='st10'
                        d='M247.6,182.2c0,6.9-5.6,12.4-12.5,12.4s-12.5-5.6-12.5-12.4c0-6.9,5.6-12.5,12.5-12.5 C242,169.8,247.6,175.3,247.6,182.2z'
                      />
                      <path
                        className='st10'
                        d='M272.8,187c0.2-1.6,0.3-3.2,0.3-4.8c0-1.6-0.1-3.1-0.3-4.6l-5.7,0.4c-0.4-2.8-1.1-5.4-2.1-7.9l5.2-2.5 c-1.2-2.9-2.9-5.6-4.7-8.1l-4.8,3.2c-1.7-2.2-3.6-4.1-5.8-5.8l3.2-4.8c-2.5-1.9-5.2-3.5-8.1-4.8l-2.6,5.2 c-2.5-1-5.1-1.7-7.9-2.1l0.4-5.7c-1.6-0.2-3.2-0.3-4.8-0.3c-1.6,0-3.1,0.1-4.6,0.3l0.4,5.7c-2.8,0.4-5.4,1.1-7.9,2.1l-2.5-5.2 c-2.9,1.2-5.6,2.8-8.1,4.7l3.2,4.8c-2.2,1.7-4.1,3.6-5.8,5.8l-4.8-3.2c-1.9,2.5-3.5,5.2-4.8,8.1l5.2,2.6c-1,2.5-1.7,5.1-2.1,7.9 l-5.7-0.4c-0.2,1.6-0.3,3.2-0.3,4.8c0,1.6,0.1,3.1,0.3,4.6l5.7-0.4c0.4,2.8,1.1,5.4,2.1,7.9l-5.2,2.5c1.2,2.9,2.9,5.6,4.7,8.1 l4.8-3.2c1.7,2.2,3.6,4.1,5.8,5.8l-3.2,4.8c2.5,1.9,5.2,3.5,8.1,4.8l2.6-5.2c2.5,1,5.1,1.7,7.9,2.1l-0.4,5.7 c1.6,0.2,3.2,0.3,4.8,0.3c1.6,0,3.1-0.1,4.6-0.3l-0.4-5.7c2.8-0.4,5.4-1.1,7.9-2.1l2.5,5.2c2.9-1.2,5.6-2.8,8.1-4.7l-3.2-4.8 c2.2-1.7,4.1-3.6,5.8-5.8l4.8,3.2c1.9-2.5,3.5-5.2,4.8-8.1l-5.2-2.6c1-2.5,1.7-5.1,2.1-7.9L272.8,187z M235.2,204.8 c-12.5,0-22.6-10.1-22.6-22.6c0-12.5,10.1-22.6,22.6-22.6c12.5,0,22.6,10.1,22.6,22.6C257.8,194.7,247.6,204.8,235.2,204.8z'
                      />
                      <path
                        className='st10'
                        d='M247.6,182.2c0,6.9-5.6,12.4-12.5,12.4s-12.5-5.6-12.5-12.4c0-6.9,5.6-12.5,12.5-12.5 C242,169.8,247.6,175.3,247.6,182.2z'
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <g>
                    <g>
                      <g>
                        <polygon
                          className='st11'
                          points='669,603.4 650.5,603.4 650.5,598.6 669,598.6'
                        />
                        <rect
                          x='656.1'
                          y='579.7'
                          className='st11'
                          width='7.4'
                          height='14.9'
                        />
                        <polygon
                          className='st11'
                          points='664.4,610.9 655.2,610.9 655.2,606 664.4,606'
                        />
                        <g>
                          <path
                            className='st11'
                            d='M669.6,595.9l-19.6,0v-1.8c0-0.8-1.4-2.7-2.7-4.6c-3.8-5.4-10.1-14.4-9.2-27.3c0.9-13.2,11.2-18,20.4-18 c0.6,0,1,0,1.3,0c0.2,0,0.7,0,1.3,0c9.3,0,19.5,4.7,20.4,18c0.9,12.9-5.4,21.9-9.2,27.3c-1.3,1.9-2.7,3.9-2.7,4.6V595.9z M653.8,592.4h12c0.5-1.3,1.6-2.8,2.9-4.7c3.8-5.3,9.4-13.4,8.6-25.2c-0.9-13.2-11.7-14.6-16.3-14.6c-0.6,0-1,0-1,0l-0.2,0 l-0.2,0c0,0-0.4,0-1,0c-4.6,0-15.4,1.4-16.3,14.6c-0.8,11.8,4.9,19.9,8.6,25.2C652.2,589.5,653.2,591,653.8,592.4z'
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            className='st11'
                            d='M659.8,535.7c-1.1,0-2-0.9-2-2l0-13.9c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2v13.9 C661.8,534.8,660.9,535.7,659.8,535.7z'
                          />
                        </g>
                        <g>
                          <g>
                            <path
                              className='st11'
                              d='M646.1,539.9c-0.6,0-1.2-0.3-1.6-0.8l-6.9-9.2c-0.7-0.9-0.5-2.2,0.4-2.9c0.9-0.7,2.2-0.5,2.9,0.4 l6.9,9.2c0.7,0.9,0.5,2.2-0.4,2.9C646.9,539.7,646.5,539.9,646.1,539.9z'
                            />
                          </g>
                          <g>
                            <path
                              className='st11'
                              d='M674.9,539.9c-0.4,0-0.7-0.1-1-0.3c-1-0.6-1.3-1.8-0.7-2.8l5.5-9.2c0.6-1,1.8-1.3,2.8-0.7 c1,0.6,1.3,1.8,0.7,2.8l-5.5,9.2C676.2,539.5,675.6,539.9,674.9,539.9z'
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              className='st11'
                              d='M688,551.1c-0.7,0-1.4-0.4-1.8-1c-0.5-1-0.2-2.2,0.8-2.8l9.4-5.2c1-0.6,2.2-0.2,2.8,0.8 c0.5,1,0.2,2.2-0.8,2.8l-9.4,5.2C688.7,551,688.4,551.1,688,551.1z'
                            />
                          </g>
                          <g>
                            <path
                              className='st11'
                              d='M631.5,551.1c-0.3,0-0.7-0.1-1-0.3l-9.4-5.2c-1-0.5-1.3-1.8-0.8-2.8c0.5-1,1.8-1.3,2.8-0.8l9.4,5.2 c1,0.5,1.3,1.8,0.8,2.8C632.9,550.7,632.2,551.1,631.5,551.1z'
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g>
                <path
                  className='st12'
                  d='M320.2,464.1c0.1-2.6,0.2-5.2,0.7-7.7c0.2-1.3,0.5-2.6,0.8-3.8c0.4-1.4,0.8-2.9,1.3-4.3c0.9-2.5,2-5,3.3-7.3
          c1.2-2.1,2.5-4.1,4.1-6.1c1.7-2.1,3.5-4.2,5.6-6c2.3-2,4.7-3.8,7.3-5.4c2.5-1.5,5.1-2.7,7.7-3.7c2.7-1,5.5-1.8,8.4-2.3
          c2.2-0.4,4.5-0.6,6.8-0.7c3.7-0.1,7.4,0.2,11.1,0.9c2,0.4,3.9,0.9,5.8,1.6c4.3,1.4,8.2,3.5,11.9,6.1c1.8,1.3,3.5,2.7,5.1,4.1
          c2,1.8,3.8,3.9,5.4,6c1.6,2.1,3.1,4.4,4.3,6.8c0.8,1.6,1.5,3.2,2.2,4.8c0.3,0.8,0.6,1.6,0.9,2.4c0.4,1.4,0.8,2.8,1.1,4.2
          c0.7,3,1,5.9,1.1,9c0.1,3.1-0.1,6.1-0.6,9.2c-0.2,1.3-0.5,2.7-0.8,4c-0.2,1.1-0.5,2.1-0.9,3.1c-0.3,0.7-0.9,1-1.6,1.1
          c-1.5,0.3-2.8-0.9-2.7-2.5c0.1-0.6,0.3-1.1,0.5-1.6c0.8-2.7,1.3-5.4,1.5-8.1c0.2-2,0.2-4,0.1-5.9c-0.1-2.9-0.6-5.8-1.3-8.7
          c-0.7-2.6-1.6-5.1-2.7-7.5c-0.9-1.8-1.9-3.6-3-5.3c-1.4-2.1-3-4.1-4.7-6c-1.8-1.9-3.8-3.7-6-5.2c-1.4-1-2.9-2-4.4-2.8
          c-2.3-1.3-4.7-2.3-7.2-3.2c-2.3-0.8-4.7-1.3-7.1-1.7c-1.5-0.2-3-0.4-4.5-0.4c-1.8-0.1-3.7,0-5.5,0.1c-2.5,0.2-5.1,0.6-7.5,1.3
          c-0.8,0.2-1.6,0.5-2.3,0.7c-0.9,0.3-1.8,0.6-2.7,1c-2.9,1.1-5.5,2.6-8.1,4.3c-1.8,1.2-3.5,2.6-5,4c-2,1.8-3.8,3.8-5.4,6
          c-1.6,2.1-3,4.4-4.1,6.8c-0.7,1.5-1.3,3-1.9,4.6c-0.8,2.4-1.5,4.9-1.8,7.5c-0.2,1.6-0.4,3.1-0.4,4.7c-0.2,3.7,0.2,7.4,1,11.1
          c0.3,1.5,0.8,3,1.3,4.4c1,3,2.3,5.7,3.9,8.4c1.3,2.1,2.7,4.1,4.4,6c1.5,1.7,3.2,3.4,4.9,4.8c2.5,2,5.1,3.8,8,5.3
          c1.4,0.7,2.9,1.4,4.4,2c0.7,0.3,1.3,0.5,2,0.7c2,0.6,4.1,1.2,6.2,1.5c1.3,0.2,2.7,0.4,4,0.5c1.5,0.1,2.9,0.1,4.4,0.1
          c1.5,0,3-0.2,4.6-0.4c2-0.3,3.9-0.7,5.9-1.3c0,0,0,0,0,0c0.9-0.4,1.9-0.6,2.9-0.9c3.5-1.3,6.7-3,9.8-5.2c2.8-2,5.3-4.3,7.5-6.9
          c0.6-0.7,1.3-1.5,1.8-2.3c0.3-0.5,0.5-1,0.5-1.6c0-0.5-0.2-0.9-0.6-1.2c-1.1-1-2.4-1.7-3.8-2.2c-0.2-0.1-0.3-0.1-0.2-0.4
          c0.6-1.1,1.1-2.3,1.5-3.6c0.1-0.2,0.1-0.3,0.4-0.2c2.1,0.7,4,1.8,5.5,3.4c1.8,1.8,2.1,4,1.2,6.3c-0.8,2-1.9,3.7-3.4,5.3
          c-1.1,1.2-2.3,2.4-3.5,3.5c-0.8,0.7-1.7,1.5-2.6,2.1c-1.3,1-2.7,2-4.1,2.8c-1,0.6-2.1,1.2-3.1,1.8c-1.3,0.7-2.6,1.3-4,1.9
          c-1.1,0.5-2.2,0.8-3.3,1.2c-2.1,0.7-4.3,1.2-6.5,1.6c-2.2,0.4-4.5,0.6-6.7,0.7c-3.1,0.1-6.2-0.1-9.3-0.6c-2.1-0.3-4.3-0.9-6.3-1.5
          c-0.3-0.1-0.5-0.3-0.8-0.1c0,0-0.1,0-0.1,0c-0.1-0.3-0.5-0.3-0.8-0.4c-2.7-0.9-5.2-2.1-7.7-3.5c-2.3-1.3-4.4-2.8-6.5-4.4
          c-2.4-1.9-4.5-4.1-6.4-6.4c-1.4-1.7-2.7-3.5-3.9-5.3c-1.5-2.5-2.8-5.1-3.9-7.8c-0.7-1.9-1.4-3.9-1.8-5.9c-0.6-2.4-1-4.7-1.2-7.2
          C320.3,466.8,320.2,465.5,320.2,464.1z'
                />
                <path
                  className='st12'
                  d='M342.3,446.8c0-2.3,0.3-4.5,1.1-6.6c0.9-2.2,2.3-3.7,4.4-4.7c1.1-0.5,2.2-1.1,3.4-1.5c0.9-0.3,1.9-0.6,2.9-0.4
          c0.7,0.1,1.3,0.5,1.7,1.2c1.7,3,3.1,6.2,4,9.6c0.4,1.4-0.1,2.5-0.8,3.6c-0.7,0.9-1.5,1.7-2.1,2.7c-0.4,0.7-0.7,1.4-0.7,2.3
          c0,0.6,0.3,1.1,0.6,1.6c1.3,2.6,2.9,5,4.6,7.2c1.4,1.8,2.9,3.4,4.5,5c1.9,1.8,3.9,3.5,6.1,5c1.6,1.1,3.2,2,4.9,2.9
          c1.3,0.7,2.5,0.4,3.7-0.3c0.7-0.5,1.4-1.1,2.1-1.6c0.6-0.5,1.3-1,2.1-1.3c0.9-0.3,1.7-0.1,2.6,0.2c2.8,0.8,5.6,1.9,8.1,3.3
          c0.3,0.2,0.7,0.4,1,0.6c0.9,0.5,1.2,1.4,1.1,2.4c-0.1,1.2-0.5,2.4-1,3.5c-0.6,1.3-1.1,2.5-1.9,3.7c-0.6,0.8-1.4,1.4-2.2,1.9
          c-1.9,1.1-4.1,1.6-6.3,1.8c-2.7,0.2-5.3,0-7.9-0.7c-1.3-0.3-2.5-0.9-3.7-1.4c-2.4-1.2-4.7-2.6-6.9-4.1c-1.9-1.4-3.8-2.9-5.5-4.5
          c-2.1-1.9-4.1-3.8-6-5.8c-1.5-1.6-3-3.2-4.5-4.9c-1.3-1.6-2.6-3.2-3.8-4.9c-1.9-2.8-3.6-5.8-4.7-9c-0.5-1.5-0.7-3.1-0.8-4.7
          C342.3,448.1,342.3,447.4,342.3,446.8z'
                />
                <path
                  className='st13'
                  d='M400.3,461.7c0.1,0.6,0,1.5-0.1,2.3c-0.1,1.2-0.9,2-2,2c-1,0-2-0.8-2-1.9c0-0.7,0.1-1.3,0.1-2
          c0-3-0.4-5.9-1.3-8.8c-0.7-2.1-1.6-4-2.7-5.9c-1.2-2-2.7-3.8-4.4-5.4c-1.7-1.6-3.6-3-5.7-4.1c-2-1.1-4-1.8-6.2-2.4
          c-1.5-0.4-3-0.6-4.5-0.7c-1.4-0.1-2.8,0-4.2,0c-1.5,0-2.4-1.4-1.9-2.8c0.3-0.8,1-1.1,1.8-1.2c4-0.3,7.8,0.2,11.6,1.3
          c1.7,0.5,3.3,1.2,4.8,2c3.1,1.6,5.9,3.7,8.3,6.2c1.9,2,3.5,4.2,4.8,6.7c1.4,2.7,2.4,5.5,3,8.4C400.1,457.6,400.3,459.6,400.3,461.7
          z'
                />
                <path
                  className='st13'
                  d='M369.6,441.2c3.1,0,6,0.6,8.8,2c2.4,1.2,4.6,2.7,6.4,4.7c2.1,2.4,3.6,5.1,4.5,8.1c0.6,2.2,0.9,4.4,0.8,6.6
          c0,0.7,0,1.5-0.3,2.2c-0.4,0.9-1.4,1.3-2.3,1.1c-0.9-0.3-1.6-1.2-1.4-2.1c0.3-2.5,0.1-4.9-0.7-7.3c-0.4-1.2-1-2.4-1.6-3.5
          c-0.8-1.2-1.6-2.3-2.7-3.3c-1.2-1.1-2.5-2.1-4-2.8c-1.4-0.7-2.9-1.2-4.4-1.5c-1.6-0.3-3.2-0.3-4.8-0.1c-1,0.1-1.7-0.2-2.2-1
          c-0.4-0.6-0.2-1.6,0.3-2.2c0.3-0.4,0.8-0.6,1.2-0.6c0.4-0.1,0.9-0.1,1.3-0.1C368.7,441.2,369.2,441.2,369.6,441.2z'
                />
              </g>
              <g>
                <path
                  className='st14'
                  d='M624.3,730c0.1,5.8-1.3,11.2-3.9,16.1c-2.7,5.1-6.6,9.2-11.4,12.4c-4.5,2.9-9.3,4.7-14.6,5.2
          c-7.4,0.8-14.4-0.6-20.8-4.4c-4.9-2.9-8.9-6.7-11.8-11.6c-2.6-4.4-4.2-9.1-4.7-14.1c-0.5-4.5-0.1-9,1.3-13.3
          c1.4-4.7,3.8-8.9,7.1-12.6c4.4-4.9,9.8-8.3,16.2-10.1c4.6-1.3,9.2-1.5,14-0.9c4.6,0.6,8.9,2.2,12.9,4.6c0.8,0.5,0.8,0.5,0.2,1.2
          c-1.2,1.5-2.5,3-3.7,4.5c-0.3,0.3-0.5,0.4-0.9,0.2c-3.3-1.9-6.9-3.1-10.7-3.4c-7.3-0.7-13.8,1.3-19.5,6c-3.4,2.8-5.9,6.3-7.6,10.3
          c-1.6,3.9-2.2,7.8-2,12c0.2,3.8,1.3,7.5,3.2,10.8c2.3,4.2,5.5,7.5,9.6,10c3.2,1.9,6.6,3.1,10.3,3.6c5.2,0.6,10.3-0.1,15-2.5
          c3.6-1.8,6.6-4.2,9.1-7.3c3.2-4,5.1-8.6,5.7-13.7c0.3-2.2,0.2-4.4-0.2-6.6c-0.1-0.5,0-0.9,0.4-1.3c1.6-1.8,3.1-3.7,4.6-5.6
          c0.2-0.2,0.3-0.5,0.6-0.5c0.2,0.1,0.2,0.4,0.3,0.6C623.8,723.1,624.4,726.6,624.3,730z'
                />
                <path
                  className='st14'
                  d='M577.1,717.8c0.6,0,1,0.4,1.4,0.7c2.5,2.3,5,4.6,7.5,6.9c1.2,1.1,2.5,2.3,3.7,3.4c0.9,0.8,1.7,0.8,2.4-0.1
          c1.3-1.5,2.5-3.1,3.8-4.6c3.8-4.6,7.5-9.2,11.3-13.8c2.5-3,5-6,7.4-9.1c0.8-0.9,1.7-1,2.6-0.3c1.8,1.5,3.7,3,5.5,4.5
          c0.6,0.5,1.2,1,1.9,1.6c0.9,0.7,1,1.6,0.3,2.5c-2.2,2.7-4.4,5.3-6.6,8c-3,3.6-5.9,7.2-8.9,10.9c-2.4,2.9-4.8,5.7-7.1,8.6
          c-2.9,3.5-5.8,7.1-8.7,10.6c-1,1.2-1.6,1.3-2.7,0.3c-3.4-3.1-6.7-6.1-10-9.2c-3.8-3.5-7.6-7-11.4-10.5c-1-1-1-1.8-0.1-2.9
          c2-2.2,4-4.3,6-6.5C575.9,718.3,576.3,717.8,577.1,717.8z'
                />
              </g>
              <path
                className='st15'
                d='M703.4,1121.1c-2.4-0.1-4.8-0.3-7-1.3c-3.3-1.5-5.1-4-5.5-7.6c-0.3-2.9-0.4-5.8-0.4-8.7c0-3.1,0.1-6.2,0.2-9.4
        c0.2-4.4,0.1-8.8,0.2-13.2c0-2.6,0.6-5.2,1.9-7.5c1-1.7,2.4-3,4.5-3.4c0.1,0,0.2,0,0.3,0c2.4,0.1,4.8-0.4,7.2-0.4c2.4,0,4.8,0,7.2,0
        c3.6,0,7.3,0.1,10.9,0.2c3,0.1,6,0.1,9,0.2c4.6,0.1,9.1,0.2,13.7,0.2c1.8,0,3.7-0.2,5.5-0.2c3.3,0,6.4,0.6,8.8,3.1
        c1.3,1.4,2,3.1,2.5,5c0.4,1.8,0.6,3.7,0.6,5.5c0,6.5,0.2,13.1,0.1,19.6c-0.1,3.1-0.1,6.2-0.5,9.3c-0.2,1.5-0.6,3-1.4,4.3
        c-0.9,1.5-2.2,2.5-3.9,2.9c-0.5,0.1-0.6,0.3-0.4,0.8c0.9,2.3,1.3,4.7,1.5,7.2c0.2,1.9,0.3,3.8,0.3,5.7c0,0.7,0,1.3-0.1,2
        c-0.1,1-0.7,1.4-1.7,1.2c-0.9-0.1-1.2-0.5-1.5-1.3c-1.3-3.6-3.1-7-5.6-9.9c-1.4-1.7-3-3.1-4.8-4.3c-0.1-0.1-0.3-0.2-0.5-0.2
        c-3.6,0.2-7.1,0-10.7,0.1c-0.3,0-0.5,0.1-0.5,0.4c0,0.2-0.1,0.4-0.1,0.7c-0.5,1.6-2,2.2-3.4,1.3c-0.9-0.6-1.7-1.3-2.5-2.1
        c-0.3-0.3-0.6-0.4-1-0.4c-4.6,0-9.3,0.1-13.9,0.1c-1,0-2,0-2.9,0c-1.6,0.1-3.2,0-4.8,0C704.4,1121.1,703.7,1121.1,703.4,1121.1z
          M699.3,1071.6c-0.2,0-0.5,0-0.7,0c-1.1-0.1-2,0.3-2.7,1.1c-0.2,0.3-0.3,0.4,0,0.7c0.8,0.6,1.6,1.3,2.3,2c3.1,3.2,5.9,6.5,9,9.7
        c1.5,1.6,3.1,3.1,4.7,4.6c1.3,1.3,2.7,2.5,4.2,3.7c2.1,1.9,4.4,3.6,7,4.8c1.6,0.7,3.2,1.1,4.9,0.9c0.8-0.1,1.6-0.2,2.3-0.7
        c0.8-0.6,1.5-1.4,2.6-1.5c0.1,0,0.2-0.1,0.3-0.2c1.4-0.9,2.6-1.8,3.9-2.9c2.3-1.9,4.3-4.1,6.4-6.1c1-0.9,2-1.8,2.9-2.8
        c0.4-0.5,1.1-0.9,1.6-1.4c1.7-1.6,3.3-3.2,4.9-4.9c1.4-1.4,2.6-2.8,4.1-4.1c0.3-0.3,0.3-0.5-0.1-0.7c-0.4-0.2-0.7-0.4-1.1-0.6
        c-2-0.8-4.1-0.8-6.2-0.8c-2.1,0.1-4.2,0.3-6.3,0.3c-3,0-6-0.1-9-0.2c-2.9-0.1-5.8-0.1-8.7-0.2c-4.3-0.1-8.6-0.1-12.8-0.3
        c-1.2,0-2.4,0-3.6-0.1C705.9,1071.9,702.6,1071.8,699.3,1071.6z M703.5,1085.4c-0.2-0.2-0.4-0.4-0.5-0.6c-1.5-1.7-2.9-3.3-4.4-5
        c-1.3-1.5-2.6-2.9-3.8-4.5c-0.1-0.1-0.1-0.3-0.3-0.3c-0.2,0-0.2,0.2-0.2,0.3c-0.6,1.8-0.9,3.7-0.9,5.6c0,2.4,0.1,4.8,0,7.2
        c-0.1,4.4-0.2,8.9-0.3,13.3c-0.1,2.9,0,5.8,0.2,8.7c0.1,1,0.1,2,0.4,2.9c0.1,0.4,0.2,0.4,0.5,0.1c2.4-2.2,4.8-4.3,7.3-6.4
        c2.2-1.9,4.5-3.7,6.7-5.6c1.9-1.6,3.8-3.2,5.7-4.8c0.6-0.5,0.6-0.4,0-0.9c-0.6-0.5-1.3-1.1-1.9-1.6c-2.6-2.3-5.1-4.7-7.4-7.3
        C704.5,1086.4,703.9,1085.7,703.5,1085.4z M760.2,1086.4c0-1.8,0.1-3.6-0.1-5.4c-0.1-1.4-0.3-2.7-0.8-4c-0.2-0.6-0.2-0.6-0.7-0.1
        c-3,2.9-5.8,6-8.8,8.9c-1.7,1.6-3.3,3.2-5,4.9c-1.8,1.7-3.5,3.6-5.4,5.2c-0.3,0.2-0.2,0.3,0.1,0.5c0.4,0.3,0.8,0.5,1.2,0.8
        c2.6,1.9,5.1,4,7.6,6c2.4,2,4.8,4,7.2,6c1.4,1.2,2.8,2.3,4.3,3.5c0.4,0.3,0.5,0.2,0.5-0.2c0.1-0.6,0.1-1.2,0.1-1.8
        c0.1-1.9,0-3.7,0-5.6C760.3,1098.9,760.3,1092.6,760.2,1086.4z M755.7,1129c0-2-0.3-3.9-0.8-5.8c-0.9-3.5-2.6-6.7-4.9-9.5
        c-0.8-1-1.7-1.9-2.6-2.8c-2.8-2.5-6.1-4.2-9.8-4.9c-1.4-0.3-2.8-0.5-4.2-0.9c-1.1-0.2-1.8-0.8-1.9-2.1c0-0.7,0-1.5-0.1-2.2
        c0-0.1,0.1-0.4-0.1-0.4c-0.2,0-2.1,1.6-2.3,1.7c-2.2,1.6-4.4,3.3-6.5,4.9c-0.8,0.6-1.7,1.2-2.4,2c-0.4,0.5-0.5,0.8-0.1,1.3
        c0.2,0.3,0.5,0.7,0.8,1c2.9,2.8,5.6,5.8,8.5,8.5c0.4,0.3,0.7,0.7,1.1,1c0.1,0.1,0.2,0.2,0.4,0.2c0.2-0.1,0.1-0.3,0.1-0.4
        c0-0.6,0-1.2,0-1.8c0-0.6,0-1.2,0.1-1.9c0.2-0.6,0.5-0.9,1.1-0.8c0.2,0,0.4,0.1,0.6,0c1.9-0.4,3.8-0.4,5.7-0.3
        c0.8,0.1,1.7,0.3,2.5,0.5c0.8,0.2,1.7,0.4,2.5,0.8c0.7,0.3,1.5,0.5,2.2,1c0.5,0.4,1.1,0.6,1.6,1c2.4,1.7,4.4,3.8,6.1,6.2
        C754.2,1126.7,754.9,1127.9,755.7,1129z M725.2,1102.1c-0.1-0.2-0.3-0.2-0.4-0.2c-1.6-0.3-3.1-0.9-4.5-1.7c-1.1-0.6-2.2-1.3-3.2-2.1
        c-0.4-0.3-0.7-0.4-1.1,0c-0.4,0.4-0.8,0.7-1.3,1.1c-3.1,2.5-6.1,5.1-9.2,7.6c-3.4,2.8-6.8,5.7-10.4,8.2c-0.4,0.3-0.3,0.4,0,0.7
        c0.8,0.9,1.9,1.5,3,1.9c1.6,0.6,3.2,0.7,4.8,0.8c3.3,0.1,6.6,0,9.9,0c0.3,0,0.5,0,0.4-0.5c0.2,0.3,0.4,0.5,0.7,0.5
        c3.3,0,6.6,0,9.8,0c0.1,0,0.3,0.1,0.4-0.1c-0.1-0.2-0.2-0.3-0.4-0.5c-1.7-1.8-3.5-3.5-5.1-5.3c-1.7-1.8-1.9-3.6,0-5.5
        c1.2-1.2,2.5-2.1,3.9-3.1C723.5,1103.4,724.4,1102.7,725.2,1102.1z M735,1103.5c0.7,0,1.3,0,2,0.1c2.1,0.3,4.3,0.6,6.3,1.5
        c3.8,1.6,6.9,4.3,9.4,7.5c1.3,1.6,2.3,3.4,3.2,5.3c0.3,0.7,0.3,0.6,1,0.4c1-0.4,1.7-1.2,2.3-2.2c0.2-0.3,0.2-0.5-0.1-0.7
        c-1.9-1.5-3.7-3.1-5.6-4.6c-2-1.7-4.1-3.4-6.1-5.1c-1.9-1.6-3.8-3.2-5.7-4.8c-1.2-1.1-2.5-2.1-3.6-3.3c-0.3-0.4-0.6-0.1-0.8,0.1
        c-1,0.7-2,1.4-3,2c-0.3,0.1-0.4,0.3-0.4,0.6c-0.1,1-0.1,1.9-0.2,2.9c0,0.3,0.1,0.4,0.4,0.4C734.2,1103.5,734.6,1103.5,735,1103.5z
          M738.1,1118.5C738.1,1118.4,738.1,1118.4,738.1,1118.5c-0.1-0.1-0.1-0.1-0.2-0.1c-1.4-0.3-2.9-0.4-4.3-0.4c-0.2,0-0.3,0-0.3,0.2
        c0,0.3,0.2,0.3,0.4,0.3C735.1,1118.5,736.6,1118.5,738.1,1118.5z'
              />
            </svg>
          </li>
          <li className='part3 absolute'>
            <svg
              version='1.1'
              id='Capa_3'
              xmlns='http://www.w3.org/2000/svg'
              //   xmlns:xlink="http://www.w3.org/1999/xlink"
              x='0px'
              y='0px'
              width='100%'
              height='100%'
              viewBox='0 0 1366 1306'
              //   style="enable-background:new 0 0 1366 1306;"
              xmlSpace='preserve'
            >
              <radialGradient
                id='SVGID_1_'
                cx='549.6823'
                cy='162.5841'
                r='152.899'
                gradientTransform='matrix(2.2548 0.349 -0.1232 0.7962 -689.4514 -140.7863)'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0' style={{ stopColor: '#272425' }} />
                <stop
                  offset='8.223993e-02'
                  style={{ stopColor: '#4C494A', stopOpacity: '0.9178' }}
                />
                <stop
                  offset='0.2028'
                  style={{ stopColor: '#7B797A', stopOpacity: '0.7972' }}
                />
                <stop
                  offset='0.327'
                  style={{ stopColor: '#A3A2A3', stopOpacity: '0.673' }}
                />
                <stop
                  offset='0.453'
                  style={{ stopColor: '#C5C4C4', stopOpacity: '0.547' }}
                />
                <stop
                  offset='0.5813'
                  style={{ stopColor: '#DEDEDE', stopOpacity: '0.4187' }}
                />
                <stop
                  offset='0.7129'
                  style={{ stopColor: '#F1F0F0', stopOpacity: '0.2871' }}
                />
                <stop
                  offset='0.8496'
                  style={{ stopColor: '#FBFBFB', stopOpacity: '0.1504' }}
                />
                <stop
                  offset='1'
                  style={{ stopColor: '#FFFFFF', stopOpacity: '0' }}
                />
              </radialGradient>
              <path
                className='st220'
                d='M874.7,233.9c-10.4,67.2-173.2,97.8-363.6,68.4c-190.4-29.5-336.3-107.9-325.9-175.1
                c10.4-67.2,173.2-97.8,363.6-68.4C739.2,88.2,885.1,166.6,874.7,233.9z'
              />
              <path
                className='st221'
                d='M340.9,108.6c-10.5,0-19.1,8.5-19.1,19.1c0,10.5,8.5,19.1,19.1,19.1c10.5,0,19.1-8.5,19.1-19.1
                  C360,117.2,351.5,108.6,340.9,108.6z M340.9,145.2c-9.7,0-17.5-7.8-17.5-17.5c0-9.7,7.8-17.5,17.5-17.5c9.7,0,17.5,7.8,17.5,17.5
                  C358.4,137.4,350.6,145.2,340.9,145.2z'
              />
              <path
                className='st22'
                d='M353,127.7c0,6.7-5.4,12.1-12.1,12.1c-6.7,0-12.1-5.4-12.1-12.1c0-6.7,5.4-12.1,12.1-12.1
                C347.6,115.7,353,121.1,353,127.7z'
              />
              <path
                className='st22'
                d='M789.4,48.1H435c-2.3,0-4.5,0.9-6.1,2.3v-0.1l-0.1,0.2c-0.8,0.7-1.5,1.6-2.1,2.5l-60.3,74.4l60.2,74.8
              c0.6,1,1.3,2,2.2,2.7l0.1,0.1v0c1.7,1.4,3.8,2.3,6.1,2.3h354.4c5.3,0,9.6-4.3,9.6-9.6V57.7C799,52.4,794.7,48.1,789.4,48.1z'
              />
            </svg>
          </li>

          <li className='part4 absolute'>
            <svg
              version='1.1'
              id='Capa_4'
              xmlns='http://www.w3.org/2000/svg'
              //   xmlns:xlink="http://www.w3.org/1999/xlink"
              x='0px'
              y='0px'
              width='100%'
              height='100%'
              viewBox='0 0 1366 1306'
              //   style={{ enableBackground: '0 0 1366 1306' }}
              xmlSpace='preserve'
            >
              <radialGradient
                id='SVGID_2_'
                cx='635.0666'
                cy='408.2882'
                r='152.9011'
                gradientTransform='matrix(2.2657 -0.499 0.1733 0.7868 -866.9095 394.2544)'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0' style={{ stopColor: '#272425' }} />
                <stop
                  offset='8.223993e-02'
                  style={{ stopColor: '#4C494A', stopOpacity: '0.9178' }}
                />
                <stop
                  offset='0.2028'
                  style={{ stopColor: '#7B797A', stopOpacity: '0.7972' }}
                />
                <stop
                  offset='0.327'
                  style={{ stopColor: '#A3A2A3', stopOpacity: '0.673' }}
                />
                <stop
                  offset='0.453'
                  style={{ stopColor: '#C5C4C4', stopOpacity: '0.547' }}
                />
                <stop
                  offset='0.5813'
                  style={{ stopColor: '#DEDEDE', stopOpacity: '0.4187' }}
                />
                <stop
                  offset='0.7129'
                  style={{ stopColor: '#F1F0F0', stopOpacity: '0.2871' }}
                />
                <stop
                  offset='0.8496'
                  style={{ stopColor: '#FBFBFB', stopOpacity: '0.1504' }}
                />
                <stop
                  offset='1'
                  style={{ stopColor: '#FFFFFF', stopOpacity: '0' }}
                />
              </radialGradient>
              <path
                className='st30'
                d='M989.1,322.3c14.6,66.4-128.6,154.5-319.9,196.6c-191.3,42.1-358.3,22.4-372.9-44
              c-14.6-66.4,128.6-154.5,319.9-196.6C807.5,236.2,974.5,255.9,989.1,322.3z'
              />
              <path
                className='st31'
                d='M452.2,404.4c-7.9,2.7-12.1,11.4-9.4,19.3c2.7,7.9,11.4,12.1,19.3,9.4c7.9-2.7,12.1-11.4,9.4-19.3
        C468.7,405.8,460.1,401.6,452.2,404.4z M461.7,431.9c-7.3,2.5-15.2-1.3-17.7-8.6c-2.5-7.3,1.3-15.2,8.6-17.7
        c7.3-2.5,15.2,1.3,17.7,8.6C472.8,421.4,468.9,429.3,461.7,431.9z'
              />
              <path
                className='st32'
                d='M466.2,415.6c1.7,5-0.9,10.5-5.9,12.2c-5,1.7-10.5-0.9-12.2-5.9c-1.7-5,0.9-10.5,5.9-12.2
        C459,407.9,464.4,410.6,466.2,415.6z'
              />
              <path
                className='st32'
                d='M812.9,228.6L513.5,332.2c-2,0.7-3.5,2-4.6,3.5l0,0l-0.1,0.2c-0.5,0.8-0.9,1.6-1.1,2.5l-31.6,73.5l70.3,38.6
        c0.7,0.6,1.6,1.1,2.6,1.4l0.1,0l0,0c1.8,0.6,3.8,0.6,5.8-0.1l299.3-103.6c4.5-1.5,7-6,5.6-10L823.4,233
        C822.1,229,817.3,227,812.9,228.6z'
              />
            </svg>
          </li>
          <li className='part5 absolute'>
            <svg
              version='1.1'
              id='Capa_5'
              xmlns='http://www.w3.org/2000/svg'
              //   xmlns:xlink="http://www.w3.org/1999/xlink"
              x='0px'
              y='0px'
              width='100%'
              height='100%'
              viewBox='0 0 1366 1306'
              //   style="enable-background:new 0 0 1366 1306;"
              xmlSpace='preserve'
            >
              <radialGradient
                id='SVGID_3_1'
                cx='733.5497'
                cy='645.8466'
                r='152.8961'
                gradientTransform='matrix(2.0897 -0.4075 0.1415 0.7257 -724.1506 376.6293)'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0' style={{ stopColor: '#272425' }} />
                <stop
                  offset='8.223993e-02'
                  style={{ stopColor: '#4C494A', stopOpacity: '0.9178' }}
                />
                <stop
                  offset='0.2028'
                  style={{ stopColor: '#7B797A', stopOpacity: '0.7972' }}
                />
                <stop
                  offset='0.327'
                  style={{ stopColor: '#A3A2A3', stopOpacity: '0.673' }}
                />
                <stop
                  offset='0.453'
                  style={{ stopColor: '#C5C4C4', stopOpacity: '0.547' }}
                />
                <stop
                  offset='0.5813'
                  style={{ stopColor: '#DEDEDE', stopOpacity: '0.4187' }}
                />
                <stop
                  offset='0.7129'
                  style={{ stopColor: '#F1F0F0', stopOpacity: '0.2871' }}
                />
                <stop
                  offset='0.8496'
                  style={{ stopColor: '#FBFBFB', stopOpacity: '0.1504' }}
                />
                <stop
                  offset='1'
                  style={{ stopColor: '#FFFFFF', stopOpacity: '0' }}
                />
              </radialGradient>
              <path
                className='st40'
                d='M1219.6,484.1c11.9,61.3-121.4,138.8-297.9,173.3c-176.5,34.4-329.2,12.6-341.1-48.6
        c-12-61.3,121.4-138.8,297.9-173.3C1055,401,1207.7,422.8,1219.6,484.1z'
              />
              <path
                className='st41'
                d='M740.4,529c-8.7,2.3-14,11.2-11.7,19.9c2.3,8.7,11.2,14,19.9,11.7c8.7-2.3,14-11.2,11.7-19.9
        C758,532,749.1,526.8,740.4,529z M748.3,559.3c-8,2.1-16.2-2.7-18.3-10.7c-2.1-8,2.7-16.2,10.7-18.3c8-2.1,16.2,2.7,18.3,10.7
        C761.1,549.1,756.3,557.2,748.3,559.3z'
              />
              <path
                className='st42'
                d='M754.5,542.2c1.4,5.5-1.9,11.1-7.4,12.6c-5.5,1.4-11.1-1.9-12.6-7.4c-1.4-5.5,1.9-11.1,7.4-12.6
        C747.4,533.4,753,536.7,754.5,542.2z'
              />
              <path
                className='st42'
                d='M1156.3,367.3l-341.7,88.9c-2.3,0.6-4.1,1.8-5.4,3.4l0,0l-0.1,0.2c-0.6,0.8-1.1,1.7-1.4,2.6l-42.1,76.7
        l74.2,46.9c0.8,0.7,1.7,1.3,2.7,1.7l0.1,0.1l0,0c1.9,0.7,4.1,0.9,6.4,0.4l341.7-88.9c5.1-1.3,8.3-6,7.2-10.3l-30.2-116
        C1166.4,368.5,1161.4,366,1156.3,367.3z'
              />
            </svg>
          </li>
          <li className='part6 absolute'>
            <svg
              version='1.1'
              id='Capa_6'
              xmlns='http://www.w3.org/2000/svg'
              //   xmlns:xlink="http://www.w3.org/1999/xlink"
              x='0px'
              y='0px'
              width='100%'
              height='100%'
              viewBox='0 0 1366 1306'
              //   style="enable-background:new 0 0 1366 1306;"
              xmlSpace='preserve'
            >
              <radialGradient
                id='SVGID_4_1'
                cx='698.09'
                cy='909.5001'
                r='152.9068'
                gradientTransform='matrix(2.0781 0.4853 -0.1832 0.7845 -444.2962 -254.7819)'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0' style={{ stopColor: '#272425' }} />
                <stop
                  offset='8.223993e-02'
                  style={{ stopColor: '#4C494A', stopOpacity: '0.9178' }}
                />
                <stop
                  offset='0.2028'
                  style={{ stopColor: '#7B797A', stopOpacity: '0.7972' }}
                />
                <stop
                  offset='0.327'
                  style={{ stopColor: '#A3A2A3', stopOpacity: '0.673' }}
                />
                <stop
                  offset='0.453'
                  style={{ stopColor: '#C5C4C4', stopOpacity: '0.547' }}
                />
                <stop
                  offset='0.5813'
                  style={{ stopColor: '#DEDEDE', stopOpacity: '0.4187' }}
                />
                <stop
                  offset='0.7129'
                  style={{ stopColor: '#F1F0F0', stopOpacity: '0.2871' }}
                />
                <stop
                  offset='0.8496'
                  style={{ stopColor: '#FBFBFB', stopOpacity: '0.1504' }}
                />
                <stop
                  offset='1'
                  style={{ stopColor: '#FFFFFF', stopOpacity: '0' }}
                />
              </radialGradient>
              <path
                className='st50'
                d='M1157.5,871.7c-15.5,66.2-170.3,86.7-345.8,45.8c-175.5-41-305.2-127.9-289.7-194.2
        c15.5-66.2,170.3-86.7,345.8-45.8C1043.3,718.5,1173,805.5,1157.5,871.7z'
              />
              <path
                className='st51'
                d='M671.9,722.1c-8.5-1.3-16.5,4.5-17.9,13c-1.3,8.5,4.5,16.5,13,17.9c8.5,1.3,16.5-4.5,17.9-13
        C686.3,731.4,680.5,723.4,671.9,722.1z M667.3,751.7c-7.8-1.2-13.2-8.6-11.9-16.4c1.2-7.8,8.6-13.2,16.4-11.9
        c7.8,1.2,13.2,8.6,11.9,16.4C682.4,747.6,675.1,752.9,667.3,751.7z'
              />
              <path
                className='st52'
                d='M679.3,739.1c-0.8,5.4-5.9,9.1-11.3,8.2c-5.4-0.8-9.1-5.9-8.2-11.3c0.8-5.4,5.9-9.1,11.3-8.2
        C676.4,728.6,680.1,733.7,679.3,739.1z'
              />
              <path
                className='st52'
                d='M1042.4,730.3l-286.6-45.1c-1.9-0.3-3.7,0.1-5.2,1.1l0,0l-0.1,0.1c-0.8,0.5-1.4,1.1-2,1.8l-58.3,52.5l39.2,68.2
        c0.3,0.9,0.8,1.8,1.4,2.5l0,0.1l0,0c1.2,1.3,2.8,2.3,4.7,2.6l286.6,45.1c4.3,0.7,8.3-2.3,9-6.5l17.8-113.3
        C1049.6,735,1046.6,730.9,1042.4,730.3z'
              />
            </svg>
          </li>

          <li className='part7 absolute'>
            <svg
              version='1.1'
              id='Capa_7'
              xmlns='http://www.w3.org/2000/svg'
              //   xmlns:xlink="http://www.w3.org/1999/xlink"
              x='0px'
              y='0px'
              width='100%'
              height='100%'
              viewBox='0 0 1366 1306'
              //   style="enable-background:new 0 0 1366 1306;"
              xmlSpace='preserve'
            >
              <radialGradient
                id='SVGID_5_1'
                cx='734.1193'
                cy='1269.2074'
                r='152.8987'
                gradientTransform='matrix(1.7362 -0.3397 0.1547 0.7907 -511.5832 306.8195)'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0' style={{ stopColor: '#272425' }} />
                <stop
                  offset='8.223993e-02'
                  style={{ stopColor: '#4C494A', stopOpacity: '0.9178' }}
                />
                <stop
                  offset='0.2028'
                  style={{ stopColor: '#7B797A', stopOpacity: '0.7972' }}
                />
                <stop
                  offset='0.327'
                  style={{ stopColor: '#A3A2A3', stopOpacity: '0.673' }}
                />
                <stop
                  offset='0.453'
                  style={{ stopColor: '#C5C4C4', stopOpacity: '0.547' }}
                />
                <stop
                  offset='0.5813'
                  style={{ stopColor: '#DEDEDE', stopOpacity: '0.4187' }}
                />
                <stop
                  offset='0.7129'
                  style={{ stopColor: '#F1F0F0', stopOpacity: '0.2871' }}
                />
                <stop
                  offset='0.8496'
                  style={{ stopColor: '#FBFBFB', stopOpacity: '0.1504' }}
                />
                <stop
                  offset='1'
                  style={{ stopColor: '#FFFFFF', stopOpacity: '0' }}
                />
              </radialGradient>
              <path
                className='st60'
                d='M1224.8,1009.1c13.1,66.8-95.2,144.1-241.8,172.8c-146.6,28.7-276.1-2.2-289.1-68.9
        c-13.1-66.8,95.2-144.1,241.8-172.8C1082.3,911.4,1211.7,942.3,1224.8,1009.1z'
              />
              <path
                className='st61'
                d='M793.6,1052.1c-8.4,2.8-12.9,11.8-10.1,20.1c2.8,8.4,11.8,12.9,20.1,10.1c8.4-2.8,12.9-11.8,10.2-20.1
        C811,1053.9,802,1049.4,793.6,1052.1z M803.2,1081.1c-7.7,2.5-15.9-1.6-18.5-9.3c-2.5-7.7,1.6-15.9,9.3-18.5
        c7.7-2.5,15.9,1.6,18.5,9.3C815,1070.4,810.8,1078.6,803.2,1081.1z'
              />
              <path
                className='st62'
                d='M808.2,1064.1c1.7,5.3-1.1,11-6.4,12.7c-5.3,1.7-11-1.1-12.7-6.4c-1.7-5.3,1.1-11,6.4-12.7
        C800.7,1056,806.4,1058.8,808.2,1064.1z'
              />
              <path
                className='st62'
                d='M1210.2,861.6L864.9,975.4c-2.3,0.8-4.1,2.1-5.4,3.8l0,0l-0.1,0.2c-0.6,0.8-1.1,1.7-1.3,2.7l-39.3,78.4
        l78.3,40.1c0.8,0.7,1.8,1.1,2.9,1.5l0.1,0.1l0,0c2,0.6,4.3,0.6,6.6-0.2L1251.8,988c5.1-1.7,8.2-6.5,6.8-10.7L1222,866.2
        C1220.6,862,1215.3,859.9,1210.2,861.6z'
              />
            </svg>
          </li>

          <li className='text text_one'>
            <div>
              <h4>ANÁLISIS DEL BRIEF</h4>
              <p>
                Te enviamos un brief(cuestionario), el cuál deberá llenarlo para
                así llevar a cabo el desarrollo de su diseño(Un Profesional lo
                asesorará).
              </p>
            </div>
          </li>

          <li className='text text_two'>
            <div>
              <h4>COMUNICACIÓN DIRECTA</h4>
              <p>
                Nos Comunicamos constamente con el cliente para realizar un
                trabajo fluido, mientras más información detallada recibimos
                será exelente.
              </p>
            </div>
          </li>

          <li className='text text_three'>
            <div>
              <h4>ENVÍO DE PROPUESTAS</h4>
              <p>
                Te envíamos la cantidad de propuestas creativas según el plan
                que adquirió, con un diseño funcional para tu marca y tus
                clientes.
              </p>
            </div>
          </li>

          <li className='text text_four'>
            <div>
              <h4>APROBACIÓN</h4>
              <p>
                Sustentamos, expresamos de manera corporativa ,Te asesoramos
                pára que puedas elegir tu diseño ideal hasta llegar a la
                aprobación satisfactoria.
              </p>
            </div>
          </li>

          <li className='text text_five'>
            <div>
              <h4>ENTREGA DE ARCHIVOS</h4>
              <p>
                Realizamos el envío de los archivos editables y formatos
                correspondientes previa aprobación de los diseños.
              </p>
            </div>
          </li>
          <div className='cajita'>
            <div className='texto_cajita'>
              <p className='p1'>APLICADA A TODOS</p>
              <p className='p2'>los Planes de Identidad Visual Corporativa</p>
            </div>
          </div>
        </ul>
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
