import React, { Component } from 'react'
import { connect } from 'react-redux'
import Note from './Note'
import Modal from 'react-modal'
import { toggleModal, addNote } from '../actions'
import NoteForm from './NoteForm'

class Notes extends Component {
    constructor(props) {
        super(props);
        if (props.notes.length === 0) {
            props.dispatch(addNote('', ''))            
        }
      }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        const { dispatch, notes } = this.props 

        return (
            <div id={"notes-container"} >
                {notes.sort((a, b) => {
                    return new Date(b.date_edited).getTime() - new Date(a.date_edited).getTime();
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