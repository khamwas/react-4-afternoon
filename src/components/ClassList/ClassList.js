import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then(results => this.setState({ students: results.data }));
  }

  render() {
    let mapped = this.state.students.map(elem => (
      <Link key={elem.id} to={`/student/${elem.id}`}>
        <h3>
          {elem.first_name} {elem.last_name} {elem.id}
        </h3>
      </Link>
    ));
    return (
      <div>
        <div className="box">
          <h1>{this.props.match.params.class}</h1>
          <h2>ClassList:</h2>
          {mapped}
        </div>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}
