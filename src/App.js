import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Success! Now head over to the front end and log in</p>
          <a
            className="App-link"
            href="https://d1lo1fxbzn7aqu.cloudfront.net/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rang Crypto Trading (click here)
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
