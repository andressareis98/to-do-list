import { TaskInterface } from "../../interfaces/Task";
import { Task } from "../Task";
import { EmptyList } from "./Empty";

interface Props {
  tasks: TaskInterface[];
}

export function List({ tasks }: Props) {
  const showList = tasks.length !== 0;
  return (
    <div>
      {showList ? (
        tasks.map((task) => {
          return <Task {...task} />;
        })
      ) : (
        <EmptyList />
      )}
    </div>
  );
}
