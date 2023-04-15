import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App/App';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {getSections} from './actions'

const store = configureStore();
store.dispatch(getSections())

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}><App /></Provider>
    </React.StrictMode>
);
