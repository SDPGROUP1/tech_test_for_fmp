import React, { Component } from 'react'
import { connect } from 'react-redux'
import Note from './Note'
import { addNote } from '../actions'

class Notes extends Component {
    constructor(props) {
        super(props);
        if (props.notes.length === 0) {
            props.dispatch(addNote('', ''))            
        }
      }

    render() {
        const { dispatch, notes } = this.props

        let sorted_notes = notes.filter(note => {
            return note.title.length > 0 || note.main_content.length > 0
        }).sort((a, b) => {
            return  (new Date(b.date_edited).getTime() - new Date(a.date_edited).getTime())
        })

        sorted_notes.unshift(notes.filter(note => {
            return note.title.length === 0 && note.main_content.length === 0
        })[0])

        sorted_notes[0] === undefined ? sorted_notes.shift() : ''

        console.log(sorted_notes)

        return (
            <div id={"notes-container"} >
                {sorted_notes.map(note =>
                    <Note 
                        key={note.id}
                        {...note}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    notes: state.notes
})

Notes = connect(mapStateToProps)(Notes)

export default Notes