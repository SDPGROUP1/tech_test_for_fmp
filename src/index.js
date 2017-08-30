import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'

ReactDOM.render(
    <div>
        <Provider store={store}>
            
        </Provider>
    </div>
    ,document.getElementById('root')
);