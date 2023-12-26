import React, { Fragment, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../../assets/logos/logos-peru.svg";
import porta1 from "../../../assets/portafolio/portafolio1.png";
import porta2 from "../../../assets/portafolio/portafolio2.png";
import logo1 from "../../../assets/images/logo1.png";
import logo2 from "../../../assets/images/logo2.png";
import logo3 from "../../../assets/images/logo3.png";
import logo4 from "../../../assets/images/logo4.png";
import logo5 from "../../../assets/images/logo5.png";
import logo6 from "../../../assets/images/logo6.png";
import logo7 from "../../../assets/images/logo7.png";
import logo8 from "../../../assets/images/logo8.png";
import logo9 from "../../../assets/images/logo9.png";
import logo10 from "../../../assets/images/logo10.png";
import logo11 from "../../../assets/images/logo11.png";
import logo12 from "../../../assets/images/logo12.png";


// Import Swiper styles
import "swiper/css";
import { Link, useNavigate } from "react-router-dom";
import { RiCheckDoubleFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { Errors } from "../../shared/Errors";
import { CSSTransition } from "react-transition-group";
import { FaTimes, FaImage } from "react-icons/fa";
import html2canvas from "html2canvas";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { Global } from "../../../helper/Global";
import axios from "axios";
import Swal from "sweetalert2";
import { Loading } from "../../shared/Loading";

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const [captureRef, setCaptureRef] = useState(null);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingCorreo, setLoadingCorreo] = useState(false);

  const handleOpen = () => setOpen(!open);
  const [code, setCode] = useState("");
  const [showError, setShowError] = useState(false);
  const [sintetisado, setSintetisado] = useState(true);
  const [integrado, setIntegrado] = useState(false);
  const [imagotipo, setImagotipo] = useState(false);
  const [tipografico, setTipoGrafico] = useState(false);

  const [imagen1, setImagen1] = useState({});
  const [boton1, setBoton1] = useState(false);
  const [url1, setUrl1] = useState("");

  const [imagen2, setImagen2] = useState({});
  const [boton2, setBoton2] = useState(false);
  const [url2, setUrl2] = useState("");

  const [imagen3, setImagen3] = useState({});
  const [boton3, setBoton3] = useState(false);
  const [url3, setUrl3] = useState("");

  const [imagen4, setImagen4] = useState({});
  const [boton4, setBoton4] = useState(false);
  const [url4, setUrl4] = useState("");

  const [imagen5, setImagen5] = useState({});
  const [boton5, setBoton5] = useState(false);
  const [url5, setUrl5] = useState("");

  const [option1Checked, setOption1Checked] = useState(false);
  const [option2Checked, setOption2Checked] = useState(false);

  const [shouldFocus, setShouldFocus] = useState(true);

  const imagen1Function = (e) => {
    const url = e.target.files[0];
    // CREAR URL
    const urlTmp = URL.createObjectURL(url);
    // CARGAR PREVIEW IMG
    document.getElementById("img-preview1").src = urlTmp;
    document.getElementById("icon-image1").classList.add("d-none");
    document.getElementById("img-preview1").classList.remove("d-none");
    setUrl1(url["name"]);
    setBoton1(true);

    setImagen1({
      archivo: e.target.files[0],
      archivoName: `${Date.now()}_${e.target.files[0].name}`,
    });
  };

  const deleteImg1 = (e) => {
    e.preventDefault();
    setBoton1(false);
    document.getElementById("icon-image1").classList.remove("d-none");
    document.getElementById("img-preview1").classList.add("d-none");
    document.getElementById("imagen1").value = "";
    document.getElementById("foto_delete").value = "";
  };

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

  const imagen3Function = (e) => {
    const url = e.target.files[0];
    // CREAR URL
    const urlTmp = URL.createObjectURL(url);
    // CARGAR PREVIEW IMG
    document.getElementById("img-preview3").src = urlTmp;
    document.getElementById("icon-image3").classList.add("d-none");
    document.getElementById("img-preview3").classList.remove("d-none");
    setUrl3(url["name"]);
    setBoton3(true);

    setImagen3({
      archivo: e.target.files[0],
      archivoName: `${Date.now()}_${e.target.files[0].name}`,
    });
  };

  const deleteImg3 = (e) => {
    e.preventDefault();
    setBoton3(false);
    document.getElementById("icon-image3").classList.remove("d-none");
    document.getElementById("img-preview3").classList.add("d-none");
    document.getElementById("imagen3").value = "";
    document.getElementById("foto_delete").value = "";
  };

  const imagen4Function = (e) => {
    const url = e.target.files[0];
    // CREAR URL
    const urlTmp = URL.createObjectURL(url);
    // CARGAR PREVIEW IMG
    document.getElementById("img-preview4").src = urlTmp;
    document.getElementById("icon-image4").classList.add("d-none");
    document.getElementById("img-preview4").classList.remove("d-none");
    setUrl4(url["name"]);
    setBoton4(true);

    setImagen4({
      archivo: e.target.files[0],
      archivoName: `${Date.now()}_${e.target.files[0].name}`,
    });
  };

  const deleteImg4 = (e) => {
    e.preventDefault();
    setBoton4(false);
    document.getElementById("icon-image4").classList.remove("d-none");
    document.getElementById("img-preview4").classList.add("d-none");
    document.getElementById("imagen4").value = "";
    document.getElementById("foto_delete").value = "";
  };

  const imagen5Function = (e) => {
    const url = e.target.files[0];
    // CREAR URL
    const urlTmp = URL.createObjectURL(url);
    // CARGAR PREVIEW IMG
    document.getElementById("img-preview5").src = urlTmp;
    document.getElementById("icon-image5").classList.add("d-none");
    document.getElementById("img-preview5").classList.remove("d-none");
    setUrl5(url["name"]);
    setBoton5(true);

    setImagen5({
      archivo: e.target.files[0],
      archivoName: `${Date.now()}_${e.target.files[0].name}`,
    });
  };

  const deleteImg5 = (e) => {
    e.preventDefault();
    setBoton5(false);
    document.getElementById("icon-image5").classList.remove("d-none");
    document.getElementById("img-preview5").classList.add("d-none");
    document.getElementById("imagen5").value = "";
    document.getElementById("foto_delete").value = "";
  };

  const handleOption1Change = (event) => {
    setOption1Checked(event.target.checked);
  };

  const handleOption2Change = (event) => {
    setOption2Checked(event.target.checked);
  };

  const validarCodigo = (event) => {
    if (!option1Checked && !option2Checked) {
      Swal.fire(
        "",
        "Debes seleccionar al menos un medio para el cual se utilizara su logo en la pregunta 5",
        "warning"
      );
      event.preventDefault();
    } else {
      handleOpen();
    }
  };

  const navigate = useNavigate();

  const saveBrief = async (datas) => {
    setLoading(true);
    try {
      const codigo = datas.codigo;
      const respuesta2 = await axios.post(`${Global.url}/validar-codigo`, {
        codigo,
      }); // Pasar el código en el cuerpo de la solicitud

      if (respuesta2.data.status === "success") {
        const data = new FormData();
        data.append("nombres", datas.nombres);
        data.append("celular", datas.celular);
        data.append("email", datas.email);
        data.append("tipo", datas.base_proyecto);
        data.append("logo_referencia", imagen1.archivo);
        data.append("nombre_empresa", datas.nombre_empresa);
        data.append("historia_empresa", datas.historia_empresa);
        data.append("principales_servicios", datas.principales_servicios);
        data.append("medios", option1Checked);
        data.append("medios2", option2Checked);
        data.append("colores", datas.colores);
        data.append("referencias", datas.referencias);
        data.append("refe1", imagen2.archivo);
        data.append("refe2", imagen3.archivo);
        data.append("refe3", imagen4.archivo);
        data.append("refe4", imagen5.archivo);
        data.append("transmitir", datas.transmitir);
        data.append(
          "estilo1",
          sintetisado == true ? 1 : sintetisado == false && 0
        );
        data.append("estilo2", integrado == true ? 1 : integrado == false && 0);
        data.append("estilo3", imagotipo == true ? 1 : imagotipo == false && 0);
        data.append(
          "estilo4",
          tipografico == true ? 1 : tipografico == false && 0
        );

        try {
          let respuesta = await axios.post(
            `${Global.url}/saveBriefDiseño`,
            data
          );

          if (respuesta.data.status === "success") {
            await axios.post(`${Global.url}/delete-codigo`, {
              codigo,
            });
            navigate(`send-success/${watch("nombres")}`);
            reset();
            setCode("");
            setSintetisado("");
            setIntegrado("");
            setImagotipo("");
            setTipoGrafico("");
            setImagen1("");
            setImagen2("");
            setImagen3("");
            setImagen4("");
            setImagen5("");
            handleOpen();
          } else {
            Swal.fire("Error nose", "", "error");
          }
        } catch (error) {
          console.log(error);
          Swal.fire("Error", "", "error");
        }
      } else {
        setCode("El codigo es invalido");
        setShowError(true);
      }
    } catch (error) {
      setCode("ERROR NO ENCONTRADO");
      setShowError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (showError) {
      const timeout = setTimeout(() => {
        setShowError(false);
      }, 3000);
      return () => clearTimeout(timeout);
    } else {
      setShowError(false); // Restablecer showError a false si el código es válido
    }
  }, [showError]);

  useEffect(()=>{
    setValue("base_proyecto", 0);
    window.scrollTo(0, 0);
  },[])


  return (
    <>
      <main className="main" ref={setCaptureRef}>
        <section className="main__right">
          <div className="main__right__title">
            <h2>Cuestionario creativo del diseño o rediseño de logo </h2>
          </div>

          <div className="main__right__form">
            <form action="" className="">
              <div>
                <ol>
                  <div className="mb-10">
                    <li>
                      <h5>
                        Base para dar avance con su proyecto (*){" "}
                        <span className="acolor">
                          (Nos indica por favor con cual de las dos opciones se
                          realizará su proyecto)
                        </span>
                      </h5>

                      <div className="radio-container">
                        <div className="radio-wrapper">
                          <label className="radio-button">
                            <input
                              type="radio"
                              id="option1"
                              value="0"
                              checked={watch("base_proyecto") == "0" ? true : false}
                              name="base_proyecto"
                              {...register("base_proyecto", {
                                required: "Campo requerido",
                              })}
                              autoFocus={true}
                            />
                            <span className="radio-checkmark"></span>
                            <span className="radio-label">
                              Desea un diseño <br />
                            </span>
                          </label>
                          <b>(Diseño de logo desde cero)</b>
                        </div>
                        <div className="radio-wrapper">
                          <label className="radio-button">
                            <input
                              type="radio"
                              id="option2"
                              value="1"
                              name="base_proyecto"
                              checked={watch("base_proyecto") == "1" ? true : false}
                              {...register("base_proyecto", {
                                required: "Campo requerido",
                              })}
                            />
                            <span className="radio-checkmark"></span>
                            <span className="radio-label">
                              Rediseño <br />
                            </span>
                          </label>
                          <b>(Realizaremos mejoras en base a su logo)</b>
                        </div>
                      </div>
                      <Errors error={errors.base_proyecto} />
                    </li>
                    <CSSTransition
                      in={watch("base_proyecto") == "1"}
                      timeout={300}
                      classNames="fade"
                      unmountOnExit
                    >
                      <div className="w-full">
                        <p className="bg-[#f7f7f7] pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-transparent text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem] ">
                          Adjuntar logo (Opcional)
                        </p>
                        <div className="w-full border p-4">
                          <label
                            htmlFor="imagen1"
                            id="icon-image1"
                            className="btn btn-primary col-md-12 btn-openImage cursor-pointer text-black"
                          >
                            <FaImage className="icon-preimage text-[#9888dac5]" />
                          </label>
                          {boton1 === true ? (
                            <span
                              id="icon-cerrar"
                              className="flex justify-center items-center text-white rounded-md mb-5 gap-2"
                            >
                              <button
                                className="btn btn-danger mb-0 flex items-center justify-center text-red-600"
                                onClick={deleteImg1}
                              >
                                <FaTimes className="w-full" />
                              </button>
                              <p className="text-black">{"" + url1}</p>
                            </span>
                          ) : (
                            ""
                          )}
                          <input
                            accept="image/*"
                            id="imagen1"
                            className="d-none"
                            type="file"
                            name="imagen1"
                            onChange={imagen1Function}
                          />
                          <img
                            className="img-thumbnail d-none"
                            id="img-preview1"
                            alt="img"
                          />
                        </div>
                      </div>
                    </CSSTransition>
                  </div>
                  <li>
                    <h5>
                      ¿Cuál es el nombre comercial de la empresa con el que se
                      realizará el diseño de Logo? 
                      {/* <Popover>
                        <PopoverHandler>
                          <Button>Show Popover</Button>
                        </PopoverHandler>
                        <PopoverContent>
                          This is a very beautiful popover, show some love.
                        </PopoverContent>
                      </Popover> */}
                    </h5>
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Nombre de su empresa"
                        name="nombre_empresa"
                        {...register("nombre_empresa", {
                          required: {
                            value: true,
                            message: 'Campo requerido'
                          },
                          minLength: {
                            value: 5, 
                            message: 'Mínimo 5 caracteres'
                          },
                          maxLength: {
                            value: 100, 
                            message: 'No más de 100 caracteres'
                            },
                        })}
                        autoFocus
                      />
                    </div>
                    <Errors error={errors.nombre_empresa} />
                  </li>

                  <li>
                    <h5>¿Cuál es la historia de su empresa?</h5>
                    <div className="input">
                      <textarea
                        id=""
                        cols="4"
                        rows="5"
                        placeholder="Escriba un breve reseña sobre su empresa..."
                        name="historia_empresa"
                        {...register("historia_empresa", {

                          required: {
                            value: true,
                            message: 'Campo requerido'
                            
                          },
                          minLength: {
                            value: 25, 
                            message: 'Mínimo 25 caracteres'
                          },
                          
                        })}
                      ></textarea>
                      
                    </div>
                    <Errors error={errors.historia_empresa} />
                  </li>

                  <li>
                    <h5>
                      ¿Cuáles son los principales servicios o productos que
                      brinda al público?{" "}
                    </h5>
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Ej: producto 1, producto 2, etc."
                        name="principales_servicios"
                        {...register("principales_servicios", {
                          required: {
                            value: true,
                            message: 'Campo requerido'
                            
                          },
                          minLength: {
                            value: 8, 
                            message: 'Mínimo 6 caracteres'
                          },

                        })}
                      />
                    </div>
                    <Errors error={errors.principales_servicios} />
                  </li>

                  <li>
                    <h5>¿Para qué medios se utilizará el logo?</h5>
                    <div className="input2">
                      <div className="radio-container">
                        <div className="radio-wrapper">
                          <label className="radio-button">
                            <input
                              type="checkbox"
                              id="medio1"
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

                  <li>
                    <h5>¿Tiene colores de preferencia para su logotipo?</h5>
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Respuesta"
                        {...register("colores", {})}
                      />
                    </div>
                  </li>

                  <li>
                    <h5>
                      ¿Tiene referencias de como desea sus propuestas de
                      logotipo?
                    </h5>
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Elementos que le gusten o no le gusten visualmente"
                        {...register("referencias", {
                          required: {
                            value: true,
                            message: 'Campo requerido'
                            
                          },
                          minLength: {
                            value: 2, 
                            message: 'Mínimo 2 caracteres'
                          },
                        })}
                        autoFocus={true}
                      />
                    </div>
                    <Errors error={errors.referencias} />
                  </li>

                  <div className="w-full ">
                    <p className="bg-[#f7f7f7] pt-0 pr-2 pb-0 lg:pl-2 -mt-3 mr-0 mb-0 ml-1 lg:ml-2 font-medium text-gray-700 bg-transparent">
                      Adjuntar imagenes de referencia (Opcional)
                    </p>
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
                        <div className="w-1/4">
                          <label
                            htmlFor="imagen3"
                            id="icon-image3"
                            className="btn btn-primary col-md-12 btn-openImage cursor-pointer"
                          >
                            <FaImage className="icon-preimage text-[#9888dac5]" />
                          </label>
                          {boton3 === true ? (
                            <span
                              id="icon-cerrar"
                              className="flex justify-center items-center  text-white rounded-md mb-5 gap-2"
                            >
                              <p className="w-full line-clamp-1 text-center text-black">
                                {"" + url3}
                              </p>
                              <button
                                className="btn btn-danger mb-0 flex items-center justify-center text-red-600"
                                onClick={deleteImg3}
                              >
                                <FaTimes />
                              </button>
                            </span>
                          ) : (
                            ""
                          )}
                          <input
                            accept="image/*"
                            id="imagen3"
                            className="d-none"
                            type="file"
                            name="imagen3"
                            onChange={imagen3Function}
                          />
                          <img
                            className="img-thumbnail d-none cursor-pointer"
                            id="img-preview3"
                            alt="img"
                          />
                        </div>
                        <div className="w-1/4">
                          <label
                            htmlFor="imagen4"
                            id="icon-image4"
                            className="btn btn-primary col-md-12 btn-openImage cursor-pointer"
                          >
                            <FaImage className="icon-preimage text-[#9888dac5]" />
                          </label>
                          {boton4 === true ? (
                            <span
                              id="icon-cerrar"
                              className="flex justify-center items-center  text-white rounded-md mb-5 gap-2"
                            >
                              <p className="w-full line-clamp-1 text-center text-black">
                                {"" + url4}
                              </p>
                              <button
                                className="btn btn-danger mb-0 flex items-center justify-center text-red-600"
                                onClick={deleteImg4}
                              >
                                <FaTimes />
                              </button>
                            </span>
                          ) : (
                            ""
                          )}
                          <input
                            accept="image/*"
                            id="imagen4"
                            className="d-none"
                            type="file"
                            name="imagen4"
                            onChange={imagen4Function}
                          />
                          <img
                            className="img-thumbnail d-none cursor-pointer"
                            id="img-preview4"
                            alt="img"
                          />
                        </div>
                        <div className="w-1/4">
                          <label
                            htmlFor="imagen5"
                            id="icon-image5"
                            className="btn btn-primary col-md-12 btn-openImage cursor-pointer"
                          >
                            <FaImage className="icon-preimage text-[#9888dac5]" />
                          </label>
                          {boton5 === true ? (
                            <span
                              id="icon-cerrar"
                              className="flex justify-center items-center  text-white rounded-md mb-5 gap-2"
                            >
                              <p className="w-full line-clamp-1 text-center text-black">
                                {"" + url5}
                              </p>
                              <button
                                className="btn btn-danger mb-0 flex items-center justify-center text-red-600"
                                onClick={deleteImg5}
                              >
                                <FaTimes />
                              </button>
                            </span>
                          ) : (
                            ""
                          )}
                          <input
                            accept="image/*"
                            id="imagen5"
                            className="d-none"
                            type="file"
                            name="imagen5"
                            onChange={imagen5Function}
                          />
                          <img
                            className="img-thumbnail d-none cursor-pointer"
                            id="img-preview5"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <li>
                    <h5>¿Qué desea transmitir con su logotipo?</h5>
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Puede añadir valores de su empresa"
                        {...register("transmitir", {
                          required: "Campo requerido",
                        })}
                        autoFocus={true}
                      />
                    </div>
                    <Errors error={errors.transmitir} />
                  </li>

                  <li>
                    <h5>Estilo de diseño de logo</h5>
                    <div className="w-full flex flex-col mt-8">
                      <div className="flex flex-col md:flex-row w-full mt-5 gap-5">
                        <div
                          className={`w-full md:w-1/2  flex justify-center flex-col items-center cursor-pointer relative ${
                            sintetisado ? "border border-green-400" : "border"
                          }`}
                          onClick={() => {
                            setSintetisado(!sintetisado);
                          }}
                        >
                          {sintetisado && (
                            <RiCheckDoubleFill className="text-green-600  absolute top-0 right-0 text-5xl mx-4" />
                          )}
                          <h3 className="bg-[#f7f7f7] w-fit pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-700 text-center text-[2rem]">
                            1. Diseño Sintetizado
                          </h3>
                          <div className="w-full flex flex-col items-center select-none">
                            <img
                              src={logo1}
                              alt=""
                              className="w-40 h-40 object-contain"
                            />
                            <img
                              src={logo2}
                              alt=""
                              className="w-40 h-40 object-contain"
                            />
                            <img
                              src={logo3}
                              alt=""
                              className="w-40 h-40 object-contain"
                            />
                          </div>
                        </div>

                        <div
                          className={`w-full md:w-1/2  flex justify-center flex-col items-center cursor-pointer relative ${
                            integrado ? "border border-green-400" : "border"
                          }`}
                          onClick={() => {
                            setIntegrado(!integrado);
                          }}
                        >
                          {integrado && (
                            <RiCheckDoubleFill className="text-green-600  absolute top-0 right-0 text-5xl mx-4" />
                          )}
                          <h3 className="bg-[#f7f7f7] w-fit pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-700 text-center text-[2rem]">
                            2. Diseño Integrado
                          </h3>
                          <div className="w-full flex flex-col items-center select-none">
                            <img
                              src={logo4}
                              alt=""
                              className="w-40 h-40 object-contain"
                            />
                            <img
                              src={logo5}
                              alt=""
                              className="w-40 h-40 object-contain"
                            />
                            <img
                              src={logo6}
                              alt=""
                              className="w-40 h-40 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row w-full mt-5 gap-5">
                        <div
                          className={`w-full md:w-1/2  flex justify-center flex-col items-center cursor-pointer relative ${
                            imagotipo ? "border border-green-400" : "border"
                          }`}
                          onClick={() => {
                            setImagotipo(!imagotipo);
                          }}
                        >
                          {imagotipo && (
                            <RiCheckDoubleFill className="text-green-600  absolute top-0 right-0 text-5xl mx-4" />
                          )}
                          <h3 className="bg-[#f7f7f7] w-fit pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-700 text-center text-[2rem]">
                            3. Diseño Imagotipo
                          </h3>
                          <div className="w-full flex flex-col items-center select-none">
                            <img
                              src={logo7}
                              alt=""
                              className="w-40 h-40 object-contain"
                            />
                            <img
                              src={logo8}
                              alt=""
                              className="w-40 h-40 object-contain"
                            />
                            <img
                              src={logo9}
                              alt=""
                              className="w-40 h-40 object-contain"
                            />
                          </div>
                        </div>
                        <div
                          className={`w-full md:w-1/2  flex justify-center flex-col items-center cursor-pointer relative ${
                            tipografico ? "border border-green-400" : "border"
                          }`}
                          onClick={() => {
                            setTipoGrafico(!tipografico);
                          }}
                        >
                          {tipografico && (
                            <RiCheckDoubleFill className="text-green-600  absolute top-0 right-0 text-5xl mx-4" />
                          )}
                          <h3 className="bg-[#f7f7f7] w-fit pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-700 text-center text-[2rem]">
                            4. Diseño Tipografico
                          </h3>
                          <div className="w-full flex flex-col items-center">
                            <img
                              src={logo10}
                              alt=""
                              className="w-32 h-32 object-contain"
                            />
                            <img
                              src={logo11}
                              alt=""
                              className="w-32 h-32 object-contain"
                            />
                            <img
                              src={logo12}
                              alt=""
                              className="w-32 h-32 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
                <input
                  type="submit"
                  value="Enviar"
                  className="btn_enviar cursor-pointer"
                  onClick={handleSubmit(validarCodigo)}
                />
              </div>
              {open && (
                <React.Fragment>
                  <Dialog
                    size="xs"
                    open={open}
                    handler={handleOpen}
                    className="shadow-none p-0 w-[32rem] md:w-[700px] rounded-3xl"
                  >
                    <Card className="mx-auto w-full p-0 max-w-none bg-[#f7f7f7] rounded-3xl">
                      <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center bg-[#695AA6] p-0 m-0  rounded-t-3xl"
                      >
                        <h3 className="text-white text-5xl cambiar_letra">
                          VALIDACIÓN
                        </h3>
                      </CardHeader>
                      {loading ? (
                        <CardBody className="flex flex-col gap-8 mt-10 px-10 bg-[#f7f7f7] h-96 rounded-b-3xl">
                          <Loading className="pt-10" />
                          {loadingCorreo && (
                            <span className="text-center text-2xl px-10 md:px-0 md:text-3xl w-full absolute bottom-20 left-0">
                              Se esta enviando una copia a su correo por favor
                              espere
                            </span>
                          )}
                        </CardBody>
                      ) : (
                        <>
                          <CardBody className="flex flex-col gap-8 mt-10 px-10 bg-[#f7f7f7] ">
                            <div className="w-full ">
                              <p className="bg-transparent pt-0 pr-2 pb-0   mr-0 mb-0 ml-1  font-medium text-gray-600  text-[2.2rem]">
                                Nombres completos
                              </p>
                              <input
                                className="border-[2px] placeholder-gray-400 focus:outline-none
                                                                w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 block bg-white
                                                                border-[lightgrey] rounded-md transition-all text-[1.8rem]"
                                name="nombres"
                                {...register("nombres", {
                                  required: "Campo requerido",
                                })}
                              />
                              <Errors error={errors.nombres} />
                            </div>

                            <div className="w-full flex flex-col md:flex-row gap-2 lg:gap-5">
                              <div className="w-full  lg:relative">
                                <p className="bg-transparent pt-0 pr-2 pb-0   mr-0 mb-0 ml-1  font-medium text-gray-600  text-[2.2rem]">
                                  Celular
                                </p>
                                <input
                                  className="border-[2px] placeholder-gray-400 focus:outline-none
                                                                w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 block bg-white
                                                                border-[lightgrey] rounded-md transition-all text-[1.8rem]"
                                  type="number"
                                  name="celular"
                                  {...register("celular", {
                                    required: "Campo requerido",
                                    pattern: {
                                      value: /^\d{9}$/,
                                      message:
                                        "El número de celular debe tener 9 dígitos",
                                    },
                                  })}
                                />
                                <Errors error={errors.celular} />
                              </div>
                              <div className="w-full  lg:relative ">
                                <p className="bg-transparent pt-0 pr-2 pb-0   mr-0 mb-0 ml-1  font-medium text-gray-600  text-[2.2rem]">
                                  Correo Electronico
                                </p>
                                <input
                                  className="border-[2px] placeholder-gray-400 focus:outline-none
                                                                w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 block bg-white
                                                                border-[lightgrey] rounded-md transition-all text-[1.8rem]"
                                  type="email"
                                  name="email"
                                  {...register("email", {
                                    required: "Campo requerido",
                                    pattern: {
                                      value:
                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                      message:
                                        "Ingrese un correo electrónico válido",
                                    },
                                  })}
                                />
                                <Errors error={errors.email} />
                              </div>
                            </div>

                            <div className="w-full">
                              <p className="bg-transparent pt-0 pr-2 pb-0   mr-0 mb-0 ml-1  font-medium text-gray-600  text-[2.2rem]">
                                Codigo de validación
                              </p>
                              <input
                                className="border-[2px] placeholder-gray-400 focus:outline-none
                                                                w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 block bg-white
                                                                border-[lightgrey] rounded-md transition-all text-[1.8rem]"
                                name="codigo"
                                {...register("codigo", {
                                  required: "Campo requerido",
                                })}
                              />
                              <Errors error={errors.codigo} />
                              {showError && (
                                <p className="text-3xl p-0 m-0 mt-3 pl-2 text-[#41469b] font-bold">
                                  <span className="text-main">{code}</span>
                                </p>
                              )}
                            </div>
                          </CardBody>
                          <CardFooter className="pt-0">
                            <Button
                              type="submit"
                              variant="gradient"
                              className="bg-[#695AA6] w-fit mx-auto px-10 py-5 text-[1.8rem] my-5"
                              onClick={handleSubmit(saveBrief)}
                              fullWidth
                            >
                              Validar
                            </Button>
                          </CardFooter>
                        </>
                      )}
                    </Card>
                  </Dialog>
                </React.Fragment>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
