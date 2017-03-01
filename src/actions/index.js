import { CLEAR_FILTERS } from './types';

/* Action creator for toggling the filters state. Different reducers handle payload differently */
export function toggleFilter(type, payload) {
  return { type, payload };
}

/* Action creator for resetting filters to their original state */
export function clearFilters() {
  return { type: CLEAR_FILTERS };
}

