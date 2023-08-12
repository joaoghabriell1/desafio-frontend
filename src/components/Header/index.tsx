import { sortBy } from "../../store/filter-context";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useFilterContext } from "../../store/filter-context";
import SortButton from "./SortButton";
import { HeaderTag } from "./styles";

const Header = () => {
  const { onFilterChange, filter } = useFilterContext();
  const isMobile = useMediaQuery("(max-width:768px)");
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    onFilterChange(value as sortBy);
  };

  return (
    <HeaderTag>
      <div>
        <SortButton
          content="Nome"
          value="name"
          filter={filter.sortBy}
          onClick={clickHandler}
        />
      </div>
      {!isMobile && (
        <div>
          <SortButton
            content="E-mail"
            value="email"
            filter={filter.sortBy}
            onClick={clickHandler}
          />
        </div>
      )}

      <div>
        <SortButton
          content="Cidade"
          value="city"
          filter={filter.sortBy}
          onClick={clickHandler}
        />
      </div>
    </HeaderTag>
  );
};

export default Header;
