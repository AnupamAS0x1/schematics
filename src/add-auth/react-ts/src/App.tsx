import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, LoginCallback } from '@okta/okta-react';
import Home from './Home';

const config = {
  issuer: '<%= issuer %>',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '<%= clientId %>',
  pkce: true
};

export interface AuthService {
  login(redirectUri: string): {};
  logout(redirectUri: string): {};
  isAuthenticated(): boolean;
  getAccessToken(): string;
}

class App extends Component {

  render() {
    return (
      <Router>
        <Security {...config}>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/implicit/callback" component={LoginCallback}/>
        </Security>
      </Router>
    );
  }
}

export default App;
