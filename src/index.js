import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom'
import history from './Components/history';

ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
  document.getElementById('root')
);

<<<<<<< HEAD
=======
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
>>>>>>> 8e08ff00031e4348cf6bf5ce99f6f02927edbb6d
reportWebVitals();
