import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(true);
  return (
    <div
      className={`toggle-switch ${isOn ? 'is-on' : 'is-off'}`}
      onClick={() => setIsOn(!isOn)}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <span className="state-label">{isOn ? 'ON' : 'OFF'}</span>
    </div>
  );
}
