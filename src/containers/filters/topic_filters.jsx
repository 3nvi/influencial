import React from 'react';
import GenericCheckboxFilters from './templates/generic_checkbox_filters_component';
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
