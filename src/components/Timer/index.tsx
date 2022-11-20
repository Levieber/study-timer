import styles from "./Timer.module.scss";
import Button from "../Button";
import Clock from "./Clock";

export default function Timer() {
  return (
    <div className={styles.timer}>
      <p className={styles.title}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.clockWrapper}>
        <Clock />
      </div>
      <Button>Iniciar</Button>
    </div>
  );
}
