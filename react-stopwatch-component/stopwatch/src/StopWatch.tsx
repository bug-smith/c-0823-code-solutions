import { useState } from "react";
import { Countup } from "./Countdown";
import { Icon } from "./Icon";

export function StopWatch () {
  const [count, setCount] = useState(0)
  const [isClicked, setClick] = useState(true)

  return (
    <div>
      <div className="border rounded-full w-40 h-40 flex items-center justify-center text-4xl">
        <Countup count={count} />
      </div>
      <div className='flex justify-center'>
        <Icon/>
      </div>
    </div>
  );
}
