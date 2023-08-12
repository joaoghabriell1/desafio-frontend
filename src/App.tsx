import { Wrapper } from "./components/UsersList/styles";
import { useUserModalContext } from "./store/modal-context";
import SearchBar from "./components/SearchBar";
import UsersList from "./components/UsersList";
import UserModal from "./components/UserModal";

function App() {
  const { showUserModal, getUserInfoId } = useUserModalContext();

  return (
    <>
      <Wrapper>
        <SearchBar />
        <UsersList />
        {showUserModal ? <UserModal id={getUserInfoId} /> : null}
      </Wrapper>
    </>
  );
}

export default App;
