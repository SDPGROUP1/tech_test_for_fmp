const notes = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    main_content: action.content,
                    date_created: new Date().getDate(),
                    date_edited: new Date().getDate(),
                }
            ]
        case 'EDIT_NOTE':
            return state.map(note =>
                note.id === action.id ? 
                    {...note, title: note.title, main_content: note.main_content} :
                    note
            )
        case 'DELETE_NOTE':
            return state.filter(note =>
                note.id !== action.id
            )
    }
}