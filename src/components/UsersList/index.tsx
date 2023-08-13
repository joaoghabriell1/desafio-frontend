import { sortListAlphabetically } from "../../utils/sortListAlphabetically ";
import { useFilterContext } from "../../store/filter-context";
import { useUsers } from "../../hooks/useUsers";
import { User } from "../../types/user";
import UserItem from "../UserItem";
import Header from "../Header";
import { Ul } from "./styles";

const UsersList = () => {
  const { data, isLoading, error } = useUsers();
  const { filter } = useFilterContext();
  let filteredList: User[] = [];

  if (isLoading) {
    return <p>...carregando</p>;
  }

  if (error) {
    return <p>Não foi possível carregar os usuários.</p>;
  }

  filteredList = data!.data?.filter((user) => {
    return (
      user.name.toLowerCase().includes(filter.searchQuery) ||
      user.address.city.toLowerCase().includes(filter.searchQuery)
    );
  });

  const sortedList = sortListAlphabetically(filteredList, filter);

  return (
    <>
      <Header />
      {filteredList.length === 0 ? (
        <p>Nenhum usuário foi encontrado.</p>
      ) : (
        <Ul>
          {sortedList.map(({ id, name, email, address: { city } }, index) => {
            return (
              <UserItem
                id={id}
                name={name}
                email={email}
                city={city}
                key={index}
              />
            );
          })}
        </Ul>
      )}
    </>
  );
};

export default UsersList;
