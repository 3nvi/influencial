function GenericCheckboxReducer(initialState, toggleCase) {
  return (state = initialState, action) => {
    switch (action.type) {
      case toggleCase:
        return { ...state, [action.payload.name]: action.payload.value };
      default:
        return state;
    }
  };
}

export default GenericCheckboxReducer;
