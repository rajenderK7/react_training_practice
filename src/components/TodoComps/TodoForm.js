import { useForm } from "react-hook-form";
import AppButton from "../UI/AppButton";
import Container from "../UI/Container";
import styles from "./TodoForm.module.css";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addTodoHandler = (event) => {
    // event.preventdefault();

    console.log("hekko");
  };
  return (
    <div>
      <Container>
        <form className={styles.input} onSubmit={handleSubmit(addTodoHandler)}>
          <div>
            <label htmlFor="todo">To Do</label>
            <input id="todo" type="text" {...register("todo", require)}></input>
          </div>
          <div>
            <label htmlFor="priority">Priority</label>
            <input id="priority" type="number" min={1} max={5}></input>
          </div>
          <AppButton buttonType="submit">Add To-do</AppButton>
        </form>
      </Container>
    </div>
  );
};

export default UserForm;
