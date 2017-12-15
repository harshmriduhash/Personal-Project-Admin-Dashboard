import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import Store from './store'
import 'animate.css/animate.min.css';
//import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/cyborg/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css';


let store = Store();

ReactDOM.render(

  <Provider store={store}>

    <App />
  </Provider>

, document.getElementById('root'));
