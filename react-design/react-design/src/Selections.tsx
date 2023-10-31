type Props = {
  onSelection: (index: string) => void;
  items: string[];
  current: number;
};

export default function Selections({ items, onSelection, current }: Props) {
  return (
    <div>
      {items.map((_item, index) => (
        <button
          key={index}
          style={{
            backgroundColor: current === index ? 'lightblue' : '#1a1a1a',
          }}
          onClick={() => onSelection(_item)}>
          {index}
        </button>
      ))}
    </div>
  );
}
