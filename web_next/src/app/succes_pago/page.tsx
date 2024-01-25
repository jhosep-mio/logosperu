import { BsWhatsapp } from 'react-icons/bs'

export const metadata = {
  title: 'Compra exitosa - Logos Perú',
  msvalidate: 'A01D8EBEAA551809606CCFFE234E6DF5',
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
  articlePublisher: 'https://facebook.com/DLogosPeru/',
  ogType: 'article',
  httpEquiv: {
    'content-type': 'text/html; charset=UTF-8',
    'content-language': 'es'
  },
  icons: {
    icon: '/logos/web.png'
  }
}

export default function SuccesPago () {
  const images = ['draw1', 'draw2', 'draw3', 'draw4', 'draw5', 'draw6']
  const randomIndex = Math.floor(Math.random() * images.length)
  const randomImage = images[randomIndex]

  return (
    <div className='h-fit min-h-screen w-[99wv] flex items-center justify-center p-0 pt-52'>
      <section
        className='window px-20 pb-20'
        style={{ overflow: 'hidden' }}
      >
        <div className='window__wrapper'>
          <div className='window__wrapper__head'>
            <h2>
              Compra realizada exitosamente
            </h2>
          </div>
          <div
            className='window__wrapper__body'
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <h3 className='my-4'>
              Se le envio un correo con los detalles de su compra
              <strong className='text-4xl md:text-5xl font-bold' />{' '}
            </h3>
            {/* <p className=''><strong>NOTA:</strong> Su compra fue realizada atraves de una transferencia, una vez confirmemos su pago podra visualizar los cursos adquiridos dentro de su cuenta.</p> */}
            <picture>
              <img
                src={
                    (randomImage == 'draw1' ? '/succespago/undraw_completed_03xt.gif' : '') ||
                    (randomImage == 'draw2' ? '' : '/succespago/undraw_happy_announcement_re_tsm0.svg') ||
                    (randomImage == 'draw3' ? '' : '/succespago/undraw_online_party_re_7t6g.svg') ||
                    (randomImage == 'draw4' ? '' : '/succespago/undraw_super_thank_you_re_f8bo.svg') ||
                    (randomImage == 'draw5' ? '' : '/succespago/undraw_well_done_re_3hpo.svg') ||
                    (randomImage == 'draw6' ? '' : '/succespago/animate1.gif')
                  }
                alt=''
              />
            </picture>
          </div>
          <div className='window__wrapper__footer'>
            <a
              className='window__wrapper__footer__what cursor-pointer'
              target='_blank'
              href='https://api.whatsapp.com/send/?phone=%2B51903318009&text&type=phone_number&app_absent=0'
              rel='noreferrer'
            >
              <BsWhatsapp />Whatsapp
            </a>
            <p className='text-lg w-full text-center font-semibold mt-6'>
              Si desea agilizar el proceso puede comunicarse a traves de
              Whatsapp
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
