import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    const title = this.props.title.toString();
    var style = {
      backgroundImage: "url(" + image + ")"
    };
    return (
      <header style={style} className="card-header">
        <h4 className="card-header--title" />
      </header>
    );
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <h2>{this.props.title}</h2>

        <p className="body-content">{this.props.text}</p>
      </div>
    );
  }
}

export default class Card extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader
          image={this.props.details.image}
          title={this.props.details.dataset}
        />
        <CardBody
          title={this.props.details.dataset}
          text={this.props.details.description}
        />
      </article>
    );
  }
}
