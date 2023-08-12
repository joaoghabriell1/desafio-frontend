import { Li } from "./styles";

interface Props {
  id: number;
  name: string;
  email: string;
  city: string;
}

const UserItem = ({ id, name, email, city }: Props) => {
  return (
    <Li>
      <div>{name}</div>
      <div>{email}</div>
      <div>{city}</div>
      <button>see more</button>
    </Li>
  );
};

export default UserItem;
