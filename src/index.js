import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import Allreducers from './reducers/Allreducers'
import {Provider} from 'react-redux'
import { transitions, positions, types, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const initialState = [];

function Store( state = initialState, action) {

}
const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 7000,
  offset: '30px',
  type: types.SUCCESS,
  transition: transitions.FADE
}

const store = createStore(Allreducers)

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </AlertProvider>,
  document.getElementById('root')
);

reportWebVitals();
