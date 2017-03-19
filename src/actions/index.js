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

export function openTopicDelete(topicKey) {
  return { type: actions.OPEN_TOPIC_DELETE_MODAL, payload: topicKey };
}

export function closeTopicModal() {
  return { type: actions.CLOSE_TOPIC_MODAL };
}

export function fetchTopics() {
  return dispatch => (
    axios.get(`${SERVER_URL}topics/`)
      .then((response) => {
        dispatch({
          type: actions.FETCH_TOPIC_LIST,
          payload: response.data.results
        });

        dispatch(closeTopicModal());
      })
      .catch((error) => {
        console.error(error);
      })
  );
}

export function createTopic(payload) {
  return (dispatch) => {
    // sync with server
    axios.post(`${SERVER_URL}topics/`, {
      title: payload.title,
      hashtags: payload.hashtags
    })
    .then((response) => {
      dispatch({
        type: actions.CREATE_TOPIC,
        payload: JSON.parse(response)
      });
    })
    .catch(() => {
      alert('Sorry couldn\'t create your new topic');
    });
  };
}

export function updateTopic(payload) {
  return (dispatch) => {
    // sync with server
    axios.put(payload.selectedTopic.url, {
      title: payload.title,
      hashtags: payload.hashtags
    })
    .then((response) => {
      dispatch({
        type: actions.UPDATE_TOPIC,
        payload: JSON.parse(response),
        meta: {
          prevTitle: payload.selectedTopic.title
        }
      });

      dispatch(closeTopicModal());
    })
    .catch(() => {
      // in case of server error
      alert('Sorry, couldn\'t update this topic');
    });
  };
}

export function deleteTopic(payload) {
  return (dispatch) => {
    // sync with server
    axios.delete(payload.url)
      .then(() => {
        dispatch({
          type: actions.DELETE_TOPIC,
          payload
        });

        dispatch(closeTopicModal());
      })
      .catch(() => {
        // in case of server error
        alert('Sorry, couldn\'t delete this topic');
      });
  };
}

