import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { Global } from "../../../helper/Global";
import { SchemaDatosCliente } from "../../shared/schemas/Schema";
import { Errors2 } from "../../shared/Errors2";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const ModalDatos = ({
  open,
  setOpen,
  datos,
  imagen1,
  imagen2,
  option1Checked,
  imagen3,
  imagen4,
  arrayPesos,
  arrayMarcas
}) => {
  const [loading, setLoading] = useState(false);
  const navigate= useNavigate()

  const saveBrief = async (values) => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const paginaWeb = {
      configuracion: {
        nombre: datos.nombre_comercial,
        correo: values.correo,
        celular: values.celular,
        logo: imagen1.archivoName,
        icono: imagen2.archivoName,
        instragram: datos.instragram,
        facebook: datos.facebook,
        tiktok: datos.tiktok,
        color: "",
      },
      internas: {
        interna1: option1Checked == "medio1" ? "Productos" : "Servicios",
        interna2: "Marcas",
        interna3: "Nosotros",
        interna4: "Contacto",
      },
      banner: {
        banner1: imagen3.archivoName,
        banner2: imagen4.archivoName,
      },
      informacion: {
        titulo1: datos.info1,
        titulo2: datos.info2,
        titulo3: datos.info3,
        titulo4: datos.info4,
        subtitulo1: "",
        subtitulo2: "",
        subtitulo3: "",
        subtitulo4: "",
        imagentitulo1: '',
        imagentitulo2: '',
        imagentitulo3: '',
        imagentitulo4: '',
      },
      productos: {
        tipoenfoque: option1Checked == "medio1" ? "productos" : "servicios",
        productos: JSON.stringify(arrayPesos),
      },
      seo: {
        imagenseo: imagen3.archivoName ? imagen3.archivoName : imagen4.archivoName,
        descripcionseo: datos.historia_empresa,
      },
      marcas: JSON.stringify(arrayMarcas),
    };
    console.log(JSON.stringify(paginaWeb));
    const data = new FormData();
    data.append("pagina_web", JSON.stringify(paginaWeb));
    data.append("nombres", values.nombres);
    data.append("correo", values.correo);
    if (imagen1.archivo != null) {
      data.append("logo", imagen1.archivo);
    }
    if (imagen2.archivo != null) {
      data.append("icono", imagen2.archivo);
    }
    if (imagen3.archivo != null) {
      data.append("banner1", imagen3.archivo);
    }
    if (imagen4.archivo != null) {
      data.append("banner2", imagen4.archivo);
    }
    if (imagen3.archivo != null || imagen4.archivo) {
        data.append("imagenseo", imagen3.archivo ?? imagen4.archivo);
    }
    arrayPesos.forEach((image1, index1) => {
      if (image1.imagenproducto.archivo) {
        data.append(`images1[${index1}]`, image1.imagenproducto.archivo);
        data.append(`names1[${index1}]`, image1.imagenproducto.archivoName);
      }
    });
    arrayMarcas.forEach((image1, index1) => {
      if (image1.imagen1.archivo) {
        data.append(`imagesmarca1[${index1}]`, image1.imagen1.archivo);
        data.append(`namesmarca1[${index1}]`, image1.imagen1.archivoName);
      }
    });
    try {
      const respuesta = await axios.post(
        `${Global.url}/storeToCliente`,
        data,
        {
          headers: {
            Authorization: `Bearer ${
              token !== null && token !== "" ? token : ""
            }`,
          },
        }
      );

      if (respuesta.data.status == "success") {
        navigate(`/class-success/${values.nombres}`);
      } else {
        Swal.fire("Error", "", "error");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "", "error");
      setLoading(false);
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
      nombres: "",
      correo: "",
      celular: "",
    },
    validationSchema: SchemaDatosCliente,
    onSubmit: saveBrief,
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
    <div className="w-full max-w-[700px] bg-white p-10 rounded-lg relative">
      <div className="bg-[#41469b] absolute top-0 left-0 right-0 h-24 rounded-t-lg flex items-center justify-center">
        <h3 className="text-white text-5xl cambiar_letra text-center ">
          DATOS DE CONTACTO
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
      <div className="flex flex-col mt-24">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="w-full">
            <p className="bg-transparent pt-0 pr-2 pb-0   mr-0 mb-0 ml-1  font-medium text-gray-600  text-[2.2rem]">
              Nombres
            </p>
            <input
              className="border-[2px] placeholder-gray-400 focus:outline-none
                                                        w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 block bg-white
                                                        border-[lightgrey] rounded-md transition-all text-[1.8rem]"
              name="nombres"
              autoComplete="off"
              value={values.nombres}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Errors2 errors={errors.nombres} touched={touched.nombres} />
          </div>
          <div className="flex gap-5">
            <div className="w-full">
              <p className="bg-transparent pt-0 pr-2 pb-0   mr-0 mb-0 ml-1  font-medium text-gray-600  text-[2.2rem]">
                Correo electronico
              </p>
              <input
                className="border-[2px] placeholder-gray-400 focus:outline-none
                                                        w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 block bg-white
                                                        border-[lightgrey] rounded-md transition-all text-[1.8rem]"
                name="correo"
                autoComplete="off"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Errors2 errors={errors.correo} touched={touched.correo} />
            </div>
            <div className="w-full">
              <p className="bg-transparent pt-0 pr-2 pb-0   mr-0 mb-0 ml-1  font-medium text-gray-600  text-[2.2rem]">
                Celular
              </p>
              <input
                className="border-[2px] placeholder-gray-400 focus:outline-none
                                                        w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 block bg-white
                                                        border-[lightgrey] rounded-md transition-all text-[1.8rem]"
                name="celular"
                autoComplete="off"
                value={values.celular}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Errors2 errors={errors.celular} touched={touched.celular} />
            </div>
          </div>
          <div>
          {!loading ? (
              <Button
                type="submit"
                variant="gradient"
                className="bg-[#695AA6] w-fit mx-auto px-10 py-5 text-[1.8rem] my-5"
                fullWidth
              >
                Enviar
              </Button>
            ) : (
              <Button
                type="button"
                variant="gradient"
                className="bg-[#695AA6] w-fit mx-auto px-10 py-5 text-[1.8rem] my-5"
                fullWidth
              >
                Validando...
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
