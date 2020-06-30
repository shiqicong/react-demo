import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import './assets/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// StrictMode目前有助于：
// 识别具有不安全生命周期的组件
// 有关旧式字符串ref用法的警告
// 关于已弃用的findDOMNode用法的警告
// 检测意外的副作用
// 检测遗留 context API
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
