import React from 'react'
import PropTypes from 'prop-types'

const NoteView = ({ title, main_content }) => (
    <div>
        <h1>{title}</h1>
        <h3 dangerouslySetInnerHTML={!main_content && !title
            ?  {__html:'Create a New Note'} :
            {__html:main_content.replace(/(?:\r\n|\r|\n)/g, '<br />')}
        }>
        </h3>
    </div>
)

export default NoteView

