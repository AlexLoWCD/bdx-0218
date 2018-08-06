import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.onIncrement}>Increment</button>
  );
}
 
export default Button;