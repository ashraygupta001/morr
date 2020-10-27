import React, {Fragment} from 'react';
import styles from './Card.module.css';

const Card = ({show}) => {
  return(
    <Fragment>
      <div className={styles.card}>
        <p>{show.title}</p>
      </div>
    </Fragment>
  )
}

export default Card