import React from 'react'
import PropTypes from 'prop-types'

const NoteView = ({ title, main_content }) => (
    <div>
        <h1>{title}</h1>
        <h3 dangerouslySetInnerHTML={{__html:main_content.replace(/(?:\r\n|\r|\n)/g, '<br />')}}></h3>
    </div>
)

NoteView.propTypes = {
    title: PropTypes.string.isRequired,
    main_content: PropTypes.string.isRequired
}

export default NoteView

