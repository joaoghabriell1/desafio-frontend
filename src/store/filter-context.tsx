import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export interface Filter {
  searchQuery: string;
  sortBy: sortBy;
}

export type sortBy = "name" | "city" | "email" | "searchQuery";

interface FilterContext {
  filter: Filter;
  onFilterChange: (type: sortBy, query?: string) => void;
}

const initialState: Filter = {
  searchQuery: "",
  sortBy: "name",
};

const FilterContext = createContext<FilterContext>({
  filter: initialState,
  onFilterChange: () => {},
});

export const FilterContextProvider = ({ children }: Props) => {
  const [filter, setFilter] = useState<Filter>(initialState);

  const onFilterChange = (type: sortBy, query?: string) => {
    if (type === "searchQuery") {
      setFilter((prev) => {
        return { ...prev, searchQuery: query! };
      });
    } else {
      setFilter((prev) => {
        return { ...prev, sortBy: type };
      });
    }
  };

  const value = {
    filter: filter,
    onFilterChange,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
