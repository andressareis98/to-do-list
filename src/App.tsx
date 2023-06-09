import { useState } from "react";

import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Info } from "./components/Info";
import { List } from "./components/List";
import { TaskInterface } from "./interfaces/Task";

export function App() {
  const [listTasks, setListTasks] = useState<TaskInterface[]>([
    { id: 1, title: "Atividade 1", isCompleted: false },
    { id: 2, title: "Atividade 2", isCompleted: false },
  ]);

  function createNewTask(task: TaskInterface) {
    setListTasks([...listTasks, task]);
  }

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Form onCreateNewTask={createNewTask} />
        <div className={styles.tasks}>
          <Info />
          <List tasks={listTasks} />
        </div>
      </main>
    </div>
  );
}
