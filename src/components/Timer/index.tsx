import styles from "./Timer.module.scss";
import Button from "../Button";
import Clock from "./Clock";
import { ITask } from "../../@types/Task";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";

interface TimerProps {
  selected: ITask | undefined;
}

export default function Timer({ selected }: TimerProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  return (
    <div className={styles.timer}>
      <p className={styles.title}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button>Iniciar</Button>
    </div>
  );
}
