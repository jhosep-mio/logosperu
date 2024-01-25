import React, { useEffect, useState } from "react";
import { Loading } from "../../shared/Loading";
import { useFormik } from "formik";
import { SchemaBriefComunity } from "../../shared/schemas/Schema";
import { Errors2 } from "../../shared/Errors2";
import { ModalCodigo } from "../../shared/modals/ModalCodigo";
import { ModalComunity } from "../../shared/modals/ModalComunity";
import { ImageUploader } from "../../shared/imagenF/ImageUploader.Jsx";
import { AgregarProductos } from "../clasificados/AgregarProductos";
import Swal from "sweetalert2";

const Clasificados = () => {
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
  const [idCliente, setIdCliente] = useState(0);
  const [id_Codigo, setIdCodigo] = useState(0);
  const [id_Venta, setIdVenta] = useState(0);
  const [arrayPesos, setarrayPesos] = useState([]);

  const [imagen1, setImagen1] = useState({ archivo: null, archivoName: "" });
  const [boton1, setBoton1] = useState(false);
  const [url1, setUrl1] = useState("");

  const [imagen2, setImagen2] = useState({ archivo: null, archivoName: "" });
  const [boton2, setBoton2] = useState(false);
  const [url2, setUrl2] = useState("");

  const [imagen3, setImagen3] = useState({ archivo: null, archivoName: "" });
  const [boton3, setBoton3] = useState(false);
  const [url3, setUrl3] = useState("");

  const [imagen4, setImagen4] = useState({ archivo: null, archivoName: "" });
  const [boton4, setBoton4] = useState(false);
  const [url4, setUrl4] = useState("");

  const [imagenproducto, setImagenproducto] = useState({
    archivo: null,
    archivoName: "",
  });

  const [option1Checked, setOption1Checked] = useState(false);

  const validarCodigo = () => {
    handleOpen();
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
      nombre_comercial: "",
      historia_empresa: "",
      competidores: "",
      propuesta_valor: "",
      objetivos_especificos: "",
      clientes_ideales: "",
      propuesta_producto: "",
      preferencia_canal: "",
      presupuesto: "",
      link_recursos: "",
      fechas_importantes: "",
      directrises_marca: "",
      elementos_visuales: "",
      restricciones_legales: "",
      factores_consideracion: "",
    },
    validationSchema: SchemaBriefComunity,
    onSubmit: validarCodigo,
  });

  useEffect(() => {
    if (errors && isSubmitting) {
      console.log(errors);
      const firstErrorKey = Object.keys(errors)[0];
      const firstErrorElement = document.getElementsByName(firstErrorKey)[0];
      if (firstErrorElement) {
        firstErrorElement.focus();
      }
    }
  }, [touched, errors, isSubmitting]);

  const cambioService = (texto) => {
    if (arrayPesos.length == 0) {
      setOption1Checked(texto);
    } else {
        Swal.fire({
            icon: "warning",
            title: "Si realiza el cambio se borraran los productos/servicios agregados",
            showDenyButton: true,
            confirmButtonText: "Cambiar",
            denyButtonText: `Cancelar`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                setOption1Checked(texto);
                setarrayPesos([])
            } 
          });
    }
  };

  return (
    <>
      <main className="main" ref={setCaptureRef}>
        <section className="main__right">
          <div className="main__right__title">
            <h2>Cuestionario para Clasificados </h2>
          </div>
          <div className="main__right__form">
            <form action="" className="" onSubmit={handleSubmit}>
              <div>
                <ol>
                  <li>
                    <h5>¿Cuál es el nombre comercial de la empresa / marca?</h5>
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Nombre de su empresa"
                        name="nombre_comercial"
                        value={values.nombre_comercial}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={false}
                      />
                    </div>
                    <Errors2
                      errors={errors.nombre_comercial}
                      touched={touched.nombre_comercial}
                    />
                  </li>
                  <div className="w-full ">
                    <p className="bg-[#f7f7f7] pt-0 pr-2 pb-0 lg:pl-2 -mt-3 mr-0 mb-0 ml-1 lg:ml-2 font-medium text-gray-700 bg-transparent">
                      Adjuntar logo e icono de su empresa/marca
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8 border-[2px] border-[lightgrey] rounded-3xl ">
                      <div className="flex-1 flex flex-col md:flex-row items-center md:gap-4 p-10">
                        <div className="w-1/4">
                          <ImageUploader
                            url={url1}
                            setUrl={setUrl1}
                            boton={boton1}
                            setBoton={setBoton1}
                            setImagen={setImagen1}
                            clase="1"
                          />
                        </div>
                        <div className="w-1/4">
                          <ImageUploader
                            url={url2}
                            setUrl={setUrl2}
                            boton={boton2}
                            setBoton={setBoton2}
                            setImagen={setImagen2}
                            clase="2"
                          />
                        </div>
                        {/*<div className="w-1/4">
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
                        </div>  */}
                      </div>
                    </div>
                  </div>

                  <li>
                    <h5>
                      Redacte una breve descripción o mensaje de bienvenida para
                      su empresa/marca
                    </h5>
                    <div className="input">
                      <textarea
                        id=""
                        cols="4"
                        rows="5"
                        placeholder="Escriba un breve reseña sobre su empresa..."
                        name="historia_empresa"
                        value={values.historia_empresa}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                    </div>
                    <Errors2
                      errors={errors.historia_empresa}
                      touched={touched.historia_empresa}
                    />
                  </li>

                  <li>
                    <h5>
                      Indíquenos hasta 4 datos importantes de su empresa/marca
                    </h5>
                    <div className="input">
                      <input
                        type="text"
                        name="competidores"
                        value={values.competidores}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Ej:Horario de atención, delivery, opción a devolución, garantías, etc."
                      />
                    </div>
                    <Errors2
                      errors={errors.competidores}
                      touched={touched.competidores}
                    />
                  </li>

                  <li>
                    <h5>Indíquenos los enlaces de sus redes sociales</h5>
                    <div className="input">
                      <textarea
                        id=""
                        cols="4"
                        rows="5"
                        placeholder="Facebook, Instagram, Facebook"
                        name="propuesta_valor"
                        value={values.propuesta_valor}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                    </div>
                    <Errors2
                      touched={touched.propuesta_valor}
                      errors={errors.propuesta_valor}
                    />
                  </li>

                  <li>
                    <h5>
                      Adjúntenos 1 o 2 Banners de su empresa/marca.
                      Recomendaciòn: 1920px x 650 px
                    </h5>
                    <div className="flex mt-4 flex-col md:flex-row md:items-center gap-y-2 mb-8 border-[2px] border-[lightgrey] rounded-3xl ">
                      <div className="flex-1 flex flex-col md:flex-row items-center md:gap-4 p-10">
                        <div className="w-1/4">
                          <ImageUploader
                            url={url3}
                            setUrl={setUrl3}
                            boton={boton3}
                            setBoton={setBoton3}
                            setImagen={setImagen3}
                            clase="3"
                          />
                        </div>
                        <div className="w-1/4">
                          <ImageUploader
                            url={url4}
                            setUrl={setUrl4}
                            boton={boton4}
                            setBoton={setBoton4}
                            setImagen={setImagen4}
                            clase="4"
                          />
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <h5>Seleccione el enfoque a mostrar</h5>
                    <div className="input2">
                      <div className="radio-container">
                        <div className="radio-wrapper">
                          <label className="radio-button">
                            <input
                              type="checkbox"
                              checked={option1Checked == "medio1"}
                              onClick={() => cambioService("medio1")}
                              name="medios"
                            />
                            <span className="radio-checkmark"></span>
                            <span className="radio-label">
                              Productos <br />
                            </span>
                          </label>
                        </div>
                        <div className="radio-wrapper">
                          <label className="radio-button">
                            <input
                              type="checkbox"
                              checked={option1Checked == "medio2"}
                              onClick={() => cambioService("medio2")}
                              name="medios"
                            />
                            <span className="radio-checkmark"></span>
                            <span className="radio-label">
                              Servicios <br />
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  {option1Checked == "medio1" || option1Checked == "medio2" ? (
                    <AgregarProductos
                      arrayPesos={arrayPesos}
                      setarrayPesos={setarrayPesos}
                      option1Checked={option1Checked}
                      imagenproducto={imagenproducto}
                      setImagenproducto={setImagenproducto}
                    />
                  ) : null}
                </ol>
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
                <ModalComunity
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
                  imagen2={imagen2}
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

export default Clasificados;
