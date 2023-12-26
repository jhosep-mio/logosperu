import {React} from 'react';
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import logo from '../../../assets/logos/logos-peru.svg';
import ubicacion from './../../../assets/images/ubicacion.png';
import mail from './../../../assets/images/mail.png';
import telefono from './../../../assets/images/telefono.png';


export const Footer = () => {
  return (
    <>
    <footer>
        <section className="footer">
            <div className="general-descripcion">
                <div className="direccion direccion1">
                    <div className="direccion-imagen">
                        <img loading="lazy" src={ubicacion} alt="" />
                    </div>
                    <div className="direccion-contenido">
                        <h2>LOS OLIVOS</h2>
                        <div className="backs">
                            <p>Jr. Tauro 887 Urb. Mercurio</p>
                        </div>
                    </div>
                </div>
    
                <div className="direccion direccion2">
                    <div className="direccion-imagen">
                        <img loading="lazy" src={mail} alt="" />
                    </div>
                    <div className="direccion-contenido">
                        <h2>ventas@logosperu.com</h2>
                        <div className="backs">
                            <p>administracion@logosperu.com</p>
                        </div>
                    </div>
                </div>
    
                <div className="direccion direccion3">
                    <div className="direccion-imagen">
                        <img loading="lazy" src={telefono} alt=""/>
                    </div>
                    <div className="direccion-contenido">
                        <h2>(+51) 987 038 024</h2>
                    </div>
                </div>
    
            </div>
            
            <div className="pie-pagina">
                <p>© Copyright 2016-2023 - Todos los derechos reservados Design by <span>Logos Perú </span> - Agencia de Diseño Gráfico & Desarrollo Web</p>
            </div>
        </section>
    </footer>
     
    </>
  )
}
