export const increment = () => ({
  type: 'INCREMENT_VALUE'
});

export const decrement = () => ({
  type: 'DECREMENT_VALUE',
});

export const reset = (resetValue) => ({
  type: 'RESET_VALUE',
  resetValue,
});