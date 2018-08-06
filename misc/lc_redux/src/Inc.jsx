import React from 'react';
import {connect} from 'react-redux';
import { increment } from './actions';
import Button from './Button';

const Inc = (props) => {
  return (
    <div className="Inc">
      <Button onIncrement={props.onIncrement} />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment())
});
 
export default connect(null, mapDispatchToProps)(Inc);