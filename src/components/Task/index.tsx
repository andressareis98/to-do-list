import styles from "./Task.module.css";
import { TaskInterface } from "../../interfaces/Task";

export function Task(task: TaskInterface) {
  const isChecked = task.isCompleted;
  return (
    <div className={styles.task}>
      <div className={styles["checkbox-container"]}>
        <input type="checkbox" className={styles.checkbox} id="checkbox" />
      </div>
      <label
        htmlFor="checkbox"
        className={isChecked ? styles.checkedLabel : ""}
      >
        {task.title}
      </label>
    </div>
  );
}
