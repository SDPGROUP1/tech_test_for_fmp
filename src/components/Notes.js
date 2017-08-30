import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Note from './Note'
import Modal from 'react-modal'
import { toggleModal } from '../actions'

let Notes = ({ dispatch, notes }) => (
    <div>
        {notes.map(note =>
            <div key={note.id} >
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
                        key={note.id}
                        {...note}
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