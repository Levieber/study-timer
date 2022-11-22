import TaskItem from "./TaskItem";
import styles from "./List.module.scss";
import { ITask } from "../../@types/Task";

interface ListProps {
  tasks: ITask[];
  selectTask: (task: ITask) => void;
}

export default function List({ tasks, selectTask }: ListProps) {
  return (
    <aside className={styles.tasksList}>
      <h2>Seus estudos do dia:</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  );
}
