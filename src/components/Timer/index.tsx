import styles from "./Timer.module.scss";
import Button from "../Button";
import Clock from "./Clock";
import { ITask } from "../../@types/Task";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";

interface TimerProps {
  selected: ITask | undefined;
  finishTask: () => void;
}

export default function Timer({ selected, finishTask }: TimerProps) {
  const [time, setTime] = useState<number>();
  const [idTimer, setIdTimer] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
    stopCounter();
  }, [selected]);

  const counter = (time: number = 0) => {
    setIdTimer(
      setTimeout(() => {
        if (time > 0) {
          setTime(time - 1);
          return counter(time - 1);
        }
        finishTask();
      }, 1000)
    );
  };

  const stopCounter = () => clearTimeout(idTimer);

  return (
    <div className={styles.timer}>
      <p className={styles.title}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.clockWrapper}>
        <Clock time={time} />
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={() => counter(time)}>Iniciar</Button>
        <Button onClick={() => stopCounter()}>Parar</Button>
      </div>
    </div>
  );
}
