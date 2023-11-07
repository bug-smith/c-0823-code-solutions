type Props = {
  count: number;
};

export function Countup({ count }: Props) {
  return (
    <div className="border rounded-full w-40 h-40 flex items-center justify-center text-4xl">
      {count}
    </div>
  );
}
