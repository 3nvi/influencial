import { createSelector } from 'reselect';
import { initialServiceState } from '../reducers/filters/services_reducer';
import { initialGenderState } from '../reducers/filters/genders_reducer';
import { initialPeriodState } from '../reducers/filters/periods_reducer';

const topicsSelector = state => state.filters.topics;
const gendersSelector = state => state.filters.genders;
const servicesSelector = state => state.filters.services;
const periodsSelector = state => state.filters.periods;
const locationsSelector = state => state.filters.locations;
const qSelector = state => state.filters.q;

const evalFiltered = (topics, genders, services, periods, locations, q) => !(
       (genders == initialGenderState)
    && (services === initialServiceState)
    && !q
    && (periods === initialPeriodState)
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
