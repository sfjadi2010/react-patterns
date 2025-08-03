import "./App.css";
import ControlledForm from "./components/ControlledForm";
import UnControlledForm from "./components/UnControlledForm";

function App() {
  return (
    <>
      <div>        
        <UnControlledForm />
      </div>

      <div>
        <ControlledForm />
      </div>
    </>
  );
}

export default App;
