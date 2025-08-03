import "./App.css";
import axios from "axios";
import DataSource from "./components/DataSource";
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
      <DataSource
        getData={() => getData("/users/2")}
        render={(resource) => <UserInfo user={resource} />}
      />
    </>
  );
}

export default App;
