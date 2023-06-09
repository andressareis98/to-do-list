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

  function deleteTask(task: TaskInterface) {
    const newArray = listTasks.filter((item) => {
      return item.id !== task.id;
    });
    setListTasks(newArray);
  }

  const showList = listTasks.length > 0;

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Form onCreateNewTask={createNewTask} />
        <div className={styles.tasks}>
          <Info />
          {showList ? (
            <List tasks={listTasks} onDeleteTask={deleteTask} />
          ) : (
            <EmptyList />
          )}
        </div>
      </main>
    </div>
  );
}
