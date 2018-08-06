import React from 'react';
import {connect} from 'react-redux';
import {reset} from './actions';

const Reset = ({onReset}) => {
  return (
    <div className="Reset">
      <button onClick={onReset}> Reset to 0 </button>
    </div>
  );
}

const mdtp = dispatch => ({
  onReset: () => dispatch(reset(10)),
})
 
export default connect(null, mdtp)(Reset);