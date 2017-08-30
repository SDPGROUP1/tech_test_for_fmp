import React from 'react'
import Notes from './Notes'
import NoteForm from './NoteForm'
import { addNote } from '../actions'

const App = () => (
    <div>
        <NoteForm action={addNote} />
        <Notes />
    </div>
)

export default App