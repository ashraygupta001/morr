import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import Footer from './Footer';
// eslint-disable-next-line
import styles from './Home.module.css';
import Navbar from './navbar';
import movie from './../assets/movie.svg'
import tv from './../assets/tv.svg'


const Home = () => {
  return(
    <Fragment>
      <div>
        <Navbar PageType={"Home Page👋"} />
        <main className={styles.options}>
        <Link to='/series'><img src={tv} alt="tv" className= {styles.series}/><p className= {styles.series}>Popular Series</p></Link>
        <Link to='/movies'><img src={movie} alt="movie" className= {styles.series}/><p className= {styles.series}>Popular Movies</p></Link>
        </main>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Home;