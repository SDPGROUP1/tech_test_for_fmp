let currentId = 0

const notes = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                {
                    id: Math.random().toString(36).substr(2, 5),
                    title: action.title,
                    main_content: action.main_content,
                    date_created: new Date().getDate(),
                    date_edited: new Date().getDate(),
                }
            ]
        case 'EDIT_NOTE':
            return state.map(note =>
                note.id === action.id ? 
                    {...note, title: note.title, main_content: note.main_content, date_edited: new Date().getDate()} :
                    note
            )
        case 'DELETE_NOTE':
            return state.filter(note =>
                note.id !== action.id
            )
        default:
            return state
    }
}

export default notes