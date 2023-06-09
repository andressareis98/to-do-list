import { TaskInterface } from "../../interfaces/Task";
import { Task } from "../Task";

interface Props {
  tasks: TaskInterface[];
  onDeleteTask: (task: TaskInterface) => void;
  onEditTask: (task: TaskInterface) => void;
}

export function List({ tasks, onDeleteTask, onEditTask }: Props) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
          />
        );
      })}
    </div>
  );
}
