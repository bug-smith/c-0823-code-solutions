type Props = {
  count: number;
  onClick: () => void;
};

export function Countup({ count, onClick }: Props) {
  return (
    <div
      className="border rounded-full w-40 h-40 flex items-center justify-center text-4xl"
      onClick={onClick}>
      {count}
    </div>
  );
}
