import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./lang/Languages.js";
import { Provider } from 'react-redux';
import { store } from '../src/redux/store/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>  
);

reportWebVitals();
