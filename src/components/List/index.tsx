import { TaskInterface } from "../../interfaces/Task";
import { Task } from "../Task";

interface Props {
  tasks: TaskInterface[];
  onDeleteTask: (task: TaskInterface) => void;
}

export function List({ tasks, onDeleteTask }: Props) {
  return (
    <div>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />;
      })}
    </div>
  );
}
