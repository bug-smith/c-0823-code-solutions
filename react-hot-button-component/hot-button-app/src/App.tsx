import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  let color;

  if (count < 3) {
    color = '#351C75';
  } else if (count < 6) {
    color = '#674EA7';
  } else if (count < 9) {
    color = '#E06666';
  } else if (count < 12) {
    color = '#F6B26B';
  } else if (count < 15) {
    color = '#FFFA05';
  } else if (count < 18) {
    color = '#FFFFFF';
  } else {
    color = 'black';
  }
  return (
    <div>
      <button
        onClick={incrementCount}
        style={{ background: color, color: 'grey' }}>
        Hot Button
      </button>
      <button
        onClick={incrementCount}
        style={{ background: 'yellow', color: 'black' }}>
        {count}
      </button>
    </div>
  );
}

export default App;
