import _ from 'lodash';
import { store } from './index';

export const SERVER_URL = 'http://146.185.171.237:8283/';
export const PAGINATION_ITEM_COUNT = 5;

export function constructInfluencerUrlQuery() {
  const filterState = store.getState().filters;
  const query = {};
  query.q = filterState.q;
  query.method = filterState.algorithm;
  query.gender = filterState.genders;
  query.country = filterState.locations.join(',');
  query.service = filterState.services;
  query.topics = _.keys(_.pickBy(filterState.topics, value => value.checked)).join(',');

  return Object
    .keys(query)
    .map(key => (!query[key] ? '' : `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`))
    .join('&');
}
