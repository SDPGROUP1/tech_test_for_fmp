import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions'
import NoteForm from './NoteForm'

let AddNote = () => {
    return (
       <NoteForm action={addNote} />
    )
}

export default AddNote