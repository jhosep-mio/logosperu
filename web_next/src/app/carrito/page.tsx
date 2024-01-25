import { ContenidoPago } from './contenido/ContenidoPago'
export const metadata = {
  title: 'Logos Perú - Finalizar compra',
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

export default function InternaCarrito () {
  return (
    <>
      <section className='pt-60 bg-[#F9F8FF] min-h-screen font_baloo'>
        <ContenidoPago />
      </section>
    </>
  )
}
