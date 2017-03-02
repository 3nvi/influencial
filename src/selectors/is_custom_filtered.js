import { createSelector } from 'reselect';

const topicsSelector = state => state.filters.topics;
const gendersSelector = state => state.filters.genders;
const servicesSelector = state => state.filters.services;
const periodsSelector = state => state.filters.periods;
const locationsSelector = state => state.filters.locations;
const qSelector = state => state.filters.q;

const evalFiltered = (topics, genders, services, periods, locations, q) => !(
       genders.both
    && services.all
    && !q
    && periods['past-90-days']
    && !locations.length
    && Object.values(topics).reduce((a, b) => a && b)
  );

export default createSelector(
  topicsSelector,
  gendersSelector,
  servicesSelector,
  periodsSelector,
  locationsSelector,
  qSelector,
  evalFiltered
);
