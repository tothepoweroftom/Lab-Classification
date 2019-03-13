import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Card from "../Components/CustomCard";

import PostsData from "../data/PostData";
import storage from "../config/config";
import Tabletop from "tabletop";

const googleSheetsKey = "1fkgfN23m2GwFGcc-4X6_vyROrMUx3niQrJaGYSTho38";

import driveAuth from "../driveAuth";

class HomeComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: {},
      data: []
    };
  }
  componentWillMount() {
    console.log(storage);

    Tabletop.init({
      key: googleSheetsKey,
      callback: googleData => {
        this.setState({
          data: googleData.Sheet1.elements,
          imageDatasets: googleData
        });
        console.log(this.state.imageDatasets);
      },
      simpleSheet: false
    });
  }

  render() {
    return (
      <div>
        <h1> MOBGEN:Lab Classification Tool</h1>
        <div className="text">
          This is a tool for manually classifying a dataset for use in Lab
          related machine learning tasks
        </div>

        <div className="app-card-list" id="app-card-list">
          {Object.keys(this.state.data).map(key => (
            <Link className="imageLink" to={{ pathname: "/training" }}>
              <Card key={key} index={key} details={this.state.data[key]} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default HomeComponent;
