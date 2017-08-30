import React from 'react'
import PropTypes from 'prop-types'
import Note from './Note'

const Notes = ({ notes }) => (
    <div>
        {notes.map(note =>
            <Note
                key={note.id}
                {...note}
            />
        )}
    </div>
)