import React, { Component } from 'react';

class Selection extends Component {
  render() {
    return (
      <div className="selection-box">
        <i className={this.props.icon} aria-hidden="true" />
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default Selection;
