import React from "react";
import {render} from 'react-dom'
import "./index.css";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import App from "./components/App/App.jsx";

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
