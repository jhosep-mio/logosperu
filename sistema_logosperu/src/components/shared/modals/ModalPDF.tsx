import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { type editorValues } from '../schemas/Interfaces'

const ModalPDF = ({ content, setContent }: editorValues): JSX.Element => {
  return (
    <ReactQuill theme="snow" value={content} onChange={setContent} />
  )
}

export default ModalPDF
