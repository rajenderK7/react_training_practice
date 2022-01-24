import "./App.css";
import TodoList from "./components/TodoComps/ToDoList";
import TodoForm from "./components/TodoComps/TodoForm";
import { useState } from "react";
import TodoCount from "./components/TodoComps/TodoCount";

// const todos = [
//   {
//     id: 1,
//     todo: "Rajender",
//     priority: 7,
//   },
//   {
//     id: 2,
//     todo: "Rajender",
//     priority: 7,
//   },
//   {
//     id: 3,
//     todo: "Rajender",
//     priority: 7,
//   },
//   {
//     id: 4,
//     todo: "Rajender",
//     priority: 7,
//   },
// ];

function App() {
  const [todos, setToDos] = useState([]);

  const addTodo = (newTodo) => {
    setToDos((prevTodos) => {
      return [newTodo, ...prevTodos];
    });
  };

  const getDeleteItemID = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setToDos(updatedTodos);
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      {todos.length === 0 && (
        <p style={{ color: "white", fontSize: "1.5rem" }}>No Todos yet.</p>
      )}
      <TodoCount todoCount={todos.length}></TodoCount>
      {todos.length > 0 && (
        <TodoList getDeleteItemID={getDeleteItemID} todos={todos}></TodoList>
      )}
    </div>
  );
}

export default App;
