import React from "react";
import { useForm } from "react-hook-form";
import styles from "./UserForm.module.css";
import axios from "axios";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const onSubmitHandler = (newUser) => {
    const user = {
      username: newUser.username,
      email: newUser.email,
    };
    addUser(user);
    reset();
  };

  const addUser = async (user) => {
    await axios.post("http://localhost:4000/users", user);
  };

  return (
    <div>
      <div className={styles["user-form"]}>
        <form className="pt-2" onSubmit={handleSubmit(onSubmitHandler)}>
          <div className={styles["form-field"]}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              {...register("username", { required: true, minLength: "4" })}
            ></input>
            {errors.username && (
              <p className="text-danger text-start">{`${
                errors.username.type === "required"
                  ? "*Username is a required field"
                  : "Username minimum length 4 character"
              }`}</p>
            )}
          </div>
          <div className={styles["form-field"]}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              autoComplete="off"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            ></input>
            {errors.email && (
              <p className="text-start text-danger">
                {errors.email.type === "pattern"
                  ? "Invalid email address"
                  : "*Email is a required field"}
              </p>
            )}
          </div>
          {/* <BuyNow>Add User</BuyNow> */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary mt-0 mb-2">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
