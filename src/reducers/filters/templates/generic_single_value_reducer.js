function GenericSingleValueReducer(initialState, toggleCase) {
  return (state = initialState, action) => {
    switch (action.type) {
      case toggleCase:
        return action.payload;
      default:
        return state;
    }
  };
}

export default GenericSingleValueReducer;
