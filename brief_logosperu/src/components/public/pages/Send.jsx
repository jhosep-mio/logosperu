import React, { useEffect, useState } from "react";
import send from "../../../assets/images/send.gif";
// import draw from "../../../assets/images/draw.svg";
import { Link, useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import { BsWhatsapp } from "react-icons/bs";
import draw1 from "../../../assets/images/animate1.gif";
import draw2 from "../../../assets/images/undraw_completed_03xt.gif";
import draw3 from "../../../assets/images/undraw_happy_announcement_re_tsm0.svg";
import draw4 from "../../../assets/images/undraw_online_party_re_7t6g.svg";
import draw5 from "../../../assets/images/undraw_super_thank_you_re_f8bo.svg";
import draw6 from "../../../assets/images/undraw_well_done_re_3hpo.svg";
import ParticleBackroud from "../../shared/ParticleBackroud";


export const Send = () => {
  const [captureRef, setCaptureRef] = useState(null);
  const { id } = useParams();

  const images = ["draw1", "draw2", "draw3", "draw4", "draw5", "draw6"];

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  const handleCaptureAndShare = () => {
    if (captureRef) {
      html2canvas(captureRef).then((canvas) => {
        // Convertir el lienzo en una imagen en base64
        const imageBase64 = canvas.toDataURL("image/png");
        // Crear un elemento de enlace temporal para descargar la imagen
        const link = document.createElement("a");
        link.href = imageBase64;
        link.download = "captura.png";
        link.click();

        // Redirigir al usuario a WhatsApp con la imagen adjunta
        const url = `https://api.whatsapp.com/send/?phone=%2B51987038024`;
        window.open(url, "_blank");
      });
    }
  };

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <main>
        <section className="window" ref={setCaptureRef} style={{overflow: 'hidden'}}>
          <div className="window__wrapper">
            <div className="window__wrapper__head">
              <h2>
                <span>
                  <img src={send} alt="" />
                </span>
                Brief enviado exitosamente
              </h2>
            </div>
            <div className="window__wrapper__body" style={{position: 'relative', overflow: 'hidden'}}>
            <ParticleBackroud/>
              <h3>Gracias <stron className="text-4xl md:text-5xl font-bold">{id}</stron> </h3>
              <p>Se programara el inicio de su proyecto</p>
              <picture>
                <img src={randomImage == "draw1" && draw1 || randomImage == "draw2" && draw2 || randomImage == "draw3" && draw3 ||
                        randomImage == "draw4" && draw4 || randomImage == "draw5" && draw5 || randomImage == "draw6" && draw6
                } alt="" />
              </picture>
            </div>
            <div
              className="window__wrapper__footer"
            >
              <a className="window__wrapper__footer__what cursor-pointer" onClick={handleCaptureAndShare}>
                <BsWhatsapp></BsWhatsapp>Compartir
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
