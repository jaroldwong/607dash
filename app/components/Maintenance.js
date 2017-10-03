import React, { Component } from 'react';

class Maintenance extends Component {
  constructor() {
    super();
    this.state = {
      issues: [
        {
          name: 'Martin Loekito',
          issue: 'Flickering light in the staff suite',
          status: 'New'
        },
        {
          name: 'Jun Hwang',
          issue: 'Leaking soap dispenser',
          status: 'In progress'
        }
      ]
    };
  }

  onAdd(newIssue) {
    var updatedIssues = this.state.issues;
    updatedIssues.push(newIssue);
    this.setState({
      issues: updatedIssues
    });
  }

  render() {
    return (
      <div>
        <h2>Issues</h2>
        <MaintenanceInput onAdd={this.onAdd.bind(this)} />
        <MaintenanceList issues={this.state.issues} />
      </div>
    );
  }
}

class MaintenanceList extends React.Component {
  render() {
    return (
      <ul className="maintenance-list">
        {this.props.issues.map(function(issue, index) {
          return (
            <li className="maintenance-item">
              <p>Status: {issue.status}</p>
              <p>Issue: {issue.issue}</p>
              <p>Submitted by: {issue.name}</p>
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

export default Maintenance;
