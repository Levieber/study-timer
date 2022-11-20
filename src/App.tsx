import Form from "./components/Form";
import List from "./components/List";
import styles from "./App.module.scss";
import Timer from "./components/Timer";

export default function App() {
  return (
    <div className={styles.app}>
      <Form />
      <Timer />
      <List />
    </div>
  );
}
