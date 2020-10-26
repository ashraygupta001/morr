import React, { Fragment } from 'react';
import Footer from './Footer';
// eslint-disable-next-line
import styles from './Home.module.css';
import Navbar from './navbar';


const Home = () => {
  return(
    <Fragment>
      <div>
        <Navbar PageType={"Home Page👋"} />
        <Footer />
      </div>
    </Fragment>
  )
}

export default Home;