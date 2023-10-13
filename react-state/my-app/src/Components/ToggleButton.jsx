import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setValue] = useState(false);
  console.log(`returned value of isClicked Hook ${isClicked}`);
  const handleClick = () => {
    console.log(`this is the value before setter ${isClicked}`);
    setValue(!isClicked);
    console.log(`this is hte value after the hook fires ${isClicked}`);
  };
  return (
    <button
      style={{ backgroundColor: isClicked ? color : 'white', color: 'black' }}
      onClick={handleClick}>
      {text}
    </button>
  );
}
