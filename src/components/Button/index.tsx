import styles from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({ children, onClick, type }: ButtonProps) {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
