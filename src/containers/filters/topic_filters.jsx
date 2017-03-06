import React from 'react';
import CheckboxFilter from './templates/checkbox_filter_component';
import { TOGGLE_TOPIC_FILTER } from '../../actions/types';
import TopicCreate from '../topics/create';

function TopicFilters() {
  return (
    <div>
      <CheckboxFilter actionType={TOGGLE_TOPIC_FILTER} itemsStateName="topics" />
      <TopicCreate />
    </div>
  );
}

export default TopicFilters;
