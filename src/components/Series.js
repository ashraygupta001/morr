import React, { Fragment, useEffect, useState } from "react";
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
      .then((response) => response.json())
      .then((Responsejson) => {
        const update = Responsejson.entries.sort((x, y) =>
          x.title.toLowerCase() > y.title.toLowerCase()
            ? 1
            : y.title.toLowerCase() > x.title.toLowerCase()
            ? -1
            : 0
        );
        const data = update.filter((series) => (series.programType==="series"&& series.releaseYear>=2010))
        setSeries(data);
        setLoading(false);
      })
      .catch((error) => {
        setErrormsg(error);
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      <Navbar PageType={"Best Series"} />
      {loading ? (
        <div>Loading...</div>
      ) : errormsg ? (
        <div>Error Happened</div>
      ) : (
        <div className={styles.cards}>
          {series.map((show, index) => {
            if (show.programType === "series" && show.releaseYear >= 2010 && index<21) {
              return <Card show={show} key={index} />;
            }
            return null;
          })}
        </div>
      )}
      <Footer />
    </Fragment>
  );
};

export default Series;
