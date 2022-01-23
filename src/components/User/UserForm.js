import AppButton from "../UI/AppButton";
import Container from "../UI/Container";
import styles from "./UserForm.module.css";

const UserForm = () => {
  return (
    <div>
      <Container>
        <form className={styles.input}>
          <div>
            <label htmlFor="todo">To Do</label>
            <input id="todo" type="text"></input>
          </div>
          <div>
            <label htmlFor="priority">Priority</label>
            <input id="priority" type="number"></input>
          </div>
          <AppButton buttonType="submit">Add To-do</AppButton>
        </form>
      </Container>
    </div>
  );
};

export default UserForm;
