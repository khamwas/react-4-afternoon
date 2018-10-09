import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import History from "../../components/History/History";
import Contact from "../../components/Contact/Contact";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link className="subnav_links" to="/about">
            <h3>About</h3>
          </Link>
          <Link className="subnav_links" to="/about/history">
            <h3>History</h3>
          </Link>
          <Link className="subnav_links" to="/about/contact">
            {" "}
            <h3>Contact</h3>
          </Link>
        </div>
        <div className="box">
          <Switch>
            <Route path="/about/history" component={History} />
            <Route path="/about/contact" component={Contact} />
            <Route
              path="/about"
              render={() => (
                <div>
                  <h1 className="title">About WestSide University</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod eu lorem et ultricies.
                  </p>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
