import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routers';
import store from "./store"
import { Provider } from "react-redux"


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routers />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);