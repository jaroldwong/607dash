var React = require('react');
var Selection = require('./Selection');

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>607dash</h1>

        <div className='selection-container'>
          <Selection icon="fa fa-calendar fa-5x" title="Room Availability" />
          <Selection icon="fa fa-wrench fa-5x" title="Report maintenance" />            
          <Selection icon="fa fa-list-alt fa-5x" title="I'm locking up" />          
        </div>
      </div>
    )
  }
}

module.exports = Home;