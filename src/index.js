import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import Store from './Redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store = {Store}>
    <App/>
    </Provider>, 
    document.querySelector('#root')
)