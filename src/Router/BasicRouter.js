import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Components/Home";
import TrainingPage from "../Components/TrainingPage";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/training",
    component: TrainingPage,
    fetchInitialData: id => fetchTrainingData(id)
  }
];

function BasicExample() {
  return (
    <Router>
      <div />
    </Router>
  );
}

function fetchTrainingData(id) {
  return "asdf";
}

export default BasicExample;
