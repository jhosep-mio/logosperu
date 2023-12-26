import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ejemplo from "../../../assets/images/ejemplo.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimes, FaImage } from "react-icons/fa";
import { Errors } from "../../shared/Errors";
import {
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
import { Loading } from "../../shared/Loading";
import Swal from "sweetalert2";
import axios from "axios";
import { Global } from "../../../helper/Global";

export const Informativas = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,

    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [showError, setShowError] = useState(false);

  const [imagen1, setImagen1] = useState({});
  const [boton1, setBoton1] = useState(false);
  const [url1, setUrl1] = useState("");

  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");

  const [ubicacion, setUbicacion] = useState(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  const navigate = useNavigate();

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

  const validarCodigo = (event) => {
    if (ubicacion == null || longitud == null || latitud == null) {
      Swal.fire("Por favor seleccione su ubicacion ", "", "error");
    } else {
      handleOpen();
    }
  };

  useEffect(() => {
    const cargarMapa = () => {
      const mapa = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -12.046373, lng: -77.042754 }, // Coordenadas de Lima
        zoom: 12,
      });

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
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCUruOZGZVXOsZHNwa9UckAahh_bwnOAPM&libraries=places`;
      script.onload = cargarMapa;
      document.head.appendChild(script);
    }

    return () => {
      // No es necesario limpiar el script en este caso
    };
  }, []);

  const buscarUbicacion = (event) => {
    event.preventDefault();
    const input = document.getElementById("ubicacion-input");

    if (!input.value) {
      return;
    }

    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: input.value }, (results, status) => {
      if (status === "OK" && results[0]) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();

        if (!isNaN(lat) && !isNaN(lng)) {
          map.setCenter({ lat, lng });
          marker.setPosition({ lat, lng });
          setUbicacion({ lat, lng });
          setLatitud(lat);
          setLongitud(lng);
        }
      }
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Evitar la recarga de la página
    }
  };

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
        data.append("logo_referencia", imagen1.archivo);
        data.append("información_empresa", datas.informacion);
        data.append("redes_sociales", datas.redes);
        data.append("imagenes_para_web", datas.images);
        data.append("plantillas", datas.plantillas);
        data.append("internas", datas.internas);
        data.append("informacion_contacto", datas.contacto);
        data.append("correos", datas.correos);
        data.append("ubicacion", JSON.stringify({ longitud, latitud }));
        data.append("informacion_adicional", datas.informacion_adicional);

        try {
          let respuesta = await axios.post(
            `${Global.url}/saveBriefInformativas`,
            data
          );

          if (respuesta.data.status === "success") {
            await axios.post(`${Global.url}/delete-codigo`, {
              codigo,
            });
            navigate(`/send-success/${watch('nombres')}`)
            reset();
            handleOpen();
            setCode("");
            setBoton1(false);
            setImagen1({});
            document.getElementById("icon-image1").classList.remove("d-none");
            document.getElementById("img-preview1").classList.add("d-none");
          } else {
            Swal.fire("Error", "", "error");
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

  return (
    <>
      <main className="main">
        <section className="main__right">
          <div className="main__right__title">
            <h2>Cuestionario - Desarrollo Web Informativa</h2>
          </div>

          <div className="main__right__form">
            <form className="">
              <ol>
                <li>
                  <h5>
                    ¿Cuenta con información relacionada a su empresa ejemplo
                    (servicios, nosotros, visión, misión, etc.)? ¿Si tiene una
                    página web quiere que utilicemos la información de esta?
                  </h5>
                  <div className="input">
                    <textarea
                      name=""
                      id=""
                      cols="4"
                      rows="5"
                      placeholder="Información que quiera que vaya en su web."
                      {...register("informacion", {
                        required: "Campo requerido",
                      })}
                    ></textarea>
                  </div>
                  <Errors error={errors.informacion} />
                </li>

                <li>
                  <h5 className="bg-[#f7f7f7] pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-transparent text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem] ">
                    Adjuntar logo (Opcional)
                  </h5>
                  <div className="w-full border-2 border-gray-300 py-8 rounded-xl bg-white">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div className="w-1/2">
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
                          autoFocus
                          onChange={imagen1Function}
                        />
                        <img
                          className="img-thumbnail d-none"
                          id="img-preview1"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <h5>
                    ¿Su empresa cuenta con redes sociales? Ej: Facebook,
                    Instagram, etc. Agregar enlace
                  </h5>
                  <div className="input">
                    <textarea
                      name=""
                      id=""
                      cols="4"
                      rows="5"
                      placeholder="Facebook, Instagram, LinkedIn, etc."
                      {...register("redes", {})}
                    ></textarea>
                  </div>
                </li>

                <li>
                  <h5>
                    ¿Dispone de fotos e imágenes para su página web si es así
                    enviarnos por los siguientes medios (Drive, Dropbox,
                    WhatsApp), si no cuenta con imágenes propias para su web
                    darnos autorización para colocar imágenes de Google en su
                    web?
                    <br />
                    <span>
                      Puede descargar fotos sin copyright en:
                      <ul>
                        <li>
                          <Link to="https://pixabay.com/es/" target="_blank">
                            Pixabay
                          </Link>
                        </li>
                        <li>
                          <Link to="https://unsplash.com/es" target="_blank">
                            Unsplash
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.pexels.com/es-es/"
                            target="_blank"
                          >
                            Pexels
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.freepik.es/" target="_blank">
                            FreePik
                          </Link>
                        </li>
                      </ul>
                    </span>
                  </h5>
                  <div className="input">
                    <textarea
                      name=""
                      id=""
                      cols="4"
                      rows="3"
                      placeholder="Agregue un enlace de drive o envíelo por WhatsApp"
                      {...register("images", {})}
                    ></textarea>
                  </div>
                </li>

                <li>
                  <h5>
                    Su plan es Express del cual tiene que elegir una plantilla
                    desde la siguientes URL:
                  </h5>
                  <div className="radio-container radio-container2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full justify-center items-center gap-8 mt-8 & > div > text-center border py-5">
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_1"
                          autoFocus={true}
                          {...register("plantillas", {
                            required: "Campo requerido",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_1/"
                            target="_blank"
                          >
                            Plantilla 1
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_2"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_2/"
                            target="_blank"
                          >
                            Plantilla 2
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_3"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_3/"
                            target="_blank"
                          >
                            Plantilla 3
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_4"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_4/"
                            target="_blank"
                          >
                            Plantilla 4
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_5"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_5/"
                            target="_blank"
                          >
                            Plantilla 5
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_6"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_6/"
                            target="_blank"
                          >
                            Plantilla 6
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_7"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_7/"
                            target="_blank"
                          >
                            Plantilla 7
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_8"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_8/"
                            target="_blank"
                          >
                            Plantilla 8
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_9"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_9/"
                            target="_blank"
                          >
                            Plantilla 9
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_10"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_10/"
                            target="_blank"
                          >
                            Plantilla 10
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_11"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_11/"
                            target="_blank"
                          >
                            Plantilla 11
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_12"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_12/"
                            target="_blank"
                          >
                            Plantilla 12
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_13"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_13/"
                            target="_blank"
                          >
                            Plantilla 13
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_14"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_14/"
                            target="_blank"
                          >
                            Plantilla 14
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_15"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_15/"
                            target="_blank"
                          >
                            Plantilla 15
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_16"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_16/"
                            target="_blank"
                          >
                            Plantilla 16
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_17"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_17/"
                            target="_blank"
                          >
                            Plantilla 17
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_18"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_19/"
                            target="_blank"
                          >
                            Plantilla 18
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_19"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_20/"
                            target="_blank"
                          >
                            Plantilla 19
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_20"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_21/"
                            target="_blank"
                          >
                            Plantilla 20
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="radio-group"
                          id="option1"
                          value="plantilla_21"
                          {...register("plantillas", {
                            required: "Debe seleccionar una plantilla",
                          })}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label ml-3">
                          <Link
                            to="https://logosperu.com/plantillas/new/plantilla_22/"
                            target="_blank"
                          >
                            Plantilla 21
                          </Link>
                        </span>
                      </label>
                    </div>
                  </div>
                  <Errors error={errors.plantillas} />
                </li>

                <li>
                  <h5>
                    Indicar que internas tendrá su página web ejemplo
                    (Servicios, Nosotros, Galería, Cliente, Contacto, etc.) La
                    cantidad de internas es <strong>según el contrato</strong> *
                    <br />
                    La interna Home (Inicio), no es considerada interna, ya que
                    es la recopilación de todas las internas y viene por
                    defecto:
                  </h5>
                  <picture>
                    <img src={ejemplo} alt="" />
                  </picture>

                  <div className="input">
                    <input
                      type="text"
                      autoFocus
                      placeholder="Home, Nosotros, Servicios, Galería, Clientes, Contacto, etc."
                      {...register("internas", {
                        required:
                          "Debe introducir el nombre de las internas que desea para su web",
                      })}
                    />
                  </div>
                  <Errors error={errors.internas} />
                </li>

                <li>
                  <h5>
                    Cuenta con información de contacto (WhatsApp, teléfono,
                    celular, dirección). Irán en la sección de contacto y datos
                    en su Web, si en caso es para WhatsApp, se redirecciona
                    desde la Web al número de WhatsApp como un mensaje para
                    cotizar etc.
                  </h5>

                  <div className="input">
                    <textarea
                      name=""
                      id=""
                      cols="4"
                      rows="3"
                      autoFocus
                      placeholder="Celular: 987 654 321, Dirección: Ubr. Tauro, Los Olivos"
                      {...register("contacto", {
                        required: "Campo requerido",
                      })}
                    ></textarea>
                  </div>
                  <Errors error={errors.contacto} />
                </li>

                <li>
                  <h5>
                    ¿Qué correos se crearán en su hosting: ejemplo
                    (ventas@midominio.com, gerencia@midominio.com)?, si es
                    posible con la contraseña que desea en cada correo
                    corporativo,{" "}
                    <strong>
                      {" "}
                      la cantidad de correos corporativos es según el contrato
                    </strong>
                  </h5>
                  <div className="input">
                    <textarea
                      name=""
                      id=""
                      cols="4"
                      rows="3"
                      autoFocus
                      placeholder="gerencia@dominio.com, ventas@dominio.com, administracion@dominio.com, etc."
                      {...register("correos", {
                        required:
                          "Introduzca el nombre de los correos corporativos que desea",
                      })}
                    ></textarea>
                  </div>
                  <Errors error={errors.correos} />
                </li>

                <li>
                  <h5>
                    ¿Su Página Web contara con Google Maps? (Si la respuesta es
                    SI por favor enviarnos una captura del punto exacto de su
                    Empresa). Si es posible las coordenadas de la ubicación,
                    acelerará el desarrollo de la maquetación en la sección.
                  </h5>
                  <div className="w-full ">
                    <div className="w-full flex justify-between mt-3 gap-3">
                      <input
                        id="ubicacion-input"
                        type="text"
                        placeholder="Buscar ubicación..."
                        onKeyDown={handleKeyPress}
                        onChange={buscarUbicacion}
                        className="border-2 w-full px-3 py-2 text-black rounded-md outline-none"
                      />
                      <button
                        type="button"
                        onClick={buscarUbicacion}
                        className="w-fit px-4 bg-[#D23741] text-white rounded-md "
                        onKeyDown={handleKeyPress}
                      >
                        Buscar
                      </button>
                    </div>
                    <div
                      id="map"
                      style={{
                        width: "100%",
                        height: "400px",
                        position: "relative",
                      }}
                      className="mt-3"
                    />
                  </div>
                </li>

                <li>
                  <h5>Información adicional</h5>
                  <div className="input">
                    <textarea
                      name=""
                      id=""
                      cols="4"
                      rows="4"
                      placeholder="Información adicional que nos ayudará a mejorar el desarrollo de su web"
                      {...register("informacion_adicional", {})}
                    ></textarea>
                  </div>
                </li>
              </ol>

              <input
                type="button"
                value="Enviar"
                className="btn_enviar cursor-pointer"
                onClick={handleSubmit(validarCodigo)}
              />
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
                          <Loading />
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
