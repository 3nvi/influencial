import React from 'react';
import GenericCheckboxFilters from './templates/generic_multi_value_filter_component';
import { TOGGLE_TOPIC_FILTER } from '../../actions/types';

function TopicFilters() {
  return (
    <GenericCheckboxFilters
      title="Topics"
      actionType={TOGGLE_TOPIC_FILTER}
      itemsStateName="topics"
    />
  );
}

export default TopicFilters;
