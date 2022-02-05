import React from "react";

const UsersList = (props) => {
  return (
    <div className="w-75 mx-auto container text-center mt-3">
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length === 0 && (
            <tr className="text-center text-danger lead">
              <td>No Users Found</td>
            </tr>
          )}
          {props.users.length !== 0 &&
            props.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
