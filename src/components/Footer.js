import React, { Fragment } from "react";
import styles from './Footer.module.css';
import facebook  from "./../assets/facebook.svg";
import instagram  from "./../assets/instagram.svg";
import twitter  from "./../assets/twitter.svg";

const Footer = () => {
  return(
    <Fragment>
      <footer className={styles.footer}>
        <div className={styles.block}>
          <p className={styles.links}>Home</p>
          <p className={styles.seprater} > | </p>
          <p className={styles.links}>Terms & Conditions</p>
          <p className={styles.seprater}> | </p>
          <p className={styles.links}>Privacy Poilicy</p>
          <p className={styles.seprater}> | </p>
          <p className={styles.links}>Help</p>
          <p className={styles.seprater} > | </p>
          <p className={styles.links}>Manage Account</p>
        </div>
        <p className={styles.copywrite}>Copywrite ©️ Streaming Services all rights reserved</p>
        <div className={styles.icons}>
          <img src={facebook} alt="facebook" className={styles.social} />
          <img src={instagram} alt="facebook" className={styles.social} />
          <img src={twitter} alt="facebook" className={styles.social} />
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer;