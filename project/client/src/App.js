import React, { useEffect } from "react";
import "./App.css";

import Head from "./component/Head";
import Intro from "./component/Intro";

import Axios from "axios";

function App() {
  useEffect(() => {
    Axios.get("/api/get").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Head></Head>
      <Intro></Intro>
      <div>hello</div>
    </div>
  );
}

export default App;
