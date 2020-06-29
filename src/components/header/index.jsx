import React,{useState,useEffect,useCallback,useContext} from 'react';
import {context,ContextProvider} from '../../App'
function Header(){
    const { count=0, setCount, add} = useContext(context)
    const [num,setNum] = useState(5)

    //
    useEffect(()=>{
        setTimeout(()=>{
             setCount((data)=>(
                 ++data
             ))
        },500)
    },[num, setCount])
    
    const handelNum = useCallback(()=>{
        setCount(0)
        setNum((data)=> (++data))
    },[setCount])

    return(
        <div className='header'>
            react-demo
        </div>
    )
}

export default ()=>{
    return(
       <ContextProvider>
            <Header />
      </ContextProvider>
    )

}
