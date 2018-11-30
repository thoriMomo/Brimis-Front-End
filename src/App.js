import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Login, Page404, Page500, Register, Dashboard } from './views/Pages';

// import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/dashboard" name="Dashboard" component={DefaultLayout} />
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          {/* <Route path="/" name="Login" component={DefaultLayout} /> */}
          <Redirect from="/" to="Login"/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
