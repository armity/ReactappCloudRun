import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {

  return (
    <article className={styles.card}>
  
        
      <h2>{props.data.name}</h2>
      <h4>{props.data.category}</h4>
      <p>Start: {props.data.start}</p>
      <p>End: {props.data.end}</p>
    </article>
  );
};

export default Card;
