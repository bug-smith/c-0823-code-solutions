import { FaPlay, FaPause } from 'react-icons/fa';



export function Icon (onTap) {
  return (
    <div>
      <FaPlay className="text-3xl m-10" />
      <FaPause className='text-3xl m-10'/>
    </div>
  );
}
