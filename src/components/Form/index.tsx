import React from "react";
import Button from "../Button";

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="task">Adicione um novo estudo:</label>
          <input type="text" name="task" id="task" placeholder="O que você quer estudar?" required />
        </div>
        <div>
          <label htmlFor="time">Tempo de estudo:</label>
          <input type="time" step="1" name="time" id="name" min="00:00:00" max="01:30:00" required />
        </div>
        <Button />
      </form>
    );
  }
}
