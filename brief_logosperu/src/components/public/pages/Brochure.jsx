import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import tipo11 from "../../../assets/brochure/tipo1.png";
import tipo22 from "../../../assets/brochure/tipo2.png";
import tipo33 from "../../../assets/brochure/tipo3.png";
import tipo44 from "../../../assets/brochure/tipo4.png";
import bro1 from "../../../assets/brochure/bro1.jpg";
import bro2 from "../../../assets/brochure/bro2.jpg";
import bro3 from "../../../assets/brochure/bro3.jpg";
import { RiCheckDoubleFill } from "react-icons/ri";
import { CSSTransition } from "react-transition-group";
import { FaTimes, FaImage } from "react-icons/fa";
import Swal from "sweetalert2";
import { Loading } from "../../shared/Loading";
import { useFormik } from "formik";
import { SchemaBriefBrochure } from "../../shared/schemas/Schema";
import { Errors2 } from "../../shared/Errors2";
import { ModalCodigo } from "../../shared/modals/ModalCodigo";
import { ModalCliente } from "../../shared/modals/ModalCliente";

const Brochure = () => {
  const [, setCaptureRef] = useState(null);
  const [, setUbicacion] = useState(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [datos, setDatos] = useState([]);
  const handleOpen = () => setOpen(!open);
  const [ubicacionvalidada, setUbicacionValidada] = useState(false);

  const [validacionCorrecta, setValidacionCorrecta] = useState(false);

  const [imagen2, setImagen2] = useState({});
  const [boton2, setBoton2] = useState(false);
  const [url2, setUrl2] = useState("");

  const [option1Checked, setOption1Checked] = useState(true);
  const [option2Checked, setOption2Checked] = useState(false);
  const [option3Checked, setOption3Checked] = useState(true);
  const [option4Checked, setOption4Checked] = useState(false);

  const [tipo1, settipo1] = useState(true);
  const [tipo2, settipo2] = useState(false);
  const [tipo3, settipo3] = useState(false);
  const [tipo4, settipo4] = useState(false);
  const [tipo5, settipo5] = useState(true);
  const [tipo6, settipo6] = useState(false);
  const [tipo7, settipo7] = useState(false);

  const [idCliente, setIdCliente] = useState(0);
  const [id_Codigo, setIdCodigo] = useState(0);
  const [id_Venta, setIdVenta] = useState(0);

  const handleOption1Change = (event) => {
    setOption1Checked(event.target.checked);
    setOption2Checked(false);
  };

  const handleOption2Change = (event) => {
    setOption2Checked(event.target.checked);
    setOption1Checked(false);
  };

  const handleOption3Change = (event) => {
    setOption3Checked(event.target.checked);
    setOption4Checked(false);
  };

  const handleOption4Change = (event) => {
    setOption4Checked(event.target.checked);
    setOption3Checked(false);
  };

  const longText = `Sin tantos elementos gráficos, se centra en el texto e imágenes con algún detalle sutil que pasara desapercibido.`;
  const longText2 = `Suele ver más elementos, como colocar fondos de color o imagen detrás del texto. Además de agregar figuras de color en transparencia sobre imágenes`;
  const longText3 = `Llevan figuras geométricas en el diseño, así como la forma de las imágenes, se relacionan de acuerdo a la forma del logotipo. Suelen ser llamativos.`;

  const imagen2Function = (e) => {
    const url = e.target.files[0];
    // CREAR URL
    const urlTmp = URL.createObjectURL(url);
    // CARGAR PREVIEW IMG
    document.getElementById("img-preview2").src = urlTmp;
    document.getElementById("icon-image2").classList.add("d-none");
    document.getElementById("img-preview2").classList.remove("d-none");
    setUrl2(url["name"]);
    setBoton2(true);

    setImagen2({
      archivo: e.target.files[0],
      archivoName: `${Date.now()}_${e.target.files[0].name}`,
    });
  };

  const deleteImg2 = (e) => {
    e.preventDefault();
    setBoton2(false);
    document.getElementById("icon-image2").classList.remove("d-none");
    document.getElementById("img-preview2").classList.add("d-none");
    document.getElementById("imagen2").value = "";
    document.getElementById("foto_delete").value = "";
  };

  const validarCodigo = () => {
    if (!option1Checked && !option2Checked) {
      Swal.fire(
        "",
        "Debes seleccionar al menos un medio para el cual se utilizara el brochure",
        "warning"
      );
    } else if (!option3Checked && !option4Checked) {
      Swal.fire("", "Debe seleccionar las medidas para el brochure", "warning");
    } else if (
      (option4Checked && values.medida1.length == 0) ||
      (option4Checked && values.medida2.length == 0)
    ) {
      Swal.fire(
        "",
        "Debe colocar las medidas personalizas en la pregunta 3",
        "warning"
      );
    } else {
      handleOpen();
    }
  };

  useEffect(() => {
    if (validacionCorrecta && open && !ubicacionvalidada) {
      document.body.style.overflow = "hidden";
      const cargarMapa = () => {
        const mapa = new window.google.maps.Map(
          document.getElementById("map"),
          {
            center: { lat: -12.046373, lng: -77.042754 }, // Coordenadas de Lima
            zoom: 12,
          }
        );

        const marcador = new window.google.maps.Marker({
          map: mapa,
          position: mapa.getCenter(),
          draggable: true,
        });

        setMap(mapa);
        setMarker(marcador);

        // Manejar el evento de arrastrar y soltar el marcador
        marcador.addListener("dragend", () => {
          const lat = marcador.getPosition().lat();
          const lng = marcador.getPosition().lng();
          setUbicacion({ lat, lng });
          setLatitud(lat);
          setLongitud(lng);
        });

        // Agregar el buscador de ubicación
        const input = document.getElementById("ubicacion-input");
        const autocomplete = new window.google.maps.places.Autocomplete(input);

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();

          if (!place.geometry || !place.geometry.location) {
            return;
          }

          const { lat, lng } = place.geometry.location;
          mapa.setCenter({ lat, lng });
          marcador.setPosition({ lat, lng });
          setUbicacion({ lat, lng });
          setLatitud(lat);
          setLongitud(lng);
        });
      };

      if (window.google && window.google.maps) {
        cargarMapa();
      } else {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCQnmO2O0RPVFuzisXOA402_ZSbwLtSU5Q&libraries=places`;
        script.onload = cargarMapa;
        document.head.appendChild(script);
      }

      return () => {
        // No es necesario limpiar el script en este caso
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    handleSubmit,
    handleChange,
    errors,
    values,
    touched,
    handleBlur,
    isSubmitting,
  } = useFormik({
    initialValues: {
      nombres: "",
      id_venta: "",
      nombre_comercial: "",
      medida1: "",
      medida2: "",
      datoscontacto: "",
      historia: "",
      objetivo: "",
      servicios: "",
      enlace: "",
      codigo: "",
    },
    validationSchema: SchemaBriefBrochure,
    onSubmit: validarCodigo,
  });

  useEffect(() => {
    if (errors && isSubmitting) {
      const firstErrorKey = Object.keys(errors)[0];
      const firstErrorElement = document.getElementsByName(firstErrorKey)[0];
      if (firstErrorElement) {
        firstErrorElement.focus();
      }
    }
  }, [touched, errors, isSubmitting]);

  return (
    <>
      <main className="main" ref={setCaptureRef}>
        <section className="main__right">
          <div className="main__right__title">
            <h2>Cuestionario creativo de Brochure </h2>
          </div>
          <div className="main__right__form">
            <form action="" className="" onSubmit={handleSubmit}>
              <div>
                <ol>
                  <li>
                    <h5>¿Cuál es el nombre comercial de la empresa?</h5>
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Nombre de su empresa"
                        name="nombre_comercial"
                        value={values.nombre_comercial}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <Errors2
                      errors={errors.nombre_comercial}
                      touched={touched.nombre_comercial}
                    />
                  </li>

                  <li>
                    <h5>¿Para qué medios se utilizará el brochure?</h5>
                    <div className="input2">
                      <div className="radio-container">
                        <div className="radio-wrapper">
                          <label className="radio-button">
                            <input
                              type="checkbox"
                              id="medio1"
                              checked={option1Checked}
                              onChange={handleOption1Change}
                              name="medios"
                            />
                            <span className="radio-checkmark"></span>
                            <span className="radio-label">
                              Digital <br />
                            </span>
                          </label>
                        </div>
                        <div className="radio-wrapper">
                          <label className="radio-button">
                            <input
                              type="checkbox"
                              id="medio2"
                              checked={option2Checked}
                              onChange={handleOption2Change}
                              name="medios2"
                            />
                            <span className="radio-checkmark"></span>
                            <span className="radio-label">
                              Impreso <br />
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>

                  <div className="mb-10">
                    <li>
                      <h5>Medidas que desea para su brochure (*) </h5>

                      <div className="radio-container">
                        <div className="radio-wrapper">
                          <label className="radio-button">
                            <input
                              type="radio"
                              id="medio3"
                              checked={option3Checked}
                              onChange={handleOption3Change}
                              name="medios3"
                              autoFocus={true}
                            />
                            <span className="radio-checkmark"></span>
                            <span className="radio-label">
                              A4 <br />
                            </span>
                          </label>
                        </div>
                        <div className="radio-wrapper">
                          <label className="radio-button">
                            <input
                              type="radio"
                              id="option2"
                              checked={option4Checked}
                              onChange={handleOption4Change}
                              name="medios4"
                            />
                            <span className="radio-checkmark"></span>
                            <span className="radio-label">
                              A medida <br />
                            </span>
                          </label>
                          <b></b>
                        </div>
                      </div>
                    </li>

                    <CSSTransition
                      in={option4Checked}
                      timeout={300}
                      classNames="fade"
                      unmountOnExit
                    >
                      <div className="w-full">
                        <p className=" pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-transparent text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem] ">
                          Incluir medida
                        </p>
                        <div className="w-full border p-4 flex flex-col gap-1 ">
                          <label
                            htmlFor="ancho"
                            id="icon-ancho"
                            className="btn btn-primary col-md-12 text-black mb-2 flex items-center gap-1"
                          >
                            Ancho{" "}
                            <input
                              type="text"
                              className="input"
                              placeholder="Medidas en píxeles"
                              name="medida1"
                              value={values.medida1}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              disabled={false}
                            />
                          </label>

                          <label
                            htmlFor="ancho"
                            id="icon-ancho"
                            className="btn btn-primary col-md-12 text-black mb-2 flex items-center gap-1"
                          >
                            Alto{" "}
                            <input
                              type="text"
                              className="input"
                              name="medida2"
                              placeholder="Medidas en píxeles"
                              value={values.medida2}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              disabled={false}
                            />
                          </label>
                        </div>
                      </div>
                    </CSSTransition>
                  </div>

                  <li>
                    <h5>
                      Adjunta tu logotipo (Adjunta solo la imagen, si tienes tu
                      logo en formato por favor enviarlo por Whatsapp)
                    </h5>
                  </li>

                  <div className="w-full ">
                    <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8 border-[2px] border-[lightgrey] rounded-3xl ">
                      <div className="flex-1 flex flex-col md:flex-row items-center md:gap-4 p-10">
                        <div className="w-1/4">
                          <label
                            htmlFor="imagen2"
                            id="icon-image2"
                            className="btn btn-primary col-md-12 btn-openImage cursor-pointer"
                          >
                            <FaImage className="icon-preimage text-[#9888dac5]" />
                          </label>
                          {boton2 === true ? (
                            <span
                              id="icon-cerrar"
                              className="flex justify-center items-center  text-white rounded-md mb-5 gap-2"
                            >
                              <p className="w-full line-clamp-1 text-center text-black">
                                {"" + url2}
                              </p>
                              <button
                                className="btn btn-danger mb-0 flex items-center justify-center text-red-600"
                                onClick={deleteImg2}
                              >
                                <FaTimes />
                              </button>
                            </span>
                          ) : (
                            ""
                          )}
                          <input
                            accept="image/*"
                            id="imagen2"
                            className="d-none"
                            type="file"
                            name="imagen2"
                            onChange={imagen2Function}
                          />
                          <img
                            className="img-thumbnail d-none cursor-pointer"
                            id="img-preview2"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <li>
                    <h5>Datos de contacto: </h5>
                    <div className="input">
                      <textarea
                        id=""
                        cols="4"
                        rows="5"
                        placeholder="Puedes agregar números telefónicos y correos electrónicos"
                        name="datoscontacto"
                        value={values.datoscontacto}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                    </div>
                    <Errors2
                      errors={errors.datoscontacto}
                      touched={touched.datoscontacto}
                    />
                  </li>

                  <li>
                    <h5>Historia de la marca: </h5>
                    <div className="input">
                      <textarea
                        id=""
                        cols="4"
                        rows="5"
                        placeholder="Información acerca de tu empresa que deseas que vaya en tu brochure"
                        name="historia"
                        value={values.historia}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                    </div>
                    <Errors2
                      errors={errors.historia}
                      touched={touched.historia}
                    />
                  </li>

                  <li>
                    <h5>Objetivo de la marca: </h5>
                    <div className="input">
                      <textarea
                        id=""
                        cols="4"
                        rows="5"
                        placeholder="Propósito principal que tu marca busca cumplir o el impacto que deseas tener en tu audiencia o en el mercado"
                        name="objetivo"
                        value={values.objetivo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                    </div>
                    <Errors2
                      errors={errors.objetivo}
                      touched={touched.objetivo}
                    />
                  </li>

                  <li>
                    <h5>Servicios y/o productos: </h5>
                    <div className="input">
                      <textarea
                        id=""
                        cols="4"
                        rows="5"
                        placeholder="Solo la información detallada de tus productos y/o servicios"
                        name="servicios"
                        value={values.servicios}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                    </div>
                    <Errors2
                      errors={errors.servicios}
                      touched={touched.servicios}
                    />
                  </li>

                  <li>
                    <h5>
                      Adjunta un enlace de Google Drive que contenga las
                      imágenes que desear mostrar en tu brochure
                    </h5>
                    <div className="input">
                      <input
                        type="text"
                        placeholder=""
                        name="enlace"
                        value={values.enlace}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <Errors2 errors={errors.enlace} touched={touched.enlace} />
                  </li>

                  <li>
                    <h5>Estilo de tipografía</h5>
                    <div className="w-full flex flex-col mt-8">
                      <div className="flex flex-col md:flex-row w-full mt-5 gap-5">
                        <div
                          className={`w-full md:w-1/2  flex justify-center flex-col items-center cursor-pointer relative ${
                            tipo1 ? "border border-green-400" : "border"
                          }`}
                          onClick={() => {
                            settipo1(!tipo1);
                          }}
                        >
                          {tipo1 && (
                            <RiCheckDoubleFill className="text-green-600  absolute top-0 right-0 text-5xl mx-4" />
                          )}
                          <h3 className="bg-[#f7f7f7] w-fit pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-700 text-center text-[2rem]">
                            1. Manuscrito
                          </h3>
                          <div className="w-full flex flex-col items-center select-none">
                            <img
                              src={tipo11}
                              alt=""
                              className="w-40 h-40 object-contain"
                            />
                          </div>
                        </div>

                        <div
                          className={`w-full md:w-1/2  flex justify-center flex-col items-center cursor-pointer relative ${
                            tipo2 ? "border border-green-400" : "border"
                          }`}
                          onClick={() => {
                            settipo2(!tipo2);
                          }}
                        >
                          {tipo2 && (
                            <RiCheckDoubleFill className="text-green-600  absolute top-0 right-0 text-5xl mx-4" />
                          )}
                          <h3 className="bg-[#f7f7f7] w-fit pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-700 text-center text-[2rem]">
                            2. Elegante
                          </h3>
                          <div className="w-full flex flex-col items-center select-none">
                            <img
                              src={tipo22}
                              alt=""
                              className="w-40 h-40 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row w-full mt-5 gap-5">
                        <div
                          className={`w-full md:w-1/2  flex justify-center flex-col items-center cursor-pointer relative ${
                            tipo3 ? "border border-green-400" : "border"
                          }`}
                          onClick={() => {
                            settipo3(!tipo3);
                          }}
                        >
                          {tipo3 && (
                            <RiCheckDoubleFill className="text-green-600  absolute top-0 right-0 text-5xl mx-4" />
                          )}
                          <h3 className="bg-[#f7f7f7] w-fit pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-700 text-center text-[2rem]">
                            3. Simple
                          </h3>
                          <div className="w-full flex flex-col items-center select-none">
                            <img
                              src={tipo33}
                              alt=""
                              className="w-40 h-40 object-contain"
                            />
                          </div>
                        </div>
                        <div
                          className={`w-full md:w-1/2  flex justify-center flex-col items-center cursor-pointer relative ${
                            tipo4 ? "border border-green-400" : "border"
                          }`}
                          onClick={() => {
                            settipo4(!tipo4);
                          }}
                        >
                          {tipo4 && (
                            <RiCheckDoubleFill className="text-green-600  absolute top-0 right-0 text-5xl mx-4" />
                          )}
                          <h3 className="bg-[#f7f7f7] w-fit pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-700 text-center text-[2rem]">
                            4. Fuerte
                          </h3>
                          <div className="w-full flex flex-col items-center">
                            <img
                              src={tipo44}
                              alt=""
                              className="w-32 h-32 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <h5>Estilo de brochure</h5>
                    <div className="w-full flex flex-col mt-8">
                      <div className="flex flex-col md:flex-row w-full mt-5 gap-5">
                        <Tooltip title={longText}>
                          <div
                            className={`w-full md:w-1/2  flex justify-center flex-col items-center cursor-pointer relative ${
                              tipo5 ? "border border-green-400" : "border"
                            }`}
                            onClick={() => {
                              settipo5(!tipo5);
                            }}
                          >
                            {tipo5 && (
                              <RiCheckDoubleFill className="text-green-600  absolute top-0 right-0 text-5xl mx-4" />
                            )}
                            <h3 className="bg-[#f7f7f7] w-fit pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-700 text-center text-[2rem]">
                              1. Minimalista
                            </h3>
                            <div className="w-full flex flex-col items-center select-none">
                              <img
                                src={bro1}
                                alt=""
                                className="w-[380px] object-contain"
                              />
                            </div>
                          </div>
                        </Tooltip>

                        <Tooltip title={longText2}>
                          <div
                            className={`w-full md:w-1/2  flex justify-center flex-col items-center cursor-pointer relative ${
                              tipo6 ? "border border-green-400" : "border"
                            }`}
                            onClick={() => {
                              settipo6(!tipo6);
                            }}
                          >
                            {tipo6 && (
                              <RiCheckDoubleFill className="text-green-600  absolute top-0 right-0 text-5xl mx-4" />
                            )}
                            <h3 className="bg-[#f7f7f7] w-fit pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-700 text-center text-[2rem]">
                              2. Integrado
                            </h3>
                            <div className="w-full flex flex-col items-center select-none">
                              <img
                                src={bro2}
                                alt=""
                                className="w-[380px] object-contain"
                              />
                            </div>
                          </div>
                        </Tooltip>
                      </div>
                      <div className="flex flex-col md:flex-row w-full mt-5 gap-5">
                        <Tooltip title={longText2}>
                          <div
                            className={`w-full md:w-1/2  flex justify-center flex-col items-center cursor-pointer relative ${
                              tipo7 ? "border border-green-400" : "border"
                            }`}
                            onClick={() => {
                              settipo7(!tipo7);
                            }}
                          >
                            {tipo7 && (
                              <RiCheckDoubleFill className="text-green-600  absolute top-0 right-0 text-5xl mx-4" />
                            )}
                            <h3 className="bg-[#f7f7f7] w-fit pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-700 text-center text-[2rem]">
                              3. Geométrico
                            </h3>
                            <div className="w-full flex flex-col items-center select-none">
                              <img
                                src={bro3}
                                alt=""
                                className="w-[380px] object-contain"
                              />
                            </div>
                          </div>
                        </Tooltip>
                      </div>
                    </div>
                  </li>
                </ol>
                <input
                  type="submit"
                  value="Enviar"
                  className="btn_enviar cursor-pointer"
                  // onClick={handleSubmit(validarCodigo)}
                />
              </div>
            </form>
          </div>
        </section>
      </main>
      {open && (
        <div className="inset-0  h-full w-full z-[500] fixed flex flex-col justify-center items-center mdal-zz overflow-hidden">
          {loading ? (
            <Loading />
          ) : (
            <>
              {validacionCorrecta ? (
                <ModalCliente
                  setOpen={setOpen}
                  validacionCorrecta={validacionCorrecta}
                  datos={datos}
                  ubicacionvalidada={ubicacionvalidada}
                  setMap={setMap}
                  setMarker={setMarker}
                  setUbicacion={setUbicacion}
                  setLatitud={setLatitud}
                  setLongitud={setLongitud}
                  map={map}
                  latitud={latitud}
                  longitud={longitud}
                  marker={marker}
                  id_Venta={id_Venta}
                  formulario={values}
                  option1Checked={option1Checked}
                  option2Checked={option2Checked}
                  option3Checked={option3Checked}
                  option4Checked={option4Checked}
                  imagen2={imagen2}
                  tipo1={tipo1}
                  tipo2={tipo2}
                  tipo3={tipo3}
                  tipo4={tipo4}
                  tipo5={tipo5}
                  tipo6={tipo6}
                  tipo7={tipo7}
                  idCliente={idCliente}
                  id_Codigo={id_Codigo}
                />
              ) : (
                <ModalCodigo
                  setOpen={setOpen}
                  setValidacionCorrecta={setValidacionCorrecta}
                  setDatos={setDatos}
                  setLatitud={setLatitud}
                  setUbicacionValidada={setUbicacionValidada}
                  setLongitud={setLongitud}
                  setLoading={setLoading}
                  setIdCliente={setIdCliente}
                  setIdCodigo={setIdCodigo}
                  setIdVenta={setIdVenta}
                />
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Brochure;
