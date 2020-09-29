import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithContext from './components/AppWithContext';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
//import { thunks } from './store/products'; //NEED TO CHANGE TO PRODUCTS

const store = configureStore();

//store.dispatch(thunks.getProducts()); //NEED TO CHANGE TO PRODUCTS

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWithContext />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
