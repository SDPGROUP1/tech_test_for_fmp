import { createStore } from 'redux'
import rootReducer from '../reducers/'

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(
    rootReducer,
    persistedState
)

store.subscribe(() => {
    let storedStore = JSON.parse(JSON.stringify(store.getState()))

    storedStore.notes = storedStore.notes.filter(note => {
        return note.title.length > 0 || note.main_content.length > 0        
    })
    localStorage.setItem('reduxState', JSON.stringify(storedStore))
})

export default store
