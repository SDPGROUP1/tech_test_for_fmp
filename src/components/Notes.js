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

        return (
            <div id={"notes-container"} >
                {notes.sort((a, b) => {
                    if ((b.title.length === 0 && b.main_content.length === 0) || (a.title.length === 0 && a.main_content.length === 0)) {
                        return 1
                    } else {
                        return (new Date(b.date_edited).getTime() - new Date(a.date_edited).getTime())
                    }
                }).map(note =>
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