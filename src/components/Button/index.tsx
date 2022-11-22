import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    const { type = "button", children, onClick } = this.props;

    return (
      <button type={type} className={styles.button} onClick={onClick}>
        {children}
      </button>
    );
  }
}
