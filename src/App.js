import "./App.css";
import TodoList from "./components/User/ToDo";
import UserForm from "./components/User/UserForm";

const todos = [
  {
    id: 1,
    todo: "Rajender",
    priority: 7,
  },
  {
    id: 2,
    todo: "Rajender",
    priority: 7,
  },
  {
    id: 3,
    todo: "Rajender",
    priority: 7,
  },
  {
    id: 4,
    todo: "Rajender",
    priority: 7,
  },
];

function App() {
  return (
    <div className="App">
      <UserForm />
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
