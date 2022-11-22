import { useState } from "react";
import { ITask } from "../../@types/Task";
import Button from "../Button";
import styles from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export default function Form({ setTasks }: FormProps) {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("00:00:00");

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTasks((prevState) => [...prevState, { title, time, id: uuidv4(), selected: false, done: false }]);

    setTitle("");
    setTime("00:00:00");
  };

  return (
    <form className={styles.newTask} onSubmit={addTask}>
      <div className={styles.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo:</label>
        <input
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="time">Tempo de estudo:</label>
        <input
          value={time}
          onChange={(ev) => setTime(ev.target.value)}
          type="time"
          step="1"
          name="time"
          id="name"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}
