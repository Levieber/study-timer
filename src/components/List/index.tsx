import TaskItem from "./TaskItem";
import styles from "./List.module.scss";

export default function List() {
  const tasks = [
    {
      title: "React",
      time: "01:00:00",
    },
    {
      title: "Angular",
      time: "01:30:00",
    },
    {
      title: "Vue",
      time: "00:30:00",
    },
  ];

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
