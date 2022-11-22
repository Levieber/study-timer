import TaskItem from "./TaskItem";
import styles from "./List.module.scss";
import { ITask } from "../../@types/Task";

interface ListProps {
  tasks: ITask[];
}

export default function List({ tasks }: ListProps) {
  return (
    <aside className={styles.tasksList}>
      <h2>Seus estudos do dia:</h2>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} {...task} />
        ))}
      </ul>
    </aside>
  );
}
