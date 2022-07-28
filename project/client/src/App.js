import React, { Component } from "react";
import './App.css';

import Head from "./component/Head";
import Intro from "./component/Intro";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head></Head>
        <Intro></Intro>
      </div>
    );
  }
}

export default App;