import React from 'react';
import { connect } from 'react-redux';

import SmurfsList from './SmurfsList'

const Smurfs = props => {
  return (
    <div>
    <ul>
      {props.smurfs.map(smurf => {
        return <SmurfsList key={smurf.name} smurf={smurf} />
      })}
    </ul>
    </div>
  );
};

export default connect(
  null, 
  {}
)(Smurfs);