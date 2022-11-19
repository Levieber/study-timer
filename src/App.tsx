import Form from "./components/Form";
import List from "./components/List";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.app}>
      <Form />
      <List />
    </div>
  );
}
