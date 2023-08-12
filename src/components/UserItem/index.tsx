import { useUserModalContext } from "../../store/modal-context";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Li, Button } from "./styles";

interface Props {
  id: number;
  name: string;
  email: string;
  city: string;
}

const UserItem = ({ id, name, email, city }: Props) => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const { toggleUserModal, onSetUserId } = useUserModalContext();

  return (
    <Li>
      <div>{name}</div>
      {!isMobile && <div>{email}</div>}
      <div>{city}</div>
      <Button
        onClick={() => {
          toggleUserModal();
          onSetUserId(id);
        }}
      >
        {isMobile ? "+" : "Ver mais"}
      </Button>
    </Li>
  );
};

export default UserItem;
