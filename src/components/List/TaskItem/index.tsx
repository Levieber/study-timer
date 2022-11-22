import { ITask } from "../../../@types/Task";
import styles from "./TaskItem.module.scss";

export default function TaskItem({ title, time }: ITask) {
  return (
    <li className={styles.item}>
      <h3>{title}</h3>
      <span>{time}</span>
    </li>
  );
}
