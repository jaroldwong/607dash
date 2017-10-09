import React from 'react';

import MaintenanceForm from './MaintenanceForm';
import MaintenanceList from './MaintenanceList';

const Maintenance = props => (
  <div>
    <h2>Issues</h2>
    <MaintenanceForm />
    <MaintenanceList />
  </div>
);

export default Maintenance;
