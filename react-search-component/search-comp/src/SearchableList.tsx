import { useState } from 'react';
import { DisplayedList } from './DisplayedList';
import { SearchBar } from './SearchBar';

type Props = {
  items: string[];
};

export function SearchableList({ items }: Props) {
  const [search, setSearch] = useState('');
  return (
    <div>
      <SearchBar onSearch={setSearch} search={search} />
      <DisplayedList items={items} search={search} />
    </div>
  );
}
