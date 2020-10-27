import React, { Fragment } from "react";
import styles from "./Card.module.css";

const Card = ({ show }) => {
  return (
    <Fragment>
      <div className={styles.card}>
        <img src={show["images"]["Poster Art"]["url"]} alt="poster" className={styles.poster} />
        <p>{show.title}</p>
      </div>
    </Fragment>
  );
};

export default Card;
