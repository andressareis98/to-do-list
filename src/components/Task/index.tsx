import styles from "./Task.module.css";
import { TaskInterface } from "../../interfaces/Task";
import { Trash } from "@phosphor-icons/react";

interface Props {
  task: TaskInterface;
  onDeleteTask: (task: TaskInterface) => void;
}

export function Task({ task, onDeleteTask }: Props) {
  const isChecked = task.isCompleted;

  function handleDeleteTask() {
    onDeleteTask(task);
  }
  return (
    <div className={styles.task}>
      <div className={styles.boxInput}>
        <div>
          <input type="checkbox" className={styles.checkbox} id="checkbox" />
        </div>
        <label
          htmlFor="checkbox"
          className={isChecked ? styles.checkedLabel : ""}
        >
          {task.title}
        </label>
      </div>
      <div>
        <Trash className={styles.trash} onClick={handleDeleteTask} />
      </div>
    </div>
  );
}
