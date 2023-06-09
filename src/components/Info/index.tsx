import { TaskInterface } from "../../interfaces/Task";

import styles from "./Info.module.css";
import "../../global.css";

interface Props {
  listTasks: TaskInterface[];
}

export function Info({ listTasks }: Props) {
  const finish = listTasks.filter((item) => {
    return item.isCompleted === true;
  });
  return (
    <div className={styles.info}>
      <div className={styles.created}>
        Tarefas criadas
        <div className={styles.counter}>{listTasks.length}</div>
      </div>

      <div className={styles.done}>
        Concluidas
        <div className={styles.counter}>
          <span>
            {finish.length} de {listTasks.length}
          </span>
        </div>
      </div>
    </div>
  );
}
