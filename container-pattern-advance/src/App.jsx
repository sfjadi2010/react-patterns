import "./App.css";
import Container from "./components/Container";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <>
      <Container resourceUrl="/users/5" resourceName="user">
        <UserInfo />
      </Container>
    </>
  );
}

export default App;
