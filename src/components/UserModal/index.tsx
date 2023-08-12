import { extractKeyValuePairsFromUserAddressAndCompany } from "../../utils/extractKeyValuePairsFromUserAddressAndCompany.ts";
import { extractKeyValuePairs } from "../../utils/extractKeyValuePairs.ts";
import { useUserModalContext } from "../../store/modal-context";
import { useGetUserData } from "../../hooks/useGetUserData";
import { createPortal } from "react-dom";
import styled from "styled-components";
import BackDrop from "../UI/BackDrop";
import InfoItem from "./InfoItem";

interface Props {
  id: number | null;
}

interface UserModalPortal {
  children: React.ReactNode;
}

const UserModal = ({ id }: Props) => {
  const { data, isLoading, error } = useGetUserData(id);
  const { toggleUserModal } = useUserModalContext();

  const BackDropPortal = () => {
    return (
      <>
        {createPortal(
          <BackDrop onClick={toggleUserModal} />,
          document.getElementById("backdrop-root")!
        )}
      </>
    );
  };

  const UserModalPortal = ({ children }: UserModalPortal) => {
    return (
      <>
        {createPortal(
          <Wrapper>{children}</Wrapper>,
          document.getElementById("overlay-root")!
        )}
      </>
    );
  };

  if (isLoading) {
    return (
      <>
        <BackDropPortal />
        <UserModalPortal>...carregando</UserModalPortal>;
      </>
    );
  }

  if (error) {
    return (
      <>
        <BackDropPortal />
        <UserModalPortal>
          Houve um error na tentativa de buscar os dados do usuário.
        </UserModalPortal>
      </>
    );
  }

  const UserDataArray = extractKeyValuePairs(data!.data);
  const addressDataArray = extractKeyValuePairsFromUserAddressAndCompany(
    data!.data!.address
  );
  const companyDataArray = extractKeyValuePairsFromUserAddressAndCompany(
    data!.data!.company
  );

  return (
    <>
      <BackDropPortal />
      <UserModalPortal>
        <div>UserInfo:</div>
        {UserDataArray.map((item) => {
          return <InfoItem label={item[0]} info={item[1]} />;
        })}

        <div>Company Info:</div>
        {companyDataArray.map((item) => {
          return <InfoItem label={item[0]} info={item[1]} />;
        })}
        <div>Location Info:</div>
        {addressDataArray.map((item) => {
          return <InfoItem label={item[0]} info={item[1]} />;
        })}
      </UserModalPortal>
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #242424;
  width: min(500px, 100% - 2rem);
  z-index: 2;
  overflow-wrap: break-word;
  border-radius: 1rem;
  padding: 1rem;
`;

export default UserModal;
