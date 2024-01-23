import './App.css';
import Profiles from './Components/profiles';
import Product from './Components/Product';
import { useState } from 'react';

function App() {
  return (
   <>
   {/* Components - Styles - Using Map */}
    <Profiles/>
    <Product/>

    {/* useState */}
    <h1>Counters that update separately</h1>
    <MyButton/>
    <MyButton/>
   </> 
  );
}

function MyButton(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  };

  return(
    <button onClick={handleClick}>
      Clicked {count} times.
    </button>
  )
}

export default App;
