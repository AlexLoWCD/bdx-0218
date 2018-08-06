const counter = (state = 150, action) => {
  switch(action.type) {
    case 'INCREMENT_VALUE':
      return state + 2;

    case 'DECREMENT_VALUE':
      return --state;

    case 'RESET_VALUE':
      return action.resetValue;
    
    default: 
      return state;
  }
}

export default counter;