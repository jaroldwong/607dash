import React, { Component } from 'react';
import { connect } from 'react-redux';

class Maintenance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: props.requests,
    };
  }

  // onAdd(newIssue) {
  //   var updatedIssues = this.state.issues;
  //   updatedIssues.push(newIssue);
  //   this.setState({
  //     issues: updatedIssues
  //   });
  // }

  render() {
    return (
      <div>
        <h2>Issues</h2>
        <MaintenanceList requests={this.state.requests} />
      </div>
    );
  }
}

class MaintenanceList extends React.Component {
  render() {
    return (
      <ul className="maintenance-list">
        {this.props.requests.map((request, index) => {
          return (
            <li className="maintenance-item" key={request.issue}>
              <p>Status: {request.status}</p>
              <p>Issue: {request.issue}</p>
              <p>Submitted by: {request.name}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

class MaintenanceInput extends React.Component {
  render() {
    return (
      <form id="maintenance-input" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Name" ref="newName" required />
        <input type="text" placeholder="Issue" ref="newIssue" required />
        <input type="submit" value="Submit" />
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    var newIssue = {
      name: this.refs.newName.value,
      issue: this.refs.newIssue.value,
      status: 'New'
    };

    this.refs.newName.value = '';
    this.refs.newIssue.value = '';

    this.props.onAdd(newIssue);
  }
}

const mapStateToProps = (state) => {
  return {
    requests: state.requests
  }
}

export default connect(mapStateToProps)(Maintenance);
