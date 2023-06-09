import styles from "./EmptyList.module.css";
import "../../global.css";

import clipboardIcon from "../../assets/clipboard.png";

export function EmptyList() {
  return (
    <div className={styles.empty}>
      <img src={clipboardIcon} aria-hidden />
      <p className={styles["empty-title"]}>
        Você ainda não tem tarefas cadastradas
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
