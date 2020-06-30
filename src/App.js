import React,{createContext,useState,useEffect} from 'react';
import {BrowserRouter,Route} from "react-router-dom"
import CanvasNest from 'canvas-nest.js'
import Home from './components/main'
import Header from './components/header'
import './assets/css/App.scss';
function App() {
  const config = {
    color: '252, 248, 248',
    count: 200,
  }
  useEffect(() => {
    const cn = new CanvasNest(document.getElementById('app'), config)
    return () => {
      cn.destroy()
    }
  })
  return (
    <div className="App" id='app'>
      <Header />
      {/* <Route component={}/> */}
    </div>
  );
}

export default App;
