import React, { Fragment } from "react";
import { Link } from "@reach/router";
import styles from "./navbar.module.css";

const Navbar = ({PageType}) => {
  return (
    <Fragment>
      <header className={styles.Navbar}>
        <div className={styles.logo}>
          <Link to='/' className={styles.link}><p> Streaming App </p></Link>
        </div>
        <div className={styles.loginLinks}>
          <Link to='/' className={styles.link} style={{fontWeight: 700}}>Login</Link>
          <Link to='/' className={styles.link}><button className={styles.btn}>Free Trial</button></Link>
        </div>
      </header>
      <div className={styles.pageType}>
        <p style={{padding: 10}}>{PageType} </p>
      </div>
    </Fragment>
  );
};

export default Navbar;
