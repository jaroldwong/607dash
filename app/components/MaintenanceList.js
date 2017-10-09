import React from 'react';
import { connect } from 'react-redux';

const MaintenanceList = props => (
  <ul className="maintenance-list">
    {props.requests.map((request, index) => {
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

const mapStateToProps = state => {
  return {
    requests: state.requests
  };
};

export default connect(mapStateToProps)(MaintenanceList);
