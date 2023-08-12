import { SearchBarInput, SearchIcon, Container } from "./styles";
import { useFilterContext } from "../../store/filter-context";
import { useState } from "react";
import searchIcon from "../../assets/icon-search.svg";

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
      <Container>
        <SearchBarInput
          placeholder="Procure pelo nome ou cidade..."
          value={query}
          onChange={onChangeHandler}
          type="text"
        />
        <SearchIcon src={searchIcon} alt="" />
      </Container>
    </>
  );
};

export default SearchBar;
