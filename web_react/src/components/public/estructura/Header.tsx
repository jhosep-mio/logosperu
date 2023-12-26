import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { logazo_blanco, logo, logo_movil } from '../../shared/images'
import { CSSTransition } from 'react-transition-group'
import {
  IoCartSharp,
  IoHeartSharp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube
} from 'react-icons/io5'
import { CaritoModal } from '../../shared/modal/CaritoModal'
import { HeardModal } from '../../shared/modal/HeardModal'
import useAuth from '../../../hooks/useAuth'
import { Promocion } from '../../shared/modal/Promocion'

export const Header = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [seleccion, setSeleccion] = useState(0)
  const [carrito, setCarrito] = useState(false)
  const [heard, setHeard] = useState(false)
  const { subcategorias } = useAuth()
  const [openoferta, setopenoferta] = useState(false)

  useEffect(() => {
    setInterval(() => {
      const ofertali = document.querySelector('.item-ofertas')
      ofertali?.classList.toggle('showOffer')
    }, 5000)
  }, [])

  return (
    <>
      <div id="imgBannerHome1 " className="transition-all">
        <div
          id="imgBanner"
          className="p_relative refeBannerShow menos4 bannerwebite"
        >
          <a href="{if isset($banhe.url)}{$banhe.url}{/if}"></a>
          <div className="p_absolute clickBannerShow">
            <span className="fa fa-close "></span>
          </div>
        </div>
      </div>

      <div id="imgBannerHome2" className="transition-all">
        <div
          id="imgBanner2"
          className="p_relative refeBannerShow menos4 bannermovil"
        >
          <a href="{if isset($banhe.url)}{$banhe.url}{/if}"></a>
          <div className="p_absolute clickBannerShow">
            <span className="fa fa-close "></span>
          </div>
        </div>
      </div>

      <section className="social_icon transition-all">
        <ul>
          <li>
            <Link to="/portafolio" title="Portafolio" className="iconomorado">
              <i className="fa fa-key"></i>Portafolio
            </Link>
          </li>
          <li className="item-ofertas">
            <Link
              to="#"
              onClick={() => {
                setopenoferta(true)
              }}
              title="Ofertas"
              className="iconomorado link-oferta2"
            >
              {' '}
              <i className="fas fa-tag"></i>Ofertas
            </Link>
          </li>
          <li className="tweet">
            <a href="#" title="Redes Sociales" className="iconomorado">
              <i className="fa fa-link"></i>
            </a>
            <a
              href="https://www.facebook.com/DLogosPeru/"
              className="ico-redes"
              aria-label="Visita nuestra página de Facebook"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=51993765495"
              className="ico-redes"
              aria-label="Escríbenos por WhatsApp"
            >
              <i className="fa fa-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/dlogosperu/"
              className="ico-redes"
              aria-label="Visita nuestra página de Instagram"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/DLogosPeru"
              className="ico-redes"
              aria-label="Visita nuestra página de Twitter"
            >
              <i className="fa fa-twitter"></i>{' '}
            </a>
            <a
              href="https://www.youtube.com/channel/UCPXxUSJAk5VaWGEaRmgFeew"
              className="ico-redes"
              aria-label="Visita nuestro canal de Youtube"
            >
              <i className="fa fa-youtube"></i>
            </a>
          </li>
        </ul>
      </section>

      <header className="header_top transition-all">
        <div className="anuncio_header hidden">
          <div className="container">
            <div className="row flex flex-col md:flex-row justify-center">
              <div className="w-full justify-content-center align-items-center offer">
                <p className="texto-ofertas">
                  <i className="fas fa-exclamation text-primary"></i>Ofertas por
                  tiempo limitado!
                </p>
              </div>
              <div className="w-full flex gap-3">
                <div className="w-full ctel tel2">
                  <a
                    href="tel:+51987038024"
                    className="link-telefonos w-full block"
                  >
                    <i className="fas fa-phone-alt text-primary"></i> (+51) 987
                    038 024
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header_content_top">
          <div className="img_header_top">
            <Link to="/">
              <img
                src={logo}
                alt="Diseño de Logos - Agencia de diseño Gráfico - logotipos"
              />
            </Link>
          </div>
          <div className="menu_header_top">
            <ul className="ul_menu_header_top">
              <Link to="/portafolio/diseno-de-logotipos">
                <li>
                  Diseño Grafico <i className="fa-solid fa-chevron-down"></i>
                </li>
                <ul className="diseno_Web_menu">
                  {subcategorias
                    .filter((sub) => sub.id_categoria === 1)
                    .map((sub) => (
                      <Link
                        to={`/portafolio-plan/${sub.url}`}
                        key={sub.id}
                        className="before:hidden mb-0 border-b-0 quitar_border"
                      >
                        <li className="w-full">{sub.titulo}</li>
                      </Link>
                    ))}
                </ul>
              </Link>
              <Link to="/portafolio/diseno-de-paginas-web">
                <li>
                  Diseño Web <i className="fa-solid fa-chevron-down"></i>
                </li>
                <ul className="diseno_Web_menu">
                  {subcategorias
                    .filter((sub) => sub.id_categoria === 2)
                    .map((sub) => (
                      <Link
                        to={`/portafolio-plan/${sub.url}`}
                        key={sub.id}
                        className="before:hidden mb-0 border-b-0 quitar_border"
                      >
                        <li className="w-full">{sub.titulo}</li>
                      </Link>
                    ))}
                </ul>
              </Link>
              <Link to="#">
                <li>
                  Servicios <i className="fa-solid fa-chevron-down"></i>
                </li>
                <ul className="diseno_Web_menu catalogos">
                  <Link
                    to="diseno-logotipo"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Diseño de Logotipo</li>
                  </Link>
                  <Link
                    to="diseno-web"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Diseño de Paginas Web</li>
                  </Link>
                  <Link
                    to="diseno-brochure"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Diseño de Bochure</li>
                  </Link>
                  <Link
                    to="diseno-personaje"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Diseño de Personajes</li>
                  </Link>
                  <Link
                    to="diseno-flyer"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Diseño de Flyer</li>
                  </Link>

                  <Link
                    to="alta-google"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Alta de Google</li>
                  </Link>
                  <Link
                    to="venta-hosting"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Hosting - Dominios</li>
                  </Link>
                  <Link
                    to="identidad-corporativa"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Identidad corporativa</li>
                  </Link>
                  <Link
                    to="animacion-logo"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Animación de logo</li>
                  </Link>
                  <Link
                    to="/audiovisual"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Producción Audiovisual</li>
                  </Link>
                  <Link
                    to="/posicionamiento-seo"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Inicio de SEO</li>
                  </Link>
                </ul>
              </Link>

              <Link to="#">
                <li>
                  Catalogos <i className="fa-solid fa-chevron-down"></i>
                </li>
                <ul className="diseno_Web_menu catalogos">
                  <Link to="brochure" className="w-full h-full quitar_Estilos">
                    <li>Brochure Logos Perú</li>
                  </Link>
                  <a
                    href="./../../../../public/catalogo/CATALOGO_TIENDAS_VIRTUALES_2023.pdf"
                    target="_blank"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Tiendas Virtuales</li>
                  </a>
                  <a
                    href="./../../../../public/catalogo/CATALOGO_FIRMA_DE_CORREO_2023.pdf"
                    target="_blank"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>
                      Firma de <br /> correos
                    </li>
                  </a>
                  <a
                    href="./../../../../public/catalogo/CATALOGO_FLYERS_2023.pdf"
                    target="_blank"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Flyers</li>
                  </a>
                  <a
                    href="./../../../../public/catalogo/CATALOGO_UNIFORMES.pdf"
                    target="_blank"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Uniformes</li>
                  </a>
                  <a
                    href="./../../../../public/catalogo/CATALOGO_SEO_ALTA_DE_GOOGLE.pdf"
                    target="_blank"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>
                      SEO-Alta <br /> de Google
                    </li>
                  </a>

                  <a
                    href="./../../../../public/catalogo/CATALOGO_WEB_INFORMATIVA_2023.pdf"
                    target="_blank"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Web Informativas</li>
                  </a>
                  <a
                    href="./../../../../public/catalogo/CATALOGO_WEB_ADMINISTRABLES_2023.pdf"
                    target="_blank"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>
                      Web
                      <br /> Administrables
                    </li>
                  </a>
                  <a
                    href="./../../../../public/catalogo/CATALOGO_REDES_SOCIALES_2023.pdf"
                    target="_blank"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Redes Sociales</li>
                  </a>
                  <a
                    href="./../../../../public/catalogo/CATALOGO_ROTULADOS_2023.pdf"
                    target="_blank"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li>Rotulados</li>
                  </a>
                  <a
                    href="./../../../../public/catalogo/LOGOFOLIO_2023.pdf"
                    target="_blank"
                    className="w-full h-full quitar_Estilos"
                  >
                    <li className="ultimo">Logofolio</li>
                  </a>
                </ul>
              </Link>

              <a href="https://www.logosperu.com/noticias">
                <li>Noticias</li>
              </a>
            </ul>
          </div>
          <div className="button_portafolio_header_top">
            <div
              className="primero_box_header relative"
              onClick={() => {
                setCarrito(false)
                setHeard(!heard)
              }}
            >
              <Link
                to="#"
                aria-label="Visita nuestra página de Twitter"
                className="hover:bg-[#BC3741]"
              >
                <IoHeartSharp className="text-white text-4xl" />
              </Link>
            </div>
            <HeardModal open={heard} setOpen={setHeard} />
            <div
              className="primero_box_header"
              onClick={() => {
                setHeard(false)
                setCarrito(true)
              }}
            >
              <Link
                to="#"
                className="hover:bg-[#BC3741]"
                aria-label="Visita nuestra página de Facebook"
              >
                <IoCartSharp className="text-white text-4xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="header_content_top2">
          <div
            onClick={() => {
              setCarrito(true)
            }}
            className={`box_primero_header_mobil ${
              open ? 'backroudactive' : ''
            }`}
          >
            <IoCartSharp className="text-white text-5xl" />
          </div>
          <Link
            to='/'
            className={`box_segundo_header_mobil ${
              open ? 'backroudactive' : ''
            }`}
          >
            {!open
              ? (
              <img
                src={logo_movil}
                alt="Diseño de Logos - Agencia de diseño Gráfico - logotipos"
                className="icono2__img"
              />
                )
              : (
              <img
                src={logazo_blanco}
                alt="Diseño de Logos - Agencia de diseño Gráfico - logotipos"
                className="icono1__img "
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
            <i className="fa fa-align-left"></i>
          </div>

          <CSSTransition
            in={open}
            timeout={300}
            classNames="alert"
            unmountOnExit
          >
            <div className="flotante_cuarto_mobil">
              {seleccion === 0
                ? (
                <ul className="content_flotante_cuarto_mobil">
                  <li className="item-menu__mobil">
                    <Link
                      to="/"
                      onClick={() => {
                        setOpen(false)
                      }}
                    >
                      INICIO
                    </Link>
                  </li>
                  <li className="item-menu__mobil">
                    <a
                      className="link-menu"
                      id="submenu1"
                      onClick={() => {
                        setSeleccion(1)
                      }}
                    >
                      DISEÑO GRÁFICO
                    </a>
                  </li>
                  <li className="item-menu__mobil">
                    <a
                      className="link-menu"
                      id="submenu2"
                      onClick={() => {
                        setSeleccion(3)
                      }}
                    >
                      DISEÑO WEB
                    </a>
                  </li>
                  <li className="item-menu__mobil">
                    <a
                      className="link-menu"
                      id="submenu3"
                      onClick={() => {
                        setSeleccion(2)
                      }}
                    >
                      SERVICIOS
                    </a>
                  </li>
                  <li className="item-menu__mobil">
                    <a
                      className="link-menu"
                      id="submenu4"
                      onClick={() => {
                        setSeleccion(5)
                      }}
                    >
                      CATÁLOGOS
                    </a>
                  </li>
                  <li className="item-menu__mobil">
                    <a href="https://www.logosperu.com/noticias/">NOTICIAS</a>
                  </li>
                </ul>
                  )
                : seleccion === 1
                  ? (
                <ul className="sub-menu submenu1">
                  <a
                    className="back-menu"
                    onClick={() => {
                      setSeleccion(0)
                    }}
                  >
                    <i
                      className="fas fa-chevron-left"
                      style={{ color: '#ffffff' }}
                    ></i>{' '}
                    Volver al menú anterior
                  </a>
                  <li className="item__submenu">
                    <a className="link__submenu">Construcción</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Ingeniería</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Arquitectura</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Gastronomía</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Automotriz</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Bar y Licorería</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Accesorios</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Ropa</a>
                  </li>
                </ul>
                    )
                  : seleccion === 2
                    ? (
                <ul className="sub-menu submenu3">
                  <a
                    className="back-menu"
                    onClick={() => {
                      setSeleccion(0)
                    }}
                  >
                    <i
                      className="fas fa-chevron-left"
                      style={{ color: '#ffffff' }}
                    ></i>{' '}
                    Volver al menú anterior
                  </a>
                  <li className="item__submenu">
                    <a className="link__submenu">Diseño de Brochure</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Diseño de Flyer</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Diseño de Personajes</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Diseño de Rotulados</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Identidad Corporativa</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Hosting - Dominios</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Alta de Google</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Inicio de SEO</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Animación de logo</a>
                  </li>
                </ul>
                      )
                    : seleccion === 3
                      ? (
                <ul className="sub-menu submenu2">
                  <a
                    className="back-menu"
                    onClick={() => {
                      setSeleccion(0)
                    }}
                  >
                    <i
                      className="fas fa-chevron-left"
                      style={{ color: '#ffffff' }}
                    ></i>{' '}
                    Volver al menú anterior
                  </a>
                  <li className="item__submenu">
                    <a className="link__submenu">Web Informativa</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Web Administrable</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Tienda Virtual</a>
                  </li>
                </ul>
                        )
                      : seleccion === 5
                        ? (
                <ul className="sub-menu submenu4">
                  <a
                    className="back-menu"
                    onClick={() => {
                      setSeleccion(0)
                    }}
                  >
                    <i
                      className="fas fa-chevron-left"
                      style={{ color: '#ffffff' }}
                    ></i>{' '}
                    Volver al menú anterior
                  </a>
                  <li className="item__submenu">
                    <a className="link__submenu">Brochure Logos Perú</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Tiendas Virtuales</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Firma de correos</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Flyer</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Uniformes</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">SEO - Alta de Google</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Web Informativas</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Web Administrables</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Redes Sociales</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Rotulados</a>
                  </li>
                  <li className="item__submenu">
                    <a className="link__submenu">Logofolio</a>
                  </li>
                </ul>
                          )
                        : null}
            </div>
          </CSSTransition>
        </div>

        <section className="cabeza">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 actualss">
                <div className="cabecera">
                  <div className="menu_contact " id="menu_contactID">
                    <ul
                      className="list_contac  backgrMenuTopDate"
                      id="menu_topDateId"
                    >
                      <li className="left">
                        <a href="tel:51993765495">
                          <i className="fa fa-mobile"></i> +51 993 765 495{' '}
                        </a>
                      </li>
                      <li className="left">
                        <a href="mailto:ventas@logosperu.com">
                          <i className="fa fa-envelope"></i>{' '}
                          ventas@logosperu.com
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          data-toggle="modal"
                          data-target="#modalinicio"
                          rel="noopener"
                          title="Asesoría Gratuita"
                        >
                          <i className="fa fa-newspaper-o"></i> Asesoría Gratis
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          data-toggle="modal"
                          data-target="#modalinterna"
                          rel="noopener"
                          title="Asesoría Gratuita"
                        >
                          <i className="fa fa-newspaper-o"></i> Asesoría Gratis
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section className="fixed bottom-0 left-0 m-6 z-50">
        <div className="w-full items-center justify-center gap-3 cambiar_ss">
          <div className="bg-primary rounded-full p-2 hover:p-0  transition-all group mb-0 quitar_margen hover:bg-white cursor-pointer" onClick={() => { window.open('https://www.facebook.com/DLogosPeru/', '_blank') }}>
            <IoLogoFacebook className="text-white text-4xl group-hover:text-[3.5rem] group-hover:text-primary transition-all" />
          </div>
          <div className="bg-primary rounded-full p-2 hover:p-0  transition-all group mb-0 quitar_margen hover:bg-white cursor-pointer" onClick={() => { window.open('https://www.instagram.com/dlogosperu/', '_blank') }}>
            <IoLogoInstagram className="text-white text-4xl group-hover:text-[3.5rem] group-hover:text-primary transition-all" />
          </div>
          <div className="bg-primary rounded-full p-2 hover:p-0  transition-all group mb-0 quitar_margen hover:bg-white cursor-pointer" onClick={() => { window.open('https://www.youtube.com/channel/UCPXxUSJAk5VaWGEaRmgFeew', '_blank') }}>
            <IoLogoYoutube className="text-white text-4xl group-hover:text-[3.5rem] group-hover:text-primary transition-all" />
          </div>
        </div>
      </section>

      <CaritoModal open={carrito} setOpen={setCarrito} />
      <Promocion open={openoferta} setOpen={setopenoferta} />
    </>
  )
}
