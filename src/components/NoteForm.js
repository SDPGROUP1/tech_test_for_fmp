import React from 'react'
import { connect } from 'react-redux'

let NoteForm = ({dispatch, action, id, title, main_content}) => {
    let title_node
    let main_content_node

    return (
        <div>
            <form onSubmit={e =>{
            e.preventDefault()
            if (!title_node.value.trim() && !main_content_node.value.trim()) {
                return
            }
            if (id === undefined) {
                dispatch(action(title_node.value, main_content_node.value))
            } else {
                dispatch(action(id, title_node.value, main_content_node.value))
            }
            title_node.value = ''
            main_content_node.value = ''
            }}>
                <input 
                    ref={node => {
                        title_node = node
                    }}
                    value={title}
                />
                <input 
                    ref={node => {
                        main_content_node = node
                    }}
                    value={main_content}
                />
                <button type="submit">
                    {(id === undefined) ? 'Add New Note' : 'Save Changes to Note'} 
                </button>        
            </form>
        </div>
    )
}

NoteForm = connect()(NoteForm)

export default NoteForm