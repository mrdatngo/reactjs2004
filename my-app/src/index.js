import React from 'react';
import ReactDOM from 'react-dom';
// import { App } from './App';
// import App  from './jsx-practice/App'
// import App from './jsx-practice/ToDo'
// import App from './forms/Login'
// import App from './lifecycle/Parent'
// import App from './redux/Counter'
// import App from './func-class-components/Components'
import App from './redux/src/App'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
