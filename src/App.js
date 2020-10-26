import React, { Fragment } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Movies from './components/Movies'

function App() {
  return (
    <Fragment>
      <Router>
        <Home path="/" />
        <Movies path="/movies" />
      </Router>
    </Fragment>
  );
}

export default App;
