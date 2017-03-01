/* Action creator for toggling the filters state. Different reducers handle payload differently */
export function toggleFilter(type, payload) {
  return {
    type,
    payload
  };
}

