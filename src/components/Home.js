import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import Footer from './Footer';
// eslint-disable-next-line
import styles from './Home.module.css';
import Navbar from './navbar';


const Home = () => {
  return(
    <Fragment>
      <div>
        <Navbar PageType={"Home Page👋"} />
        <main className={styles.options}>
        <Link to='/series'><div className= {styles.series}></div></Link>
        <Link to='/movies'><div className= {styles.series}></div></Link>
        </main>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Home;