import styles from "./TaskItem.module.scss";

interface TaskProps {
  title: string;
  time: string;
}

export default function TaskItem({ title, time }: TaskProps) {
  return (
    <li className={styles.item}>
      <h3>{title}</h3>
      <span>{time}</span>
    </li>
  );
}
