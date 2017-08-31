import React from 'react'
import NoteView from './NoteView'
import NoteForm from './NoteForm'
import { editNote } from '../actions/'

const Note = ({ id, title, main_content, editable }) => (
    <div>
        {(editable !== true) &&
            <NoteView title={title} main_content={main_content} />
        }
        {(editable === true) &&
            <NoteForm id={id} title={title} main_content={main_content} action={editNote} editable={true} /> 
        }
    </div>
)

export default Note

