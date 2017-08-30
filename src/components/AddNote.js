import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions'

let AddNote = ({dispatch}) => {
    let title
    let main_content

    return (
        <div>
            <form onSubmit={e =>{
            e.preventDefault()
            if (!title.value.trim() && !main_content.value.trim()) {
                return
            }
            dispatch(addNote(title.value, main_content.value))
            title.value = ''
            main_content.value = ''
            }}>
                <input ref={node => {
                    title = node
                }} />
                <input ref={node => {
                    main_content = node
                }} />
                <button type="submit">
                    Add Note
                </button>        
            </form>
        </div>
    )
}

AddNote = connect()(AddNote)

export default AddNote