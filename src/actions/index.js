import axios from 'axios';
import * as actions from './types';
import { SERVER_URL } from '../util';

/* Action creator for toggling the filters state. Different reducers handle payload differently */
export function toggleFilter(type, payload) {
  return { type, payload };
}

/* Action creator for resetting filters to their original state */
export function clearFilters() {
  return { type: actions.CLEAR_FILTERS };
}

export function openTopicCreate() {
  return { type: actions.OPEN_TOPIC_CREATE_MODAL };
}

export function openTopicUpdate(topicKey) {
  return { type: actions.OPEN_TOPIC_UPDATE_MODAL, payload: topicKey };
}

export function closeTopicModal() {
  return { type: actions.CLOSE_TOPIC_MODAL };
}

export function initTopicFilters() {
  return dispatch => (
    axios.get(`${SERVER_URL}topics/`)
      .then((response) => {
        dispatch({
          type: actions.INIT_TOPIC_FILTER,
          payload: response.data.results
        });
      })
      .catch((error) => {
        console.error(error);
      })
  );
}

