import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Rooms from './Rooms';
import Maintenance from './Maintenance';
import Lockup from './Lockup';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/rooms" component={Rooms} />
            <Route path="/maintenance" component={Maintenance} />
            <Route path="/lockup" component={Lockup} />
            <Route
              render={function() {
                return <p>Not Found</p>;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
