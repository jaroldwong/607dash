import React from 'react';
import { Link } from 'react-router-dom';

import Selection from './Selection';

const Home = () => (
  <div className="home-container">
    <h1>607dash</h1>

    <div className="selection-container">
      <Link to="/rooms">
        <Selection icon="fa fa-calendar fa-5x" title="Room Availability" />
      </Link>
      <Link to="/maintenance">
        <Selection icon="fa fa-wrench fa-5x" title="Report maintenance" />
      </Link>
      <Link to="/lockup">
        <Selection icon="fa fa-list-alt fa-5x" title="I'm locking up" />
      </Link>
    </div>
  </div>
);

export default Home;
