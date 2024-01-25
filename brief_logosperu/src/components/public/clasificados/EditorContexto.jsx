import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const EditorContexto = ({ content, setContent }) => {
  return (
    <ReactQuill theme="snow" value={content} onChange={setContent} className='content_editor text-black'/>
  )
}

export default EditorContexto
