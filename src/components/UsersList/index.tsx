import { Ul } from "./styles";
import { useUsers } from "../../hooks/useUsers";

const UsersList = () => {
  const { data, isLoading, isError, error } = useUsers();

  if (isLoading) {
    return <p>...carregando</p>;
  }

  if (error) {
    return <p>Não foi possível carregar os usuários.</p>;
  }

  return (
    <>
      <Ul>
        {data?.data?.map((user, index) => {
          return <li key={index}>{user.name}</li>;
        })}
      </Ul>
    </>
  );
};

export default UsersList;
