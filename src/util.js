import _ from 'lodash';
import { store } from './index';

export const SERVER_URL = 'http://146.185.171.237:8283/';

export function constructInfluencerUrlQuery() {
  const filterState = store.getState().filters;
  const query = {};
  query.q = filterState.q;
  query.method = filterState.algorithm;
  query.gender = filterState.genders;
  query.country = filterState.locations.join(',');
  query.service = filterState.services;
  query.topics = _.keys(_.pickBy(filterState.topics, value => value.checked)).join(',');
  query.period = filterState.periods;

  Object.keys(query).forEach(key => ((query[key] === '') && delete query[key]));
  return Object
    .keys(query)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
    .join('&');
}
