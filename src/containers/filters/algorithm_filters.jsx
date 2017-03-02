import React from 'react';

import { TOGGLE_ALGORITHM_FILTER } from '../../actions/types';
import GenericSelectFilters from './templates/generic_select_filter_component';

function AlgorithmFilter() {
  return (
    <GenericSelectFilters
      title="Select a computational method"
      actionType={TOGGLE_ALGORITHM_FILTER}
      itemsStateName="algorithm"
      items={['pagerank', 'tweetrank', 'simple']}
    />
  );
}

export default AlgorithmFilter;
