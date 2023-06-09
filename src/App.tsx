import { useState } from "react";

import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Info } from "./components/Info";
import { List } from "./components/List";
import { TaskInterface } from "./interfaces/Task";
import { EmptyList } from "./components/EmptyList";

export function App() {
  const [listTasks, setListTasks] = useState<TaskInterface[]>([]);

  function createNewTask(task: TaskInterface) {
    setListTasks([...listTasks, task]);
  }

  const showList = listTasks.length > 0;

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Form onCreateNewTask={createNewTask} />
        <div className={styles.tasks}>
          <Info />
          {showList ? <List tasks={listTasks} /> : <EmptyList />}
        </div>
      </main>
    </div>
  );
}
