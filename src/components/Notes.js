import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Note from './Note'
import Modal from 'react-modal'
import { toggleModal } from '../actions'

let Notes = ({ dispatch, notes }) => (
    <div id={"notes-container"} >
        {notes.map(note =>
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