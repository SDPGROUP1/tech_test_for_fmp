export function addNote(title, main_content) {
    return {
        type: 'ADD_NOTE',
        title,
        main_content,
    }
}

export function toggleModal(id) {
    return {
        type: 'TOGGLE_MODAL',
        id
    }
}

export function editNote(id, title, main_content) {
    return {
        type: 'EDIT_NOTE',
        id,
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