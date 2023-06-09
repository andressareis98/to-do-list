import { TaskInterface } from "../../interfaces/Task";
import { Task } from "../Task";

interface Props {
  tasks: TaskInterface[];
}

export function List({ tasks }: Props) {
  return (
    <div>
      {tasks.map((task) => {
        return <Task key={task.id} {...task} />;
      })}
    </div>
  );
}
