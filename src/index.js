import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import Notes from './components/Notes'
import { Provider } from 'react-redux'
import './index.css'

ReactDOM.render(
    <div>
        <Provider store={store}>
            <div>
                <h1>Technical Test for FindMyPast</h1>
                <Notes />
            </div>
        </Provider>
    </div>
    ,document.getElementById('root')
);