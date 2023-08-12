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
        <Heading>UserInfo:</Heading>
        <Ul>
          {UserDataArray.map((item, index) => {
            return <InfoItem key={index} label={item[0]} info={item[1]} />;
          })}
        </Ul>

        <Heading>Company Info:</Heading>
        <Ul>
          {companyDataArray.map((item, index) => {
            return <InfoItem key={index} label={item[0]} info={item[1]} />;
          })}
        </Ul>
        <Ul>
          <Heading>Location Info:</Heading>
          {addressDataArray.map((item, index) => {
            return <InfoItem key={index} label={item[0]} info={item[1]} />;
          })}
        </Ul>
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
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const Heading = styled.h4`
  font-weight: 500;
  margin-bottom: 0.7rem;
`;

export default UserModal;
