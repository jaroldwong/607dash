var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Rooms = require('./Rooms');
var Maintenance = require('./Maintenace');
var Lockup = require('Lockup');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/rooms' component={Rooms} />
            <Route path='/maintenance' component={Maintenance} />
            <Route path='/lockup' component={Lockup} />
            <Route render={function() {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
