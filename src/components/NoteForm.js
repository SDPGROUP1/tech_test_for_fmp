import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions'


class NoteForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.title && !prevProps.main_content) {
            this.props.dispatch(addNote('', ''))
        }
    }

    handleSubmit(e){
        e.preventDefault()
        if ((this.refs.title.value.length + this.refs.main_content.value.length) === 0) {
            return
        }
        if (this.props.id === undefined) {
            this.props.dispatch(this.props.action(this.refs.title.value, this.refs.main_content.value))
            this.refs.title.value = ''
            this.refs.main_content.value = ''    
        } else {
            this.props.dispatch(this.props.action(this.props.id, this.refs.title.value, this.refs.main_content.value))                    
        }
    }

    componentDidMount() {
        this.refs.title.value = this.props.title || ""
        this.refs.main_content.value = (this.props.main_content) || ""
    }

    render() {
        const { id } = this.props

        return (
            <div
                className='note-container'
            >
                <form
                    onSubmit={this.handleSubmit}
                    onChange={(id === undefined) ? '' : this.handleSubmit}
                >   
                    <div className='title-input'>
                        <input
                            placeholder={'Enter your note title'}
                            ref={'title'}
                        />
                    </div>
                    <div className='main-content-input'>
                        <textarea
                            rows={id === undefined ? '5' : '15'}
                            placeholder={'Enter your note'}
                            ref={'main_content'}
                        />
                    </div>    
                </form>
            </div>
        )
    }
}

NoteForm = connect()(NoteForm)

export default NoteForm