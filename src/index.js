import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import  { fbInstance } from "fbInstance";
console.log(fbInstance);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);