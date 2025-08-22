import "./App.css";
import { logProps } from "./components/log-props";
import { UserInfo } from "./components/user-info";

const UserInfoWrapper = logProps(UserInfo);

const App = () => {
  return (
    <>
      <UserInfoWrapper test={"test"} anotherTest="Another Test"/>
    </>
  );
};

export default App;
