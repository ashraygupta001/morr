import React, { Fragment } from "react";
import styles from './Footer.module.css';

const Footer = () => {
  return(
    <Fragment>
      <footer className={styles.footer}>
        <p>Home</p>
        <p> | </p>
        <p>Terms & Conditions</p>
        <p> | </p>
        <p>Privacy Poilicy</p>
        <p> | </p>
        <p>Help</p>
        <p> | </p>
        <p>Manage Account</p>
      </footer>
    </Fragment>
  )
}

export default Footer;