import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    identityPoolId: 'eu-central-1:82ff2654-54af-40d5-92e7-c514238dabb4',
    region: 'eu-central-1',
    userPoolId: 'eu-central-1_ujpUzAXDs',
    userPoolWebClientId: '2ni619b4r946j44k7r7j1l25g3',
    mandatorySignIn: false,
  }
});



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Success! Now head over to the front end and log in
          </p>
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
