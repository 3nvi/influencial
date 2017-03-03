import React from 'react';
import CheckboxFilter from './templates/checkbox_filter_component';
import { TOGGLE_TOPIC_FILTER } from '../../actions/types';
import { Button } from 'react-mdl';

function TopicFilters() {
  return (
    <div>
      <CheckboxFilter actionType={TOGGLE_TOPIC_FILTER} itemsStateName="topics" />
      <Button className="transparent" ripple style={{ float: 'left', marginLeft: '-15px' }}>
        + add new
      </Button>
    </div>
  );
}

export default TopicFilters;
