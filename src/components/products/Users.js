import axios from "axios";
import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UsersList from "./UsersList";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    updateUsers();
  }, [users]);

  const updateUsers = async () => {
    const response = axios.get("http://localhost:4000/users");
    const userData = response.data;
    // console.log(userData);
    setUsers(userData);
  };

  return (
    <div>
      <UserForm></UserForm>
      <UsersList users={users}></UsersList>
    </div>
  );
};

export default Users;
