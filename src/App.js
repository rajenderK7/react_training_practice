import "./App.css";
import Assignment2a from "./components/react-training/Assignment2a";

function App() {
  return (
    <div className="App">
      {/* <MainScreen></MainScreen> */}
      {/* <Assignment1a></Assignment1a> */}
      <p className="container w-75 para my-3" style={{ fontSize: "1.5rem" }}>
        The below Form takes 3 inputs and evertime the form is submitted
        (created) the state is upadated and it is logged onto the console as an
        object. Please open console.
      </p>
      <Assignment2a></Assignment2a>
    </div>
  );
}

export default App;
