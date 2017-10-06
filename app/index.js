import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import requestReducer from './reducers/requestReducer';
import { addRequest } from './actions/requestActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import App from './components/App';

const store = createStore(
    combineReducers({
        requests: requestsReducer
    })
);

store.dispatch(addRequest({name: 'me', issue: 'cracked flooring'}));

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
