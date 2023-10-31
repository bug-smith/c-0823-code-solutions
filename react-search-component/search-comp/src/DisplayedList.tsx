type Props = {
  items: string[];
  search: string;
};

export function DisplayedList({ items, search }: Props) {
  const filteredItems = items.filter((items) =>
    items.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="md:m-5 md:text-green-500">
              {item}
            </li>
          ))
        ) : (
          <li>No items match the filter.</li>
        )}
      </ul>
    </div>
  );
}
