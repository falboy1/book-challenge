import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './profile';
import TaskList from './task-list';
import reportWebVitals from './reportWebVitals';
import MainLayout from './main-layout';

ReactDOM.render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();