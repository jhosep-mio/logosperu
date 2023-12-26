import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { PublicLayout } from '../components/public/PublicLayout';
import Home from '../components/public/pages/Home';

import { Informativas } from '../components/public/pages/Informativas';
import { Administrables } from '../components/public/pages/Administrables';
import { Send } from '../components/public/pages/Send';
import React from 'react';
import { Tienda } from '../components/public/pages/Tienda';
import { Landing } from '../components/public/pages/Landing';
import Brochure from '../components/public/pages/Brochure';
import Flyer from '../components/public/pages/Flyer';
import Comunity from '../components/public/pages/Comunity';


export const Routing = () => {
  
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Routes>
            {/* PUBLIC */}
            <Route path='/' element={<PublicLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='diseño' element={<Home/>}/>
                <Route path='desarrollo/informativas' element={<Informativas/>}/>
                <Route path='desarrollo/administrables' element={<Administrables/>}/>
                <Route path='desarrollo/tiendas' element={<Tienda/>}/>
                <Route path='desarrollo/landing-page' element={<Landing/>}/>
                <Route path='briefbrochure' element={<Brochure/>}/>
                <Route path='briefFlyer' element={<Flyer/>}/>
                <Route path='briefComunity' element={<Comunity/>}/>
                <Route path='send-success/:id' element={<Send/>}/>
            </Route>
            
            <Route path='*' element={
                <>
                    <p>
                        <h1>ERROR 404</h1>
                    </p>
                </>
            } />
        </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
    )
}
