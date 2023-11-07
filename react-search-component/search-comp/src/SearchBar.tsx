type Props = {
  onSearch: (e: string) => void;
  search: string;
};
export function SearchBar({ onSearch, search }: Props) {
  return (
    <label className="border-green-700 border">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </label>
  );
}
