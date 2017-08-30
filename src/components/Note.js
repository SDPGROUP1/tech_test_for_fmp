import React from 'react'
import PropTypes from 'prop-types'

const Note = ({ title, main_content }) => (
    <div>
        <h1>{title}</h1>
        <h3>{main_content}</h3>
    </div>
)

Note.propTypes = {
    title: PropTypes.string.isRequired,
    main_content: PropTypes.string.isRequired
}

export default Note

