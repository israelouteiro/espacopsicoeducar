import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router'; // MOD
import reportWebVitals from './reportWebVitals';
 
import 'ui/theme.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import { CoreState } from './context/CoreContext'

ReactDOM.render(
  <React.StrictMode>
    <CoreState>
      <App />
      <ToastContainer />
    </CoreState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
