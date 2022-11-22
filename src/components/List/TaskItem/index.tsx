import { ITask } from "../../../@types/Task";
import styles from "./TaskItem.module.scss";

interface TaskItemProps extends ITask {
  selectTask: (task: ITask) => void;
}

export default function TaskItem({ title, time, done, selected, id, selectTask }: TaskItemProps) {
  return (
    <li
      className={`${styles.item} ${selected ? styles.selectedItem : ""} ${done ? styles.completedItem : ""}`}
      onClick={() => !done && selectTask({ title, time, done, selected, id })}
    >
      <h3>{title}</h3>
      <span>{time}</span>
      {done && <span className={styles.completed} aria-label="Tarefa concluída" />}
    </li>
  );
}
