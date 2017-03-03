import React from 'react';

import { TOGGLE_ALGORITHM_FILTER } from '../../actions/types';
import SelectFilter from './templates/select_filter_component';

function AlgorithmFilter() {
  return (
    <SelectFilter
      title="Select a computational method"
      actionType={TOGGLE_ALGORITHM_FILTER}
      itemsStateName="algorithm"
      items={['pagerank', 'tweetrank', 'simple']}
    />
  );
}

export default AlgorithmFilter;
