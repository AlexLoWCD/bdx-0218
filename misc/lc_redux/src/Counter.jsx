import React from 'react';
import {connect} from 'react-redux';

const Counter = ({value}) => {  
  return (
    <div className="Counter">
      {value}
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.counter
});
 
export default connect(mapStateToProps)(Counter);