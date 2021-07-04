import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import {Reducer} from "./store/Reducer";
import thunk from "redux-thunk";
import './index.scss';
import App from './App';

const store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
