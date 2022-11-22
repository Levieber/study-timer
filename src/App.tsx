import Form from "./components/Form";
import List from "./components/List";
import styles from "./App.module.scss";
import Timer from "./components/Timer";
import { useState } from "react";
import { ITask } from "./@types/Task";

export default function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(
      tasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id,
      }))
    );
  }

  return (
    <div className={styles.app}>
      <Form setTasks={setTasks} />
      <Timer selected={selected} />
      <List tasks={tasks} selectTask={selectTask} />
    </div>
  );
}
