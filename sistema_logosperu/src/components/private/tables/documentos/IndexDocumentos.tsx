import useAuth from '../../../../hooks/useAuth'
import { useEffect, useState, type MouseEvent } from 'react'
import Menu from '@mui/material/Menu'
import { FiUpload } from 'react-icons/fi'
import { GoFileDirectory } from 'react-icons/go'
import { v4 as uuidv4 } from 'uuid'
import { ArrayArchivos } from './componets/ArrayArchivos'
import { type documentosArchivesValues } from '@/src/components/shared/schemas/Interfaces'

export const IndexDocumentos = (): JSX.Element => {
  const { setTitle } = useAuth()
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number
    mouseY: number
  } | null>(null)

  const [contextMenu2, setContextMenu2] = useState<{
    mouseX: number
    mouseY: number
  } | null>(null)

  const [arrayDocumentos, setArrayDocumentos] = useState<string[]>([])
  const [archivoSelected, setArchivoSelected] =
    useState<documentosArchivesValues | null>(null)

  const handleContextMenu = (event: MouseEvent): void => {
    event.preventDefault()
    setArchivoSelected(null)
    setContextMenu2(null)
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6
          }
        : null
    )
  }

  const handleClose = (): void => {
    setContextMenu(null)
  }

  useEffect(() => {
    setTitle('Documentos')
  }, [])

  const createFolder = (event: React.MouseEvent): void => {
    event.preventDefault()
    const folderName = prompt('Ingrese el nombre de la carpeta:')
    if (folderName) {
      const newFolder = {
        id: uuidv4(),
        name: folderName,
        creationDate: new Date(),
        type: 'carpeta',
        size: 0 // El tamaño de la carpeta se puede establecer en 0 o en cualquier otro valor predeterminado
      }
      setArrayDocumentos((prevState: any) => [...prevState, newFolder])
    }
    setContextMenu(null)
  }

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): any => {
    const uploadedFiles = event.target.files // Obtiene los archivos subidos
    if (uploadedFiles) {
      const filesArray = Array.from(uploadedFiles) // Convierte la colección de archivos a un array
      const newFiles = filesArray.map((file) => ({
        id: uuidv4(),
        name: file.name,
        creationDate: new Date(), // Fecha de creación actual
        type: file.type,
        size: file.size,
        tipo: 'archivo'
      }))
      setArrayDocumentos((prevState: any) => [...prevState, ...newFiles])
      setContextMenu(null)
    }
  }

  const handleContextMenu2 = (event: MouseEvent): void => {
    event.preventDefault()
    event.stopPropagation()
    handleClose()
    setContextMenu2(
      contextMenu2 === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6
          }
        : null
    )
  }

  return (
    <div
      className="w-full h-full bg-white p-4"
      onContextMenu={handleContextMenu}
      style={{ cursor: 'context-menu' }}
      onClick={() => {
        setArchivoSelected(null)
      }}
    >
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-black">
            Bienvenido de nuevo!
          </h2>
          <p className="text-muted-foreground text-gray-500">
            Documentos del sistema
          </p>
        </div>
      </div>

      <div className="mt-6 hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-2 md:px-4 md:py-2 text-gray-600 border border-gray-300 w-full rounded-md">
        <h5 className="md:text-left col-span-2">Archivo </h5>
        <h5 className="md:text-left">Fecha de creación</h5>
        <h5 className="md:text-left">Tipo</h5>
        <h5 className="md:text-left">Peso</h5>
      </div>
      <ArrayArchivos
        handleContextMenu2={handleContextMenu2}
        setContextMenu2={setContextMenu2}
        contextMenu2={contextMenu2}
        arrayDocumentos={arrayDocumentos}
        archivoSelected={archivoSelected}
        setArchivoSelected={setArchivoSelected}
        setArrayDocumentos={setArrayDocumentos}
      />
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        className="fondo_documentos"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <div
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
            onChange={handleFileUpload}
          />
          Subir Archivo
          <span className="ml-auto text-xs tracking-widest text-muted-foreground">
            <FiUpload className="text-base text-gray-600" />
          </span>
        </div>
        <div
          role="menuitem"
          className="w-[200px] relative flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none hover:bg-gray-200 focus:bg-gray-200 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 pl-3"
          data-orientation="vertical"
          data-radix-collection-item=""
          onClick={createFolder}
        >
          Crear Carpeta
          <span className="ml-auto text-xs tracking-widest text-muted-foreground">
            <GoFileDirectory className="text-base text-gray-600" />
          </span>
        </div>
      </Menu>
    </div>
  )
}
