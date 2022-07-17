import '../src/calculate.css'
import "./App.css";
import { useState } from "react";

function App() {
  const [result,setRes]=useState('');

  const clickHandler=(e)=>
  {
    setRes(result.concat(e.target.value));
  }
  const clearDisplay=()=>{
    setRes('');
  }
  const calculate=()=>{
    setRes(eval(result).toString());
  }
  return(
    <>
    <div className='calculate'>
    <input type='text' placeholder='0' id='answer' value={result}/>
  <div className='set'>

    <input type='button' value='9' className='btn' onClick={clickHandler}/>
    <input type='button' value='8' className='btn' onClick={clickHandler} />
    <input type='button' value='7' className='btn' onClick={clickHandler} />
    <input type='button' value='+' className='btn' onClick={clickHandler} />
    <input type='button' value='6' className='btn' onClick={clickHandler} />
    <input type='button' value='5' className='btn' onClick={clickHandler} />
    <input type='button' value='4' className='btn' onClick={clickHandler} />
    <input type='button' value='-' className='btn' onClick={clickHandler} />
    <input type='button' value='3' className='btn' onClick={clickHandler} />
    <input type='button' value='2' className='btn' onClick={clickHandler} />
    <input type='button' value='1' className='btn' onClick={clickHandler} />
    <input type='button' value='*' className='btn' onClick={clickHandler} />
    <input type='button' value='0' className='btn' onClick={clickHandler} />
    <input type='button' value='.' className='btn' onClick={clickHandler} />
    <input type='button' value='/' className='btn' onClick={clickHandler} />
    <input type='button' value='%' className='btn' onClick={clickHandler} />
    <input type='button' value='Clear' className='btn btn1' onClick={clearDisplay}/>
    <input type='button' value='=' className='btn btn1 ans' onClick={calculate}/>
  </div>
    
    
   </div>
  </>
  );
}

export default App;
