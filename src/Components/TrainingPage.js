import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tabletop from "tabletop";

const googleSheetsKey = "1fkgfN23m2GwFGcc-4X6_vyROrMUx3niQrJaGYSTho38";

import { Card, CardWrapper } from "react-swipeable-cards";

class TrainingPage extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: {},
      data: [],
      id: ""
    };
  }
  componentWillMount() {}

  onSwipe(data) {
    console.log("I was swiped.");
  }

  onSwipeLeft(data) {
    console.log("I was swiped left.");
  }

  onSwipeRight(data) {
    console.log("I was swiped right.");
  }

  onDoubleTap(data) {
    console.log("I was double tapped.");
  }

  renderCards() {
    let data = [
      "first",
      "seconds",
      "thirsd",
      "first",
      "seconds",
      "thirsd",
      "first",
      "seconds",
      "thirsd",
      "first",
      "seconds",
      "thirsd"
    ];
    console.log("card", data);
    return data.map(d => {
      return (
        <Card
          key={d}
          onSwipe={this.onSwipe.bind(this)}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
          onSwipeRight={this.onSwipeRight.bind(this)}
          onDoubleTap={this.onDoubleTap.bind(this)}
        >
          {d}
        </Card>
      );
    });
  }

  render() {
    return <CardWrapper>{this.renderCards()}</CardWrapper>;
  }

  getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}

export default TrainingPage;
