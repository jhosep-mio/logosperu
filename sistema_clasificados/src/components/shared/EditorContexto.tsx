import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { type editorValues } from './Interfaces'

const EditorContexto = ({ content, setContent }: editorValues): JSX.Element => {
  return (
    <ReactQuill theme="snow" value={content} onChange={setContent} className='content_editor text-black'/>
  )
}

export default EditorContexto