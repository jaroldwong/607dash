var React = require('react');

class Selection extends React.Component {
  render() {
    return (
      <div className='selection-box'>
        <i className={this.props.icon} aria-hidden="true"></i>
        <h3>{this.props.title}</h3>
      </div>
    )
  }
}

module.exports = Selection;