import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');
  useEffect(() => {
    changeStyle();
  });
  const incrementCount = () => {
    setCount(count + 1);
  };
  const changeStyle = () => {
    if (count === 3) {
      setColor('#351C75');
    } else if (count === 6) {
      setColor('#674EA7');
    } else if (count === 9) {
      setColor('#E06666');
    } else if (count === 12) {
      setColor('#F6B26B');
    } else if (count === 15) {
      setColor('#FFFA05');
    } else if (count === 18) {
      setColor('#FFFFFF');
    }
  };
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
