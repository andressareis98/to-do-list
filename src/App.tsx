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
  const showList = listTasks.length > 0;

  function createNewTask(task: TaskInterface) {
    setListTasks([...listTasks, task]);
  }

  function editTask(task: TaskInterface) {
    const newArray = listTasks.map((item) => {
      if (item.id !== task.id) {
        return item;
      }
      return task;
    });

    setListTasks(newArray);
  }

  function deleteTask(task: TaskInterface) {
    const newArray = listTasks.filter((item) => {
      return item.id !== task.id;
    });
    setListTasks(newArray);
  }

  return (
    <div>
      Texto
      <Header />
      <main className={styles.main}>
        <Form onCreateNewTask={createNewTask} />
        <div className={styles.tasks}>
          <Info listTasks={listTasks} />
          {showList ? (
            <List
              tasks={listTasks}
              onDeleteTask={deleteTask}
              onEditTask={editTask}
            />
          ) : (
            <EmptyList />
          )}
        </div>
      </main>
    </div>
  );
}
