import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { SchemaCodigo } from "../schemas/Schema";
import { Errors2 } from "../Errors2";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { Global } from "../../../helper/Global";

export const ModalCodigo = ({
  setOpen,
  setValidacionCorrecta,
  setDatos,
  setUbicacionValidada,
  setLatitud,
  setLongitud,
  setIdCliente,
  setIdCodigo,
  setIdVenta,
  setIdContrato,
}) => {
  const [showError, setShowError] = useState(false);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const saveBrief = async (datas) => {
    setLoading(true);
    try {
      const codigo = datas.codigo;
      const respuesta2 = await axios.post(`${Global.url}/validar-codigo`, {
        codigo,
      }); // Pasar el código en el cuerpo de la solicitud
      if (respuesta2.data.status === "success") {
        setIdCodigo(datas.codigo)
        setIdCliente(respuesta2.data.co);
        setIdContrato(respuesta2.data.id_contrato)
        setIdVenta(respuesta2.data.venta);
        const respuestaCliente = await axios.get(
          `${Global.url}/getOneCliente/${respuesta2.data.co}`
        );
        let nombre_contacto = null
        if(respuesta2.data.contacto){
            JSON.parse(respuestaCliente.data.arraycontacto).filter((contacto) => contacto.id == respuesta2.data.contacto).map((contacto) => nombre_contacto = contacto.nombres)
        }
        setDatos({
          nombres: respuestaCliente.data.nombres,
          apellidos: respuestaCliente.data.apellidos,
          contacto: nombre_contacto,
          celular: respuestaCliente.data.celular,
          edad: respuestaCliente.data.edad,
          email: respuestaCliente.data.email,
          region: respuestaCliente.data.region,
          sexo: respuestaCliente.data.sexo,
          medio_ingreso: respuestaCliente.data.medio_ingreso,
          respuestaCliente,
        });
        if (
          respuestaCliente.data.region != null &&
          JSON.parse(respuestaCliente.data.region).latitud != null &&
          JSON.parse(respuestaCliente.data.region).longitud != null
        ) {
          setLatitud(JSON.parse(respuestaCliente.data.region).latitud);
          setLongitud(JSON.parse(respuestaCliente.data.region).longitud);
          setUbicacionValidada(true);
        }
        setValidacionCorrecta(true);
      } else {
        setCode("El codigo es invalido");
        setShowError(true);
      }
    } catch (error) {
        console.log(error)
      setShowError(true);
      setCode("ERROR NO ENCONTRADO");
    }
    setLoading(false);
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
      codigo: "",
    },
    validationSchema: SchemaCodigo,
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
          VALIDACIÓN
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
              Codigo de validación
            </p>
            <input
              className="border-[2px] placeholder-gray-400 focus:outline-none
                                                  w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 block bg-white
                                                  border-[lightgrey] rounded-md transition-all text-[1.8rem]"
              name="codigo"
              autoComplete="off"
              value={values.codigo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Errors2 errors={errors.codigo} touched={touched.codigo} />
            {showError && (
              <p className="text-3xl p-0 m-0 mt-3 pl-2 text-[#41469b] font-bold">
                <span className="text-main">El codigo es invalido</span>
              </p>
            )}
          </div>
          <div>
            {!loading ? (
              <Button
                type="submit"
                variant="gradient"
                className="bg-[#695AA6] w-fit mx-auto px-10 py-5 text-[1.8rem] my-5"
                fullWidth
              >
                Validar
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
