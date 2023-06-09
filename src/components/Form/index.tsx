import { ChangeEvent, FormEvent, useState } from "react";
import { TaskInterface } from "../../interfaces/Task";
import styles from "./Form.module.css";

import PlusCircle from "@phosphor-icons/react/PlusCircle";

import { v4 as uuidv4 } from "uuid";

interface Props {
  onCreateNewTask: (Task: TaskInterface) => void;
}

const initialStateTask: TaskInterface = {
  id: "",
  title: "",
  isCompleted: false,
};

export function Form({ onCreateNewTask }: Props) {
  const [task, setTask] = useState<TaskInterface>(initialStateTask);

  function handleTaskTitleValue(event: ChangeEvent<HTMLTextAreaElement>) {
    const id = uuidv4();
    const newTask: TaskInterface = { ...task, id, title: event.target.value };
    setTask(newTask);
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    onCreateNewTask(task);
    setTask(initialStateTask);
  }

  return (
    <form className={styles.form} onSubmit={handleCreateTask}>
      <textarea
        onChange={handleTaskTitleValue}
        value={task.title}
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">
        <p>Criar</p>
        <PlusCircle width="16px" height="16px" />
      </button>
    </form>
  );
}
