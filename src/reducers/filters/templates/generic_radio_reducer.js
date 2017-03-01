import _ from 'lodash';

function GenericRadioReducer(initialState, toggleCase) {
  return (state = initialState, action) => {
    switch (action.type) {
      case toggleCase:
        return _.mapValues(state, (value, name) => (action.payload === name));
      default:
        return state;
    }
  };
}

export default GenericRadioReducer;
