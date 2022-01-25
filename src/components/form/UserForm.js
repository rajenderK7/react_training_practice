import { useForm } from "react-hook-form";
import MyButton from "../UI/MyButton";
import styles from "./UserForm.module.css";

function UserForm(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      gender: "",
      skill: "",
    },
  });

  const onSubmitHandler = (newUser) => {
    const user = {
      username: newUser.username,
      email: newUser.email,
      gender: newUser.gender,
      skill: `${
        newUser.skill.length === 1
          ? newUser.skill
          : `${newUser.skill[0]}, ${newUser.skill[1]}`
      }`,
    };
    reset();
    props.addNewUser(user);
  };

  return (
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
        <div className={styles["form-field"]}>
          <div className="row">
            <div className="form-check col-lg-6 col-md-12 col-sm-6 m-1">
              <label htmlFor="username" className="m-0 text-start">
                Gender
              </label>
              {errors.gender && (
                <p className="text-danger text-start">
                  {errors.gender && "*Gender is a required field"}
                </p>
              )}
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value="Male"
                  {...register("gender", { required: true })}
                ></input>
                <label htmlFor="male" className="form-check-label">
                  Male
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  value="Female"
                  {...register("gender", { required: true })}
                ></input>
                <label htmlFor="female" className="form-check-label">
                  Female
                </label>
              </div>
            </div>
            <div className="form-check col-lg-6 col-md-12 col-sm-6 m-1">
              <label htmlFor="username" className="m-0 text-start">
                Skill
              </label>
              {errors.gender && (
                <p className="text-danger text-start">
                  {errors.gender && "*Skill is a required field"}
                </p>
              )}
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="software"
                  value="Software"
                  {...register("skill", { required: true })}
                ></input>
                <label htmlFor="software" className="form-check-label">
                  Software
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="core"
                  value="Core"
                  {...register("skill", { required: true })}
                ></input>
                <label htmlFor="core" className="form-check-label">
                  Core
                </label>
              </div>
            </div>
          </div>
        </div>
        <MyButton>Add User</MyButton>
      </form>
    </div>
  );
}

export default UserForm;
