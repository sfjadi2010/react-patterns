import "./App.css";
import UserInfo from "./components/UserInfo";
import Container from "./components/Container";

function App() {
  return (
    <>
      <h1>Container Pattern Example</h1>
      <p>This example demonstrates the Container Pattern in React.</p>
      <Container userId={"2"}>
        <UserInfo />
      </Container>
    </>
  );
}

export default App;
