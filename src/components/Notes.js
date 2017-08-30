import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Note from './Note'

let Notes = ({ notes }) => (
    <div>
        {notes.map(note =>
            <Note
                key={note.id}
                {...note}
            />
        )}
    </div>
)

const mapStateToProps = (state) => ({
    notes: state.notes
})

Notes = connect(mapStateToProps)(Notes)

export default Notes