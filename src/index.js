import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css'; // 1️⃣ bootstrap css first
import 'jquery';                               // 2️⃣ jquery
import 'popper.js/dist/umd/popper.min.js';     // 3️⃣ correct popper path
import 'bootstrap/dist/js/bootstrap.min.js';   // 4️⃣ bootstrap js

import './variables.css';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();