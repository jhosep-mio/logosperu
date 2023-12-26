import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { PublicLayout } from '../components/public/PublicLayout'
import { AuthProvider } from '../context/AuthProvider'
import { Home } from '../components/public/Home'
import { AltaGoogle } from '../components/public/pages/servicios/AltaGoogle'
import { Brochure } from '../components/public/pages/servicios/Brochure'
import { VentaHosting } from '../components/public/pages/servicios/VentaHosting'
import { DiseñoFlyers } from '../components/public/pages/servicios/DiseñoFlyers'
import { IdentidadCorporativa } from '../components/public/pages/servicios/IdentidadCorporativa'
import { DiseñoPersonaje } from '../components/public/pages/servicios/DiseñoPersonaje'
import { InicioSeo } from '../components/public/pages/servicios/InicioSeo'
import { MyBrochure } from '../components/public/pages/catalogo/MyBrochure'
import { Portafolio } from '../components/public/pages/portafolio/Portafolio'
import { PortafolioViews } from '../components/public/pages/portafolio/PortafolioViews'
import { ItemsPortafolio } from '../components/public/pages/portafolio/ItemsPortafolio'
import { AnimacionLogo } from '../components/public/pages/servicios/AnimacionLogo'
import { DisenoLogotipo } from '../components/public/pages/servicios/DisenoLogotipo'
import { DiseñoWeb } from '../components/public/pages/servicios/DiseñoWeb'
import { Audiovisual } from '../components/public/pages/servicios/Audiovisual'

export const Routing = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            {/* BROCHURE */}
            <Route path='diseno_brochure' element={<Brochure/>}/>
            <Route path='diseno-brochure' element={<Brochure/>}/>
            {/* VENTA DE HOSTING */}
            <Route path='venta_hosting' element={<VentaHosting/>}/>
            <Route path='venta-hosting' element={<VentaHosting/>}/>
            {/* DISEÑO DE FLYERS */}
            <Route path='diseno_flyer' element={<DiseñoFlyers/>}/>
            <Route path='diseno-flyer' element={<DiseñoFlyers/>}/>

            <Route path='identidad_corporativa' element={<IdentidadCorporativa/>}/>
            <Route path='identidad-corporativa' element={<IdentidadCorporativa/>}/>

            <Route path='diseno_personaje' element={<DiseñoPersonaje/>}/>
            <Route path='diseno-personaje' element={<DiseñoPersonaje/>}/>

            <Route path='diseno-logotipo' element={<DisenoLogotipo/>}/>
            <Route path='diseno_logotipo' element={<DisenoLogotipo/>}/>

            <Route path='diseno-web' element={<DiseñoWeb/>}/>
            <Route path='diseno_web' element={<DiseñoWeb/>}/>

            <Route path='alta_google' element={<AltaGoogle/>}/>
            <Route path='alta-google' element={<AltaGoogle/>}/>

            <Route path='animacion_logo' element={<AnimacionLogo/>}/>
            <Route path='animacion-logo' element={<AnimacionLogo/>}/>

            <Route path='posicionamiento_seo' element={<InicioSeo/>}/>
            <Route path='posicionamiento-seo' element={<InicioSeo/>}/>

            <Route path='brochure' element={<MyBrochure/>}/>
            <Route path='audiovisual' element={<Audiovisual/>}/>

            <Route path='portafolio' element={<Portafolio/>}/>
            <Route path='portafolio/:texto' element={<PortafolioViews/>}/>
            <Route path='portafolio-plan/:texto' element={<ItemsPortafolio/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
