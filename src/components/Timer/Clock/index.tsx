import styles from "./Clock.module.scss";

interface ClockProps {
  time: number | undefined;
}

export default function Clock({ time = 0 }: ClockProps) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesTen, minutesUnit] = String(minutes).padStart(2, "0");
  const [secondsTen, secondsUnit] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={styles.clockNumber}>{minutesTen}</span>
      <span className={styles.clockNumber}>{minutesUnit}</span>
      <span className={styles.clockDivision}>:</span>
      <span className={styles.clockNumber}>{secondsTen}</span>
      <span className={styles.clockNumber}>{secondsUnit}</span>
    </>
  );
}
