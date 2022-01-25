import { useState } from "react";
import "./App.css";
import UsersList from "./components/display/UsersList";
import UserForm from "./components/form/UserForm";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  return (
    <div className="App row m-0">
      <div className="col-lg-6 col-sm-12 col-md-12">
        <UserForm addNewUser={addUserHandler}></UserForm>
      </div>
      <div className="col-lg-6 col-sm-12 col-md-12">
        <UsersList users={users}></UsersList>
      </div>
    </div>
  );
}

export default App;
