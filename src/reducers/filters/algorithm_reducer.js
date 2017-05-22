import { TOGGLE_ALGORITHM_FILTER } from '../../actions/types';

const initialState = 'pagerank';

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ALGORITHM_FILTER:
      return action.payload;
    default:
      return state;
  }
}
