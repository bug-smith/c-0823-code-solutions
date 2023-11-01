import { FaPlay, FaPause } from 'react-icons/fa';

type Props = {
  isClicked: boolean;
  onClick: () => void;
};

export function Icon({ isClicked, onClick }: Props) {
  return (
    <div onClick={onClick}>
      {isClicked ? (
        <FaPlay className="text-3xl m-10" />
      ) : (
        <FaPause className="text-3xl m-10" />
      )}
    </div>
  );
}
