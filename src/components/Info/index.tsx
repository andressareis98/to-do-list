import "../../global.css";
import styles from "./Info.module.css";

export function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.created}>
        Tarefas criadas
        <div className={styles.counter}>0</div>
      </div>

      <div className={styles.done}>
        Concluidas
        <div className={styles.counter}>0</div>
      </div>
    </div>
  );
}
