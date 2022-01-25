import styles from "./UsersList.module.css";

function UsersList(props) {
  return (
    <div className={styles["users-list"]}>
      <h2 className="text-success ">Users</h2>
      <hr className="w-90 mb-1 mt-0 mx-auto"></hr>
      <div>
        <table className="w-100 text-start">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Skill</th>
            </tr>
          </thead>
          <tbody>
            {props.users.length > 0 &&
              props.users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.skill}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {props.users.length === 0 && (
          <h3 className="text-dark text-center m-5">No users found.</h3>
        )}
      </div>
    </div>
  );
}

export default UsersList;
