import React from 'react'
import { connect } from 'react-redux'
import { editNote } from '../actions'
import NoteForm from './NoteForm'

let EditNote = ({id, title, main_content}) => {
    return (
       <NoteForm id={id}  action={editNote} />
    )
}

export default EditNote