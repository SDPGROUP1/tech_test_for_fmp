import NoteView from './NoteView'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import NoteForm from './NoteForm'
import { addNote, editNote, toggleModal } from '../actions/'
import Modal from 'react-modal'

class Note extends Component {
    render() {
        const { id, title, main_content, editable, modal_open, dispatch } = this.props
        return (
            <div className={"note-container"}>
                <div
                    onClick={e=> {
                        dispatch(toggleModal(id))
                    }}
                >
                    <NoteView title={title} main_content={main_content} />
                </div>
                <Modal
                    contentLabel={id + '_modal'}
                    isOpen={modal_open}
                    onRequestClose={e => {
                        dispatch(toggleModal(id))
                    }}
                >
                    <NoteForm id={id} title={title} main_content={main_content} action={editNote} editable={true} />
                </Modal>
            </div>
        )
    }
}

Note = connect()(Note)

export default Note

