export function addNote(title, main_content) {
    return {
        type: 'ADD_NOTE',
        title,
        main_content,
    }
}

export function editNote(title, main_content) {
    return {
        type: 'EDIT_NOTE',
        title,
        main_content
    }
}

export function deleteNote(id) {
    return {
        type: 'DELETE_NOTE',
        id
    }
}