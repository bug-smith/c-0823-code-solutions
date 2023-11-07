import { useState } from 'react';
import { Countup } from './Countup';
import { Icon } from './Icon';

export function StopWatch() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState<number>();
  function handlePlayButton() {
    if (intervalId === undefined) {
      const id = setInterval(() => setCount((prev) => prev + 1), 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId(undefined);
    }
  }

  return (
    <div>
      <div onClick={() => intervalId === undefined && setCount(0)}>
        <Countup count={count} />
      </div>
      <div className="flex justify-center">
        <Icon isClicked={intervalId !== undefined} onClick={handlePlayButton} />
      </div>
    </div>
  );
}
