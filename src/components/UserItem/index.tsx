import { useUserModalContext } from "../../store/modal-context";
import { Li, Button } from "./styles";

interface Props {
  id: number;
  name: string;
  email: string;
  city: string;
}

const UserItem = ({ id, name, email, city }: Props) => {
  const { toggleUserModal, onSetUserId } = useUserModalContext();

  return (
    <Li>
      <div>{name}</div>
      <div>{email}</div>
      <div>{city}</div>
      <Button
        onClick={() => {
          toggleUserModal();
          onSetUserId(id);
        }}
      >
        Ver mais
      </Button>
    </Li>
  );
};

export default UserItem;
