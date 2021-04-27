import React, { Component } from "react";
import styles from "./App.module.scss";

import data from "./data/data";

import Card from "./components/Card";
import List from "./components/List";

const App = () => {
  return (
    <List data={data} />

  )
}

export default App 