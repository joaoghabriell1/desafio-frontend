import { createContext, useState, useContext } from "react";

interface Props {
  children: React.ReactNode;
}

interface ModalContext {
  showUserModal: boolean;
  getUserInfoId: number | null;
  toggleUserModal: () => void;
  onSetUserId: (id: number) => void;
}

const ModalContext = createContext<ModalContext>({
  showUserModal: false,
  getUserInfoId: null,
  toggleUserModal: () => {},
  onSetUserId: (id: number) => {},
});

export const ModalContextProvider = ({ children }: Props) => {
  const [showUserModal, setShowUserModal] = useState<boolean>(false);
  const [getUserInfoId, setGetUserInfoId] = useState<number | null>(null);

  const toggleUserModal = () => {
    setShowUserModal((prev) => !prev);
  };

  const onSetUserId = (id: number) => {
    setGetUserInfoId(id);
  };

  const value = {
    toggleUserModal,
    onSetUserId,
    showUserModal,
    getUserInfoId,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useUserModalContext = () => {
  return useContext(ModalContext);
};
