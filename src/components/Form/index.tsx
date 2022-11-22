import React from "react";
import { ITask } from "../../@types/Task";
import Button from "../Button";
import styles from "./Form.module.scss";

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export default class Form extends React.Component<FormProps> {
  state = {
    title: "",
    time: "00:00:00",
  };

  addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.setTasks((prevState) => [...prevState, { ...this.state }]);
  };

  render() {
    return (
      <form className={styles.newTask} onSubmit={this.addTask}>
        <div className={styles.inputContainer}>
          <label htmlFor="task">Adicione um novo estudo:</label>
          <input
            value={this.state.title}
            onChange={(ev) => this.setState({ title: ev.target.value })}
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
            value={this.state.time}
            onChange={(ev) => this.setState({ time: ev.target.value })}
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
}
