import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };
  const decrementCounter = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>
        <button onClick={incrementCounter}>Up</button>
        <p>{count}</p>
        <button onClick={decrementCounter}>Down</button>
      </div>
    </>
  );
}

export default App;
