import React, { useEffect, useState } from "react";
import { Loading } from "../../shared/Loading";
import { useFormik } from "formik";
import { SchemaBriefComunity } from "../../shared/schemas/Schema";
import { Errors2 } from "../../shared/Errors2";
import { ModalCodigo } from "../../shared/modals/ModalCodigo";
import { ModalComunity } from "../../shared/modals/ModalComunity";

const Comunity = () => {
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

  const [idCliente, setIdCliente] = useState(0);
  const [id_Codigo, setIdCodigo] = useState(0);
  const [id_Venta, setIdVenta] = useState(0);

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

  return (
    <>
      <main className="main" ref={setCaptureRef}>
        <section className="main__right">
          <div className="main__right__title">
            <h2>Cuestionario para Comunity Manager </h2>
          </div>
          <div className="main__right__form">
            <form action="" className="" onSubmit={handleSubmit}>
              <div>
                <ol>
                  <span className="font-bold text-main block mt-20 mb-5">
                    INFORMACIÓN DE LA EMPRESA:{" "}
                  </span>

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
                        disabled={false}
                      />
                    </div>
                    <Errors2
                      errors={errors.nombre_comercial}
                      touched={touched.nombre_comercial}
                    />
                  </li>
                  <li>
                    <h5>¿Cuál es la historia y misión de la empresa? </h5>
                    <div className="input">
                      <textarea
                        id=""
                        cols="4"
                        rows="5"
                        placeholder="Historia de como empezo tu empresa y a dónde quieren llegar"
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
                      ¿Cuáles son los principales competidores de su empresa?
                    </h5>
                    <div className="input">
                      <input
                        type="text"
                        name="competidores"
                        value={values.competidores}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <Errors2
                      errors={errors.competidores}
                      touched={touched.competidores}
                    />
                  </li>

                  <li>
                    <h5>
                      ¿Cuál es la propuesta de valor única de la empresa?{" "}
                    </h5>
                    <div className="input">
                      <textarea
                        id=""
                        cols="4"
                        rows="5"
                        placeholder="Que problemas resuelve tu empresa, cuáles son los aspectos únicos de tu empresa en que se puede diferenciar."
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

                  <span className="font-bold text-main block mt-20 mb-5">
                    OBJETIVOS DE MARKETING:{" "}
                  </span>

                  <li>
                    <h5>
                      ¿Cuáles son los objetivos específicos de marketing para
                      este proyecto?{" "}
                    </h5>
                    <div className="input">
                      <textarea
                        id=""
                        cols="4"
                        rows="5"
                        placeholder="Cuál es tu objetivo con esta campaña. Ej: Hacer visible la marca, generar clientes potenciales, otro. "
                        name="objetivos_especificos"
                        value={values.objetivos_especificos}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                    </div>
                    <Errors2
                      touched={touched.objetivos_especificos}
                      errors={errors.objetivos_especificos}
                    />
                  </li>

                  <span className="font-bold text-main block mt-20 mb-5">
                    AUDIENCIA OBJETIVO:{" "}
                  </span>

                  <li>
                    <h5>
                      ¿Quiénes son los clientes ideales para este producto o
                      servicio? (Describir edad, genero, ubicación, intereses,
                      comportamiento de compra)
                    </h5>
                    <div className="input">
                      <textarea
                        id=""
                        cols="4"
                        rows="5"
                        placeholder="Describir edad, genero, ubicación, intereses, comportamiento de compra"
                        name="clientes_ideales"
                        value={values.clientes_ideales}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                    </div>
                    <Errors2
                      errors={errors.clientes_ideales}
                      touched={touched.clientes_ideales}
                    />
                  </li>

                  <span className="font-bold text-main block mt-20 mb-5">
                    MENSAJE CLAVE Y PROPUESTA DE VALOR:{" "}
                  </span>

                  <li>
                    <h5>
                      ¿Cuál es la propuesta de valor que hace que el producto o
                      servicio sea único o valioso para la audiencia?{" "}
                    </h5>
                    <div className="input">
                      <textarea
                        id=""
                        cols="4"
                        rows="5"
                        placeholder="Innovación, Personalización, Calidad y Durabilidad, Experiencia del Cliente."
                        name="propuesta_producto"
                        value={values.propuesta_producto}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                    </div>
                    <Errors2
                      errors={errors.propuesta_producto}
                      touched={touched.propuesta_producto}
                    />
                  </li>

                  <span className="font-bold text-main block mt-20 mb-5">
                    CANAL Y PLATAFORMA DE MARKETING:{" "}
                  </span>

                  <li>
                    <h5>
                      ¿Existe una preferencia por un canal o plataforma en
                      particular?
                    </h5>
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Alguna red social"
                        name="preferencia_canal"
                        value={values.preferencia_canal}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <Errors2
                      errors={errors.preferencia_canal}
                      touched={touched.preferencia_canal}
                    />
                  </li>

                  <span className="font-bold text-main block mt-20 mb-5">
                    PRESUPUESTO Y RECURSOS:{" "}
                  </span>

                  <li>
                    <h5>
                      ¿Cuál es el presupuesto asignado para este proyecto de
                      marketing? (plan cobre, plan silver, plan Golden)
                    </h5>
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Incluir el plan"
                        name="presupuesto"
                        value={values.presupuesto}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <Errors2
                      errors={errors.presupuesto}
                      touched={touched.presupuesto}
                    />
                  </li>

                  <li>
                    <h5>
                      ¿Qué recursos, como imágenes o videos cuenta para hacer
                      uso de dicho material? (Incluir enlace de Google Drive)
                    </h5>
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Enlace de Google Drive"
                        name="link_recursos"
                        value={values.link_recursos}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <Errors2
                      errors={errors.link_recursos}
                      touched={touched.link_recursos}
                    />
                  </li>

                  <span className="font-bold text-main block mt-20 mb-5">
                    CRONOGRAMA:{" "}
                  </span>

                  <li>
                    <h5>
                      ¿Existen fechas importantes o eventos relacionados con la
                      empresa que deban considerarse?
                    </h5>
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Fechas importantes a considerar para la campaña"
                        name="fechas_importantes"
                        value={values.fechas_importantes}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <Errors2
                      errors={errors.fechas_importantes}
                      touched={touched.fechas_importantes}
                    />
                  </li>

                  <span className="font-bold text-main block mt-20 mb-5">
                    BRANDING Y GUÍA DE ESTILO:{" "}
                  </span>

                  <li>
                    <h5>
                      ¿Existen directrices de marca o una guía de estilo que
                      deban seguirse?
                    </h5>
                    <div className="input">
                      <input
                        type="text"
                        placeholder=""
                        name="directrises_marca"
                        value={values.directrises_marca}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <Errors2
                      errors={errors.directrises_marca}
                      touched={touched.directrises_marca}
                    />
                  </li>

                  <li>
                    <h5>
                      ¿Hay elementos visuales o de diseño que deban incluirse en
                      la estrategia?
                    </h5>
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Elementos visuales de su agrado"
                        name="elementos_visuales"
                        value={values.elementos_visuales}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <Errors2
                      errors={errors.elementos_visuales}
                      touched={touched.elementos_visuales}
                    />
                  </li>

                  <span className="font-bold text-main block mt-20 mb-5">
                    RESTRICCIONES O CONSIDERACIONES ESPECIALES:{" "}
                  </span>

                  <li>
                    <h5>
                      ¿Existen restricciones legales o regulatorias que deban
                      tenerse en cuenta?
                    </h5>
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Algo importante para evitar inconvenientes"
                        name="restricciones_legales"
                        value={values.restricciones_legales}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <Errors2
                      errors={errors.restricciones_legales}
                      touched={touched.restricciones_legales}
                    />
                  </li>

                  <li>
                    <h5>
                      ¿Hay algún otro factor o consideración importante que deba
                      mencionarse?
                    </h5>
                    <div className="input">
                      <input
                        type="text"
                        placeholder=""
                        name="factores_consideracion"
                        value={values.factores_consideracion}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <Errors2
                      errors={errors.factores_consideracion}
                      touched={touched.factores_consideracion}
                    />
                  </li>
                </ol>
                <input
                  type="submit"
                  value="Enviar"
                  className="btn_enviar cursor-pointer"
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

export default Comunity;
