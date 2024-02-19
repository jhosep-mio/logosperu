import { useRef, type Dispatch, type SetStateAction } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Editor = ({ editorHtml, setEditorHtml }: { editorHtml: string, setEditorHtml: Dispatch<SetStateAction<string>> }): JSX.Element => {
  const quillRef = useRef(null)

  return (
    <div>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        className='mt-6'
        value={editorHtml}
        onChange={setEditorHtml}
        modules={modules}
      />
    </div>
  )
}

const modules = {
  toolbar: {
    container: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' },
        { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['clean']
    ]
  }
}

export default Editor
