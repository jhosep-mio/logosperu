import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Footer } from './includes/Footer';
import { Header } from './includes/Header';
export const PublicLayout = () => {
    return (
      <>
        <Header/>
            <Outlet/>
        <Footer/>
      </>
    )
}