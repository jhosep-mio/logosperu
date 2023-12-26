import { SwiperTestimonios } from './SwiperTestimonios'
import { FormularioContacto } from './FormularioContacto'
import { Whatsapp } from './Whatsapp'

// const getData = () => {
//   return axios.get(`${Global.url}/getItemsToPortafolioWhereCategorias/1`)
// }
// const getData2 = () => {
//   return axios.get(`${Global.url}/getSubCategoriasToPortafolio`)
// }

export default async function Footer () {
//   const response = await getData()
//   const response2 = await getData2()
//   const subcategorias: ValuesSubCategoriasPortafolio[] = response2.data
//   const items: ValuesItemsPortafolio[] = response.data

  return (
    <>
      {/* <section className='clientes_footer pt-5 lg:pt-24 lg:pb-[190px]'>
        <div className='container4 px-10'>
          <Rubros subcategorias={subcategorias} items={items} />
        </div>
      </section> */}
      <section className='clientes pb-16'>
        <div className='titulo_clientes'>
          <h2>CLIENTES SATISFECHOS</h2>
        </div>
        <div className='container max-w-[1450px]'>
          <div className='col-lg-12'>
            <div className='col-lg-12'>
              <div className='descrip_clientes'>
                <p>QUE DICEN DE NOSOTROS</p>
                <hr className='hr_first' />
                <hr className='hr_second' />
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='box_testimonios'>
                <div className='cuerpo_testimonio'>
                  <SwiperTestimonios />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pie_pagina'>
        <div className='py-10 lg:py-0 max-w-[1200px] mx-auto overflow-hidden'>
          <div className='row'>
            <div className='col-lg-12 ocultar'>
              <div className='formula_content'>
                <div className='titulo martin_top'>
                  <h2>CONTACTANOS</h2>
                  <hr className='hr_first' />
                  <hr className='hr_second' />
                </div>
                <div className='formulariofooter'>
                  <FormularioContacto />
                </div>
              </div>
            </div>
            <div className='col-lg-4 h-[70px]'>
              <div className='info_contact'>
                <div className='content_icon'>
                  <img
                    loading='lazy'
                    src='https://logosperu.com/public/img/iconos/mail.png'
                    alt=''
                  />
                </div>
                <div className='content_info'>
                  <p>
                    <a href='tel:+51987038024'> Ventas: (+51) 987 038 024</a>
                    <br />
                  </p>
                  <span>
                    <a href='mailto:ventas@logosperu.com'>
                      ventas@logosperu.com
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href='mailto:ventascorporativas@logosperu.com'>
                      ventascorporativas@logosperu.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='info_contact'>
                <div className='content_icon'>
                  <img
                    loading='lazy'
                    src='https://logosperu.com/public/img/iconos/telefono.png'
                    alt=''
                  />
                </div>
                <div className='content_info'>
                  <p>
                    <a href='tel:51982408652'> Desarrollo: (+51) 982 408 652</a>
                    <br />
                  </p>
                  <span>
                    <a>
                      <strong>Horario de Atención: </strong>
                    </a>
                  </span>
                  <br />
                  <span>
                    <a>
                      <strong>Lun-Vier:</strong> 09:00-18:00{' '}
                      <strong>Sab:</strong> 09:00-14:00
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='info_contact'>
                <div className='content_icon'>
                  <img
                    loading='lazy'
                    src='https://logosperu.com/public/img/iconos/telefono.png'
                    alt=''
                  />
                </div>
                <div className='content_info'>
                  <p>
                    <a href='tel:51982408652'> Diseño: (+51) 982 364 064</a>
                    <br />
                  </p>
                  <span>
                    <a>
                      <strong>Horario de Atención:</strong>{' '}
                    </a>
                  </span>
                  <br />
                  <span>
                    <a>
                      <strong>Lun-Vier:</strong> 09:00-18:00{' '}
                      <strong>Sab:</strong> 09:00-14:00
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='end_footer'>
          <p>
            © Copyright 2016-2023 - Todos los derechos reservados Design by{' '}
            <span>Logos Perú </span>- Agencia de Diseño Gráfico & Desarrollo Web{' '}
          </p>
        </div>
      </section>

      <Whatsapp />
    </>
  )
}
