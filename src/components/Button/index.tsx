import React from "react";
import styles from "./Button.module.scss";

export default class Button extends React.Component<{ children?: React.ReactNode }> {
  render() {
    return <button className={styles.button}>{this.props.children}</button>;
  }
}
