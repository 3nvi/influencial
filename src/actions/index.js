import axios from 'axios';
import * as actions from './types';
import { SERVER_URL, constructInfluencerUrlQuery } from '../util';


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

export function addNotification(text) {
  return { type: actions.ADD_NOTIFICATION, payload: text };
}

export function removeNotification() {
  return { type: actions.REMOVE_NOTIFICATION };
}

export function requestedInfluencers(page = 1) {
  return { type: actions.REQUESTED_INFLUENCER_LIST, payload: page };
}

export function fetchInfluencers(data) {
  return (dispatch) => {
    dispatch(requestedInfluencers(data.page));

    axios.get(`${SERVER_URL}rankings/?${constructInfluencerUrlQuery()}`, {
      params: {
        page: data.page
      }
    })
    .then((response) => {
      dispatch({
        type: data.type,
        payload: {
          items: response.data.results,
          page: data.page,
          noMoreResults: response.data.next === null
        }
      });
    })
    .catch((error) => {
      // in case of server error
      console.error(error);
    });
  };
}

export function resetInfluencers() {
  return fetchInfluencers({ type: actions.RESET_INFLUENCER_LIST });
}

export function updateInfluencers(page) {
  return fetchInfluencers({ type: actions.UPDATE_INFLUENCER_LIST, page });
}

export function fetchTopics() {
  return dispatch => (
    axios.get(`${SERVER_URL}topics/`)
      .then((response) => {
        dispatch({ type: actions.FETCH_TOPIC_LIST, payload: response.data.results });

        dispatch(resetInfluencers());
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
        dispatch({ type: actions.CREATE_TOPIC, payload: response.data });
        dispatch(addNotification('Topic successfully created!'));

        dispatch(resetInfluencers());
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
          payload: response.data,
          meta: {
            prevTitle: payload.selectedTopic.title
          }
        });
        dispatch(addNotification('Topic has been updated successfully!'));

        dispatch(resetInfluencers());
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
        dispatch({ type: actions.DELETE_TOPIC, payload });
        dispatch(addNotification(`Topic ${payload.title} deleted`));

        dispatch(resetInfluencers());
      })
      .catch(() => {
        // in case of server error
        alert('Sorry, couldn\'t delete this topic');
      });
  };
}

/* Action creator for toggling the filters state. Different reducers handle payload differently */
export function toggleFilter(type, payload) {
  return (dispatch) => {
    dispatch({ type, payload });
    dispatch(resetInfluencers());
  };
}

/* Action creator for resetting filters to their original state */
export function clearFilters() {
  return (dispatch) => {
    dispatch({ type: actions.CLEAR_FILTERS });
    dispatch(resetInfluencers());
  };
}

/* Action creator for initializing the profile of an influencer */
export function fetchInfluencerDetails(influencerId) {
  return dispatch => (
    axios.get(`${SERVER_URL}influencers/${influencerId}/basic-info/`)
      .then((response) => {
        dispatch({
          type: actions.FETCH_INFLUENCER_DETAILS,
          payload: response.data
        });
      })
      .catch((err) => { console.log(err)
        alert('An error occured while trying to fetch influencer\'s details');
      })
  );
}
