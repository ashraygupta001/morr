/* eslint-disable */
import React, { Fragment, useState } from "react";
import styles from "./Movies.module.css";
import Navbar from './navbar'
import Footer from './Footer'

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [series, setSeries] = useState([]);
  return(
    <Fragment>
      <Navbar PageType={"Best Movies"} />
      <Footer />
    </Fragment>
  )
}

export default Movies