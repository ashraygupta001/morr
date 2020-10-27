import React, { Fragment, useEffect, useState } from "react";
import styles from "./Series.module.css";
import Navbar from "./navbar";
import Footer from "./Footer";
import Card from "./Card";

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [errormsg, setErrormsg] = useState(null);
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    )
      .then((response) => response.json())
      .then((Responsejson) => {
        const update = Responsejson.entries.sort((a, b) =>
          a.title.toLowerCase() > b.title.toLowerCase()
            ? 1
            : b.title.toLowerCase() > a.title.toLowerCase()
            ? -1
            : 0
        );
        const data = update.filter(
          (movie) => movie.programType === "movie" && movie.releaseYear >= 2010
        );
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        setErrormsg(error);
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      <Navbar PageType={"Best Movies"} />
      {loading ? (
        <div>Loading...</div>
      ) : errormsg ? (
        <div>Error Happened</div>
      ) : (
        <div className={styles.cards}>
          {Movies.map((show, index) => {
            if (
              show.programType === "movie" &&
              show.releaseYear >= 2010 &&
              index < 21
            ) {
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

export default Movies;
