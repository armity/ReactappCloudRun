import React from "react";
import styles from "./List.module.scss";

import Card from "../Card"

const List = (props) => {
  return (
    <main className={styles.List}>
      {props.data.map(d => <Card data={d} />)}
    </main>
  );
}

export default List