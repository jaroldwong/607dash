var React = require('react')

class Maintenance extends React.Component {
    constructor() {
        super();
        this.state = {
            issues: [
                {
                    name: "Martin Loekito",
                    issue: "Flickering light in the staff suite",
                    status: "New",
                },
                {
                  name: "Jun Hwang",
                  issue: "Leaking soap dispenser",
                  status: "In progress",
                }
            ],
        };
    }
    
    render() {
        return (
            <div>
              <h2>Issues</h2>
              <MaintenanceList issues={this.state.issues} />
            </div>
        )
    }
}

class MaintenanceList extends React.Component {
    render() {
        return (
            <ul className="maintenance-list">
              {this.props.issues.map(function (issue, index) {
                return (
                  <li className="maintenance-item">
                    <p>Status: {issue.status}</p>
                    <p>Issue: {issue.issue}</p>
                    <p>Submitted by: {issue.name}</p>                
                  </li>
                )
              })}
            </ul>
        )
    }
}

module.exports = Maintenance;