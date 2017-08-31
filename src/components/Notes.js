import React from 'react'
import { connect } from 'react-redux'
import Note from './Note'
import Modal from 'react-modal'
import { toggleModal, addNote } from '../actions'
import NoteForm from './NoteForm'

let Notes = ({ dispatch, notes }) => (
    <div id={"notes-container"} >
        <NoteForm action={addNote} />
        {notes.sort((a, b) => {
            return new Date(b.date_edited).getTime() - new Date(a.date_edited).getTime();
        }).map(note =>
            <div key={note.id} className={"note-container"} >
                <div
                    onClick={e=> {
                        dispatch(toggleModal(note.id))
                    }}
                >
                    <Note
                        {...note}
                    />
                </div>
                <Modal
                    contentLabel={note.id + '_modal'}
                    isOpen={note.modal_open}
                    onRequestClose={e => {
                        dispatch(toggleModal(note.id))
                    }}
                >
                    <Note
                        {...note}
                        editable={true}
                    />
                </Modal>
            </div>
        )}
    </div>
)

const mapStateToProps = (state) => ({
    notes: state.notes
})

Notes = connect(mapStateToProps)(Notes)

export default Notes