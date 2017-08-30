import React, { Component } from 'react'
import { connect } from 'react-redux'

class NoteForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        if (this.props.id == undefined) {
            this.props.dispatch(this.props.action(this.refs.title.value, this.refs.main_content.value))
            this.refs.title.value = ''
            this.refs.main_content.value = ''    
        } else {
            this.props.dispatch(this.props.action(this.props.id, this.refs.title.value, this.refs.main_content.value))                    
        }
        if ((this.refs.title.value.length + this.refs.main_content.value) == 0) {
            return
        }
    }

    componentDidMount() {
        this.refs.title.value = this.props.title || ""
        this.refs.main_content.value = this.props.main_content || ""
    }

    render() {
        const { id, title, main_content} = this.props

        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <input
                        ref={'title'}
                    />
                    <input
                        ref={'main_content'}
                    />
                    <button type="submit">
                        {(id === undefined) ? 'Add New Note' : 'Save Changes to Note'} 
                    </button>        
                </form>
            </div>
        )
    }
}

NoteForm = connect()(NoteForm)

export default NoteForm