import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { type editorValues } from '../schemas/Interfaces'

const EditorPdfAltas = ({ content, setContent }: editorValues): JSX.Element => {
  const [editorContent, setEditorContent] = useState(content)

  const handleContentChange = (value: string): void => {
    // Procesa el contenido antes de actualizar el estado
    const processedContent = processContent(value)
    setEditorContent(processedContent)
    setContent(processedContent) // Actualiza el estado de la aplicación con el contenido procesado
  }

  const processContent = (content: string): string => {
    // Aquí puedes realizar cualquier procesamiento necesario en el contenido antes de enviarlo
    // Por ejemplo, podrías reemplazar el emoji con su equivalente de entidad HTML
    return content.replace(/✅/g, '&#10003;')
  }

  return (
    <ReactQuill theme="snow" value={editorContent} onChange={handleContentChange}
    modules={{
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }], // Agrega las opciones de viñetas y numeración
          ['clean'],
          [{ align: [] }],
          [{ background: [] }],
          [{ color: [] }]
        ]
      }
    }}
    />
  )
}

export default EditorPdfAltas
