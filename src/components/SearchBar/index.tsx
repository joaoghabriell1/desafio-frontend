import { useFilterContext } from "../../store/filter-context";
import { useState } from "react";

const SearchBar = () => {
  const { onFilterChange } = useFilterContext();
  const [query, setQuery] = useState<string>("");

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setQuery(value);
    onFilterChange("searchQuery", value.toLowerCase());
  };

  return (
    <>
      <div>
        <input
          placeholder="Procure pelo nome ou cidade..."
          value={query}
          onChange={onChangeHandler}
          type="text"
        />
      </div>
    </>
  );
};

export default SearchBar;