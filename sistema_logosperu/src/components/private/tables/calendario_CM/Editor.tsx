import { useRef } from 'react'
import JoditEditor from 'jodit-react'
import { type editorValues } from '../../../shared/schemas/Interfaces'

const Editor = ({ content, setContent }: editorValues): JSX.Element => {
  const editor = useRef(null)

  return (
        <JoditEditor
            className='w-full h-full jodecct_sss'
            ref={editor}
            value={content}
            // tabIndex={1}
            onBlur={newContent => { setContent(newContent) }}
           // @ts-expect-error: Explanation for disabling TypeScript for this line
            onChange={(newContent) => {}}
        />
  )
}

export default Editor
