import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

const appJSX = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

ReactDOM.render(appJSX, document.getElementById('root'))
