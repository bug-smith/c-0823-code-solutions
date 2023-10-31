type Props = {
  onSelection: (item: string) => void;
  items: string[];
};

export default function Selections({ items, onSelection }: Props) {
  return (
    <div>
      {items.map((item, index) => (
        <button key={index} onClick={() => onSelection(item)}>
          {items.indexOf(item)}
        </button>
      ))}
    </div>
  );
}
