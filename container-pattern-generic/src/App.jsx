import "./App.css";
import axios from "axios";
import Container from "./components/Container";
import UserInfo from "./components/UserInfo";

function App() {
  const getData = async (url) => {
    const response = await axios.get(url);
    if (!response.statusText === "OK") {
      throw new Error("Network response was not ok");
    }
    console.log("Fetched user data:", response.data);
    return response.data;
  };
  return (
    <>
      <h1>Container Pattern Generic</h1>
      <p>This is a generic container pattern example.</p>
      <br />
      <Container resourceName={"user"} getData={() => getData("/users/1")}>
        <UserInfo />
      </Container>
    </>
  );
}

export default App;
