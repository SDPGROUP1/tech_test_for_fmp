import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import App from './components/App'
import { Provider } from 'react-redux'
import './index.css'

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>
    ,document.getElementById('root')
);