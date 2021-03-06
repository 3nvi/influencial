import {
  OPEN_TOPIC_CREATE_MODAL,
  OPEN_TOPIC_UPDATE_MODAL,
  OPEN_TOPIC_DELETE_MODAL,
  CLOSE_TOPIC_MODAL,
  CREATE_TOPIC,
  UPDATE_TOPIC,
  DELETE_TOPIC
} from '../actions/types';

const initialState = {
  selectedOperation: null,
  selectedTopicKey: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_TOPIC_CREATE_MODAL:
      return { ...state, selectedOperation: 'create' };
    case OPEN_TOPIC_UPDATE_MODAL:
      return { ...state, selectedOperation: 'update', selectedTopicKey: action.payload };
    case OPEN_TOPIC_DELETE_MODAL:
      return { ...state, selectedOperation: 'delete', selectedTopicKey: action.payload };
    case CREATE_TOPIC:
    case UPDATE_TOPIC:
    case DELETE_TOPIC:
    case CLOSE_TOPIC_MODAL:
      return { ...state, selectedOperation: null, selectedTopicKey: null };
    default:
      return state;
  }
};
