import React, { Fragment, useEffect, useState } from "react";
//eslint-disable-next-line
import styles from "./Series.module.css";
import Navbar from "./navbar";
import Footer from "./Footer";
import Card from "./Card";

const Series = () => {
  const [loading, setLoading] = useState(true);
  const [errormsg, setErrormsg] = useState(null);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    )
      .then((response) => response.json)
      .then((Responsejson) => {
        setSeries(Responsejson.entries);
        setLoading(false);
        debugger;
      })
      .catch((error) => {
        setErrormsg(error);
        setLoading(false);
      });
  }, []);

  const Cards = () => {
    series.forEach((show, index) => {
      if(show.programType==="series" && show.releaseYear >= 2010) {
        return <Card show={show} />
      }
    })
  }

  return (
    <Fragment>
      <Navbar PageType={"Best Series"} />
      {loading ? (
        <div>Loading...</div>
      ) : errormsg ? (
        <div>Error Happened</div>
      ) : (
        <div className={styles.cards}>{Cards}</div>
      )}
      <Footer />
    </Fragment>
  );
};

export default Series;
