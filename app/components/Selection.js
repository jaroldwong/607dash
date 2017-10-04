import React from 'react';

const Selection = (props) => (
  <div className="selection-box">
    <i className={props.icon} aria-hidden="true" />
    <h3>{props.title}</h3>
  </div>
);

export default Selection;
