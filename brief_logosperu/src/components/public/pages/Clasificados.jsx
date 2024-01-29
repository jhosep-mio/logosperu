import React, { useEffect, useState } from "react";
import { Loading } from "../../shared/Loading";
import { useFormik } from "formik";
import { SchemaClasificados } from "../../shared/schemas/Schema";
import { Errors2 } from "../../shared/Errors2";
import { ImageUploader } from "../../shared/imagenF/ImageUploader.Jsx";
import { AgregarProductos } from "../clasificados/AgregarProductos";
import Swal from "sweetalert2";
import { AgregarMarca } from "../clasificados/AgregarMarca";
import { ModalDatos } from "../clasificados/ModalDatos";

const Clasificados = () => {
  const [, setCaptureRef] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [arrayPesos, setarrayPesos] = useState([]);
  const [arrayMarcas, setarrayMarcas] = useState([]);
  const [imagenmarca, setImagenmarca] = useState({
    archivo: null,
    archivoName: "",
  });
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

  const [option1Checked, setOption1Checked] = useState("");

  const validarCodigo = () => {
    if (imagen1.archivo && imagen2.archivo) {
      if (imagen3.archivo || imagen4.archivo) {
        if (option1Checked == "medio1" || option1Checked == "medio2") {
          if (arrayPesos && arrayPesos.length > 1) {
            handleOpen();
          } else {
            Swal.fire(
              "7. Debe subir al menos dos producotos/servicios",
              "",
              "warning"
            );
          }
        } else {
          Swal.fire(
            "7. Debe seleccionar si va mostrar productos o servicios",
            "",
            "warning"
          );
        }
      } else {
        Swal.fire(
          "6. Debe subir almenos 1 imagen para el banner de su web",
          "",
          "warning"
        );
      }
    } else {
      Swal.fire(
        "1. Debe subir las imagenes de su logo e icono de empresa.",
        "",
        "warning"
      );
    }
  };

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
      nombre_comercial: "",
      historia_empresa: "",
      info1: "",
      info2: "",
      info3: "",
      info4: "",
      facebook: "",
      instragram: "",
      tiktok: "",
    },
    validationSchema: SchemaClasificados,
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
        title:
          "Si realiza el cambio se borraran los productos/servicios agregados",
        showDenyButton: true,
        confirmButtonText: "Cambiar",
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          setOption1Checked(texto);
          setarrayPesos([]);
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
                <ol className="mb-10">
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
                    <div className="flex flex-row md:items-center gap-y-2 mb-8 border-[2px] border-[lightgrey] rounded-3xl ">
                      <div className="flex-1 flex flex-col md:flex-row items-center md:gap-4 p-10">
                        <div className="w-1/2">
                          <ImageUploader
                            url={url1}
                            setUrl={setUrl1}
                            boton={boton1}
                            setBoton={setBoton1}
                            setImagen={setImagen1}
                            clase="1"
                          />
                        </div>
                        <div className="w-1/2">
                          <ImageUploader
                            url={url2}
                            setUrl={setUrl2}
                            boton={boton2}
                            setBoton={setBoton2}
                            setImagen={setImagen2}
                            clase="2"
                          />
                        </div>
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
                      (Ej:Horario de atención, delivery, opción a devolución,
                      garantías, etc.)
                    </h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                      <div>
                        <div className="input">
                          <input
                            type="text"
                            name="info1"
                            value={values.info1}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={false}
                          />
                        </div>
                        <Errors2
                          touched={touched.info1}
                          errors={errors.info1}
                        />
                      </div>
                      <div>
                        <div className="input">
                          <input
                            type="text"
                            name="info2"
                            value={values.info2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={false}
                          />
                        </div>
                        <Errors2
                          touched={touched.info2}
                          errors={errors.info2}
                        />
                      </div>
                      <div>
                        <div className="input">
                          <input
                            type="text"
                            name="info3"
                            value={values.info3}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={false}
                          />
                        </div>
                        <Errors2
                          touched={touched.info3}
                          errors={errors.info3}
                        />
                      </div>
                      <div>
                        <div className="input">
                          <input
                            type="text"
                            name="info4"
                            value={values.info4}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={false}
                          />
                        </div>
                        <Errors2
                          touched={touched.info4}
                          errors={errors.info4}
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <h5>
                      Adjunte logos de sus clientes o marcas con las que trabaja
                      ( Recomendacion:300px x 300px)
                    </h5>
                    <AgregarMarca
                      arrayPesos={arrayMarcas}
                      setarrayPesos={setarrayMarcas}
                      imagenproducto={imagenmarca}
                      setImagenproducto={setImagenmarca}
                    />
                  </li>

                  <li id="#social">
                    <h5>Indíquenos los enlaces de sus redes sociales</h5>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
                      <div>
                        <div className="input">
                          <input
                            type="text"
                            placeholder="Facebook"
                            name="facebook"
                            value={values.facebook}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={false}
                          />
                        </div>
                        <Errors2
                          touched={touched.facebook}
                          errors={errors.facebook}
                        />
                      </div>
                      <div>
                        <div className="input">
                          <input
                            type="text"
                            placeholder="Instragram"
                            name="instragram"
                            value={values.instragram}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={false}
                          />
                        </div>
                        <Errors2
                          touched={touched.instragram}
                          errors={errors.instragram}
                        />
                      </div>
                      <div>
                        <div className="input">
                          <input
                            type="text"
                            placeholder="Tik Tok"
                            name="tiktok"
                            value={values.tiktok}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={false}
                          />
                        </div>
                        <Errors2
                          touched={touched.tiktok}
                          errors={errors.tiktok}
                        />
                      </div>
                    </div>
                    <p className="text-3xl p-0 m-0 mt-3 pl-2 text-[#41469b] font-bold ">
                      {errors.red_social}
                    </p>
                  </li>

                  <li>
                    <h5>
                      Adjúntenos 1 o 2 Banners de su empresa/marca.
                      Recomendaciòn: 1920px x 650 px
                    </h5>
                    <div className="flex mt-4 flex-col md:flex-row md:items-center gap-y-2 mb-8 border-[2px] border-[lightgrey] rounded-3xl ">
                      <div className="flex-1 flex flex-col md:flex-row items-center md:gap-4 p-10">
                        <div className="w-1/2">
                          <ImageUploader
                            url={url3}
                            setUrl={setUrl3}
                            boton={boton3}
                            setBoton={setBoton3}
                            setImagen={setImagen3}
                            clase="3"
                          />
                        </div>
                        <div className="w-1/2">
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
                <input
                  type="submit"
                  value="Enviar"
                  className="btn_enviar cursor-pointer mt-10"
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
              <ModalDatos
                open={open}
                setOpen={setOpen}
                datos={values}
                imagen1={imagen1}
                imagen2={imagen2}
                imagen3={imagen3}
                imagen4={imagen4}
                option1Checked={option1Checked}
                arrayPesos={arrayPesos}
                arrayMarcas={arrayMarcas}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Clasificados;
