import { ITask } from "../../../@types/Task";
import styles from "./TaskItem.module.scss";

interface TaskItemProps extends ITask {
  selectTask: (task: ITask) => void;
}

export default function TaskItem({ title, time, done, selected, id, selectTask }: TaskItemProps) {
  return (
    <li
      className={`${styles.item} ${selected ? styles.selectedItem : ""}`}
      onClick={() => selectTask({ title, time, done, selected, id })}
    >
      <h3>{title}</h3>
      <span>{time}</span>
    </li>
  );
}
