import React, { useEffect } from 'react';
import logo from '../../../assets/logos/logos-peru.svg';
import { Link } from "react-router-dom";

import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import Swal from 'sweetalert2';


export const Header = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const portafolio = document.querySelector('#portafolio');
      const ofertas = document.querySelector('#ofertas');
      if (portafolio) {
        portafolio.classList.toggle('animation');
      }
      if(ofertas){
        ofertas.classList.toggle('animation');
      }
    }, 6200);

    return () => clearInterval(interval);
  }, []);


  const alerta = () =>{
    Swal.fire({
        imageUrl: "https://logosperu.com/brief/promocion.jpg",
        imageHeight: 500,
        imageWidth: 500,
        timer: 4000,
        padding: '0',
        imageAlt: 'Promoción'
      })
  }

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Link to="https://logosperu.com/" target='_blank'>
            <div className='header__logo__bg'>
              <picture>
                <img src={logo} alt="" />
              </picture>

            </div>
                
            <h3>Logos Perú</h3>
          </Link>


        </div>
      </header>

      <section className="offers">
          <div className="offers__options">
            <div className="offers__options__option animation" id="portafolio">
              <a href='https://www.logosperu.com/portafolios/diseno-de-logotipos' target='_blank'><h2><span><BsFillBriefcaseFill></BsFillBriefcaseFill></span>Portafolio</h2></a>
            </div>
            <div className="offers__options__option" id="ofertas">
              <Link onClick={alerta}><h2><span><MdShoppingCart></MdShoppingCart></span>Ofertas</h2></Link>
            </div>
           
          </div>
      </section>
    </>
  )

}
