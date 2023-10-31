type Props = {
  onSelection: (item: string) => void;
  items: string[];
  current: number
};

export default function Selections({ items, onSelection , current}: Props) {
  return (
    <div>
      {items.map((item, index) => (
        <button
          key={index}
          style={{
            backgroundColor: current === index ? 'lightblue' : '#1a1a1a',
          }}
          onClick={() => onSelection(item)}>
          {index}
        </button>
      ))}
    </div>
  );
}
