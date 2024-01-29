import { useFormik } from "formik";
import { SchemaCliente } from "../schemas/Schema";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { Errors2 } from "../Errors2";
import Swal from "sweetalert2";
import axios from "axios";
import { Global } from "../../../helper/Global";
import { useNavigate } from "react-router-dom";

export const ModalCliente = ({
  setOpen,
  datos,
  validacionCorrecta,
  ubicacionvalidada,
  map,
  marker,
  setMap,
  setMarker,
  setUbicacion,
  setLatitud,
  setLongitud,
  latitud,
  longitud,
  id_Venta,
  formulario,
  option1Checked,
  option2Checked,
  option3Checked,
  option4Checked,
  imagen2,
  tipo1,
  idCliente,
  tipo2,
  tipo3,
  tipo4,
  tipo5,
  tipo6,
  tipo7,
  id_Codigo,
}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const registrarBrief = async () => {
    if (longitud && latitud) {
      setLoading(true);
      const data = new FormData();
      data.append("id_venta", id_Venta);
      data.append("nombre_comercial", formulario.nombre_comercial);
      data.append("medios1", option1Checked.toString());
      data.append("medios2", option2Checked.toString());
      data.append("medios3", option3Checked.toString());
      data.append("medios4", option4Checked.toString());
      data.append("medida1", formulario.medida1);
      data.append("medida2", formulario.medida2);

      if (imagen2.archivo != null) {
        data.append("logo_referencia", imagen2.archivo);
      }
      data.append("datoscontacto", formulario.datoscontacto);
      data.append("historia", formulario.historia);
      data.append("objetivo", formulario.objetivo);
      data.append("servicios", formulario.servicios);
      data.append("enlace", formulario.enlace);

      data.append("estilo1", tipo1 ? "1" : "0");
      data.append("estilo2", tipo2 ? "1" : "0");
      data.append("estilo3", tipo3 ? "1" : "0");
      data.append("estilo4", tipo4 ? "1" : "0");
      data.append("estilo5", tipo5 ? "1" : "0");
      data.append("estilo6", tipo6 ? "1" : "0");
      data.append("estilo7", tipo7 ? "1" : "0");

      try {
        let respuesta = await axios.post(
          `${Global.url}/saveBriefBrochure`,
          data
        );
        if (respuesta.data.status === "success") {
          const data2 = new FormData();
          const geoData = await getGeoData(latitud, longitud);
          data2.append("nombres", values.nombres);
          data2.append("apellidos", values.apellidos);
          data2.append("edad", values.edad);
          data2.append("celular", values.celular);
          data2.append("email", values.email);
          data2.append("sexo", values.sexo);
          data2.append("medio_ingreso", values.medio_ingreso);
          data2.append("region", JSON.stringify({ longitud, latitud }));
          data2.append(
            "metricas",
            geoData != null ? JSON.stringify(geoData) : ""
          );
          data2.append("_method", "PUT");
          let respuesta2 = await axios.post(
            `${Global.url}/updateToClientes/${idCliente}`,
            data2
          );
          if (respuesta2.data.status === "success") {
            await axios.post(`${Global.url}/delete-codigo`, {
              id_Codigo,
            });
            navigate(`/send-success/${values.nombres}`);
            resetForm();
          } else {
            Swal.fire("Error al guardar los datos", "", "error");
          }
        } else {
          Swal.fire("Error nose", "", "error");
        }
      } catch (error) {
        console.log(error);
        Swal.fire("Error", "", "error");
      }
      setLoading(false);
    } else {
      Swal.fire("Debe colocar su ubicacion", "", "warning");
    }
  };

  const {
    handleSubmit,
    handleChange,
    resetForm,
    errors,
    values,
    touched,
    setValues,
    handleBlur,
    isSubmitting,
  } = useFormik({
    initialValues: {
      nombres: "",
      apellidos: "",
      celular: "",
      email: "",
      edad: "",
      medio_ingreso: "",
      sexo: "",
    },
    validationSchema: SchemaCliente,
    onSubmit: registrarBrief,
  });

  const getData = () => {
    setValues({
      ...values,
      nombres: datos.nombres,
      apellidos: datos.apellidos,
      celular: datos.celular,
      email: datos.email,
      edad: datos.edad,
      medio_ingreso: datos.medio_ingreso,
      sexo: datos.sexo,
    });
  };

  const buscarUbicacion = (event) => {
    event.preventDefault();
    const input = document.getElementById("ubicacion-input");

    if (!input.value) {
      return;
    }

    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: input.value }, (results, status) => {
      if (status == "OK" && results[0]) {
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
    if (event.key == "Enter") {
      event.preventDefault(); // Evitar la recarga de la página
    }
  };

  const getGeoData = async (lat, lng) => {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;

    const response = await fetch(url);
    console.log(response);

    if (!response.ok) {
      throw new Error("Error al obtener la información geográfica");
    }

    const data = await response.json();
    const country = data.address.country;
    const department = data.address.state;
    const district =
      data.address.city || data.address.town || data.address.village;

    return {
      country,
      department,
      district,
    };
  };

  useEffect(() => {
    if (validacionCorrecta && !ubicacionvalidada) {
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
  }, [validacionCorrecta]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <form
      className="w-full max-w-[700px] max-h-[700px] bg-white p-10 rounded-lg relative overflow-hidden overflow-y-scroll py-5"
      onSubmit={handleSubmit}
    >
      <div className="bg-[#41469b] absolute top-0 left-0 right-0 h-24 rounded-t-lg flex items-center justify-center">
        <h3 className="text-white text-5xl cambiar_letra text-center ">
          DATOS DEL CLIENTE
        </h3>
      </div>
      <p
        className="absolute right-0 top-0 text-white p-5 text-5xl cursor-pointer"
        onClick={() => {
          setOpen(false);
        }}
      >
        x
      </p>
      <div className="flex flex-col lg:flex-row lg: gap-3 mt-24">
        <div className="w-full ">
          <p className="bg-transparent pt-0 pr-2 pb-0   mr-0 mb-0 ml-1  font-medium text-gray-600  text-[2.2rem]">
            Nombres
          </p>
          <input
            className="border-[2px] placeholder-gray-400 focus:outline-none
                                                    w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 block bg-white
                                                    border-[lightgrey] rounded-md transition-all text-[1.8rem]"
            value={values.nombres}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled
          />
        </div>
        <div className="w-full">
          <p className="bg-transparent pt-0 pr-2 pb-0   mr-0 mb-0 ml-1  font-medium text-gray-600  text-[2.2rem]">
            Apellidos
          </p>
          <input
            className="border-[2px] placeholder-gray-400 focus:outline-none
                                                    w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 block bg-white
                                                    border-[lightgrey] rounded-md transition-all text-[1.8rem]"
            name="apellidos"
            value={values.apellidos}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled
          />
        </div>
      </div>
      {datos.contacto &&
        <div className="flex flex-col lg:flex-row lg: gap-3 mt-2">
            <div className="w-full ">
            <p className="bg-transparent pt-0 pr-2 pb-0   mr-0 mb-0 ml-1  font-medium text-gray-600  text-[2.2rem]">
                Persona a cargo del proyecto
            </p>
                <input
                className="border-[2px] placeholder-gray-400 focus:outline-none
                                                        w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 block bg-white
                                                        border-[lightgrey] rounded-md transition-all text-[1.8rem]"
                value={datos.contacto}
                disabled
                />
            </div>
        </div> }
      <div className="w-full flex flex-col md:flex-row gap-2 lg:gap-5">
        {datos.celular ? null : (
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
              value={values.celular}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Errors2 errors={errors.celular} touched={touched.celular} />
          </div>
        )}
        {datos.email ? null : (
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
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Errors2 errors={errors.email} touched={touched.email} />
          </div>
        )}
      </div>
      <div className="w-full flex flex-col md:flex-row gap-2 lg:gap-5">
        {datos.edad ? null : (
          <div className="w-full  lg:relative">
            <p className="bg-transparent pt-0 pr-2 pb-0   mr-0 mb-0 ml-1  font-medium text-gray-600  text-[2.2rem]">
              Edad
            </p>
            <input
              className="border-[2px] placeholder-gray-400 focus:outline-none
                                                  w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 block bg-white
                                                  border-[lightgrey] rounded-md transition-all text-[1.8rem]"
              type="number"
              name="edad"
              value={values.edad}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Errors2 errors={errors.edad} touched={touched.edad} />
          </div>
        )}
        {datos.sexo ? null : (
          <div className="w-full  lg:relative ">
            <p className="bg-transparent pt-0 pr-2 pb-0   mr-0 mb-0 ml-1  font-medium text-gray-600  text-[2.2rem]">
              Genero
            </p>
            <select
              className="border-[2px] placeholder-gray-400 focus:outline-none
                        w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 block bg-white
                        border-[lightgrey] rounded-md transition-all text-[1.8rem]"
              name="sexo"
              value={values.sexo}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Seleccionar</option>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
              <option value="otro">Otro</option>
            </select>
            <Errors2 errors={errors.sexo} touched={touched.sexo} />
          </div>
        )}
        {datos.medio_ingreso ? null : (
          <div className="w-full  lg:relative ">
            <p className="bg-transparent pt-0 pr-2 pb-0   mr-0 mb-0 ml-1  font-medium text-gray-600  text-[2.2rem]">
              Medio de ingreso
            </p>
            <select
              className="border-[2px] placeholder-gray-400 focus:outline-none
                        w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 block bg-white
                        border-[lightgrey] rounded-md transition-all text-[1.8rem]"
              name="medio_ingreso"
              value={values.medio_ingreso}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Seleccionar</option>
              <option value="0">Facebook</option>
              <option value="1">Google</option>
              <option value="5">Instagram</option>
              <option value="2">Ventas</option>
              <option value="3">Post Venta</option>
              <option value="4">Post Venta</option>
            </select>
            <Errors2
              errors={errors.medio_ingreso}
              touched={touched.medio_ingreso}
            />
          </div>
        )}
      </div>

      {!loading && validacionCorrecta && !ubicacionvalidada ? (
        <div class="w-full ">
          <div className="w-full flex justify-between mt-3 gap-3 h-20">
            <input
              id="ubicacion-input"
              type="text"
              placeholder="Buscar ubicación..."
              onKeyDown={handleKeyPress}
              onChange={buscarUbicacion}
              className="border-[2px] placeholder-gray-400 focus:outline-none
                          w-full pt-4 pr-4 pb-4 pl-4 mr-0 mb-0 ml-0 block bg-white
                          border-[lightgrey] rounded-md transition-all text-[1.8rem] h-full"
            />
            <button
              type="button"
              onClick={buscarUbicacion}
              className="w-fit px-4 bg-red-500 h-full text-[1.8rem] text-white rounded-md"
              onKeyDown={handleKeyPress}
            >
              Buscar
            </button>
          </div>
          <div
            id="map"
            style={{ width: "100%", height: "400px" }}
            className="mt-3"
          />
        </div>
      ) : (
        ""
      )}

      <div>
        {!loading ? (
          <Button
            type="submit"
            variant="gradient"
            className="bg-[#695AA6] w-fit mx-auto px-10 py-5 text-[1.8rem] my-5"
            fullWidth
          >
            Enviar Brief
          </Button>
        ) : (
          <Button
            type="button"
            variant="gradient"
            className="bg-[#695AA6] w-fit mx-auto px-10 py-5 text-[1.8rem] my-5"
            fullWidth
          >
            Enviando...
          </Button>
        )}
      </div>
    </form>
  );
};
