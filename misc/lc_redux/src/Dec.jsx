import React from 'react';
import {connect} from 'react-redux';
import { decrement } from './actions';

const Dec = ({onDecrement}) => {
  return (
    <div className="Dec">
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}

const mdtp = dispatch => ({
  onDecrement: () => dispatch(decrement()),
});
 
export default connect(null, mdtp)(Dec);