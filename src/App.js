import React,{createContext,useState} from 'react';
import {BrowserRouter,Route} from "react-router-dom"
import Header from './components/header'
import Home from './components/main'
import './assets/css/App.css';


export const context = createContext({})
export function ContextProvider({children}){ //顶层父级组件

  const [count,setCount] = useState(10)
  const data = {
           count,
           setCount,
           add:()=>(setCount(count-1))
   }
//context对象中提供了一个自带的Provider组件  接受children 子组件
return <context.Provider value={data}>{children}</context.Provider>
}


function App() {
  return (
    <BrowserRouter className="App">
      <Route  path='/home' component={Home}/>
    </BrowserRouter>
  );
}

export default App;
