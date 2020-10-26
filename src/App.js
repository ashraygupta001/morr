import React, { Fragment } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Movies from './components/Movies'
import Series from './components/Series'
 
function App() {
  return (
    <Fragment>
      <Router>
        <Home path="/" />
        <Series path='/series' />
        <Movies path="/movies" />
      </Router>
    </Fragment>
  );
}

export default App;
