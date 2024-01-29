import React, { useState } from "react";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Global } from "../../../helper/Global";
import EditorContexto from "./EditorContexto";
import { ImageUploader } from "../../shared/imagenF/ImageUploader";

export const AgregarProductos = ({
  arrayPesos,
  setarrayPesos,
  imagenproducto,
  setImagenproducto,
  option1Checked
}) => {
  const [contenido, setContenido] = useState("");
  const [titulo, setTitulo] = useState("");
  const [botonproducto, setBotonproducto] = useState(false);
  const [urlproducto, setUrlproducto] = useState("");

  const agregarArrayPesos = (e) => {
    e.preventDefault();
    if(arrayPesos.length <= 7){
        if (imagenproducto.archivo && titulo) {
            if(option1Checked == 'medio2' && !contenido){
                Swal.fire("Complete todos los campos", "", "error");
                return
            }
          const descripcion = JSON.stringify(contenido);
          setarrayPesos([
            ...arrayPesos,
            { id: Date.now(), imagenproducto, titulo, descripcion },
          ]);
          setImagenproducto({
            archivo: null,
            archivoName: "",
          });
          setTitulo("");
          setContenido("");
          setUrlproducto('')
          setBotonproducto(false);
          deleteImg();
          
        } else {
          Swal.fire("Complete todos los campos", "", "error");
        }
    }else {
        Swal.fire("Solo puede subir 8 productos/servicios", "", "warning");
    }
  };

  const deleteImg = () => {
    const imgPreview = document.getElementById(`img-previewproducto`);
    const iconImage = document.getElementById(`icon-imageproducto`);
    const imagen = document.getElementById(`imagenproducto`);
    if (
      imgPreview !== null &&
      iconImage !== null &&
      imagen !== null
    ) {
      iconImage.classList.remove("d-none");
      imgPreview.classList.add("d-none");
      imagen.value = "";
    }
    
  };

  const eliminarArray = async (id)=> {
    const nuevoArray = arrayPesos.filter((peso) => peso.id !== id)
    setarrayPesos(nuevoArray)
  }


  return (
    <form className="bg-white w-full rounded-xl px-4 py-4">
      <div className="w-full flex h-fit flex-col md:items-center gap-y-2 mb-10">
        <div className="w-full h-fit flex justify-center items-center flex-col gap-2 lg:gap-5 mt-5">
          <div className="w-full">
            <p className="bg-white pt-0 pr-2 pb-0 lg:pl-2 -mt-3 mr-0 mb-0 ml-1 lg:ml-2 font-medium text-gray-600 lg:absolute">
              Nombre
            </p>
            <input
              className="border placeholder-gray-400 focus:outline-none 
                                                            focus:border-black w-full  pr-4 h-24 pl-4 mt-2 text-2xl block bg-white
                                                            border-gray-300 rounded-md transition-all text-black"
              name="titulo"
              placeholder="Nombre del producto/servicio"
              value={titulo}
              onChange={(e) => {
                setTitulo(e.target.value);
              }}
            ></input>
          </div>
          {option1Checked == 'medio2' &&
          <div className="w-full mt-4 h-[150px]">
            <p className="bg-white pt-0 pr-2 pb-0 lg:pl-2 -mt-5 mr-0 mb-0 ml-1  font-medium text-gray-600 lg:absolute">
              Descripcion
            </p>
            <EditorContexto content={contenido} setContent={setContenido} />
          </div>}
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row md:items-center gap-y-2 mb-10">
        <div className="w-full flex justify-center items-center flex-col md:flex-row gap-2 lg:gap-5">
          <div className="w-full lg:w-2/6">
            <p className="bg-white pt-0 pr-2 pb-0 lg:pl-2 -mt-3 mr-0 mb-0 ml-1 lg:ml-2 font-medium text-gray-600 lg:absolute">
              Imagen
            </p>
            <ImageUploader
              url={urlproducto}
              setUrl={setUrlproducto}
              boton={botonproducto}
              setBoton={setBotonproducto}
              setImagen={setImagenproducto}
              clase="producto"
            />
          </div>
          <div className="w-full  md:w-1/6">
            <button
              className="w-full bg-main text-white bg-[#4E54C8] hover:bg-[#3a3e84] justify-center flex items-center gap-2 py-2 px-4 rounded-lg transition-colors"
              onClick={agregarArrayPesos}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
      {arrayPesos.length > 0 &&
      <div className="bg-gray-100 py-4 md:p-8 rounded-xl mb-10">
        <div className={`hidden md:grid grid-cols-1 ${option1Checked == 'medio2' ?  'md:grid-cols-4' : 'md:grid-cols-3'} items-center justify-center gap-4 mb-5 p-4 text-black`}>
          <h5 className="md:text-center">Nombre</h5>
          <h5 className="md:text-center">Imagen</h5>
          {option1Checked == 'medio2' &&
          <h5 className="md:text-center">Descripción</h5>}
          <h5 className="md:text-center">Eliminar</h5>
        </div>
        {arrayPesos &&
          arrayPesos.map((pro) => (
            <div
              className={`mx-5 md:mx-0 grid grid-cols-1 ${option1Checked == 'medio2' ?  'md:grid-cols-4' : 'md:grid-cols-3'} gap-10 lg:gap-4 items-center mb-4 bg-white p-4 rounded-xl text-black`}
              key={pro.id}
            >
              <div className="md:text-center">
                <h5 className="md:hidden text-left text-black font-bold mb-2">
                  Nombre
                </h5>
                <span>{pro.titulo}</span>
              </div>
              <div className="md:text-center">
                <h5 className="md:hidden text-left text-black font-bold mb-2">
                  Imagen
                </h5>
                {pro.imagenproducto.archivo != null &&
                pro.imagenproducto.archivo.size > 0 ? (
                      <img
                        src={`${URL.createObjectURL(
                          pro.imagenproducto.archivo
                        )}`}
                        className="w-20 h-20 md:m-auto object-contain cursor-pointer mx-auto"
                      />
                ) : (
                  pro.imagenproducto.archivo && (
                    <div className="w-full">
                      <img
                        src={`${Global.urlImages}/clasificados/productos/${pro.imagenproducto.archivoName}`}
                        alt=""
                        className="w-20 h-20 md:m-auto object-contain"
                      />
                    </div>
                  )
                )}
              </div>
              {option1Checked == 'medio2' &&
              <div className="md:text-center">
                <h5 className="md:hidden text-left text-black font-bold mb-2">
                  Descripcion
                </h5>
                <div
                  className="line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(pro.descripcion),
                  }}
                ></div>
              </div>}
              <div className="md:text-center flex flex-col items-center justify-center">
                <RiDeleteBin6Line
                  className="cursor-pointer text-center"
                  onClick={() => {
                    eliminarArray(pro.id);
                  }}
                />
              </div>
            </div>
          ))}
      </div>
      }
    </form>
  );
};
