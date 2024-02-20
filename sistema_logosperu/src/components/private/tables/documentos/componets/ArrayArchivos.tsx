import { FaRegFile } from 'react-icons/fa6'
import { GoFileDirectoryFill } from 'react-icons/go'
import { type Dispatch, type SetStateAction, type MouseEvent, useState } from 'react'
import { Menu } from '@mui/material'
import { type documentosArchivesValues } from '@/src/components/shared/schemas/Interfaces'
import { MdDelete, MdDownload } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'

export const ArrayArchivos = ({
  arrayDocumentos,
  setArchivoSelected,
  archivoSelected,
  handleContextMenu2,
  setContextMenu2,
  contextMenu2,
  setArrayDocumentos
}: {
  arrayDocumentos: string[]
  setArchivoSelected: Dispatch<SetStateAction<documentosArchivesValues | null>>
  archivoSelected: documentosArchivesValues | null
  setContextMenu2: Dispatch<
  SetStateAction<{
    mouseX: number
    mouseY: number
  } | null>
  >
  contextMenu2: {
    mouseX: number
    mouseY: number
  } | null
  handleContextMenu2: (event: MouseEvent) => void
  setArrayDocumentos: Dispatch<SetStateAction<string[]>>
}): JSX.Element => {
  const formatDateTime = (dateTimeString: string): string => {
    const dateTime = new Date(dateTimeString)
    const options: any = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false // Formato de 24 horas
    }
    return dateTime.toLocaleString(undefined, options)
  }

  const formatSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const [folderName, setFolderName] = useState<string>('')

  // Manejar el inicio de la edición
  const startEditing = (): void => {
    setFolderName(archivoSelected?.name ?? '')
    setContextMenu2(null)
  }

  // Manejar los cambios en el nombre de la carpeta
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFolderName(event.target.value)
  }

  // Manejar la finalización de la edición y guardar los cambios
  const finishEditing = (folderId: string): void => {
    const updatedArrayDocumentos = arrayDocumentos.map((documento: any) => {
      if (documento.id == folderId && documento.type == 'carpeta') {
        return { ...documento, name: folderName }
      }
      return documento
    })
    setArrayDocumentos(updatedArrayDocumentos)
    setArchivoSelected(null)
    setFolderName('')
  }

  return (
    <>
      {arrayDocumentos
        ?.sort((a: any, b: any) => {
          // Si a es una carpeta y b no lo es, entonces a debe ir primero
          if (a.type == 'carpeta' && b.type !== 'carpeta') return -1
          // Si b es una carpeta y a no lo es, entonces b debe ir primero
          if (b.type == 'carpeta' && a.type !== 'carpeta') return 1
          // Si ambos son carpetas o ambos no lo son, o si son archivos, no se cambia el orden
          return 0
        })
        .map((documento: any) => (
          <div
            key={documento.id}
            onClick={(e) => {
              e.stopPropagation()
              if (documento.id == archivoSelected?.id) {
                setArchivoSelected(null)
              } else {
                setArchivoSelected(documento)
              }
            }}
            onContextMenu={(e: any) => {
              if (documento.id == archivoSelected?.id) {
                handleContextMenu2(e)
              }
            }}
            style={{ cursor: 'context-menu' }}
            className={`${
              documento.id == archivoSelected?.id ? 'bg-gray-200' : ''
            } grid grid-cols-1 md:grid-cols-5 gap-4 px-4 items-center mb-2  p-2 rounded-xl cursor-pointer w-full`}
          >
            <div className="hidden md:block md:text-center col-span-2">
              {documento.tipo == 'archivo'
                ? <div className="text-left flex gap-3 items-center line-clamp-2">
                  {/* <img src={filarachive} alt="" className="w-10 h-10" /> */}
                  <span className="flex gap-3 items-center text-black lowercase first-letter:uppercase">
                    <FaRegFile /> {documento.name}
                  </span>
                </div>
                : (
                <div className="text-left flex gap-3 items-center line-clamp-2">
                    {
                      // eslint-disable-next-line multiline-ternary
                    documento.type == 'carpeta' && archivoSelected?.id == documento.id && folderName.length > 0 ? (
                    // Renderizar un campo de entrada para editar el nombre de la carpeta si está en modo de edición
                    <input
                    type="text"
                    onClick={(e) => { e.stopPropagation() }}
                    value={folderName}
                    className="flex gap-3 items-center text-black lowercase first-letter:uppercase"
                    onChange={handleNameChange}
                    onKeyDown={(e) => {
                      if (e.key == 'Enter') {
                        finishEditing(documento.id)
                      }
                    }}
                    autoFocus
                    />
                    )
                      : <span className="flex gap-3 items-center text-black lowercase first-letter:uppercase">
                    <GoFileDirectoryFill /> {documento.name}
                  </span>}
                </div>
                  )}
            </div>
            <div className="hidden md:block md:text-left">
              <div className="text-left flex gap-3 items-center line-clamp-2">
                {/* <img src={filarachive} alt="" className="w-10 h-10" /> */}
                <span className="flex gap-3 items-center text-gray-500">
                  {formatDateTime(documento.creationDate)}{' '}
                  {/* Llama a la función para formatear fecha y hora */}
                </span>
              </div>
            </div>
            <div className="hidden md:flex md:justify-left items-center gap-4 ">
              {documento.tipo == 'archivo'
                ? (
                <span className=" text-gray-500 line-clamp-1">
                  {documento.type}
                </span>
                  )
                : (
                <span className=" text-gray-500 line-clamp-1">
                  Carpeta de archivos
                </span>
                  )}
            </div>
            <div className="hidden md:flex md:justify-left items-center gap-4 ">
              <span className="flex gap-3 items-left text-gray-500">
                {formatSize(documento.size) == '0 Bytes'
                  ? ''
                  : formatSize(documento.size)}
              </span>
            </div>
          </div>
        ))}

      <Menu
        open={contextMenu2 !== null}
        onClose={() => {
          setContextMenu2(null)
        }}
        anchorReference="anchorPosition"
        className="fondo_documentos"
        anchorPosition={
          contextMenu2 !== null
            ? { top: contextMenu2.mouseY, left: contextMenu2.mouseX }
            : undefined
        }
      >
        {archivoSelected?.type != 'carpeta'
          ? <div
            role="menuitem"
            className="w-[200px] relative flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none hover:bg-gray-200 focus:bg-gray-200 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 pl-3"
            data-orientation="vertical"
            data-radix-collection-item=""
            >
            <input
                type="file"
                name=""
                id=""
                className="w-full h-full absolute inset-0 file:hidden opacity-0"
            />
            Descargar
            <span className="ml-auto text-xs tracking-widest text-muted-foreground">
                <MdDownload className="text-base text-gray-600" />
            </span>
            </div>

          : <div
            role="menuitem"
            className="w-[200px] relative flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none hover:bg-gray-200 focus:bg-gray-200 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 pl-3"
            data-orientation="vertical"
            data-radix-collection-item=""
            onClick={(e) => { e.stopPropagation(); startEditing() }}
            >
            Editar
            <span className="ml-auto text-xs tracking-widest text-muted-foreground">
                <AiFillEdit className="text-base text-gray-600 " />
            </span>
            </div>
        }

        <div
          role="menuitem"
          className="w-[200px] relative flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none hover:bg-gray-200 focus:bg-gray-200 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 pl-3"
          data-orientation="vertical"
          data-radix-collection-item=""
        >
          Eliminar
          <span className="ml-auto text-xs tracking-widest text-muted-foreground">
            <MdDelete className="text-base text-gray-600" />
          </span>
        </div>
      </Menu>
    </>
  )
}
