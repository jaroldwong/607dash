import React from 'react';
import { connect } from 'react-redux';
import { addRequest } from '../actions/requestActions';

class MaintenanceForm extends React.Component {
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

    this.props.dispatch(addRequest(newIssue));
  }
}

export default connect()(MaintenanceForm);
