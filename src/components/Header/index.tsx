import { HeaderTag } from "./styles";
import { useFilterContext } from "../../store/filter-context";
import { sortBy } from "../../store/filter-context";

const Header = () => {
  const { onFilterChange, filter } = useFilterContext();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    onFilterChange(value as sortBy);
  };

  return (
    <HeaderTag>
      <div>
        name
        <button onClick={clickHandler} value="name">
          x
        </button>
      </div>
      <div>
        email
        <button onClick={clickHandler} value="email">
          x
        </button>
      </div>
      <div>
        city
        <button onClick={clickHandler} value="city">
          x
        </button>
      </div>
    </HeaderTag>
  );
};

export default Header;
